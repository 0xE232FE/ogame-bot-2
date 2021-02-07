export default {
  
  init() {
    console.log('=== Autobuilder Running! ===');
    

    const upgradeAvailable = document.querySelectorAll('button.upgrade').length > 0;

    function buildUp(i = 0) {
      
      if (i < this.levels.length) {
        setTimeout(() => {
          const res = window.state.resources[this.levels[i].resource];

          if (res.level < this.levels[i].level) {
            if (res.button) {
              console.log('Upgrading '+this.levels[i].resource+' to level: '+(parseInt(res.level)+1));
              res.button.click();
              return;
            }
            console.log('Trying to upgrade '+this.levels[i].resource+' to level: '+(parseInt(res.level)+1)+' not resources available');
            return;
          }

          /* // Only for Testing //
          console.log({
            res,
          });
          console.log('DONE => '+this.levels[i].resource+' level: '+this.levels[i].level);
          console.log('=======================================');
          */

          buildUp(i+1);

        }, 100);
      }
    }

    console.log(upgradeAvailable ? 'The resources are enough to upgrade a Mine.' : 'Not enough resources to make an upgrade.');

    if (upgradeAvailable) {
      buildUp();
    }
  },

  levels: [
    { resource: 'Metal', level: 2 },
    { resource: 'Energy', level: 2 },
    { resource: 'Crystal', level: 1 },
    { resource: 'Energy', level: 3 },
    { resource: 'Metal', level: 4 },
    { resource: 'Crystal', level: 2 },
    { resource: 'Energy', level: 4 },
    { resource: 'Deuterium', level: 2 },
    { resource: 'Metal', level: 6 },
    { resource: 'Energy', level: 6 },
    { resource: 'Crystal', level: 4 },
    { resource: 'Metal', level: 7 },
    { resource: 'Energy', level: 7 },
    { resource: 'Crystal', level: 5 },
    { resource: 'Deuterium', level: 3 },
    { resource: 'Metal', level: 8 },
    { resource: 'Energy', level: 8 },
    { resource: 'Crystal', level: 6 },
    { resource: 'Metal', level: 9 },
    { resource: 'Energy', level: 9 },
    { resource: 'Crystal', level: 7 },
    { resource: 'Deuterium', level: 4 },
    { resource: 'Metal', level: 10 },
    { resource: 'Energy', level: 10 },
    { resource: 'Crystal', level: 8 },
    { resource: 'Metal', level: 11 },
    { resource: 'Energy', level: 11 },
    { resource: 'Crystal', level: 9 },
    { resource: 'Deuterium', level: 5 },
    { resource: 'Metal', level: 12 },
    { resource: 'Energy', level: 12 },
    { resource: 'Crystal', level: 10 },
    { resource: 'Metal', level: 13 },
    { resource: 'Energy', level: 13 },
    { resource: 'Crystal', level: 11 },
    { resource: 'Deuterium', level: 6 },
    { resource: 'Metal', level: 14 },
    { resource: 'Energy', level: 14 },
    { resource: 'Crystal', level: 12 },
    { resource: 'Metal', level: 15 },
    { resource: 'Energy', level: 15 },
    { resource: 'Crystal', level: 13 },
    { resource: 'Deuterium', level: 7 },
    { resource: 'Metal', level: 16 },
    { resource: 'Energy', level: 16 },
    { resource: 'Crystal', level: 14 },
    { resource: 'Metal', level: 17 },
    { resource: 'Energy', level: 17 },
    { resource: 'Crystal', level: 15 },
    { resource: 'Deuterium', level: 8 },
    { resource: 'Metal', level: 18 },
    { resource: 'Energy', level: 18 },
    { resource: 'Crystal', level: 16 },
    { resource: 'Metal', level: 19 },
    { resource: 'Energy', level: 19 },
    { resource: 'Crystal', level: 17 },
    { resource: 'Deuterium', level: 9 },
    { resource: 'Metal', level: 20 },
    { resource: 'Energy', level: 20 },
    { resource: 'Crystal', level: 18 },
    { resource: 'Metal', level: 21 },
    { resource: 'Energy', level: 21 },
    { resource: 'Crystal', level: 19 },
    { resource: 'Deuterium', level: 17 },

    { resource: 'Metal', level: 22 },
    { resource: 'Energy', level: 22 },
    { resource: 'Crystal', level: 20 },
    { resource: 'Deuterium', level: 18 },

    { resource: 'Metal', level: 23 },
    { resource: 'Energy', level: 23 },
    { resource: 'Crystal', level: 21 },
    { resource: 'Deuterium', level: 19 },

    { resource: 'Metal', level: 24 },
    { resource: 'Energy', level: 24 },
    { resource: 'Crystal', level: 22 },
    { resource: 'Deuterium', level: 20 },

    { resource: 'Metal', level: 25 },
    { resource: 'Energy', level: 25 },
    { resource: 'Crystal', level: 23 },
    { resource: 'Deuterium', level: 21 },

    { resource: 'Metal', level: 26 },
    { resource: 'Energy', level: 26 },
    { resource: 'Crystal', level: 24 },
    { resource: 'Deuterium', level: 22 },

    { resource: 'Metal', level: 27 },
    { resource: 'Energy', level: 27 },
    { resource: 'Crystal', level: 25 },
    { resource: 'Deuterium', level: 23 },

    { resource: 'Metal', level: 28 },
    { resource: 'Energy', level: 28 },
    { resource: 'Crystal', level: 26 },
    { resource: 'Deuterium', level: 24 },
  ],
};
