// function FakeUser() {
//   this.name = 'Helder'
//   this.lastName = 'Passos'
// }
// function FakeUser(customProperties) {
//   return {
//     name: 'Helder',
//     lastName: 'Passos',
//     ...customProperties
//   }
// }
// // não é Factory
// const user = new FakeUser()
// // Factory
// const user = FakeUser({
//   name: 'Miguel', lastName: 'Passos',
//   age: 4, civilStatus: 'União Estável'
// })
// console.log(user)

// Singleton
// const SETTINGS = {
//   api: 'http://localhost',
//   trackJsToken: '12345'
// }

// function MyApp() {
//   if (!MyApp.instance) {
//     MyApp.instance = this
//   }

//   return MyApp.instance
// }

// function Pessoa() {
//   if (!Pessoa.instance) {
//     return Pessoa.instance = this
//   }
//   return Pessoa.instance
// }

// const p = Pessoa.call({ name: 'Helder' })
// const p2 = Pessoa.call({ name: 'Miguel' })
// console.log(p)
// console.log(p2)

// Decorator
// let loggedIn = false;
// function callIfAuthenticated(fn) {
//   return !!loggedIn && fn();
// }
// function sum(a, b) {
//   return a + b;
// }
// console.log(callIfAuthenticated(() => sum(2, 3)));
// loggedIn = true;
// console.log(callIfAuthenticated(() => sum(2, 3)));
// loggedIn = false;
// console.log(callIfAuthenticated(() => sum(2, 3)));

// function readonly() {
//   descriptor.writable = false;
//   return descriptor;
// }

// class Job {
//   @readonly
//   title() {
//     return "CEO";
//   }
// }

// Observer
/**
 * É um pattern muito popular em aplicações javascript. A instância
 * (subscriber) mantém uma coleção de objetos (observers) e notifica todos
 * eles quando ocorrem mudanças no estado.
 **/

// class Observable {
//   constructor() {
//     this.observables = [];
//   }
//   subscribe(fn) {
//     this.observables.push(fn);
//   }
//   unsubscribe(fn) {
//     this.observables = this.observables.filter((obs) => obs !== fn);
//   }
//   notify(data) {
//     this.observables.map((fn) => fn(data));
//   }
// }

// const o = new Observable();
// const logData1 = (data) => console.log(`Subscribe 1: ${data}`);
// const logData2 = (data) => console.log(`Subscribe 2: ${data}`);
// const logData3 = (data) => console.log(`Subscribe 3: ${data}`);

// o.subscribe(logData1);
// o.subscribe(logData2);
// o.subscribe(logData3);

// o.notify("notified 1");
// console.log("\n");
// o.unsubscribe(logData2);

// o.notify("notified 2");

// Module
/**
 * É um pattern que possibilita organizarmos melhor o nosso
 * código, sem a necessidade de expor variáveis globais.
 **/

// (function ($) {
//   // your plugin here
// })(jQuery);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// export default Person;
// // utilizar Person
// import Person from "./models/person";

const { getName, setName } = require("./Teste");
console.log(getName());
console.log(setName("Helder Passos"));
console.log(getName());
