/*** CONSTANT ***/
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30; //Kich thuoc 1 o
const COLOR_MAPPING = [
    'red',
    'orange',
    'green',
    'purple',
    'blue',
    'cyan',
    'yellow',
    'white',
];

const BRICK_LAYOUT = [
    [
        [
            [1, 7, 7],
            [1, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 1, 1],
            [7, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [7, 7, 1],
        ],
        [
            [7, 1, 7],
            [7, 1, 7],
            [1, 1, 7],
        ],
    ],
    [
        [
            [7, 1, 7],
            [7, 1, 7],
            [7, 1, 1],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [1, 7, 7],
        ],
        [
            [1, 1, 7],
            [7, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 7, 1],
            [1, 1, 1],
            [7, 7, 7],
        ],
    ],
    [
        [
            [1, 7, 7],
            [1, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 1, 1],
            [1, 1, 7],
            [7, 7, 7],
        ],
        [
            [7, 1, 7],
            [7, 1, 1],
            [7, 7, 1],
        ],
        [
            [7, 7, 7],
            [7, 1, 1],
            [1, 1, 7],
        ],
    ],
    [
        [
            [7, 1, 7],
            [1, 1, 7],
            [1, 7, 7],
        ],
        [
            [1, 1, 7],
            [7, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 7, 1],
            [7, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 7],
            [7, 1, 1],
        ],
    ],
    [
        [
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
        ],
        [
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
        ],
    ],
    [
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
    ],
    [
        [
            [7, 1, 7],
            [1, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 1, 7],
            [7, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 1, 7],
            [1, 1, 7],
            [7, 1, 7],
        ],
    ],
];

const KEY_CODES = {
    'LEFT': 'ArrowLeft',
    'RIGHT': 'ArrowRight',
    'UP': 'ArrowUp',
    'DOWN': 'ArrowDown',
};

const WHITE_COLOR_ID = 7;

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

class Board {
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.generateWhiteBoard();
    }
    generateWhiteBoard() {
        return Array.from({ length: ROWS }, () => Array(COLS).fill(WHITE_COLOR_ID));
    }
    drawCell(xAxis, yAxis, colorId) {
        this.ctx.fillStyle = COLOR_MAPPING[colorId] || COLOR_MAPPING[WHITE_COLOR_ID];
        this.ctx.fillRect(xAxis * BLOCK_SIZE, yAxis * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE); // * BLOCK_SIZE cho đúng vị trí, xAsix&yAsix 1px
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(xAxis * BLOCK_SIZE, yAxis * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
    drawBoard() {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                this.drawCell(col, row, WHITE_COLOR_ID)
            }
        }
    }
}

class Brick {
    constructor(id) {
        this.id = id;
        this.layout = BRICK_LAYOUT[id]; // lay ra duoc brick
        this.activeIndex = 0; // brick loai nao
        this.colPos = 3;
        this.rowPos = 3;
    }
    draw() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][row].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                    board.drawCell(col + this.colPos, row + this.rowPos, this.id)
                }
            }
        }
    }
    clear() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][row].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                    board.drawCell(col + this.colPos, row + this.rowPos, WHITE_COLOR_ID)
                }
            }
        }
    }

    moveLeft() {
        if (!this.checkCollision(this.rowPos, this.colPos - 1)) {
            this.clear();
            this.colPos--;
            this.draw();
        }
    }
    moveRight() {
        if (!this.checkCollision(this.rowPos, this.colPos - 1)) {
            this.clear();
            this.colPos++;
            this.draw();
        }
    }
    moveDown() {
        if (!this.checkCollision(this.rowPos, this.colPos - 1)) {
            this.clear();
            this.rowPos++;
            this.draw();
        }
    }
    rotate() {
        this.clear();
        this.activeIndex = (this.activeIndex + 1) % 4;
        /** 
         * ActiveIndex = 0
         * 0 + 1 = 1 % 4 ==> 1 
         * 
         * ActiveIndex = 3
         *  3 + 1 = 4 % 4 ==> 0
         * Quay ve brick ban dau
         */
        this.draw();
    }
    checkCollision(nextRow, nextCol) { //Ham kiem tra va cham 
        // if (nextCol < 0) {
        //     return true;
        // }
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][row].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                    if (col + nextCol < 0 || col + nextCol >= COLS || row + nextRow >= ROWS) return true;
                }
            }
        }

        return false;

    }

}


let board = new Board(ctx);
board.drawBoard();
let brick = new Brick(0);
brick.draw();
brick.moveLeft();
brick.rotate();
document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case KEY_CODES.LEFT:
            brick.moveLeft();
            break;
        case KEY_CODES.RIGHT:
            brick.moveRight();
            break;
        case KEY_CODES.UP:
            brick.rotate();
            break;
        case KEY_CODES.DOWN:
            brick.moveDown();
        default:
            break;
    }
});

// brick.moveRight();
// brick.moveDown();

// board.drawCell(1, 1, 4);
// console.log(board.grid);