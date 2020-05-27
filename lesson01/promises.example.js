/***
 * Using promises, to syncronizes functions calls
 ***/

function getUser() {
  // erros, passar através do reject
  // sucesso, passar através do resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "TESTER",
        birthDate: new Date()
      })
    },
      1000);
  });
}

function getPhone(userId) {
  return new Promise((res, err) => {
    setTimeout(() => {
      return res({
        phone: '555-5555',
        codeArea: '929',
      })
    })
  }, 2000);
}

function getAdress(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res({
        street: 'Offshore',
        number: '7482',
        city: 'New York',
        state: 'NY'
      })
    })
  }, 3000);
}



export default {
  getUser,
  getPhone,
  getAdress
}