class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect1 = new Rectangle(5, 6);
console.log("Rect1 =", rect1);
console.log("Rect1 area =", rect1.calcArea());

let rect2 = new Rectangle(6, 4);
console.log("Rect2 =", rect2);
console.log("Rect2 area =", rect2.calcArea());

let rect3 = new Rectangle(6, 4);
console.log("Rect3 =", rect3);
console.log("Rect3 area =", rect3.calcArea());