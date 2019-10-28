import { observable, action } from 'mobx';
import faker from 'faker';

export interface IStudent {
    id: number;
    last_name: string,
    first_name: string,
    gender: number,
    birthday: Date,
    address: string,
    parent_id: number,
    weight: string,
    height: string,
    avatar: string,
    school_id: number,
    class_id: number
}

export class StudentStore {
  @observable students: IStudent[] = [
    {
        id: 1,
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        gender: Math.round(Math.random()),
        birthday: faker.date.past(),
        address: faker.address.country(),
        parent_id: 1,
        weight: (Math.random() * 100 + 1).toFixed(2),
        height: (Math.random() * 200 + 1).toFixed(2),
        avatar: faker.image.imageUrl(),
        school_id: 1,
        class_id: 1
    },
    {
        id: 2,
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        gender: Math.round(Math.random()),
        birthday: faker.date.past(),
        address: faker.address.country(),
        parent_id: 1,
        weight: (Math.random() * 100 + 1).toFixed(2),
        height: (Math.random() * 200 + 1).toFixed(2),
        avatar: faker.image.imageUrl(),
        school_id: 1,
        class_id: 1
    },
    {
        id: 3,
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        gender: Math.round(Math.random()),
        birthday: faker.date.past(),
        address: faker.address.country(),
        parent_id: 1,
        weight: (Math.random() * 100 + 1).toFixed(2),
        height: (Math.random() * 200 + 1).toFixed(2),
        avatar: faker.image.imageUrl(),
        school_id: 1,
        class_id: 1
    }
  ]
}