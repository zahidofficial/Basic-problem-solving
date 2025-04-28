function ternary(data){
    for(let i=0;i<data.length;i++){
        data[i]==0? console.log("This is even")
        : data[i]%2==0? console.log("This is even")
        : console.log("This is odd");
    }
}
ternary([280,21,22,33,44,23,22]);