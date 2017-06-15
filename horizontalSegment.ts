import {Constants} from "./Constants";
export class HorzSegment{
    constructor(private x:number, private y:number){
        
    }
    draw(canvas:HTMLCanvasElement, on:boolean){
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = Constants.blankFill;
        ctx.fillRect(this.x, this.y, Constants.legLength + (Constants.capLength*2), Constants.segHeight);
        ctx.beginPath();

        var dx = this.x;
        var dy = this.y + Constants.segHeight/2;
        ctx.moveTo(dx, dy);

        dx =  this.x + Constants.capLength;
        dy = this.y;
        ctx.lineTo(dx, dy);
        
        dx = dx + Constants.legLength;
        dy = this.y;
        ctx.lineTo(dx, dy);

        dx = dx + Constants.capLength;
        dy = this.y + Constants.segHeight/2;
        ctx.lineTo(dx, dy);

        dx = dx - Constants.capLength;
        dy = this.y + Constants.segHeight;
        ctx.lineTo(dx, dy);

        dx = dx - Constants.legLength;
        dy = this.y + Constants.segHeight;
        ctx.lineTo(dx, dy);

        dx = this.x;
        dy = this.y + Constants.segHeight/2;
        ctx.lineTo(dx, dy);
        ctx.closePath();
        ctx.fillStyle = on ? Constants.onFill : Constants.offFill;
        ctx.fill();
    }    
}