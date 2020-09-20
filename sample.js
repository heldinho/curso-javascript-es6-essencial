function init(v1) {
  console.log(v1)
  return function (v2) {
    console.log(v2.toLowerCase())
    return function (v3) {
      console.log(v3.toUpperCase())
      return function (v4) {
        console.log(v4)
      }
    }
  }
}

init('Init')('TO LOWER CASE')('to uppder case')('Fim')

// exemplo hoisting
function somaHoisting (a) {
  return function (b) {
    return a + b
  }
}

const soma2 = somaHoisting(2)
soma2(2)
soma2(3)
soma2(4)

// imutabilidade
const user = {
  name: 'Helder',
  lastName: 'Passos'
}
function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}
const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName)



const students = [
  { name: 'Helder', grade: 7 },
  { name: 'Miguel', grade: 10 },
  { name: 'Vagalume', grade: 0 },
  { name: 'Folano', grade: 5 }
]

function getApprovedStudents(studentsList) {
  return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados:')
console.log(getApprovedStudents(students))

console.log('Lista de alunos:')
console.log(students)

// retorna um array quebrado a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log('\nArray com as posições  separadas pelo delimitador:', splittedText)

// busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log('\nSubstituição de valor:', replacedText)

// retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1)
console.log('\nÚltima letra de uma string:', lastChar)

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 3)
console.log('\nAs duas letras primeiras letras são', twoCharsBeforeFirstPos)