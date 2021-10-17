"use strict";
const oldCivic = {
    name: "civic",
    year: 2011,
    broken: false,
    summary() {
        return `Name: ${this.name}`;
    },
};
const drinks = {
    color: "white",
    carbonated: true,
    sugar: 40,
    summary() {
        return `Color: ${this.color}`;
    },
};
const printSummary = (item) => {
    item.summary();
};
printSummary(oldCivic);
