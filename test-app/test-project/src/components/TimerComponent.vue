<template>
    <div class="container">
        <h1>Timer</h1>
        <p>Counter: {{ counter }}</p>
        <button @click="countDownTimer">Start Timer</button>
        <p id="dots">{{ dots }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 10,
            dots: '.',
            dotsCounter: 1
        }
    },
    methods: {
        countDownTimer() {
            // if (this.counter > 0) {
            setTimeout(() => {
                // this.counter -= 1
                this.updateDots();
                this.countDownTimer();
            }, 200);
            // }
        },
        updateDots() {
            if (this.dotsCounter < 3) {
                this.dots = this.dots + ' .';
                this.dotsCounter++;
            } else {
                this.dots = '.';
                this.dotsCounter = 1;
            }
        }
    },

}
</script>

<style>
#dots {
    border: solid 3px black;
    color: whitesmoke;
    font-size: 30px;
    font-weight: bolder;
    width: 60px;
    margin-top: 5px;
    text-align: center;
}
</style>