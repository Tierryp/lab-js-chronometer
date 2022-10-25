class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let solution = this.currentTime / 6000;

    return Math.floor(solution);
  }

  getSeconds() {
    let solution = Math.floor((this.currentTime / 100)) % 60;
    console.log(solution)
    return solution;
  }

  getCentiseconds() {
    let solution = this.currentTime % 100;

    return solution;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());
    let cent = this.computeTwoDigitNumber(this.getCentiseconds());
    console.log(`${min}:${sec}.${cent}`);
    return `${min}:${sec}.${cent}`;
  }
}
