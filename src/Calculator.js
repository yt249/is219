const Calculation = require('./Models/Calculation');
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Root = require('./Operations/Root');
const Power = require('./Operations/Power');

class Calculator {
    static Calculations = [];

    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }

    static getLastCalculation(){
        return this.Calculations[this.Calculations.length - 1];
    }

    static Sum(a,b) {
        let calculation = Calculation.Create(a,b,Sum);
        this.addCalculation(calculation);
        return calculation;
    }

    static Difference(a,b) {
        let calculation = Calculation.Create(a,b,Difference);
        this.addCalculation(calculation);
        return calculation;
    }

    static Product(a,b) {
        let calculation = Calculation.Create(a,b,Product);
        this.addCalculation(calculation);
        return calculation;
    }

    static Quotient(a,b) {
        let calculation = Calculation.Create(a,b,Quotient);
        this.addCalculation(calculation);
        return calculation;
    }
    static Root(a,b) {
        let calculation = Calculation.Create(a,b,Root);
        this.addCalculation(calculation);
        return calculation;
    }
    static Power(a,b) {
        let calculation = Calculation.Create(a,b,Power);
        this.addCalculation(calculation);
        return calculation;
    }
    static Clear(){
        this.Calculations = [];
    }
    static Copy() {
        let newCalc = new Calculator();
        newCalc.Calculations = this.Calculations;
        return newCalc;
    }

}
module.exports = Calculator;