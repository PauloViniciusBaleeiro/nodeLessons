const service = require('./service');

Array.prototype.myMap = function (callback) {
  const novoArrayMapeado = []
  for (let indice = 0; indice <= this.length - 1; indice++){
    const resultado = callback(this[indice], indice);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
}

async function main() {
  try {
    const results = await service.getPeople('a');
    // const names = [];

    // console.time('forEach');
    // results.results.forEach(element => {
    //   names.push(element.name);      
    // });
    // console.timeEnd('forEach');

    // const names = results.results.map((pessoa) => {
    //   return pessoa.name
    // })

    const names = results.results.myMap(function (pessoa, indx) {
      return `${indx + 1} - ${pessoa.name}`;
    })

    console.log('Nomes => ', names);

  } catch (err) {
    console.log(`Deu erro ${err}`);
  }
}

main()