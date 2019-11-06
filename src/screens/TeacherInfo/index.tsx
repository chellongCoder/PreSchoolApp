import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import {IC_ADDRESS, IC_PHONE, IC_MAIL, IC_SHARE} from '../../utils/icons';
import styles from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import commonStyles from '../../utils/commonStyles';
import {Thumbnail} from 'native-base';
import {moderateScale} from '../../utils/scale';
import {inject, observer} from 'mobx-react';
import {UserStore, ROLE, ITeacher} from '../../stores/user.store';
import {toJS} from 'mobx';
import TeacherStore from '../../stores/teacher.store';
import {StudentStore} from '../../stores/student.store';
import NavigationServices from '../../navigators/NavigationServices';

interface IProps {
    userStore: UserStore,
    teacherStore: TeacherStore;
    studentStore: StudentStore
}
@inject('userStore', 'teacherStore', 'studentStore')
@observer
export default class TeacherInfo extends Component<IProps> {

    async componentDidMount() {
        console.log("user", toJS(this.props.userStore.user));
        const user = toJS(this.props.userStore.user);
        if(user.role === ROLE.TEACHER) {
            const teacher: ITeacher = {
                address: user.address,
                avatar: user.avatar,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                phone: user.phone,
                schoolID: user.schoolID,
                userID: user.id
            }
            this.props.teacherStore.changeTeacher(teacher);
        } else {
            console.log("user", toJS(this.props.userStore.user));
            const user = toJS(this.props.userStore.user);
            let [err, res] = await this.props.studentStore.getStudentByParent(user.id);
            if(err) {
                Alert.alert("error");
                NavigationServices.goBack();
                return;
            }
            console.log("res", res);
            let homeroomTeacherID = res[0].class[0].homeroom_teacher;
            const teacher = await this.getTeacher(homeroomTeacherID);
            console.log("teacher", teacher)
            this.props.teacherStore.changeTeacher(teacher);
        }
    }

    getTeacher = async (id: number) => {
        let [err, res] = await this.props.teacherStore.getTeacherByID(id);
        console.log("res", res);
        return res;
    }
    render() {
        console.log("user", this.props.userStore.user);
        const header = [
            {phone: "phone", icon: IC_PHONE},
            {email: "email", icon: IC_MAIL},
            {address: "address", icon: IC_ADDRESS}   
        ];
        return (
            <View style={styles.container}>
                <HeaderCommon
                    iconRight={IC_SHARE}
                    title="TEACHER DETAIL"
                />
                <View style={styles.card}>
                    {/* <View style={styles.avatar}>
                        <Thumbnail large source={{uri: student.avatar}}/>
                        <Text style={[commonStyles.textTitle, {marginLeft: moderateScale(10)}]}>{`${student.first_name} ${student.last_name}`}</Text>
                    </View> */}
                    {
                        header.map((value, index) => {
                            return (
                                <View style={styles.content} key={index}>
                                    <View style={{flex: 2/10}}>
                                        {/* <Text>{Object.keys(value)[0]}</Text> */}
                                        <Image source={value[Object.keys(value)[1]]}/>
                                    </View>
                                    <View style={{flex: 8/10}}>
                                        <Text style={commonStyles.lightText}>{`${this.props.teacherStore.currentTeacher && this.props.teacherStore.currentTeacher[Object.keys(value)[0]]}`}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
