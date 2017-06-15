import {VertSegment} from "./verticalSegment";
import {HorzSegment} from "./horizontalSegment";
export class Digit{
    vert1:VertSegment;
    vert2:VertSegment;
    vert3:VertSegment;
    vert4:VertSegment;
    horz1:HorzSegment;
    horz2:HorzSegment;
    horz3:HorzSegment;

    constructor(x:number, y:number){
        this.vert1 = new VertSegment(x, y);
        this.vert2 = new VertSegment(x+30, y);
        this.vert3 = new VertSegment(x, y+40);
        this.vert4 = new VertSegment(x+30, y+40);

        this.horz1 = new HorzSegment(x+2, y-6);
        this.horz2 = new HorzSegment(x+2, y+32);
        this.horz3 = new HorzSegment(x+2, y+70);
    }
    draw(canvas:HTMLCanvasElement, digit:number){
        if (digit < 0 || digit > 11) return;
        // Draw the vertical and horizontal segments of the digit
        this.vert1.draw(canvas, Digit.coding[digit].vert[0]);
        this.vert2.draw(canvas, Digit.coding[digit].vert[1]);
        this.vert3.draw(canvas, Digit.coding[digit].vert[2]);
        this.vert4.draw(canvas, Digit.coding[digit].vert[3]);
        this.horz1.draw(canvas, Digit.coding[digit].horz[0]);
        this.horz2.draw(canvas, Digit.coding[digit].horz[1]);
        this.horz3.draw(canvas, Digit.coding[digit].horz[2]);
    }

       static coding = [{
            // 0
            vert: [true, true, true, true], 
            horz: [true, false, true]
        },
        {
            // 1
            vert: [false, true, false, true], 
            horz: [false, false, false]
        },
        {
            // 2
            vert: [false, true, true, false], 
            horz: [true, true, true]
        },
        {
            // 3
            vert: [false, true, false, true], 
            horz: [true, true, true]
        },
        {
            // 4
            vert: [true, true, false, true], 
            horz: [false, true, false]
        },
        {
            // 5
            vert: [true, false, false, true], 
            horz: [true, true, true]
        },
        {
            // 6
            vert: [true, false, true, true], 
            horz: [true, true, true]
        },
        {
            // 7
            vert: [false, true, false, true], 
            horz: [true, false, false]
        },
        {
            // 8
            vert: [true, true, true, true], 
            horz: [true, true, true]
        },
        {
            // 9
            vert: [true, true, false, true], 
            horz: [true, true, false]
        },
        {
            // A
            vert: [true, true, true, true], 
            horz: [true, true, false]
        },
        {
            // P
            vert: [true, true, true, false], 
            horz: [true, true, false]
        }];


}