/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arr1 = [1, 2, 2, 2, 7];
const arr2 = [2, 2, 6, 6, 7]; 
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const arrA = [1, 2, 2, 2, 7, 10, 15, 20];
const arrB = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n + m) linear, n = sortedA.length, m = sortedB.length because
 *  we may be pushing from only 1 array at a time while the other array's idx
 *  is staying in place. At worst, we push all items from 1 array when that
 *  array has all smaller items and then iterate through the 2nd array after.
 * - Space: O(n + m) where n = sortedA.length, m = sortedB.length because if
 *    there are no dupes all will be kept from both.
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

function orderedMultisetUnion(sortedA, sortedB) {
    let shortArr;
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

    let newArr = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < shortArr.length && index2 < longArr.length) {
        if(!shortArr.includes(longArr[index2])){
            newArr.push(longArr[index2]);
            console.log("first" + newArr + " ", index1 + index2);
            // index1++
            // index2++
        }
        else if (!longArr.includes(shortArr[index1])) {
            newArr.push(shortArr[index1]);
            console.log("second" + newArr + " ", index1);
            // index1++
            // index2++
        }

        if(longArr.includes(shortArr[index1])){
            newArr.push(shortArr[index1]);
            console.log("third" + newArr);
        }
        index1++
        index2++
    }
    newArr = newArr.sort();
    return newArr;
}

// console.log(orderedMultisetUnion(arr1, arr2))
console.log(orderedMultisetUnion(arrA, arrB))