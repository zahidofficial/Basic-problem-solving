function fact(data){
    let result =1;

    if(data == 0){
        return 1;
    }
    else if(data<0){
        return "Invalid data";
    }

    for(let i=2;i<=data;i++){
        result = result*i;
    }
    return result;
}

console.log("The factorial is: ", fact(5));