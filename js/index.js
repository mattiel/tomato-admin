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
    console.log(threshold);
    const observerOptions = {
        threshold: threshold
    }
    let prevRatio = 0;
    const handleSummary = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > prevRatio);
            entry.target.style.opacity = entry.intersectionRatio * 3;
            console.log(`Ratio: ${entry.intersectionRatio}`, entry.target)
        });
    }

    
    const observer = new IntersectionObserver(handleSummary, observerOptions);
    observer.observe(document.querySelector('.js-summary-shrink'));
});