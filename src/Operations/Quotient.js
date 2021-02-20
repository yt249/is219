function Quotient(a,b){

    if(b == 0){
        throw new Error("Cannot be divided by zero!");
    }

    return a / b;
}

module.exports = Quotient;