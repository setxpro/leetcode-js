// 200 - Number of Islands

var numIsLands = function(grid) {

    // Count the number of islands in the grid
    let count = 0;

    // Loop through each cell in the grid
     for (let i = 0; i < grid.length; i++) {

        // If the current cell is an island, increment the count and recursively visit its neighbors 
        for (let j = 0; j < grid[i].length; j++) {

            // If the current cell is an island 
            if (grid[i][j] === "1") {

                // Increment the count and recursively visit its neighbors
                count = count + dfs(grid, i, j);
            }
        }
     }

     // Depth First Search DFS algorithm to find the number of islands in the grid 
     // and mark them as "0" to avoid counting them again 
     function dfs(grid, row, col) {

        // If the current cell is an island, mark it as "0" to avoid counting it again
         if (row < 0 || row > grid.length-1 || col < 0 || col > grid[row].length-1 || grid[row][col] === "0") {
             return;
         }

         // Mark the current cell as "0" to avoid counting it again
         grid[row][col] = "0";

         // Recursively visit the neighbors of the current cell 
         // and mark them as "0" to avoid counting them again
         dfs(grid, row+1, col);
         dfs(grid, row-1, col);
         dfs(grid, row, col+1);
         dfs(grid, row, col-1);

         return 1;
     }

    console.log(count);
}

numIsLands.call(null, [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);