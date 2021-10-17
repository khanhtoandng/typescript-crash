"use strict";
// Object
const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age) {
        this.age = age;
    },
};
// Using
const { age } = profile;
const { coords } = profile;
