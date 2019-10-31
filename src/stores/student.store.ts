import { observable, action } from 'mobx';
import faker from 'faker';
import {IParent, ISchool} from './user.store';
import {IClass} from './class.store';
import APIBase from '../services/api/base';
import {api_getStudentByParent} from '../services/api';
import NavigationServices from '../navigators/NavigationServices';

export interface IStudent {
    id: number;
    last_name: string,
    first_name: string,
    gender: number,
    birthday: Date,
    address: string,
    weight: string,
    height: string,
    avatar: string,
    parent: IParent,
    school: ISchool,
    class: IClass
}

export class StudentStore {
  @observable students: IStudent[] = [
    // {
    //     id: 1,
    //     last_name: faker.name.lastName(),
    //     first_name: faker.name.firstName(),
    //     gender: Math.round(Math.random()),
    //     birthday: faker.date.past(),
    //     address: faker.address.country(),
    //     parent_id: 1,
    //     weight: (Math.random() * 100 + 1).toFixed(2),
    //     height: (Math.random() * 200 + 1).toFixed(2),
    //     avatar: faker.image.imageUrl(),
    //     school_id: 1,
    //     class_id: 1
    // },
    // {
    //     id: 2,
    //     last_name: faker.name.lastName(),
    //     first_name: faker.name.firstName(),
    //     gender: Math.round(Math.random()),
    //     birthday: faker.date.past(),
    //     address: faker.address.country(),
    //     parent_id: 1,
    //     weight: (Math.random() * 100 + 1).toFixed(2),
    //     height: (Math.random() * 200 + 1).toFixed(2),
    //     avatar: faker.image.imageUrl(),
    //     school_id: 1,
    //     class_id: 1
    // },
    // {
    //     id: 3,
    //     last_name: faker.name.lastName(),
    //     first_name: faker.name.firstName(),
    //     gender: Math.round(Math.random()),
    //     birthday: faker.date.past(),
    //     address: faker.address.country(),
    //     parent_id: 1,
    //     weight: (Math.random() * 100 + 1).toFixed(2),
    //     height: (Math.random() * 200 + 1).toFixed(2),
    //     avatar: faker.image.imageUrl(),
    //     school_id: 1,
    //     class_id: 1
    // }
  ];
  currentStudent!: IStudent;

  @action setStudent = (students: IStudent[]) => {
    this.students = students;
  }

  @action changeCurrentStudent = (student: IStudent) => {
    this.currentStudent = student;
  }

  @action getStudentByParent = async (idParent) => {
    let [err, res] = await APIBase.getInstance().get(api_getStudentByParent(idParent));
    console.log("result", [err, res])
    if(!err && res) {
        this.currentStudent = res[0];
        NavigationServices.navigate("StudentDetail", null);
    }
  }
}