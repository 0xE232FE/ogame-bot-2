import utils from './utils.js';

export default {
  smartRefresh() {
    const randomRefresh = utils.randomIntFromInterval(1, 10);

    setTimeout(function () {
      window.location.reload();
    }, randomRefresh * 1000 * 60);
  },
}