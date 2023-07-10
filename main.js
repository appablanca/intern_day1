
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

let quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let pivot = arr[middle];
    let leftArr = [];
    let rightArr = [];

    
}


let testArray = [5, 12, 3, 1, 2, 3];
console.log(testArray);

quickSort(testArray);
console.log(testArray);

