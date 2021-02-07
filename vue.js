const game = document.querySelector('#ingamepage');
const vueContainer = document.createElement('div');
vueContainer.id = 'vueApp';

console.log(vueContainer);

game.appendChild(vueContainer);

var vm = new Vue({
  // opciones
  el: '#vueApp',
  data: {
    test: 'testing'
  },
  template: `
    <h1>{{test}}</h1>
  `
});
console.log(vm);
