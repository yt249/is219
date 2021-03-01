// const Strategy = Interface.create('execute', 'execute1');

class Strategy{
    execute(){}
}

class ConcreteStrategyAdd extends Strategy{
    constructor() {
        super();
    }
    execute(a,b){
        return a+b;
    }
}

class ConcreteStrategySubtract extends Strategy{
    constructor() {
        super();
    }
    execute(a,b){
        return a-b;
    }
}

module.exports = {ConcreteStrategyAdd, ConcreteStrategySubtract};

