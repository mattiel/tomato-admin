document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.taa-dashboard-date-selector', {
        spaceBetween: 16
    });

    // window.onscroll = () => shrinkSummary();

    // const shrinkSummary = () => {
    //     console.log(document.body.scrollTop, document.documentElement.scrollTop)
    //     const el = document.querySelector('.js-summary-shrink');
    //     const final = document.querySelector('.taa-sticky-top');
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         el.classList.add('js-summary-shrink--shrunk');
    //         final.classList.add('taa-sticky-top');
    //     }
    //     else {
    //         el.classList.remove('js-summary-shrink--shrunk');
    //         final.classList.add('taa-sticky-top');
    //     }
    // }

    const threshold = []
    for(let i = 0; i <= 100; i++) threshold.push(i / 100);
    const observerOptions = {
        root: document.querySelector('taa-summary--shortcuts-fee-anchor'),
        threshold: threshold,
    }
    const handleCardHeader = (entries, observer) => {
        entries.forEach(entry => {
            console.log(`Ratio: ${entry.intersectionRatio}`, entry.target)
        });
    }

    
    const observer = new IntersectionObserver(handleCardHeader, observerOptions);
    // observer.observe(document.querySelector('.js-watch-card-overlay-header'));
});