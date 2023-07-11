function reverseArray(arr){
    let temp = [];

    for(let i = 0; i<arr.length;i++){
        temp[i] = arr[(arr.length-1)-i];
    }

    for(let i = 0; i < arr.length;i++){
        arr[i] = temp[i];
    }
    return arr;
}

function leftRotation(arr,amount){
    while(!(amount === 0)){
        let temp = arr[0];
        for(let i = 0; i < arr.length;i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = temp;
        amount--;
    }
    return arr;
}

function removeDupe(arr){
    
    let ans = [];


    for(let i = 0; i < arr.length;i++){
        if(ans.indexOf(arr[i]) == -1){
            ans.push(arr[i]);
        }
    }

 

    return ans;
}

function sparseArray(arr){
    let count = [];
    let ans = [];

    for(let i = 0; i < arr.length; i++){
        if(!(ans.indexOf(arr[i])=== -1)){
            count[ans.indexOf(arr[i])] ++;
        } else {
            ans.push(arr[i]);
            count.push(1);
        }
        
    }
    console.log(ans);
    return count;
}

let forwardArr = [2,"a",1,"c",5,7];
console.log(forwardArr);
let revArr = reverseArray(forwardArr);
console.log(revArr);

let unrotArr = [1,2,3,4,5];
console.log(unrotArr);
let rotatedArr = leftRotation(unrotArr,5);
console.log(rotatedArr);

let dupeArr = [1,"a","b","b","c","c","c","d","a","1"];
console.log(dupeArr);
let answerArr = removeDupe(dupeArr);
 console.log(answerArr);

let inputArr = ["aba","baba","baba","zxzb","ab"];
let sparsedArr = sparseArray(inputArr);
console.log(sparsedArr);