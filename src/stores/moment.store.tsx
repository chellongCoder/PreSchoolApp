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

    constructor(id, content, images, likes, teacher, createdAt, updatedAt, status_accept) {
      this.id = id;
      this.content = content;
      this.image = images;
      this.likes = likes;
      this.teacher = teacher;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.status_accept = status_accept
    }

    @action uplike = () => {
      this.likes++;
    }
}

export class MommentStore {
  @observable moments: Moment[] = []

  @action getMoments = async () => {
    let moments: Moment[] = [];
    const [err, res] = await APIBase.getInstance().get(api_getMoment());
    console.log("res", res);
    for (let index = res.length-1; index >= 0; index--){
      const element = res[index];
      const moment: Moment = new Moment(element.id, element.content, element.image ,element.likes, element.teacher, element.createdAt, element.updatedAt, element.status_accept);
      moments.push(moment); 
    }
    this.moments = moments;
    return [err, res];
  }

  @action addMomment = async (data: any, user: any) => {
    const moment: Moment = new Moment(Math.floor(Math.random() * 1000) + 1, data.content, data.images, 0, user, new Date(), new Date(), 1);
    let moments: Moment[] = this.moments;
    console.log("moment", moment);
    moments.unshift(moment);
    this.moments = moments;
    
    const [err, res] = await APIBase.getInstance().post(api_getMoment(), data);
    return [err, res];
  }
}