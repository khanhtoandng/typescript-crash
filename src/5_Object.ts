// Object
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Using
const { age }: { age: number } = profile;
const { coords }: { coords: { lat: number; lng: number } } = profile;
