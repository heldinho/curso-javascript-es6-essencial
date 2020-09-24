function init(v1) {
  console.log(v1);
  return function (v2) {
    console.log(v2.toLowerCase());
    return function (v3) {
      console.log(v3.toUpperCase());
      return function (v4) {
        console.log(v4);
      };
    };
  };
}

init('Init')('TO LOWER CASE')('to uppder case')('Fim');

// exemplo hoisting
function somaHoisting(a) {
  return function (b) {
    return a + b;
  };
}

const soma2 = somaHoisting(2);
soma2(2);
soma2(3);
soma2(4);

// imutabilidade
const user = {
  name: 'Helder',
  lastName: 'Passos',
};
function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`,
  };
}
const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);

const students = [
  { name: 'Helder', grade: 7 },
  { name: 'Miguel', grade: 10 },
  { name: 'Vagalume', grade: 0 },
  { name: 'Folano', grade: 5 },
];

function getApprovedStudents(studentsList) {
  return studentsList.filter((student) => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('Lista de alunos:');
console.log(students);

// retorna um array quebrado a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(
  '\nArray com as posições  separadas pelo delimitador:',
  splittedText
);

// busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replacedText);

// retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 3);
console.log('\nAs duas letras primeiras letras são', twoCharsBeforeFirstPos);

// retorna número com um número de casas decimais
const fixedTwoDecimais = (13.2).toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimais);

console.log('\nString parseada para float:', parseFloat('13.20'));

console.log('\nString parseada para int:', parseInt('13.20'));

let users = {
  name: 'Helder',
};

users.name = 'Outro nome 1';
users['name'] = 'Outro nome 2';

function getProp(prop) {
  console.log('\n', users[prop]);
}

console.log(getProp('name'));

console.log(Object.values(users));
console.log(Object.keys(users));
console.log(Object.entries(users));
console.log(Object.assign(users, { fullName: 'Helder Passos' }));
console.log(Object.assign({}, users, { age: 30 }));

const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';
console.log('\nVariável newObj após as alterações:', newObj);

const symbol1 = Symbol();
const symbol2 = Symbol();

// symbols são únicos
console.log('symbols1 é igual a symbol2:', symbol1 === symbol2);

// previnir conflito entre nomes de propridades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const userSymbol = {
  [nameSymbol1]: 'Helder',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Passos',
};

console.log(userSymbol);

// symbols criam propriedades que não são enumberables
for (const key in userSymbol) {
  if (userSymbol.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${userSymbol[key]}`);
  }
}

console.log(
  '\nPropriedade do objeto userSymbol:',
  Object.getOwnPropertySymbols(userSymbol)
);
console.log(
  '\nTodas propriedades do objeto userSymbol',
  Reflect.ownKeys(userSymbol)
);

//criar um enum
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT'),
};

console.log('\nEnum:', Reflect.ownKeys(directions));
console.log('\n', directions);

//
// functions
//

function fn() {
  return 'Fn Code here';
}

const arrowFn = () => 'Arrow Fn Code here';
const arrowFn2 = () => {
  // mais de uma expressão
  return 'Arrow Fn2 Code here';
};
// funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// receber parâmetros
const logValue = (value) => console.log(value);
const logFnResult = (fnParam) => console.log(fnParam());

logFnResult(arrowFn);

// receber e retornar funções
const controlFnExec = (fnParam) => (allowed) => {
  if (allowed) {
    fnParam();
  }
};

// const handleFnExecution = controlFnExec(fn)
// handleFnExecution(true)

(() => {
  this.name = 'arrow function';
  const getNameArrowFn = () => this.name;
  function getName() {
    return this.name;
  }
  const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName,
  };
  console.log('\n\n\n\n', user.getNameArrowFn());
  console.log(user.getName());
})();

const users2 = ['Helder', 'Miguel', 'Mary'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W'),
};

const persons = [
  {
    name: 'Helder',
    age: 30,
    gender: gender.MAN,
  },
  {
    name: 'Miguel',
    age: 4,
    gender: gender.MAN,
  },
  {
    name: 'Mary',
    age: 46,
    gender: gender.WOMAN,
  },
];

// retornar a quantidade de itens de um array
console.log('Items:', persons.length);

// verificar se é array
console.log('\nA variável persons é um array:', Array.isArray(persons));

// iterar os itens do array
persons.forEach((person) => {
  console.log(`Nome: ${person.name}`);
});

const mens = persons.filter((person) => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript'
  return person
})
console.log('\nPessoas com a adição do course:', personsWithCourse)

// transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age
  return age
}, 0)
console.log('\nSoma de idade das pessoas', totalAge)


// juntando operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age
    return age
  }, 0)
  
console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges)


//
//
//
// Operadores: aritméticos, atribuição, comparação, condicional, lógicos e spread

//mod
12 % 5

// incremento (++) e decremento (--)
// ++x
// x++

// const a = ++2
// const b = 2++

// --x
// x--

// negação (-) e adição (+)
// -3
// +"3"
// +true
// +false
// -true

// operador de exponenciação (**)
2 ** 3
10 ** -1

// operador de agrupamento ()
2 * (3 + 2)


//
//
//
// Spread
var partes = ['ombro', 'joelhos']
var musica = ['cabeca', ...partes, 'e', 'pés']

function fn2(x, y, z) {
  console.log('x:',x, 'y:',y, 'z:',z)
}
var args = [0, 1, 2]
fn2(...args)

// deletar algo
// delete something

// tipo
// typeof something

// in
// something in somethingItems

// array
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro')
0 in arvores
3 in arvores
6 in arvores
'cedro' in arvores // retorna false (voce deve especificar o indice não o valor daquele indice)
'lenth' in arvores // retorn true (length é uma propriedade de array)

// objetos predefinidos
'PI' in Math
var minhaString = new String('coral')
'length' in minhaString

// objetos personalizados
var meucarro = {marca: 'honda', modelo: 'accord', ano: 1998}
'marca' in meucarro
'modelo' in meucarro

// instaceof
// objeto instanceof tipoObjeto

var dia = new Date()

if (dia instanceof Date) {
 // code here
}


//
//
//
// Estruturas condicionais

const array = [0, 1, 2, 3, 4, 5]

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é par.`)
  } else {
    console.log(`O número ${item} é impar.`)
  }
})

const array2 = [2, 3, 4, 5, 6, 8, 10, 15]

array2.forEach(item => {
  if (item % 2 === 0) {
    console.log(`${item} é divisivel por 2.`)
  }
  else if (item % 3 === 0) {
    console.log(`${item} é divisivel por 3.`)
  }
  else if (item % 5 === 0) {
    console.log(`${item} é divisivel por 5.`)
  }
  else {
    console.log(`${item} não é divisivel.`)
  }
})