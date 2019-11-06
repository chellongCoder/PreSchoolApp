import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import commonStyles from '../../utils/commonStyles'
import styles from './styles';
import commonColor from '../../utils/commonColor';
import NavigationServices from '../../navigators/NavigationServices';
import * as Animatable from 'react-native-animatable';
import {inject, observer} from 'mobx-react';
import {StudentStore} from '../../stores/student.store';
import {UserStore, ROLE} from '../../stores/user.store';
import {toJS} from 'mobx';
import APIBase from '../../services/api/base';
import {api_getStudentByParent} from '../../services/api';

interface IProps {
    navigation: any;
    studentStore: StudentStore;
    userStore: UserStore;
}
@inject('studentStore', 'userStore')
@observer
export default class CheckinSuccess extends Component<IProps> {
    async componentDidMount() {
        console.log("param", this.props.navigation.state.params);
        if(this.props.userStore.user.role === ROLE.TEACHER) {
          let data = JSON.parse(this.props.navigation.state.params);
          let [err, res] = await this.props.studentStore.addToQRCodeCheckin(data);
          if(!err && res) {
              NavigationServices.resetStack("BottomTabbar")
          }
        } else { 
          let data = await this.getStudent();
          let [err, res] = await this.props.studentStore.addToQRCodeCheckin(data);
          if(!err && res) {
              NavigationServices.resetStack("BottomTabbar")
          }
        }
    }

    getStudent = async () => {
      let userID = toJS(this.props.userStore.user).id;
      console.log("toJS(this.props.userStore.user)", toJS(this.props.userStore.user))
      let [err, res] = await APIBase.getInstance().get(api_getStudentByParent(userID));
      console.log("res", res);
      let classID = res[0].class[0].id;
      let studentID = res[0].id;
      return {studentID, classID};
    }
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={styles.image}>
            <Image style={{width: "100%", height: "100%", resizeMode: "contain"}} source={require('./../../../assets/icon/checkin_success.png')}/>
        </View>
        <Animatable.View
            animation="flipInY"
            easing="ease"
            duration={1000}
        >
            <Text style={[commonStyles.textLargeButton, {color: commonColor.brandSuccess}]}>
                Check in successfully
            </Text>
        </Animatable.View>
      </View>
    )
  }
}