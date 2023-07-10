
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

let swap = (arr,i,j) =>{
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

let partition = (arr,low,high) => {
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
        let part = partition(arr,low,high);
        quickSort(arr,low,part-1);
        quickSort(arr,part+1,high);
    }
}

/*
let _merge = (arr,l,m,r) => {


}  
*/
let _sort = (arr) => {
    let middle = parseInt((r-l)/2)
    console.log(middle);
    let leftArr = [];
    for(let i = 0;i < middle;i++){
        leftArr[i] = arr[i];
    }

    let rightArr = [];
    let a = 0;
    for(let i = middle;i< arr.length;i++){
        rightArr[a] = arr[i];
        a++;
    }
    /*
    _sort(leftArr);
    _sort(rightArr);
    _merge(arr,0,middle,arr.length);
    */
    
}

let testArray = [5, 12, 3, 1, 2];
console.log(testArray);
_sort(testArray);
