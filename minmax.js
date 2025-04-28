function getmax(array){
    let maxValue = array[0];

    for(i=0;i<array.length;i++){
        if(array[i]>maxValue){
            maxValue = array[i];
        }
    }
    console.log("Maximum value of the array is: ",maxValue);
}
getmax([10,40,80,90,77,60]);