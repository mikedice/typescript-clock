import {Constants} from "./Constants";

export class VertSegment{
    constructor(private x:number, private y:number){}

    draw(canvas:HTMLCanvasElement, on:boolean){
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = Constants.blankFill;
        ctx.fillRect(this.x, this.y, Constants.segWidth, Constants.legHeight+(Constants.capHeight*2));
        ctx.beginPath();
        
        var dx = this.x + Constants.segWidth/2;
        var dy = this.y;
        ctx.moveTo(dx, dy);

        dx = this.x;
        dy = this.y + Constants.capHeight;
        ctx.lineTo(dx, dy);

        dx = this.x;
        dy = dy + Constants.legHeight;
        ctx.lineTo(dx, dy)

        dx = this.x + Constants.segWidth/2;
        dy = dy + Constants.capHeight;
        ctx.lineTo(dx, dy);

        dx = this.x + Constants.segWidth;
        dy = dy-Constants.capHeight;
        ctx.lineTo(dx, dy);

        dx = this.x + Constants.segWidth;
        dy = dy - Constants.legHeight;
        ctx.lineTo(dx, dy);

        dx = this.x + Constants.segWidth/2;
        dy = this.y;
        ctx.lineTo(dx, dy);
        ctx.closePath();
        ctx.fillStyle = on ? Constants.onFill : Constants.offFill;
        ctx.fill();
    }
}