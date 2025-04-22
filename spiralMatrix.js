// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.
var spiralOrder = function(matrix) {

    // Initialize an empty array to store the spiral order of the matrix
    const result = [];

    // Get the dimensions of the matrix
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Initialize the top, bottom, left, and right bounds of the matrix
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    // Loop through the matrix in a spiral pattern
    while (result.length < rows * cols) {
        // Traverse the top row from left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse the right column from top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse the bottom row from right to left
        for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;

        // Traverse the left column from bottom to top
        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }

    // Return the spiral order of the matrix
    return result;
}

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder.call(null, [[1,2,3,4],[5,6,7,8],[9,10,11,12]]));