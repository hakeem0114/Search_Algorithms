console.log("Search Algo connected")

//#1: Linear Search
/*
Problem:
Given an array of n elements & a target of element "t", find the index of 
"t" in the array. Return -1 if the target is not found.

arr = [.5,2,10,4,6], t = 10
arr = [.5,2,10,4,6], t = 20
*/

function linSearch(arr,t){
    for(let i in arr){  //Can also use basic for loop
        if(arr[i] === t){
            return i
        }
    }
    return -1
}


console.log(linSearch([-5,2,10,4,6],10))
console.log(linSearch([-5,2,10,4,6],20))
/*
Big O: O(n) since input increases the # of run times.

Space Complexity: O(1) since the input does not change the memory
*/