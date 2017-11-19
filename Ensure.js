function ensure(value) {
    if(value == undefined || typeof value === undefined){
        return new Error('no arguments');
    } else{
        return value;
    }
}

console.log(ensure());