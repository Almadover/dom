 document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.reveal');

    function checkVisibility() {
        blocks.forEach(reveal => {
            const position = reveal.getBoundingClientRect();

            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
 });