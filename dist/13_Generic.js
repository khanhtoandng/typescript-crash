"use strict";
// Generics
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
new ArrayOfAnything(["a", "b", "c", "d", "e", "f"]);
// Generics With Function
function printAnything(arr) {
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
function printHouseOrCar(arr) {
    arr.forEach((el) => el.print());
}
printHouseOrCar([new House(), new House(), new SuperCar()]);
