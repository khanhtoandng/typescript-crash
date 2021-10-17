// Generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c", "d", "e", "f"]);

// Generics With Function
function printAnything<T>(arr: T[]): void {
  arr.forEach((el) => console.log(el));
}

printAnything(["a", "b", "c", "d", "e", "f"]);

// Generics With Interface

class House {
  print() {
    console.log("This is a house!");
  }
}

class SuperCar {
  print() {
    console.log("This is a car!");
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  arr.forEach((el) => el.print());
}

printHouseOrCar<House>([new House(), new House(), new SuperCar()]);
