/** Created by Enivaldo on 13/02/2021 */
//Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.print = function () {
        console.log("nome: " + this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("salary: " + this.name);
    };
    return Employee;
}(Person));
var p1 = new Person("Natsu");
var emp1 = new Employee("Erza", 5000);
p1.print();
emp1.print();
var p2 = { name: "string" };
var p3 = {};
p2.print();
