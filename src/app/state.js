// State
const stateDefault = {
  resources: {},
  facilities: {},
  development: {},
};

window.state = {};

export default {
  saveState() {
    localStorage.setItem('state', JSON.stringify(state));
  },
  getState() {
    state = JSON.parse(localStorage.getItem('state'));
    if (!state) {
      state = stateDefault;
      this.saveState();

    }
  },
  setResources() {
    state.resources = {
      Metal: {
        button: document.querySelector('li.metalMine .upgrade'),
        level: parseInt(document.querySelector('li.metalMine .level').dataset.value),
      },
      Crystal: {
        button: document.querySelector('li.crystalMine .upgrade'),
        level: parseInt(document.querySelector('li.crystalMine .level').dataset.value),
      },
      Deuterium: {
        button: document.querySelector('li.deuteriumSynthesizer .upgrade'),
        level: parseInt(document.querySelector('li.deuteriumSynthesizer .level').dataset.value),
      },
      Energy: {
        button: document.querySelector('li.solarPlant .upgrade'),
        level: parseInt(document.querySelector('li.solarPlant .level').dataset.value),
      },
      Satellites: {
        button: document.querySelector('li.solarSatellite .upgrade'),
        amount: parseInt(document.querySelector('li.solarSatellite .amount').dataset.value),
      },
      metalStorage: {
        button: document.querySelector('li.metalStorage .upgrade'),
        level: parseInt(document.querySelector('li.metalStorage .level').dataset.value),
      },
      crystalStorage: {
        button: document.querySelector('li.crystalStorage .upgrade'),
        level: parseInt(document.querySelector('li.crystalStorage .level').dataset.value),
      },
      deuteriumStorage: {
        button: document.querySelector('li.deuteriumStorage .upgrade'),
        level: parseInt(document.querySelector('li.deuteriumStorage .level').dataset.value),
      },
      last_update: Date.now()
    }

    this.saveState();
  },
  setFacilities() {
    state.facilities = {
      roboticsFactory: {
        button: document.querySelector('li.roboticsFactory .upgrade'),
        level: parseInt(document.querySelector('li.roboticsFactory .level').dataset.value),
      },
      shipyard: {
        button: document.querySelector('li.shipyard .upgrade'),
        level: parseInt(document.querySelector('li.shipyard .level').dataset.value),
      },
      researchLaboratory: {
        button: document.querySelector('li.researchLaboratory .upgrade'),
        level: parseInt(document.querySelector('li.researchLaboratory .level').dataset.value),
      },
      last_update: Date.now()
    }

    this.saveState();
  }
};