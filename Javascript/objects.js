'use strict'

// function Animal(qtdePatas) {
//   this.qtdePatas = qtdePatas
//   this.movimentar = function() {}
// }

// function Cachorro(morde) {
//   Animal.call(this, 4)
//   this.morde = morde
//   this.latir = function() {
//     console.log('Au! au!')
//   }
// }

// const pug = new Cachorro(false)
// const pitbull = new Cachorro(true)

// console.log(pug)
// console.log(pitbull)

// function Animal() {}

// Animal.prototype.qtdePatas = 0
// Animal.prototype.movimentar = function() {}

// function Cachorro(morde) {
//   this.qtdePatas = 4
//   this.morde = morde
// }

// Cachorro.prototype = Object.create(Animal)
// Cachorro.prototype.latir = function() {
//   console.log('Au! au!')
// }

// const pug = new Cachorro(false)
// const pitbull = new Cachorro(true)

// console.log(pug)
// console.log(pitbull)

// String.prototype.split = function() {
//   // troca o funcionamento do split nativo
//   console.log('ixi...')
// }

const arr = '123456'.split('')

const reverte = arr.reverse()

const result = reverte.join('')

console.log(result)