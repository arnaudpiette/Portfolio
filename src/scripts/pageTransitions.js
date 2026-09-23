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

// Rend le fallback CSS disponible lors d'une visite initiale et après chaque navigation ClientRouter.
setupPortfolioPageEntry();
document.addEventListener('astro:page-load', setupPortfolioPageEntry);
