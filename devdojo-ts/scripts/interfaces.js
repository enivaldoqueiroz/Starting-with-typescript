/** Created by Enivaldo on 13/02/2021 */
//Interfaces
function printName(person) {
    console.log(person.name);
}
//Crindo Objeto no Typescript
var randomObj = { name: "Enivaldo", age: 20 };
var randomObj2 = { age: 20 };
printName(randomObj);
var pe = { name: "Enivaldo" };
var emp = { name: "Enivaldo", salary: 2000 };
printName(pe);
function printName2(person) {
    console.log(person);
}
