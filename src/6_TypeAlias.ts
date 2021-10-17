// Type Alias
type StringOrNumber = string | number;
type objWithName = { name: string; uid: StringOrNumber };

const logDetails = (uid: StringOrNumber, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
