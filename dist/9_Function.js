"use strict";
// Function
const logNumber = (i) => {
    console.log(i);
};
// Annotation
// 1) arrow function
const add = (a, b) => {
    return a + b;
};
// 2) anonymous function
function devide(a, b) {
    return a / b;
}
// Inference
// 1) return number
const sub = (a, b) => {
    return a - b;
};
// 2) return void
const multi = (a, b) => {
    a * b;
};
// Destructuring
const todayWeather = {
    date: new Date(),
    weather: "sunny",
};
const logWeather = ({ date, weather, }) => {
    console.log(date);
    console.log(weather);
};
logWeather(todayWeather);
