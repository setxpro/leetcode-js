// 79. Word Search


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    // Loop through each cell in the board and check if the word can be found
    for (let i = 0; i < board.length; i++) {

        // Loop through each cell in the row and check if the word can be found
        for (let j = 0; j < board[i].length; j++) {

            // If the word can be found, return true 
            if (dfs(board, i, j, word, 0)) {
                return true;
            }
        }
    }
    // If the word cannot be found, return false
    return false;
    
    // Depth First Search
    function dfs(board, row, col, word, index) {

        // If the word has been found, return true
        if (index === word.length) {
            return true;
        }
        
        // If the word cannot be found, return false 
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index]) {
            return false;
        }
        
        // Mark the current cell as visited
        const temp = board[row][col];

        // Recursively visit the neighbors of the current cell
        board[row][col] = "#";

        // If the word can be found, return true
        const res = dfs(board, row + 1, col, word, index + 1) || dfs(board, row - 1, col, word, index + 1) || dfs(board, row, col + 1, word, index + 1) || dfs(board, row, col - 1, word, index + 1);
        
        // Mark the current cell as unvisited 
        board[row][col] = temp;

        // Return the result
        return res;
    }
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCCED";

console.log(exist.call(null, board, word));