// Normal shape
const drink = {
  color: "white",
  carbonated: true,
  sugar: 40,
};

// Tuple
const pepsi: [string, boolean, number] = ["white", true, 50];
// pepsi[0] = false; //error

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Toan"],
  [2, "Huynh"],
];

// Using Type Alias
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
