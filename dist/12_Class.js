"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
//  Class
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log("beep");
    }
}
// Extends
class Car2 extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log("chugga chugga");
    }
    startDrivingProcss() {
        this.drive();
        this.honk();
        console.log(this.wheels);
    }
}
const newCar = new Car2(4, "red");
newCar.startDrivingProcss();
class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `You owe ${this.recipient} ${this.amount} dollar(s) for ${this.details}`;
    }
}
exports.Payment = Payment;
