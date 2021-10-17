"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = __importDefault(require("faker"));
class Company {
    constructor() {
        this.companyName = faker_1.default.company.companyName();
        this.catchPhrase = faker_1.default.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lng: parseFloat(faker_1.default.address.longitude()),
        };
        this.color = 'blue';
    }
    markerContent() {
        return `
        <div>
            <h1>CompanyName: ${this.companyName}</h1> 
            <h3>CatchPhrase: ${this.catchPhrase}</h3>
        </div>
    `;
    }
}
exports.Company = Company;
