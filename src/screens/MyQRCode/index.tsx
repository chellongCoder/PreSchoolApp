import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import QRCode from 'react-native-qrcode';
import {observable, action, toJS} from 'mobx';
import {observer, inject} from 'mobx-react';
import ClassStore from '../../stores/class.store';
import {LoadingStore} from '../../stores/loading.store';
import APIBase from '../../services/api/base';
import {api_getClassByTeacher, api_getStudentByParent} from '../../services/api';
import {UserStore, ROLE} from '../../stores/user.store';
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
interface IProps {
    classStore: ClassStore,
    loadingStore: LoadingStore,
    userStore: UserStore
}
@inject('classStore', 'loadingStore', 'userStore')
@observer
export default class MyQRCode extends Component<IProps> {
    @observable text: string = 'http://facebook.github.io/react-native/';
    @observable value: any;
    @action changeValue = (value: any) => {
        this.value = value;
    }
    async componentDidMount() {
        
        if(this.props.userStore.user.role === ROLE.TEACHER) {
            this.props.loadingStore.actToggleLoading(true);
            let [err, res] = await APIBase.getInstance().get(api_getClassByTeacher(this.props.userStore.user.id));
            this.props.loadingStore.actToggleLoading(false);
            console.log("[err, res]", [err, res]);
            this.changeValue(res[0]);
        } else {
            let userID = toJS(this.props.userStore.user).id;
            let [err, res] = await APIBase.getInstance().get(api_getStudentByParent(userID));
            console.log("result", [err, res])
            let classID = res[0].class[0].id;
            let studentID = res[0].id;
            this.changeValue({studentID, classID});
        }
        
        
    }
    render() {
        const _class = this.value ? toJS(this.value) : null;
        console.log(_class)
        // {
        //     "id": 1,
        //     class_name: "Q",
        //     grade: 10,
        //     homeroom_teacher: 1,
        //     number_student: 44,
        //     school: {
        //         address: "Apt. 863",
        //         createdAt: "2019-10-28T14:26:59.000Z",
        //         description: "Quasi veniam quidem qui impedit consequatur.",
        //         email: "Edythe_Mertz21@yahoo.com",
        //         id: 1,
        //         phone: "1-694-025-8898 x2233",
        //         school_name: "Abernathy, Rippin and Leffler",
        //         school_year: 2015,
        //         updatedAt: "2019-10-28T14:26:59.000Z",
        //         userID: 1,
        //         website: "mary.name",
        //     },
        //     createdAt: "2019-10-28T14:26:59.000Z",
        //     updatedAt: "2019-10-28T14:26:59.000Z"
        // }
        
        this.value && delete _class.school;
        return (
            <View style={styles.container}>
                <Text style={commonStyles.textHeader}>CLASS QR CODE</Text>
                <QRCode
                value={this.value ? JSON.stringify(toJS(_class)) : ""}
                size={200}
                bgColor={commonColor.textButton}
                fgColor='white'/>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});
