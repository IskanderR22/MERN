

// Sorting Algos

// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr){
    // Loop through
    for (let i = 0; i < arr.length; i++){

        // Compare values as we iterate 
        // If the current index value is greater 
        for ( let j = 0; j < arr.length - i - 1; j++){ // Subtracting 1 and the value of i to shorten the length of the array 
            if( arr[j] > arr[j + 1]){ // Comparing the current index with the next one // 5 , 3 EXAMPLE
                let temp = arr[j]; // Creating a temp variable to hold the value  // 5
                arr[j] = arr [j + 1] // Swapping the current index with the following one // 3
                arr[j + 1] = temp; // Setting the right index value to the left index value // 5 
            }
        }
    }
    console.log(arr)}

bubbleSort(nums1);
bubbleSort(nums2);
bubbleSort(nums3);