let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let snake = [
    {x: 10, y: 10}
];
// initial direction
let dx = 10;
let dy = 0;
//food random
let food = {x: (Math.floor(Math.random() * 28) + 1) * 10, y: (Math.floor(Math.random() * 28) + 1) * 10};
//score
let score = 0;
let pause = true;
function game() {
    if (!pause) {
        return;
    }
    document.getElementById("text").innerHTML = "score: " + score;
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw snake
    ctx.fillStyle = '#00FF00';
    snake.forEach(function (value) {
        ctx.fillRect(value.x, value.y, 10, 10)
    })
    //change direction
    document.addEventListener('keydown', function (event) {
        if (event.key === "ArrowLeft" && dx !== 10) {
            dx = -10;
            dy = 0;
        }
        if (event.key === "ArrowUp" && dy !== 10) {
            dx = 0;
            dy = -10;
        }
        if (event.key === "ArrowRight" && dx !== -10) {
            dx = 10;
            dy = 0;
        }
        if (event.key === "ArrowDown" && dy !== -10) {
            dx = 0;
            dy = 10;
        }
        if (event.key === " ") {
            pause = !pause;
        }
    });
    //move snake
    let index_next = {x: snake[0].x + dx, y: snake[0].y + dy};
    //snake hit wall
    if (index_next.x > canvas.width) {
        index_next.x = dx;
    }
    if (index_next.x < 0) {
        index_next.x = canvas.width;
    }
    if (index_next.y > canvas.height) {
        index_next.y = dy;
    }
    if (index_next.y < 0) {
        index_next.y = canvas.height;
    }
    snake.unshift(index_next);
    //draw food
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(food.x, food.y, 10, 10);
    //snake eat food
    if (index_next.x === food.x && index_next.y === food.y) {
        food = {x: (Math.floor(Math.random() * 28) + 1) * 10, y: (Math.floor(Math.random() * 28) + 1) * 10};
        score++;
    } else {
        snake.pop();
    }
    //gameover
    if (snake.slice(1).some(function (element) {
        return element.x === index_next.x && element.y === index_next.y;
    })) {
        clearInterval(interval);
        ctx.font = "20px Georgia"
        ctx.fillStyle = 'red';
        ctx.fillText('Game over', 100, 50);
    }
}
let interval = setInterval(game, 60);
function play() {
    location.reload()
}

