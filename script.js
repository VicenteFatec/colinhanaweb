// ===== Filtro por Tags =====
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Atualizar botão ativo
            filterButtons.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.getAttribute('data-filter');

            cards.forEach(function (card) {
                var tags = card.getAttribute('data-tags');
                if (filter === 'todos' || tags.indexOf(filter) !== -1) {
                    card.classList.remove('hidden');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    card.offsetHeight; // force reflow
                    card.style.animation = '';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
