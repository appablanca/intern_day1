
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


let _merge = (arr,l,m,r) => {

    let i = 0;
    let j = 0;
    let k = l;

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

    let n1 = middle + 1;
    let n2 = arr.length - middle;

    while(i<n1 && j <n2){
        if(leftArr[i] <= rightArr[i]){
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
    }

    while(i< n1){
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while(j<n2){
        arr[k] = rightArr[j];
        j++;
        k++;
    }
     
}  

let _sort = (arr,l,r) => {

    if(l>=r){
        return;
    }

    let middle = Math.floor(arr.length/2);
    

    _sort(arr,l,middle);

    _sort(arr,middle+1,r);

    _merge(arr,l,middle,r);
    
    
}

let testArray = [5, 12, 3, 1, 2];
console.log(testArray);
let size = testArray.length;
_sort(testArray,0,size-1);
