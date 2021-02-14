/**
 * Created by Enivaldo on 02/02/2021
 */

 //Parte 01
var p = document.createElement('p');
var ola: string = "DevDojo Somos feras";

p.textContent = ola;
document.body.appendChild(p);

//Tipos no typescript
let num : number = 10;
let bool : boolean = true;
let str1: string = "Um teste";
let str2: string = 'Um teste' + 
                    ' Outro teste';
var str3: string = `${str1} to Enivaldo
Queiroz`;
console.log(str3);
//console.log(str2);

//Função 
function func():void{};

if(bool != null){}
if(bool === undefined){}

if(bool){
    // let torna a varial local e var torna a varial global
    let i:number;
    for (i= 0; i < 3; i++){
        console.log(i);
    }
}
//Não reconhece a variavel i pois não é global
//console.log("Value of i is " + i);

//console.log("Value of i is " + this.i);


//Arry
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//Tupla
let tuple:[string,number];
//Dará erro
//tuple = [77,"Enivaldo"];
tuple = ["Enivaldo", 77];
console.log(tuple);
console.log(tuple[0].toLocaleUpperCase());
console.log(tuple[1]);

//Parte 02

//Enumeração

enum Day{MONDAY, TUESDAY, WEDNESDAY}
let day: Day = Day.MONDAY;
console.log(`day:${day} ${Day.TUESDAY} ${Day.WEDNESDAY}`);

console.log(`day:${Day[0]} ${Day[1]} ${Day[2]}`);


//console.log(true === 1);
/*? inserido o simbolo de interrogação a varialvel ficarar com o recebimento do valor facultativo */
/*function add(v1:number, v2:number, v3?:number):  number {
    if(v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}

console.log(`add ${add(1,2,3)}`);*/


function add(v1:any, v2:any, v3?:any): void {
    if(v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}

console.log(`add ${add(1,2)}`);
console.log(`add("quem é o" , "gatao" ) `);

let var1: any = "Teste";
console.log(var1);

//let exemplo: number = undefined;

//Parte 03

let stringLength: number = (<string> var1).length;
let stringUpperCase: string = (var1 as string).toLocaleUpperCase();

console.log("Quantidade de caracteres: ",stringLength);
console.log(stringUpperCase);

//
function add2(v1:string, ...v2:number[]) :void {
    let sum: number = 0;
    for (let i = 0; i < v2.length; i++){
        sum += v2[i];
    }
    console.log(v1 + sum);
    
}

add2("Sum is: ", 1,2,4,5)

