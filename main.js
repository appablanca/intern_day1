
let bubbleSort = (arr) => {
    for(let i = 0; i<arr.length; i++){
       for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let mer

let swap = (arr,i,j) =>{
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

let sort = (arr,low,high) => {
    let pivot = arr[high];
    let i = (low -1);

    for(let j = low; j <= high -1;j++){
        if(arr[j] < pivot){
            i++;
            swap(arr,i,j);
        }
    }

    swap(arr,i+1,high);
    return(i+1);
}



let quickSort = (arr,low,high) => {
    if(low < high){
        let part = sort(arr,low,high);
        quickSort(arr,low,part-1);
        quickSort(arr,part+1,high);
    }
}


let testArray = [5, 12, 3, 1, 2, 3];
console.log(testArray);
quickSort(testArray,0,testArray.length-1);
console.log(testArray);
