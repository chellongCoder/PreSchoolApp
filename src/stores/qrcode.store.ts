import { observable, action } from 'mobx';
import APIBase from '../services/api/base';
import {api_getStudentBYQRCodeCheckin} from '../services/api';
import NavigationServices from '../navigators/NavigationServices';

export class QRCodeStore {
  @observable currentDate: Date = new Date(); 

  @action navigate = () => {
    NavigationServices.navigate("Checkin", null);
  }

  @action getStudentBYQRCodeCheckin = async (date: Date) => {
    console.log("date", date, api_getStudentBYQRCodeCheckin(date));
    let [err, res] = await APIBase.getInstance().get(api_getStudentBYQRCodeCheckin(date));
    console.log("[err, res]", [err, res]);
    return [err, res];
  }

}