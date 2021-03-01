const Strategy = require('../src/Operations/StrategyExample');


test("Testing ConcreteStrategyAdd", () => {
    let result = new Strategy.ConcreteStrategyAdd;
    expect(result.execute(1,2)).toBe(3);
});
test("Testing ConcreteStrategySubtract", () => {
    let result = new Strategy.ConcreteStrategySubtract();
    expect(result.execute(1,2)).toBe(-1);
});