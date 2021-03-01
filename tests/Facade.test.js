const Operator = require('../src/Facade');

test('Operator', () => {
    let operator = new Operator();
    //let answer = new FacadeOperator.CalculateResults(1,2,'+');
    expect(operator.CalculateResults(4,2,'+')).toBe(6);
    expect(operator.CalculateResults(4,2,'-')).toBe(2);
    expect(operator.CalculateResults(4,2,'x')).toBe(8);
    expect(operator.CalculateResults(4,2,'/')).toBe(2);
    expect(operator.CalculateResults(4,2,3)).toBe("error");
});