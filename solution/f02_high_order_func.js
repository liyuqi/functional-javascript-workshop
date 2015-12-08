function repeat(operation, num){
    if(num<=0) return operation();
    return operation(repeat,--num);
}

module.exports = repeat;