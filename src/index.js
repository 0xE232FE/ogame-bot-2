import './app/utils.js';
import core from './app/core.js';
import state from './app/state.js';
import autobuilder from './app/autobuilder.js';

function initOgameBot() {
  const urlParams = new URLSearchParams(window.location.search);
  const component = urlParams.get('component');

  core.smartRefresh();

  state.getState();

  setTimeout(function () {
    console.log(window.state);

    switch(component) {
      case 'supplies':
        state.setResources();
        autobuilder.init();
        break;
      case 'facilities':
        state.setFacilities();
        break;
    }
  }, 200);
}

initOgameBot();


