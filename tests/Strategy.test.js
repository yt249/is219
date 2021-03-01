const Strategy = require('../src/Operations/StrategyExample');


test("Testing ConcreteStrategyAdd", () => {
    let result = new Strategy.ConcreteStrategyAdd;
    expect(result.execute(1,2)).toBe(3);
});