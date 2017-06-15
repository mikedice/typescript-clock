import {Digit} from "./digit"
import {Constants} from "./Constants";
export class Clock{
    constructor(canvas:HTMLCanvasElement){
        var segWidth = 40;
        var margin = 15;
        var x = 10;
        var y = 10;
        var dx = x;
        var dy = y;

        var digit1 = new Digit(dx, dy);

        dx += segWidth;
        var digit2 = new Digit(dx, dy);

        dx += margin;
        dx += segWidth;
        var digit3 = new Digit(dx, dy);
        dx += segWidth;
        var digit4 = new Digit(dx, dy);

        dx += margin;
        dx += segWidth;
        var digit5 = new Digit(dx, dy);
        dx += segWidth;
        var digit6 = new Digit(dx, dy);

        dx += margin;
        dx += segWidth;
        var digit7 = new Digit(dx, dy);


        setInterval(() => {
            var date = new Date();
            var hour = date.getHours();
            var amPm = hour >= 12 ? Constants.PM : Constants.AM;
            hour = hour > 12 ? hour-12 : hour;

            digit1.draw(canvas, Math.floor(hour/10));
            digit2.draw(canvas, hour%10);

            var min = date.getMinutes();
            digit3.draw(canvas, Math.floor(min/10));
            digit4.draw(canvas, min%10);

            var secs = date.getSeconds();
            digit5.draw(canvas, Math.floor(secs/10));
            digit6.draw(canvas, secs%10);

            digit7.draw(canvas, amPm);

        }, 100);
    }
}

document.onreadystatechange = function(){
    if (document.readyState === "complete"){
        var clock = new Clock(document.getElementById('my-display') as HTMLCanvasElement);
    }
}