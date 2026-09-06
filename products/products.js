(() => {
  const toolbar = document.querySelector('.collection-toolbar');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.product-card')];
  const count = document.querySelector('#visible-count');

  function filterProducts(platform) {
    let visible = 0;
    for (const card of cards) {
      card.hidden = platform !== 'all' && !card.dataset.platforms.split(' ').includes(platform);
      if (!card.hidden) visible += 1;
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === platform));
    }
    count.textContent = String(visible);
  }

  for (const button of buttons) {
    button.addEventListener('click', () => filterProducts(button.dataset.filter));
  }

  // Keep links to individual products usable even after applying a filter.
  window.addEventListener('hashchange', () => {
    const target = cards.find(card => `#${card.id}` === window.location.hash);
    if (target && target.hidden) {
      filterProducts('all');
      target.scrollIntoView({ block: 'start' });
    }
  });

  toolbar.hidden = false;
})();
