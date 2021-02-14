/** Created by Enivaldo on 13/02/2021 */
//Interfaces

function printName(person:{name: string}): void {
    console.log(person.name);    
}

//Crindo Objeto no Typescript
let randomObj = {name:"Enivaldo", age:20};
let randomObj2 = {age:20};

printName(randomObj);
//printName(randomObj2);

interface Person{
    name: string;
}

interface Employee extends Person{
    salary: number;
}

let pe: Person = {name: "Enivaldo"};
let emp: Employee = {name: "Enivaldo", salary:2000};

printName(pe);


function printName2(person: Person):void {
    console.log(person);    
}