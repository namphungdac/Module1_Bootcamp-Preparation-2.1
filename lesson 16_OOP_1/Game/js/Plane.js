class Plane {
    constructor(width,height) {
        this.canvas = document.getElementById('game')
        this.width = width;
        this.x = this.canvas.width/2 - this.width/2;
        this.y = 400;
        this.height = height;
        this.hp = 100;
        this.ctx = this.canvas.getContext("2d");
    }
    draw() {
        let img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
        img.src = "js/plane.png";
    }
    move(x) {
        this.ctx.clearRect(this.x)
        this.x = x;
        this.draw();
    }
}