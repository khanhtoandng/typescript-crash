import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  userName: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.userName = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = 'red';
  }

  markerContent(): string {
    return `UserName: ${this.userName}`;
  }
}
