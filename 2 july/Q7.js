// 2. *Flatten an Array*  
//    Write a function flattenArray(arr) to flatten a nested array (1 level deep).  
//    Example: [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]

function flattenArray(arr) {
    return arr.flat();
}

console.log(flattenArray([[1, 2], [3, 4], [5]])); 
