// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {

    const initial = matrix.length;

    // Transpose the matrix by swapping rows with columns
    for (let i = 0; i < matrix[0].length; i++) {
        let aux = [];

        for (let j = 0; j < matrix[i].length; j++) {
            aux.push(matrix[j][i]);
        }

        aux.reverse();
        matrix.push(aux);
    }

    // Reverse the rows
    for (let i = 0; i < initial; i++) {
        matrix.shift();
    }

    console.log(matrix);
    return matrix;
}

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

rotate.call(null, matrix);