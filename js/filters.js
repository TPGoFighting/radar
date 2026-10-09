/**
 * Personal AI Intelligence Radar - Category & Filter Logic
 * Supports All, Categories, and Starred Bookmarks with Empty State
 */

function filterCards(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const cards = document.querySelectorAll('.tweet-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    const isStarred = card.getAttribute('data-starred') === 'true';

    let show = false;
    if (cat === 'all') {
      show = true;
    } else if (cat === 'starred') {
      show = isStarred;
    } else if (cardCat === cat) {
      show = true;
    }

    card.style.display = show ? 'flex' : 'none';
    if (show) visibleCount++;
  });

  const emptyNotice = document.getElementById('feedEmptyNotice');
  if (emptyNotice) {
    emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    const textEl = emptyNotice.querySelector('.empty-text');
    if (textEl) {
      textEl.textContent = cat === 'starred' 
        ? '暂无收藏推文。点击卡片右上角星标即可收藏。'
        : '当前分类下暂无推文。';
    }
  }
}
