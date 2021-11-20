interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    heigth: number;
  };
}

const rect1: Rect = {
  id: "dad21",
  size: {
    width: 234,
    heigth: 123,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "asdwq123",
  size: {
    heigth: 454,
    width: 123,
  },
};
rect2.color = "#666";
// rect2.color1 = "#6sd66"

console.log(rect1, rect2);

const rect3 = {
  id: "21",
  size: {
    heigth: 21,
    width: 32,
  },
  color: "red",
} as Rect;

rect3.size.heigth = 666;

const rect4 = <Rect>{};

console.log(rect3, rect4);
console.log(rect3 === rect4);

// Наследование
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    heigth: 100,
    width: 120,
  },

  color: "green",

  getArea(): number {
    return this.size.width * this.size.heigth;
  },
};

console.log(rect5.getArea());

//=========implements
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

console.log("this2");

//============================
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "20px",
  borderRadius: "5px",
};

console.log(css);
