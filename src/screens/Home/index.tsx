import React, { Component } from 'react'
import { Text, View, Linking } from 'react-native'
import commonStyles from '../../utils/commonStyles';
import HeaderCustom from '../../components/HeaderCustom';
import {Container} from 'native-base';
import styles from './styles';
import CardCustom from '../../components/CardCustom';
import {IC_INFO_STUDENT, IC_STUDY_RESULT, IC_STUDY_GUIDE, IC_ABSENSE, IC_TEACHER, IC_FEE, IC_SCHOOL_INFO, IC_MEAL, IC_TKB, IC_SCAN, IC_QR_CODE} from '../../utils/icons';
import {inject, observer} from 'mobx-react';
import ClassStore from '../../stores/class.store';
import {UserStore, ROLE} from '../../stores/user.store';
import {StudentStore} from '../../stores/student.store';
import NavigationServices from '../../navigators/NavigationServices';
import {QRCodeStore} from '../../stores/qrcode.store';
import SchoolStore from '../../stores/school.store';
import TeacherStore from '../../stores/teacher.store';

interface IProps {
  classStore: ClassStore;
  userStore: UserStore;
  studentStore: StudentStore;
  qrCodeStore: QRCodeStore;
  schoolStore: SchoolStore;
  teacherStore: TeacherStore;
}
@inject('classStore', 'schoolStore', 'userStore', 'studentStore', 'qrCodeStore', 'teacherStore')
@observer
export default class Home extends Component<IProps> {
  icons = [
    {
      key: 0,
      icon: IC_INFO_STUDENT,
      title: "Thông tin học sinh",
      action: async () => {
        if(this.props.userStore.user.role === ROLE.TEACHER) {
          await this.props.classStore.getClassByTeacher(this.props.userStore.user.id);
        } else {
          let [err, res] = await this.props.studentStore.getStudentByParent(this.props.userStore.user.id);
          if(!err && res) {
            this.props.studentStore.changeCurrentStudent(res[0]);
            NavigationServices.navigate("StudentDetail", null);
        }
        }
      }
    },
    {
      key: 1,
      icon: IC_STUDY_RESULT,
      title: "Kết quả Học tập"
    },
    {
      key: 0,
      icon: IC_STUDY_GUIDE,
      title: "Điểm danh",
      action: () => {
        this.props.qrCodeStore.navigate();
      }
    },
    // {
    //   key: 0,
    //   icon: IC_ABSENSE,
    //   title: "Xin nghỉ học",
    //   routeRole11: "StudentInfo",
    //   routeRole12: "StudentDetail",
    // },
    {
      key: 1,
      icon: IC_TEACHER,
      title: "Thông tin giáo viên",
      action: () => {
        this.props.teacherStore.onNavigate()
      }
    },
    // {
    //   key: 0,
    //   icon: IC_FEE,
    //   title: "Học phí"
    // }
  ]
  icons2 = [
    {
      key: 0,
      icon: IC_SCHOOL_INFO,
      title: "Thông tin trường học",
      action: () => {
        this.props.schoolStore.onNavigate()
      }
    },
    {
      key: 1,
      icon: IC_MEAL,
      title: "Thực đơn"
    },
    {
      key: 0,
      icon: IC_TKB,
      title: "Thời khoá biểu",
      action: () => {
        Linking.openURL("https://ks.nopain.codes/").catch((err) => console.error('An error occurred', err));
      }
    },
    {
      key: 0,
      icon: IC_SCAN,
      title: "Quét mã",
      action: () => {
        NavigationServices.navigate("ScanQR", null);
      }
    },
    {
      key: 1,
      icon: IC_QR_CODE,
      title: "Mã của tôi",
      action: () => {
        NavigationServices.navigate("MyQRCode", null);
      }
    }
  ]
  render() {
    return (
      <Container style={styles.container}>
        <HeaderCustom/>
        <CardCustom icons={this.icons}/>
        <CardCustom icons={this.icons2}/>
      </Container>
    )
  }
}