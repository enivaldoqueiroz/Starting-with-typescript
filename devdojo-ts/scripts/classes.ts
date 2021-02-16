/** Created by Enivaldo on 13/02/2021 */
//Classes

class Person{

    name: string;
    constructor(name: string){
        this.name = name;
    }

    print():void{
        console.log(`nome: ${this.name}`);
        
    }
}

class Employee extends Person{
    salary: number;
    constructor(name: string, salary: number){
        super(name);
        this.salary = salary;
    }
    print():void{
        super.print();
        console.log(`salary: ${this.name}`)
    }
}

let p1 = new Person("Natsu");
let emp1 = new Employee("Erza", 5000);

p1.print();
emp1.print();


