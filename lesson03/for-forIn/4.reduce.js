const {
  getPeople
} = require('./service');

Array.prototype.myReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal = callback(valorFinal, this[index], this)
  }
  return valorFinal;
}

async function main() {
  try {
    const { results } = await getPeople(`a`)
    const pesos = results.map(item => parseInt(item.height))
    console.log('pesos', pesos);
    /*****
     *  Cuidado ao lidar com o reducer, pois ao passar um array vazio
     *  ele quebrará, caindo no catch.
     *  Para evitar esse comportamento, caso não tenha certeza se o array
     *  terá dados ou não, se faz necessário a inicialização com um valor
     *  (geralmente 0), como segundo parâmetro do reduce. ex:
     * 
     *  [].reduce({ (a, p) => return a + p }, 0 );
     * 
     * *************************************************************/
    // const total = pesos.reduce((anterior, proximo) => {
    //   return anterior + proximo
    // });

    const minhaLista = [
      ['Paulo', 'Vinicius'],
      ['NodeBr', 'NERDZÂO']
    ]

    const total = minhaLista.myReduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
    .join(', ')
    console.log("main -> total", total)

  } catch (err) {
    console.log(err);
  }

}

main ()