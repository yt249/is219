
const Calculator = require('../src/calculator');

test('Calculator adding two numbers', ()=> {
    let calculator = new Calculator();
    let result = calculator.Sum(1,2);
    expect(result).toBe(3);
});

