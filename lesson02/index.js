const EventEmitter = require('events'); 

class myEmitter extends EventEmitter {

}

const meuEmissor = new myEmitter();

const eventName = 'user:click';

meuEmissor.on(eventName, (click) => {
  console.log('Um usuario clicou', click);
});

// meuEmissor.emit(eventName, 'na barra de rolagem');
// meuEmissor.emit(eventName, 'no ok');

// let count = 0;

// setInterval(() => {
//   meuEmissor.emit(eventName, 'na barra de rolagem ' + (count++));
// }, 2000);


const stdin = process.openStdin()
stdin.addListener('data', (value) => {
  console.log(`Voce digitou: ${value.toString().trim()}`)
})