console.log("Search Algo connected")

//#1: Linear Search
/*
Problem:
Given an array of n elements & a target of element "t", find the index of 
"t" in the array. Return -1 if the target is not found.

arr = [.5,2,10,4,6], t = 10
arr = [.5,2,10,4,6], t = 20
*/

// function linSearch(arr,t){
//     for(let i in arr){  //Can also use basic for loop
//         if(arr[i] === t){
//             return i
//         }
//     }
//     return -1
// }


// console.log(linSearch([-5,2,10,4,6],10))
// console.log(linSearch([-5,2,10,4,6],20))
/*

Big O: O(n) since input increases the # of run times.

Space Complexity: O(1) since the input does not change the memory
*/

//#2: Binary Search (Only works on sorted arrays)
/*
Problem:
Given a sorted array of "n" elements and a target element "t", 
find the index of "t" in the array. Return -1 if not found

*/

/*
Assuming the array is sorted
Create a function with paramaters array & target
Loop through array
                        
let leftIndex = array[0]
let rightIndex = array.splice(-1) or array.length - 1 //since array.length = total # of elements in array. 
                                                      //Since index starts from 0, lastIndex = array.length -1

Run & half its search area if not found for every search{  //while(leftIndex < rightIndex)
    let middleIndex = (left+right)/2 and round it down

    if(target == value of middleIndex in array){return middleIndex}
    if(target > middleIndex){
        leftIndex = middleIndex
    }
    if(target < middleIndex){
        rightIndex = middleIndex -1
    }
    return "Target not in array"    //If target is not found            



}

*/

//Solution

function binarySearch(array, target){
    
        let leftIndex = 0
        let rightIndex = array.length -1  //4


    while(leftIndex <= rightIndex){  //Needs to be also = to rightIndex so the while loop can be executed if the leftIndex=rightIndex==>TARGET
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        
        if(target == array[middleIndex]){return middleIndex}
        if(target > array[middleIndex]){
            leftIndex = middleIndex + 1   //Can't use the middle index since it is already checked in the previous line
        }
        else if(target < middleIndex){
            rightIndex = middleIndex -1  //Can't use the middle index since it is already checked in the previous line
        }    
    }
    return "Target not in array"    //If target is not found after while loop
}



console.log(binarySearch([-5,2,4,6,10],10))
console.log(binarySearch([-5,2,4,6,10],6))
console.log(binarySearch([-5,2,4,6,10],20))
/*
Big O: O(logn) since we reduce input size by half in each iteration

Space Complexity: O(1) since we are reducing & not adding input in each iteration 
*/