


// Selection Sorting 

/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; i++) { // Starting at the beginning of the array 

        let min = i; // Setting the min to the first index (incrementing) and comparing it to the other values

        for (let j = i + 1; j < arr.length; j++) { // Iterating through the array starting with the value after i
            if (arr[min] > arr[j]) { // Comparing the starting min value to the value at the current j 
                min = j; // If it is true assign the min index to the j index  
            }
        }
        if (min != i) { // Swapping the values if the min changed 
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr; // Returning the array 
}

console.log(selectionSort(myArr));