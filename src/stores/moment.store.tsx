import { observable, action } from 'mobx';
import APIBase from '../services/api/base';
import {api_getMoment} from '../services/api';
import {ITeacher} from './user.store';

export interface IImage {
  id: number;
  path: string;
}

export class Moment {
    @observable id:number = 0;
    @observable content:string = "";
    @observable image!: IImage[];
    @observable likes: number = 0;
    @observable teacher!: ITeacher;
    @observable createdAt!: Date;
    @observable updatedAt!: Date;
    @observable status_accept: number = 1
}

export class MommentStore {
  @observable moments: Moment[] = []

  @action getMoments = async () => {
    const [err, res] = await APIBase.getInstance().get(api_getMoment());
    this.moments = res;
    return [err, res];
  }
}