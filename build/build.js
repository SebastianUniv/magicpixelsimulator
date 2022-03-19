var numberOfShapesControl;
function setup() {
    var size = min(windowWidth, windowHeight);
    createCanvas(size, size);
    colorMode(RGB, 1);
    noStroke();
}
var radius = Math.sqrt(0.5);
var PHI = (1 + Math.sqrt(5)) / 2;
var dotSize = 0.05;
function draw() {
    scale(width, height);
    background(0);
    fill(1);
    var count = 500;
    for (var i = 0; i < count; i++) {
        var f = i / count;
        var a = i / PHI;
        var dist_1 = f * radius;
        var x = 0.5 + cos(a * TWO_PI) * dist_1;
        var y = 0.5 + sin(a * TWO_PI) * dist_1;
        var r = f * dotSize;
        circle(x, y, r);
    }
}
//# sourceMappingURL=build.js.map