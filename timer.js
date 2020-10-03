class Timer {
    constructor(duration, startButton, pauseButton, callbacks) {
        this.duration = duration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.timerID = setInterval(this.tick, 1000);

    }

    pause = () => {
        clearInterval(this.timerID);
    }

    tick = () => {
        if (this.timeLeft <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeLeft = this.timeLeft - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
    }
    get timeLeft() {
        return parseFloat(this.duration.value);
    }
    set timeLeft(time) {
        this.duration.value = time;
    }
}
