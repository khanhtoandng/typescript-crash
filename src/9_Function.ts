// Function
const logNumber: (x: number) => void = (i) => {
  console.log(i);
};

// Annotation
// 1) arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// 2) anonymous function
function devide(a: number, b: number): number {
  return a / b;
}

// Inference
// 1) return number
const sub = (a: number, b: number) => {
  return a - b;
};

// 2) return void
const multi = (a: number, b: number): void => {
  a * b;
};

// Destructuring
const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todayWeather);
