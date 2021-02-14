/**
 * Created by Enivaldo on 02/02/2021
 */
//Parte 01
var p = document.createElement('p');
var ola = "DevDojo Somos feras";
p.textContent = ola;
document.body.appendChild(p);
//Tipos no typescript
var num = 10;
var bool = true;
var str1 = "Um teste";
var str2 = 'Um teste' +
    ' Outro teste';
var str3 = str1 + " to Enivaldo\nQueiroz";
console.log(str3);
//console.log(str2);
//Função 
function func() { }
;
if (bool != null) { }
if (bool === undefined) { }
if (bool) {
    // let torna a varial local e var torna a varial global
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
//Não reconhece a variavel i pois não é global
//console.log("Value of i is " + i);
//console.log("Value of i is " + this.i);
//Arry
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Tupla
var tuple;
//Dará erro
//tuple = [77,"Enivaldo"];
tuple = ["Enivaldo", 77];
console.log(tuple);
console.log(tuple[0].toLocaleUpperCase());
console.log(tuple[1]);
//Parte 02
//Enumeração
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
})(Day || (Day = {}));
var day = Day.MONDAY;
console.log("day:" + day + " " + Day.TUESDAY + " " + Day.WEDNESDAY);
console.log("day:" + Day[0] + " " + Day[1] + " " + Day[2]);
//console.log(true === 1);
/*? inserido o simbolo de interrogação a varialvel ficarar com o recebimento do valor facultativo */
/*function add(v1:number, v2:number, v3?:number):  number {
    if(v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}

console.log(`add ${add(1,2,3)}`);*/
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log("add " + add(1, 2));
console.log("add(\"quem \u00E9 o\" , \"gatao\" ) ");
var var1 = "Teste";
console.log(var1);
//let exemplo: number = undefined;
//Parte 03
var stringLength = var1.length;
var stringUpperCase = var1.toLocaleUpperCase();
console.log("Quantidade de caracteres: ", stringLength);
console.log(stringUpperCase);
function add2(v1) {
    var v2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        v2[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add2("Sum is: ", 1, 2, 4, 5);
