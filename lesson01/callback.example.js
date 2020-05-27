/***
 * Using callback, to syncronizes functions calls
 ***/

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "TESTER",
      birthDate: new Date()
    })
  },
    1000);
}

function getPhone(userId, callback) {
  console.log("getPhone -> userId", userId)
  setTimeout(() => {
    return callback(null, {
      phone: '555-5555',
      codeArea: '929',
    })
  }, 2000);
}

function getAdress(userId, callback) {
  console.log("getAdress -> userId", userId)
  setTimeout(() => {
    return callback(null,{
      street: 'Offshore',
      number: '7482',
      city: 'New York',
      state: 'NY'
    })
  }, 3000);
}

getUser(userResolve);
getPhone(1, phoneResolve);
getAdress(1, adressResolve);

function userResolve(err, user) {
  if (!err) {
    console.log('Usuário:', user.name);
  }  
}

function phoneResolve(err, phone) {
  if (!err) {
    console.log('Phone:(', phone.codeArea, ') - ', phone.phone);
  }
}

function adressResolve(err, adress) {
  if (!err) {
    console.log('Adress', adress);
  }
}


export default {
  getUser,
  getAdress,
  getPhone,
  userResolve
}