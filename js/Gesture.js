export default class Gesture {
    constructor(el) {
        this.xDown = null;
        this.yDown = null;
        this.el = typeof (el) === 'string' ? document.querySelector(el) : el;

        this.el.addEventListener('touchstart', e => {
            this.xDown = e.touches[0].clientX;
            this.yDown = e.touches[0].clientY;
        }, false)
    }

    onLeft(callback) {
        this.onLeft = callback;
        return this;
    }

    onRight(callback) {
        this.onRight = callback;
        return this;
    }

    onDown(callback) {
        this.onDown = callback;
        return this;
    }

    onUp(callback) {
        this.onUp = callback;
        return this;
    }

    handleGesture(e) {
        if(!this.xDown || !this.yDown) return;

        let xUp = e.touches[0].touches[0].clientX;
        let yUp = e.touches[0].touches[0].clientY;

        this.xDist = this.xDown - xUp;
        this.yDist = this.yDown - yUp;

        if(Math.abs(this.xDist) > Math.abs(this.yDist)) {
            if(this.xDist > 0) this.onLeft();
            else this.onRight();
        } else {
            if(this.yDist > 0) this.onUp();
            else this.onDown();
        }

        this.xDown = null;
        this.yDown = null;
    }


}