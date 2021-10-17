"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = __importDefault(require("faker"));
class User {
    constructor() {
        this.userName = faker_1.default.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lng: parseFloat(faker_1.default.address.longitude()),
        };
        this.color = 'red';
    }
    markerContent() {
        return `UserName: ${this.userName}`;
    }
}
exports.User = User;
