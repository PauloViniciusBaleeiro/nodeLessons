// import callback from './callback.example.js';
import promises from './promises.example.js';


// const user = promises.getUser();

// user
//   .then((user) => {
//     return promises.getPhone(user.id)
//       .then((phone) => {
//         return promises.getAdress(user.id)
//           .then(adress => {
//             return {
//               user,
//               phone,
//               adress
//             }
//           })
//       })
//   })
//   // Resultado do then anterior
//   .then(result => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log('Promise(erro): ', err);
//   });

async function main() {
  let user = null;
  let phone = null;
  let adress = null;
  try {
    console.time('Tempo decorrido');
    user = await promises.getUser();
    // phone = await promises.getPhone(user.id);
    // adress = await promises.getAdress(user.id);

    // Modo correto de executar as Promises, quando o resto não depende dos outros
    const resultado = await Promise.all([
      promises.getPhone(user.id),
      promises.getAdress(user.id)
    ]);
    phone = resultado[0];
    adress = resultado[1];
  } catch (error) {
    console.error('Falha', error);
  }
  console.log('Async', { user, phone, adress });
  console.timeEnd('Tempo decorrido');
}

main();
  