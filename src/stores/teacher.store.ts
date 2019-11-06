import {ISchool, ITeacher} from './user.store';
import APIBase from '../services/api/base';
import {api_getClassByTeacher, api_getSchoolById, api_getTeacherByID} from '../services/api';
import NavigationServices from '../navigators/NavigationServices';
import {action, observable} from 'mobx';

export default class TeacherStore {
    @observable currentTeacher!: ITeacher;

    onNavigate = () => {
        NavigationServices.navigate("TeacherInfo", null);
    }

    @action changeTeacher = (teacher: ITeacher) => {
        this.currentTeacher = teacher;
    }

    @action getTeacherByID = async (id: number) => {
        let [err, res] = await APIBase.getInstance().get(api_getTeacherByID(id));
        return [err, res];
    }
}