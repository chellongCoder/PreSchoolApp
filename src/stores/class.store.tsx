import {ISchool} from './user.store';
import APIBase from '../services/api/base';
import {api_getClassByTeacher} from '../services/api';
import NavigationServices from '../navigators/NavigationServices';

export interface IClass {
    id: number,
    class_name: string,
    grade: number,
    homeroom_teacher: number,
    number_student: number,
    school: ISchool
}

export default class ClassStore {
    currentClass!: IClass;

    getClassByTeacher = async (idTeacher: number) => {
        let [err, res] = await APIBase.getInstance().get(api_getClassByTeacher(idTeacher));
        console.log("result", [err, res])
        if(!err && res) {
            this.currentClass = res[0];
            NavigationServices.navigate("StudentInfo", null);
        }
    }
}