/**
 * Personal AI Intelligence Radar - Category & Filter Logic
 * Supports All, Categories, and Starred Bookmarks
 */

function filterCards(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const cards = document.querySelectorAll('.tweet-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    const isStarred = card.getAttribute('data-starred') === 'true';

    if (cat === 'all') {
      card.style.display = 'flex';
    } else if (cat === 'starred') {
      card.style.display = isStarred ? 'flex' : 'none';
    } else if (cardCat === cat) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
