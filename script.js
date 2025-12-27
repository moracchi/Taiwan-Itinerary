document.addEventListener('DOMContentLoaded', () => {
    // Scroll animation for events
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.event, .day-header, .arrow-down');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });
});

function toggleRecommend(id) {
    const content = document.getElementById(id);
    const btn = content.previousElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove('active');
        btn.querySelector('i').classList.remove('fa-chevron-up');
        btn.querySelector('i').classList.add('fa-lightbulb');
    } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        btn.querySelector('i').classList.remove('fa-lightbulb');
        btn.querySelector('i').classList.add('fa-chevron-up');
    }
}
