var rect1 = {
    id: "dad21",
    size: {
        width: 234,
        heigth: 123
    },
    color: "#ccc"
};
var rect2 = {
    id: "asdwq123",
    size: {
        heigth: 454,
        width: 123
    }
};
rect2.color = "#666";
// rect2.color1 = "#6sd66"
console.log(rect1, rect2);
var rect3 = {
    id: "21",
    size: {
        heigth: 21,
        width: 32
    },
    color: "red"
};
rect3.size.heigth = 666;
var rect4 = {};
console.log(rect3, rect4);
console.log(rect3 === rect4);
var rect5 = {
    id: "123",
    size: {
        heigth: 100,
        width: 120
    },
    color: "green",
    getArea: function () {
        return this.size.width * this.size.heigth;
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
console.log("this2");
var css = {
    border: "1px solid black",
    marginTop: "20px",
    borderRadius: "5px"
};
console.log(css);
