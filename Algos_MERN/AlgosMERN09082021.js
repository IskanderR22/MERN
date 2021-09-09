

// Ordered Intersection Arrays



/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];


const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {

    let shortArr; // Setting variables to hold the shorter and longer arrays
    let longArr;

    if (sortedA.length > sortedB.length) { // Checking if the sortedA array is longer than the sortedB array 
        shortArr = sortedB;
        longArr = sortedA
    }
    else if (sortedB.length > sortedA.length) { // Checking if the sortedB array is longer than the sortedA array 
        shortArr = sortedA;
        longArr = sortedB;
    }
    else { // Else if they are the same length, just set them respectivly 
        shortArr = sortedA;
        longArr = sortedB;
    }

    let newArr = []; // Creating a variable to push the common values of both sortedA and sortedB


    for (let x = 0; x < shortArr.length; x++) { // Creating a for loop to go through the shorter array 

        let y = 0; // Starting y at the 0 index 

        while (shortArr[x] >= longArr[y]) { // While x is greater than or equal to y 
            if (shortArr[x] == longArr[y]) { // If the value at those indexs are the same 

                if (!newArr.includes(shortArr[x])) { // AND if the newArr variable doesn't include this value
                    newArr.push(shortArr[x]); // Push the value into our newArr
                    y++; // Increment y
                }

                else y++; // Else if the value is already in the newArr, increment y
            }

            else y++; // Else once the while loops finishes, increment y for the next for loop itteration
        }
    }
    return newArr; // Return our newAr
}

console.log(orderedIntersection(arrA1, arrB1)); // Returns [2 , 7]
console.log(orderedIntersection(arrA2, arrB2)); // Returns [ 2 ]
console.log(orderedIntersection(arrA3, arrB3)); // Returns [] nothing 