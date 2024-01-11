class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(element) {
        this.elements.push(element);
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

// Labirent sınıfı
class Maze {
    constructor(matrix) {
        this.matrix = matrix;
        this.rows = matrix.length;
        this.cols = matrix[0].length;
    }

    // Komşu hücreleri kontrol etme
    getNeighbors(row, col) {
        const directions = [
            [-1, 0], // Yukarı
            [0, 1],  // Sağ
            [1, 0],  // Aşağı
            [0, -1]  // Sol
        ];

        const neighbors = [];
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 &&
                newRow < this.rows &&
                newCol >= 0 &&
                newCol < this.cols &&
                this.matrix[newRow][newCol] !== 1 // Duvar kontrolü
            ) {
                neighbors.push([newRow, newCol]);
            }
        }
        return neighbors;
    }

    // Genişlik öncelikli arama
    breadthFirstSearch(startRow, startCol, endRow, endCol) {
        const queue = new Queue();
        const visited = new Array(this.rows).fill(0).map(() => new Array(this.cols).fill(false));
        const parent = new Array(this.rows).fill(0).map(() => new Array(this.cols).fill(null));

        queue.enqueue([startRow, startCol]);
        visited[startRow][startCol] = true;

        while (!queue.isEmpty()) {
            const [currentRow, currentCol] = queue.dequeue();

            if (currentRow === endRow && currentCol === endCol) {
                // Hedefe ulaşıldı, yolun izini sür
                const path = [];
                let [row, col] = [endRow, endCol];
                while (row !== startRow || col !== startCol) {
                    path.push([row, col]);
                    const [parentRow, parentCol] = parent[row][col];
                    row = parentRow;
                    col = parentCol;
                }
                path.push([startRow, startCol]);
                return path.reverse();
            }

            const neighbors = this.getNeighbors(currentRow, currentCol);
            for (const [neighborRow, neighborCol] of neighbors) {
                if (!visited[neighborRow][neighborCol]) {
                    visited[neighborRow][neighborCol] = true;
                    queue.enqueue([neighborRow, neighborCol]);
                    parent[neighborRow][neighborCol] = [currentRow, currentCol];
                }
            }
        }

        return null; // Hedefe ulaşılamadı
    }
}

// Labirent örneği
const mazeMatrix = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
];

const maze = new Maze(mazeMatrix);
const path = maze.breadthFirstSearch(0, 0, 4, 4);

if (path) {
    console.log("Yol bulundu:");
    console.log(path);
} else {
    console.log("Hedefe ulaşılamadı.");
}
