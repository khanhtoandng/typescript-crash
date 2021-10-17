//  Class
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

// Extends
class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("chugga chugga");
  }

  startDrivingProcss(): void {
    this.drive();
    this.honk();
    console.log(this.wheels);
  }
}

const newCar = new Car2(4, "red");
newCar.startDrivingProcss();

// Implement
interface HasFormatter {
  format(): string;
}

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `You owe ${this.recipient} ${this.amount} dollar(s) for ${this.details}`;
  }
}
