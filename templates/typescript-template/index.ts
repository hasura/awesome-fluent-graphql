type Style = "bold" | "italic" | 23;
let font: Style;
font = "bold";

interface Person {
  first: string;
  last?: string;
  [key: string]: any;
}
const person: Person = {
  first: "meow",
  heyy: "yo"
};

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

const arr: number[] = [];
arr.push(3);
const arr2: Person[] = [];
arr2.push(person);

type MyList = [number?, string?, boolean?];
const arr3: MyList = [];
arr3.push(4);

// Generics, e.g. RxJS
class Observable<T> {
  constructor(public value: T) {}
}
let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);
