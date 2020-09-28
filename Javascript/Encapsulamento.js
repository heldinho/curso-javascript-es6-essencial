// ocultar detalhes do elemento externo

'use strict'

// ES6
// class Person {
//   #name = ''
//   constructor(name) {
//     this.#name = name
//   }
//   get name() {
//     return this.#name
//   }
//   set name(name) {
//     this.#name = name
//   }
// }

// Javascript
// function Person(initialName) {
//   let name = initialName
//   Object.defineProperties(this, 'name', {
//     get: function() {
//       return name
//     },
//     set: function(value) {
//       name = value
//     }
//   })
// }

// Javascript
// function Person() {}
// Person.walk = function() {
//   console.log('walking...')
// }
// console.log(Person.walk())

// ES6
// class Person {
//   static walk() {
//     console.log('walking...')
//   }
// }
// console.log(Person.walk())