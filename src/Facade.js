class Operator{
    CalculateResults(a, b, op){
        if (op === '+'){
            return a + b;
        }
        else if (op === '-'){
            return a - b
        }
        else if (op === 'x'){
            return a * b
        }
        else if (op === '/'){
            return a / b
        }
        else{
            return "error"
        }
    }
}
module.exports = Operator;

