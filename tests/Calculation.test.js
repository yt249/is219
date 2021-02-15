const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Root = require('../src/Operations/Root');
const Power = require('../src/Operations/Power');

test('Test - Calculation Instantiation', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test - Results for Sum', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test - Results for Difference ', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});

test('Test - Results for Product', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test - Results for Quotient ', () => {
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(0.5);
});

test('Test - Results for Root', () => {
    let op = Root;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test - Results for Power', () => {
    let op = Power;
    let calculation = new Calculation(2,2,op);
    expect(calculation.GetResults()).toBe(4);
});