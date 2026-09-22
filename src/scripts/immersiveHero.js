// Identifie l'unique hero interactive présente sur la page d'accueil.
const heroSelector = '[data-immersive-hero]';
let disposeImmersiveHero = () => {};

// Décrit la séquence complète et évite les valeurs d'index dispersées dans le moteur.
const FRAME_COUNT = 37;
const LAST_FRAME = FRAME_COUNT - 1;
const CENTER_FRAME = Math.floor(LAST_FRAME / 2);
const MOBILE_CLICK_FIRST_FRAME = 0;
const MOBILE_CLICK_FRAME_COUNT = 37;
const MOBILE_CLICK_LAST_FRAME = MOBILE_CLICK_FRAME_COUNT - 1;
const MOBILE_CLICK_FRAME_DURATION = 1000 / 12;

// Installe une unique boucle RAF après chaque chargement Astro et nettoie l'instance précédente.
const setupImmersiveHero = () => {
  disposeImmersiveHero();

  // Récupère les éléments du rendu, dont l'image de repli et le canvas de la séquence.
  const root = document.querySelector(heroSelector);
  const scene = root?.querySelector('.immersive-hero__scene');
  const heroImage = root?.querySelector('.immersive-hero__image--center');
  const heroCanvas = root?.querySelector('.immersive-hero__canvas');
  const heroLinks = root?.querySelectorAll('.immersive-hero__link');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const touchTablet = window.matchMedia('(min-width: 600px) and (min-height: 600px) and (hover: none) and (pointer: coarse)');
  if (!(root instanceof HTMLElement) || !(scene instanceof HTMLElement) || !(heroImage instanceof HTMLImageElement) || !(heroCanvas instanceof HTMLCanvasElement)) return;

  // Les préférences de mouvement réduit conservent l'image de repli sans aucun téléchargement de séquence.
  if (reducedMotion.matches) {
    root.classList.remove('is-intro');
    root.classList.add('is-ready');
    return;
  }

  // Seules les tablettes tactiles conservent le scrub ; les smartphones bouclent exclusivement la séquence de clic.
  const touchScrubEnabled = touchTablet.matches;
  if (!desktopPointer.matches && !touchScrubEnabled) {
    const clickSequenceBase = '/images/hero/sequence/hero_sequence_ready/click';
    const clickFrameUrls = Array.from({ length: MOBILE_CLICK_FRAME_COUNT }, (_, index) => `${clickSequenceBase}/hero-${String(MOBILE_CLICK_FIRST_FRAME + index).padStart(2, '0')}.webp`);
    const mobileCanvasContext = heroCanvas.getContext('2d', { alpha: false, desynchronized: true });
    const mobileFrames = [];
    let mobileFrameId = 0;
    let displayedMobileFrameIndex = -1;
    let mobileCanvasWidth = 0;
    let mobileCanvasHeight = 0;
    let mobileDestroyed = false;

    // Réutilise le pipeline fetch → blob → ImageBitmap, sans créer de ressource dans la boucle d'animation.
    const loadMobileClickFrame = async (src) => {
      if (typeof window.createImageBitmap === 'function') {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`Chargement impossible : ${response.status}`);
        return window.createImageBitmap(await response.blob());
      }

      const image = new Image();
      image.decoding = 'async';
      const loaded = new Promise((resolve, reject) => { image.onload = resolve; image.onerror = reject; });
      image.src = src;
      if (typeof image.decode === 'function') {
        try { await image.decode(); } catch { await loaded; }
      } else {
        await loaded;
      }
      return image;
    };

    // Ajuste la résolution uniquement au redimensionnement ; aucun calcul de layout n'a lieu dans la RAF.
    const resizeMobileCanvas = () => {
      if (!mobileCanvasContext) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      mobileCanvasWidth = Math.max(1, Math.round(window.innerWidth * dpr));
      mobileCanvasHeight = Math.max(1, Math.round(window.innerHeight * dpr));
      if (heroCanvas.width === mobileCanvasWidth && heroCanvas.height === mobileCanvasHeight) return;
      heroCanvas.width = mobileCanvasWidth;
      heroCanvas.height = mobileCanvasHeight;
      displayedMobileFrameIndex = -1;
    };

    // Reproduit le cadrage cover mobile existant avec son léger décalage horizontal validé.
    const drawMobileClickFrame = (frameIndex) => {
      const frame = mobileFrames[frameIndex];
      if (!mobileCanvasContext || !frame || frameIndex === displayedMobileFrameIndex) return;
      const sourceRatio = frame.width / frame.height;
      const targetRatio = mobileCanvasWidth / mobileCanvasHeight;
      let cropX = 0;
      let cropY = 0;
      let cropWidth = frame.width;
      let cropHeight = frame.height;

      if (sourceRatio > targetRatio) {
        cropWidth = frame.height * targetRatio;
        cropX = (frame.width - cropWidth) * .54;
      } else if (sourceRatio < targetRatio) {
        cropHeight = frame.width / targetRatio;
        cropY = (frame.height - cropHeight) / 2;
      }

      mobileCanvasContext.fillStyle = '#fff';
      mobileCanvasContext.fillRect(0, 0, mobileCanvasWidth, mobileCanvasHeight);
      mobileCanvasContext.drawImage(frame, cropX, cropY, cropWidth, cropHeight, 0, 0, mobileCanvasWidth, mobileCanvasHeight);
      displayedMobileFrameIndex = frameIndex;
    };

    // Convertit la progression temporelle en lecture aller-retour pour éviter toute coupure entre la dernière et la première frame.
    const getMobileClickFrameIndex = (timestamp) => {
      const cycleLength = MOBILE_CLICK_LAST_FRAME * 2;
      const cyclePosition = Math.floor(timestamp / MOBILE_CLICK_FRAME_DURATION) % cycleLength;
      return cyclePosition <= MOBILE_CLICK_LAST_FRAME ? cyclePosition : cycleLength - cyclePosition;
    };

    // Une seule RAF mobile sélectionne et dessine une frame déjà décodée de la boucle de clic.
    const tickMobileClickLoop = (now) => {
      if (mobileDestroyed) return;
      drawMobileClickFrame(getMobileClickFrameIndex(now));
      mobileFrameId = window.requestAnimationFrame(tickMobileClickLoop);
    };

    // Redessine la frame courante à la nouvelle résolution sans modifier l'animation ou les zones CRÉA / DEV.
    const handleMobileResize = () => {
      resizeMobileCanvas();
      drawMobileClickFrame(getMobileClickFrameIndex(performance.now()));
    };

    // Charge seulement les trente-sept frames de clic avant de révéler le canvas ; l'image de repli reste visible en cas d'échec.
    if (mobileCanvasContext) {
      void Promise.all(clickFrameUrls.map(loadMobileClickFrame))
        .then((frames) => {
          if (mobileDestroyed) {
            frames.forEach((frame) => frame.close?.());
            return;
          }
          mobileFrames.push(...frames);
          resizeMobileCanvas();
          drawMobileClickFrame(0);
          root.classList.add('has-canvas');
          mobileFrameId = window.requestAnimationFrame(tickMobileClickLoop);
        })
        .catch((error) => {
          if (import.meta.env.DEV) console.error('La boucle mobile de clic reste désactivée : l’image de repli est conservée.', error);
        });
    }

    root.classList.remove('is-intro');
    root.classList.add('is-ready');
    window.addEventListener('resize', handleMobileResize, { passive: true });

    // Nettoie la boucle et les trente-sept bitmaps de clic lors d'une navigation Astro.
    disposeImmersiveHero = () => {
      mobileDestroyed = true;
      window.cancelAnimationFrame(mobileFrameId);
      window.removeEventListener('resize', handleMobileResize);
      mobileFrames.forEach((frame) => frame.close?.());
      disposeImmersiveHero = () => {};
    };
    return;
  }

  // Marque la tablette tactile pour restaurer le transform piloté par le ressort malgré les styles smartphone partagés.
  if (touchScrubEnabled) root.classList.add('is-touch-scrub');

  // Construit les URLs ordonnées de gauche à droite, avec la frame centrale comme point de départ.
  const sequenceBase = root.dataset.sequenceBase;
  if (!sequenceBase) return;
  const frameUrls = Array.from({ length: FRAME_COUNT }, (_, index) => `${sequenceBase}/hero-${String(index).padStart(2, '0')}.webp`);

  // Conserve les constantes physiques et les délais d'idle validés précédemment.
  const SPRING = 0.03;
  const DAMPING = 0.86;
  const idlePauseMinimum = 2500;
  const idlePauseRange = 2500;
  const canvasContext = heroCanvas.getContext('2d', { alpha: false, desynchronized: true });
  // Privilégie une interpolation de haute qualité pour que les frames 00 et 18 restent nettes au repos.
  if (canvasContext) {
    canvasContext.imageSmoothingEnabled = true;
    canvasContext.imageSmoothingQuality = 'high';
  }
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let velocityX = 0;
  let velocityY = 0;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let lastPointerAt = 0;
  let lastTimestamp = 0;
  let pointerIsControlling = false;
  let pointerWasSeen = false;
  let idleEnabled = false;
  let nextIdleAt = 0;
  let introStep = 0;
  let frameId = 0;
  let displayedFrameIndex = CENTER_FRAME;
  let sequenceReady = false;
  // Réserve une unique entrée par frame : aucun bitmap n'est décodé deux fois.
  let decodedFrames = Array(FRAME_COUNT).fill(null);
  const frameLoadPromises = Array(FRAME_COUNT).fill(null);
  const failedFrames = new Set();
  let nextDeferredFrame = 0;
  let idleLoadHandle = 0;
  let navigationTimer = 0;
  let destroyed = false;
  const startedAt = performance.now();

  // Active un diagnostic opt-in uniquement dans le bundle de développement avec ?hero-debug.
  const diagnosticsEnabled = import.meta.env.DEV && new URLSearchParams(window.location.search).has('hero-debug');
  let diagnosticsElement = null;
  let diagnosticFrames = 0;
  let diagnosticFrameChanges = 0;
  let diagnosticWindowStartedAt = startedAt;

  if (diagnosticsEnabled) {
    diagnosticsElement = document.createElement('output');
    diagnosticsElement.className = 'immersive-hero__diagnostics';
    diagnosticsElement.setAttribute('aria-live', 'off');
    root.append(diagnosticsElement);
  }

  // Normalise les valeurs et écrit seulement les variables compositées nécessaires à la micro-animation CSS.
  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  const renderMotion = () => {
    const horizontal = currentX * 4;
    const vertical = currentY * 1;
    const rotation = currentX * .1;
    const motionScale = 1;
    root.style.setProperty('--hero-x', `${horizontal}px`);
    root.style.setProperty('--hero-y', `${vertical}px`);
    root.style.setProperty('--hero-rotation-z', `${rotation}deg`);
    root.style.setProperty('--hero-scale', String(motionScale));
    root.style.setProperty('--creative-presence', String(clamp(.75 - currentX * .3, .45, 1)));
    root.style.setProperty('--dev-presence', String(clamp(.75 + currentX * .3, .45, 1)));
  };

  // Ajuste la résolution interne hors RAF, avec un DPR maximal de 2 ou 1,5 sur une très grande surface.
  const resizeCanvas = () => {
    if (!canvasContext) return;
    const maximumDpr = Math.max(viewportWidth, viewportHeight) > 2400 ? 1.5 : 2;
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, maximumDpr);
    canvasWidth = Math.max(1, Math.round(viewportWidth * devicePixelRatio));
    canvasHeight = Math.max(1, Math.round(viewportHeight * devicePixelRatio));
    if (heroCanvas.width === canvasWidth && heroCanvas.height === canvasHeight) return;
    heroCanvas.width = canvasWidth;
    heroCanvas.height = canvasHeight;
  };

  // Reproduit object-fit: cover avec un recadrage central, afin de retrouver le zoom validé précédemment.
  const drawCover = (image, width, height) => {
    const sourceWidth = image.width;
    const sourceHeight = image.height;
    if (!canvasContext || !sourceWidth || !sourceHeight || !width || !height) return false;
    const sourceRatio = sourceWidth / sourceHeight;
    const targetRatio = width / height;
    let cropX = 0;
    let cropY = 0;
    let cropWidth = sourceWidth;
    let cropHeight = sourceHeight;

    if (sourceRatio > targetRatio) {
      cropWidth = sourceHeight * targetRatio;
      cropX = (sourceWidth - cropWidth) / 2;
    } else if (sourceRatio < targetRatio) {
      cropHeight = sourceWidth / targetRatio;
      cropY = (sourceHeight - cropHeight) / 2;
    }

    // Le blanc couvre entièrement la surface avant le dessin : aucun bord noir ne peut être composé à l'écran.
    canvasContext.fillStyle = '#fff';
    canvasContext.fillRect(0, 0, width, height);
    canvasContext.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, width, height);
    return true;
  };

  // Dessine seulement une nouvelle frame disponible lorsque l'index arrondi issu du ressort a effectivement changé.
  const drawFrame = (frameIndex, force = false) => {
    if (!sequenceReady || !canvasContext || (!force && frameIndex === displayedFrameIndex)) return false;
    const frame = decodedFrames[frameIndex];
    if (!frame) return false;

    try {
      if (!drawCover(frame, canvasWidth, canvasHeight)) return false;
      displayedFrameIndex = frameIndex;
      diagnosticFrameChanges += 1;
      return true;
    } catch (error) {
      if (import.meta.env.DEV) console.error(`Impossible de dessiner la frame ${frameIndex}.`, error);
      return false;
    }
  };

  // Retourne la frame décodée la plus proche pour préserver un rendu valide pendant le préchargement progressif.
  const findNearestLoadedFrame = (requestedFrameIndex) => {
    for (let distance = 0; distance <= LAST_FRAME; distance += 1) {
      const lowerIndex = requestedFrameIndex - distance;
      if (lowerIndex >= 0 && decodedFrames[lowerIndex]) return lowerIndex;

      const upperIndex = requestedFrameIndex + distance;
      if (upperIndex <= LAST_FRAME && decodedFrames[upperIndex]) return upperIndex;
    }

    return null;
  };

  // Transforme la position physique en index de frame et utilise temporairement la frame disponible la plus proche.
  const renderSequenceFrame = () => {
    if (!sequenceReady) return;
    const frameFloat = ((currentX + 1) / 2) * LAST_FRAME;
    const requestedFrameIndex = Math.round(clamp(frameFloat, 0, LAST_FRAME));
    const availableFrameIndex = findNearestLoadedFrame(requestedFrameIndex);
    if (availableFrameIndex !== null) drawFrame(availableFrameIndex);
  };

  // Préfère les ImageBitmap déjà décodés, directement exploitables par drawImage.
  const loadImageBitmapFrame = async (src) => {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`Chargement impossible : ${response.status}`);
    return window.createImageBitmap(await response.blob());
  };

  // Utilise Image.decode comme repli compatible, sans créer d'image pendant la boucle RAF.
  const loadImageFrame = async (src) => {
    const image = new Image();
    image.decoding = 'async';
    const loaded = new Promise((resolve, reject) => { image.onload = resolve; image.onerror = reject; });
    image.src = src;
    if (typeof image.decode === 'function') {
      try { await image.decode(); } catch { await loaded; }
    } else {
      await loaded;
    }
    return image;
  };

  // Charge une frame une seule fois en mémoire ; Image est utilisé seulement si ImageBitmap ne peut pas être produit.
  const loadFrame = async (src) => {
    if (typeof window.createImageBitmap === 'function') {
      try { return await loadImageBitmapFrame(src); } catch (error) {
        if (import.meta.env.DEV) console.warn(`ImageBitmap indisponible pour ${src}, repli Image utilisé.`, error);
      }
    }
    return loadImageFrame(src);
  };

  // Charge et mémorise une frame hors RAF, puis révèle le canvas uniquement après le dessin de la frame centrale.
  const preloadFrame = async (frameIndex) => {
    if (decodedFrames[frameIndex] || failedFrames.has(frameIndex)) return decodedFrames[frameIndex];
    if (frameLoadPromises[frameIndex]) return frameLoadPromises[frameIndex];

    frameLoadPromises[frameIndex] = loadFrame(frameUrls[frameIndex])
      .then((frame) => {
        if (destroyed) {
          frame.close?.();
          return null;
        }

        decodedFrames[frameIndex] = frame;
        frameLoadPromises[frameIndex] = null;

        if (frameIndex === CENTER_FRAME && !sequenceReady) {
          sequenceReady = true;
          resizeCanvas();
          if (drawFrame(CENTER_FRAME, true)) root.classList.add('has-canvas');
          else sequenceReady = false;
        }

        return frame;
      })
      .catch((error) => {
        frameLoadPromises[frameIndex] = null;
        failedFrames.add(frameIndex);
        if (import.meta.env.DEV) console.error(`Impossible de charger la frame ${frameIndex}.`, error);
        return null;
      });

    return frameLoadPromises[frameIndex];
  };

  // Classe les frames du centre vers les extrêmes : 18, 17, 19, 16, 20, puis ainsi de suite.
  const framePriority = [CENTER_FRAME];
  for (let distance = 1; distance <= CENTER_FRAME; distance += 1) {
    const lowerIndex = CENTER_FRAME - distance;
    const upperIndex = CENTER_FRAME + distance;
    if (lowerIndex >= 0) framePriority.push(lowerIndex);
    if (upperIndex <= LAST_FRAME) framePriority.push(upperIndex);
  }

  // Planifie les frames restantes durant les périodes disponibles, sans ajouter de travail dans la RAF.
  const scheduleDeferredPreload = () => {
    if (destroyed || nextDeferredFrame >= framePriority.length) return;

    const loadNextFrame = () => {
      idleLoadHandle = 0;
      const frameIndex = framePriority[nextDeferredFrame];
      nextDeferredFrame += 1;
      void preloadFrame(frameIndex).finally(scheduleDeferredPreload);
    };

    if ('requestIdleCallback' in window) {
      idleLoadHandle = window.requestIdleCallback(loadNextFrame, { timeout: 1200 });
    } else {
      idleLoadHandle = window.setTimeout(loadNextFrame, 120);
    }
  };

  // Charge d'abord le petit groupe central ; le reste de la séquence s'élargit ensuite au repos.
  const preloadSequence = async () => {
    try {
      const initialFrameCount = 7;
      await Promise.all(framePriority.slice(0, initialFrameCount).map(preloadFrame));
      nextDeferredFrame = initialFrameCount;
      scheduleDeferredPreload();
    } catch (error) {
      if (import.meta.env.DEV) console.error('La séquence canvas reste désactivée : la frame de repli est conservée.', error);
      sequenceReady = false;
    }
  };

  // Programme de petites cibles autour du centre : les extrêmes ne sont jamais utilisés par l'idle.
  const chooseIdleTarget = (now) => {
    const idleTargets = [{ x: 0, y: 0 }, { x: -.12, y: .04 }, { x: 0, y: 0 }, { x: .1, y: -.04 }, { x: 0, y: 0 }, { x: -.22, y: .02 }, { x: -.12, y: 0 }, { x: 0, y: 0 }];
    const target = idleTargets[Math.floor(Math.random() * idleTargets.length)];
    targetX = target.x;
    targetY = target.y;
    nextIdleAt = now + idlePauseMinimum + Math.random() * idlePauseRange;
  };

  // Conserve les calculs de pointeur hors de l'écouteur afin qu'il ne provoque aucun travail visuel.
  const handlePointerMove = (event) => {
    // Autorise la souris sur desktop et le glissement au doigt uniquement sur tablette.
    if (event.pointerType && event.pointerType !== 'mouse' && !(touchScrubEnabled && event.pointerType === 'touch')) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    lastPointerAt = performance.now();
    pointerWasSeen = true;
  };

  // Redimensionne hors RAF, puis redessine immédiatement la dernière frame valide à la nouvelle résolution.
  const handleResize = () => {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    if (!sequenceReady) return;
    root.classList.remove('has-canvas');
    resizeCanvas();
    if (drawFrame(displayedFrameIndex, true)) root.classList.add('has-canvas');
  };

  // Laisse le lien fonctionner sans JavaScript, puis ajoute un départ visuel très court lorsqu'il est disponible.
  const handleHeroLinkClick = (event) => {
    const link = event.currentTarget;
    if (!(link instanceof HTMLAnchorElement) || link.dataset.heroNavigating === 'true') return;
    if (event.defaultPrevented || (event.detail !== 0 && event.button !== 0) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    link.dataset.heroNavigating = 'true';
    root.dataset.selectedUniverse = link.classList.contains('immersive-hero__link--creative') ? 'creative' : 'dev';
    // Transmet le sens choisi aux pseudo-éléments View Transition d'Astro avant le swap de page.
    document.documentElement.dataset.portfolioTransition = root.dataset.selectedUniverse;
    root.classList.add('is-leaving');
    navigationTimer = window.setTimeout(() => link.click(), 280);
  };

  // Actualise le diagnostic opt-in à cadence réduite, sans impact sur le rendu de production.
  const updateDiagnostics = (now) => {
    if (!diagnosticsElement) return;
    diagnosticFrames += 1;
    const elapsed = now - diagnosticWindowStartedAt;
    if (elapsed < 500) return;
    const fps = Math.round(diagnosticFrames * 1000 / elapsed);
    const changesPerSecond = Math.round(diagnosticFrameChanges * 1000 / elapsed);
    diagnosticsElement.value = `FPS ${fps} · X ${currentX.toFixed(3)} · cible ${targetX.toFixed(3)} · frame ${displayedFrameIndex} · changements/s ${changesPerSecond} · renderer canvas`;
    diagnosticFrames = 0;
    diagnosticFrameChanges = 0;
    diagnosticWindowStartedAt = now;
  };

  // Une seule boucle anime le ressort, l'introduction, l'idle, le scrub et la micro-transformation.
  const tick = (now) => {
    if (destroyed) return;
    const elapsed = now - startedAt;
    const delta = lastTimestamp === 0 ? 1 / 60 : Math.min((now - lastTimestamp) / 1000, 1 / 20);
    const frameScale = delta * 60;
    lastTimestamp = now;
    if (pointerWasSeen && introStep < 4) { root.classList.remove('is-intro'); root.classList.add('is-ready'); introStep = 4; }
    else if (introStep === 0 && elapsed > 260) { targetX = -.12; targetY = -.04; introStep = 1; }
    else if (introStep === 1 && elapsed > 660) { targetX = .1; targetY = .04; introStep = 2; }
    else if (introStep === 2 && elapsed > 1060) { targetX = 0; targetY = 0; introStep = 3; }
    else if (introStep === 3 && elapsed > 1500) { root.classList.remove('is-intro'); root.classList.add('is-ready'); idleEnabled = true; nextIdleAt = now + idlePauseMinimum; introStep = 4; }
    const hasRecentPointer = lastPointerAt > 0 && now - lastPointerAt < 5000;
    if (hasRecentPointer) { pointerIsControlling = true; idleEnabled = false; targetX = clamp((pointerX / viewportWidth - .5) * 2, -1, 1); targetY = clamp((pointerY / viewportHeight - .5) * 2, -1, 1); }
    else if (pointerIsControlling) { pointerIsControlling = false; targetX = 0; targetY = 0; idleEnabled = true; nextIdleAt = now + 1800; }
    else if (idleEnabled && now >= nextIdleAt) chooseIdleTarget(now);
    velocityX += (targetX - currentX) * SPRING * frameScale;
    velocityY += (targetY - currentY) * SPRING * frameScale;
    velocityX *= DAMPING ** frameScale;
    velocityY *= DAMPING ** frameScale;
    currentX = clamp(currentX + velocityX * frameScale, -1, 1);
    currentY = clamp(currentY + velocityY * frameScale, -1, 1);
    renderMotion();
    renderSequenceFrame();
    updateDiagnostics(now);
    frameId = window.requestAnimationFrame(tick);
  };

  // Lance les écouteurs non visuels, le préchargement unique et l'unique boucle de rendu.
  root.addEventListener('pointermove', handlePointerMove, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
  heroLinks?.forEach((link) => link.addEventListener('click', handleHeroLinkClick));
  // Évite tout préchargement inutile si le navigateur ne fournit pas de contexte canvas utilisable.
  if (canvasContext) void preloadSequence();
  frameId = window.requestAnimationFrame(tick);

  // Nettoie les ressources graphiques et les écouteurs avant un remplacement par Astro ClientRouter.
  disposeImmersiveHero = () => {
    destroyed = true;
    window.cancelAnimationFrame(frameId);
    window.clearTimeout(navigationTimer);
    // Annule le prochain chargement différé et libère chaque bitmap créé pour cette instance.
    if (idleLoadHandle) {
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleLoadHandle);
      else window.clearTimeout(idleLoadHandle);
    }
    root.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('resize', handleResize);
    heroLinks?.forEach((link) => link.removeEventListener('click', handleHeroLinkClick));
    decodedFrames.forEach((frame) => frame?.close?.());
    diagnosticsElement?.remove();
    disposeImmersiveHero = () => {};
  };
};

// Recrée proprement la hero après une navigation Astro et la démonte avant le swap suivant.
document.addEventListener('astro:page-load', setupImmersiveHero);
document.addEventListener('astro:before-swap', () => disposeImmersiveHero());
