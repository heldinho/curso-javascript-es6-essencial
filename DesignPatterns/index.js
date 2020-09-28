// function FakeUser() {
//   this.name = 'Helder'
//   this.lastName = 'Passos'
// }
function FakeUser() {
  return {
    name: 'Helder',
    lastName: 'Passos'
  }
}
// // não é Factory
// const user = new FakeUser()
// // Factory
const user = FakeUser()
console.log(user)

let loggedIn = false

function callIfAuthenticated(fn) {
  return !!loggedIn && fn()
}

