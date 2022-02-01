var a = 6;
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
})(color || (color = {}));
var c = color.blue;

var temp = "check commit";