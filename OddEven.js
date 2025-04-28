function OddEven(){
    const arr = [0,1,19,29,30,40,5,6,7,8,90];

    for(let i =0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i], " is even number");
        }
        else{
            console.log(arr[i], " is odd Number");
        }
    }


}
OddEven();