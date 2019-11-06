import {ISchool} from './user.store';
import APIBase from '../services/api/base';
import {api_getClassByTeacher, api_getSchoolById} from '../services/api';
import NavigationServices from '../navigators/NavigationServices';
import {action, observable} from 'mobx';

export default class SchoolStore {
    @observable currentSchool!: ISchool;

    onNavigate = () => {
        NavigationServices.navigate("SchoolInfo", null);
    }

    @action getSchoolById = async (id: number) => {
        console.log("school id", id)
        const [err, res] = await APIBase.getInstance().get(api_getSchoolById(id));
        console.log("[err, res]", [err, res]);
        this.currentSchool = res;
        return [err, res];
    }
}