class Game {
    image;
    top;
    left;
    size;

    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight() {
        let speed = 100;
        this.left += speed;
        // console.log('ok: ' + this.left);
    }

    moveLeft() {
        let speed = 100;
        this.left -= speed;
    }

    moveTop() {
        let speed = 100;
        this.top -= speed;
    }

    moveBottom() {
        let speed = 100;
        this.top += speed;
    }
}

let hero = new Game('pikachu.png', 0, 0, 200);
console.log(window.innerWidth);
console.log(window.innerHeight);
function start() {
    if (hero.left <= window.innerWidth -hero.size && hero.top === 0) {
        hero.moveRight();
    }
    if (hero.left >= -hero.size && hero.top > window.innerHeight - hero.size) {
        hero.moveLeft()
    }
    if (hero.top < window.innerHeight- hero.size  && hero.left >= window.innerWidth - hero.size) {
        hero.moveBottom();
    }
    if (hero.top > 0 && hero.left < 0) {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();
