import {action, observable} from 'mobx';
import APIBase  from '../services/api/base';
import {api_login} from '../services/api';
export const ROLE = {
    SCHOOL: 10,
    TEACHER: 11,
    PARENT: 12
}
export interface ISchool {
    school_name: string,
    school_year: number,
    email: string,
    phone: string,
    address: string,
    website: string,
    description: string,
    userID: number
}

export interface ITeacher {
    last_name: string,
    first_name: string,
    address: string,
    phone: string,
    email: string,
    avatar: string,
    userID: number,
    schoolID: number,
}
export interface IParent {
    last_name: string,
    first_name: string,
    phone: string,
    email: string,
    avatar: string,
    relationship: string,
    emergency_contact: string,
    userID: number,
}

export class UserStore {
    @observable username: string = '';
    @observable password: string = '';
    @observable errorLogin: string = '';
    @observable user: any = null;

    @action onChangeUsername = (username: string) => {
        this.username = username;
    }
    @action onChangePassword = (password: string) => {
        this.password = password;
    }
    @action login = async () => {
        const username = this.username;
        const password = this.password;
        let [err, res] = await APIBase.getInstance().post(api_login(), { username, password, token_push: ""});
        if(res.role === ROLE.SCHOOL) {
            this.errorLogin = "Tài khoản không chính xác";
            return [this.errorLogin, null];
        }
        this.errorLogin = err;
        if(!err && res) {
            this.user = res;
            await APIBase.getInstance().setAPIKey(res.accesskey);
        }
        return [err, res];
    }
    @action setUser = (user: any) => {
        this.user = user;
    }

    @action logout = async () => {
        this.user = null;
        this.username = '';
        this.password = '';
        this.errorLogin = '';
        await APIBase.getInstance().resetAPIKey()
    }
}