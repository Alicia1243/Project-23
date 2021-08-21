class computerPlayer{

    constructor(x, y, w, h){
    this.x = x,
    this.y = y,
    this.w = w,
    this.h = h

    computerPlayer.loadImage("player.png");

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
     
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
     
        pop();
    }
}