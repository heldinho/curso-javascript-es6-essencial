// não tem suporte nos browsers

'use strict'

function Person(initialName) {
  let name = initialName

  this.getName = function() {
    return name
  }

  this.setName = function(newName) {
    name = newName
  }
}

const p = new Person('Helder')

console.log(p)

p.getName()

p.name

p.setName('Ninho')
p.getName()

console.log(p.getName())