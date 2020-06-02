const { getPeople } = require('./service');


Array.prototype.myFilter = function (callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    // 0, "", null, undefined === false
    if (!result) continue;
    lista.push(item);
  }
  return lista;
}

async function main() {
  try {
    const {
      results
    } = await getPeople('a');

    // const familiaLars = results.filter((item) => {
    //   // por padrão precisa retornar um booleano
    //   // para informar se deve manter ou remover da lista
    //   // false > remove da lista
    //   // true > mantem
    //   // não encontrou = -1
    //   // encontrou = posicao no array
    //   const result = item.name.toLowerCase().indexOf('lars') !== -1
    //   return result;
    // });

    const familiaLars = results.myFilter((item, index, lista) =>
      item.name.toLowerCase().indexOf('lars') !== -1)
    
    const names = familiaLars.map(pessoa =>  pessoa.name);
    console.log(names);
  } catch (error) {
    console.log('ERRP => ', error)
  }
}

main()