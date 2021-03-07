const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2);
    expect(result.GetResults()).toBe(3);
});
test('Calculator difference of two numbers', () => {
    let result = Calculator.Difference(1,2);
    expect(result.GetResults()).toBe(-1);
});
test('Calculator product of two numbers', () => {
    let result = Calculator.Product(1,2);
    expect(result.GetResults()).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let result = Calculator.Quotient(1,2);
    expect(result.GetResults()).toBe(.5);
});
test('Calculator Root of two numbers', () => {
    let result = Calculator.Root(4,2);
    expect(result.GetResults()).toBe(2);
});
test('Calculator Power of two numbers', () => {
    let result = Calculator.Power(2,2);
    expect(result.GetResults()).toBe(4);
});
test('Calculator adding to calculations', () => {
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});
test('Calculator Get Last Calculation', () => {
    Calculator.Product(1,2);
    let CalculationObject = Calculator.getLastCalculation();
    expect(CalculationObject.GetResults()).toBe(2);
});
test('Calculator ClearHistory', () => {
    Calculator.Sum(1,2);
    Calculator.Clear();
    expect(Calculator.Calculations.length).toBe(0);
});

test('Calculator Copy()', () => {
    Calculator.Clear();
    Calculator.Root(9);
    Calculator.Power(2);
    Calculator.Sum(4,2);
    let newCalc = Calculator.Copy();
    expect(newCalc.Calculations).toBe(Calculator.Calculations);
});
