import React, { Component } from 'react'
import { Text, View } from 'react-native'
import commonStyles from '../../utils/commonStyles';
import HeaderCustom from '../../components/HeaderCustom';
import {Container} from 'native-base';
import styles from './styles';
import CardCustom from '../../components/CardCustom';
import {IC_INFO_STUDENT, IC_STUDY_RESULT, IC_STUDY_GUIDE, IC_ABSENSE, IC_TEACHER, IC_FEE} from '../../utils/icons';
const icons = [
  {
    key: 0,
    icon: IC_INFO_STUDENT,
    title: "Thông tin học sinh"
  },
  {
    key: 1,
    icon: IC_STUDY_RESULT,
    title: "Kết quả Học tập"
  },
  {
    key: 0,
    icon: IC_STUDY_GUIDE,
    title: "Lộ trình học tập"
  },
  {
    key: 0,
    icon: IC_ABSENSE,
    title: "Xin nghỉ học"
  },
  {
    key: 1,
    icon: IC_TEACHER,
    title: "Thông tin giáo viên"
  },
  {
    key: 0,
    icon: IC_FEE,
    title: "Học phí"
  }
]
const icons2 = [
  {
    key: 0,
    icon: IC_INFO_STUDENT,
    title: "Thông tin học sinh"
  },
  {
    key: 1,
    icon: IC_STUDY_RESULT,
    title: "Kết quả Học tập"
  },
  {
    key: 0,
    icon: IC_STUDY_GUIDE,
    title: "Lộ trình học tập"
  }
]
export default class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderCustom/>
        <CardCustom icons={icons}/>
        <CardCustom icons={icons2}/>
      </Container>
    )
  }
}