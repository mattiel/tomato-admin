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

    // const threshold = []
    // for(let i = 0; i <= 100; i++) threshold.push(i / 100);
    // const observerOptions = {
    //     root: document.querySelector('taa-summary--shortcuts-fee-anchor'),
    //     threshold: threshold,
    // }
    // const handleCardHeader = (entries, observer) => {
    //     entries.forEach(entry => {
    //         console.log(`Ratio: ${entry.intersectionRatio}`, entry.target)
    //     });
    // }

    
    // const observer = new IntersectionObserver(handleCardHeader, observerOptions);
    // // observer.observe(document.querySelector('.js-watch-card-overlay-header'));

    const watch = document.querySelector('.js-watch-anchor');
    console.log(`watch = ${watch}`)
    const watchOriginY = watch.getBoundingClientRect().y;
    let watchPrevY = watchOriginY; 
    window.onscroll = () => anchorHeader();

    const anchorHeader = () => {
        const el = document.querySelector('.js-watch-card-overlay-header');
        const card = document.querySelector('.taa-card-overlay')
        console.log(`watchPrevY = ${watchPrevY}`, `bounding = ${watch.getBoundingClientRect().y}`)
        if (watchPrevY == watch.getBoundingClientRect().y) {
            el.classList.add('taa-card-overlay__header--shortcuts-fee-anchor');
            el.style.setProperty('--anchor-point', `${watch.getBoundingClientRect().y + 58}px`)
            card.classList.remove('taa-card-overlay--shortcuts-fee-anchor');
        }
            
        else if (watchPrevY < watchOriginY) {
            el.classList.remove('taa-card-overlay__header--shortcuts-fee-anchor');
            card.classList.add('taa-card-overlay--shortcuts-fee-anchor');
        }
            
        watchPrevY = watch.getBoundingClientRect().y;
    }
});