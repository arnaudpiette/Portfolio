// Installe une entrée légère uniquement sur les deux pages portfolio après un chargement classique ou un swap Astro.
const setupPortfolioPageEntry = () => {
  const page = document.body.dataset.portfolioPage;
  if (page !== 'creative' && page !== 'dev') return;

  // Réutilise la direction de la home lorsqu'elle existe ; une visite directe reçoit la direction naturelle de la page.
  document.documentElement.dataset.portfolioTransition ||= page;
  document.body.classList.remove('is-portfolio-page-entering');
  window.requestAnimationFrame(() => document.body.classList.add('is-portfolio-page-entering'));

  // Retire l'information après la transition pour ne pas influencer les navigations ultérieures entre pages internes.
  window.setTimeout(() => delete document.documentElement.dataset.portfolioTransition, 450);
};

let switchViewportTop = null;
const switchNavigationKey = 'portfolio-switch-viewport-top';
const homeNavigationKey = 'portfolio-home-navigation';

const restoreHomepageDestinationTop = () => {
  if (sessionStorage.getItem(homeNavigationKey) !== 'true') return;
  window.scrollTo({ top: 0, behavior: 'auto' });
  sessionStorage.removeItem(homeNavigationKey);
};

const restoreSwitchViewportPosition = () => {
  const savedTop = switchViewportTop ?? Number(sessionStorage.getItem(switchNavigationKey));
  if (!Number.isFinite(savedTop)) return;
  const target = document.querySelector('.mode-switch');
  if (target instanceof HTMLElement) {
    window.scrollBy({ top: target.getBoundingClientRect().top - savedTop, behavior: 'auto' });
    target.focus({ preventScroll: true });
  }
  switchViewportTop = null;
  sessionStorage.removeItem(switchNavigationKey);
  delete document.documentElement.dataset.switchNavigation;
};

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target.closest('.mode-switch') : null;
  if (!(target instanceof HTMLAnchorElement) || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  switchViewportTop = target.getBoundingClientRect().top;
  sessionStorage.setItem(switchNavigationKey, String(switchViewportTop));
  document.documentElement.dataset.switchNavigation = 'true';
}, { capture: true });

// Rend le fallback CSS disponible lors d'une visite initiale et après chaque navigation ClientRouter.
setupPortfolioPageEntry();
document.addEventListener('astro:page-load', setupPortfolioPageEntry);
document.addEventListener('astro:page-load', () => requestAnimationFrame(() => requestAnimationFrame(() => {
  restoreSwitchViewportPosition();
})));
// ClientRouter restaure sa position après le swap : les entrées homepage attendent
// cette phase avant d'imposer le haut de la destination.
document.addEventListener('astro:page-load', () => window.setTimeout(restoreHomepageDestinationTop, 100));
