// Interface
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2011,
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinks = {
  color: "white",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}`;
  },
};

const printSummary = (item: Reportable) => {
  item.summary();
};

printSummary(oldCivic);
