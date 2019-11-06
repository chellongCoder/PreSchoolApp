import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, FlatList, Image } from 'react-native'
import styles from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import {IC_SEARCH, IC_PREVIOUS, IC_NEXT, IC_CHECKIN_SUCCESS, IC_QR_CODE} from '../../utils/icons';
import {inject, observer} from 'mobx-react';
import {QRCodeStore} from '../../stores/qrcode.store';
import {observable, action} from 'mobx';
import {IStudent} from '../../stores/student.store';
import StudentItem from '../../components/StudentItem';
import commonStyles from '../../utils/commonStyles';
import {getNextDay, getPreviousDay} from '../../utils/common';
import NavigationServices from '../../navigators/NavigationServices';
interface IProps {
    qrCodeStore: QRCodeStore
}
@inject('qrCodeStore')
@observer
export default class Checkin extends Component<IProps> {
    @observable students: any[] = [];
    @observable today: Date = new Date();

    async componentDidMount() {
        await this.onToday();
    }

    @action onNextDay = async () => {
        let nextDay = getNextDay(this.today);
        console.log(nextDay);
        let [err, res] = await this.props.qrCodeStore.getStudentBYQRCodeCheckin(nextDay);
        this.today = nextDay;
        if(!err && res) {
            this.students = res;
        } else {
            Alert.alert("error");
        }
    }

    @action onToday = async () => {
        let [err, res] = await this.props.qrCodeStore.getStudentBYQRCodeCheckin(new Date());
        if(!err && res) {
            this.students = res;
        } else {
            Alert.alert("error");
        }
    }

    @action onPreviousDay = async () => {
        let previousDay = getPreviousDay(this.today);
        console.log(previousDay);
        let [err, res] = await this.props.qrCodeStore.getStudentBYQRCodeCheckin(previousDay);
        this.today = previousDay;
        if(!err && res) {
            this.students = res;
        } else {
            Alert.alert("error");
        }
    }

    renderItem = ({item, index}) => {
        return (
          <StudentItem 
            iconRight={IC_CHECKIN_SUCCESS}
            student={item} 
            key={index}/>
        )
    }
    onNavigateToScan = () => {
        NavigationServices.navigate("ScanQR", null);
    }
  render() {
    return (
    <View style={styles.container}>
        <HeaderCommon
          onClickIconRight={this.onNavigateToScan}
          iconRight={IC_QR_CODE}
          title="Check in"
        />
        <View style={styles.dateContainer}>
            <TouchableOpacity 
            onPress={this.onPreviousDay}
            style={styles.buttonDate}>
                <Image style={commonStyles.imageMedium} source={IC_PREVIOUS}/>
                <Text>previous day</Text>
            </TouchableOpacity>
            <View style={styles.buttonDate}>
                <Text>{this.today.toLocaleDateString('en-GB') }</Text>
            </View>
            <TouchableOpacity 
            onPress={this.onNextDay}
            style={styles.buttonDate}>
                
                <Text>next day</Text>
                <Image style={commonStyles.imageMedium} source={IC_NEXT}/>
            </TouchableOpacity>
        </View>

        <FlatList
            keyExtractor={(item: IStudent) => `${item.id}`}
            data={this.students}
            renderItem={this.renderItem}
        />
    </View>
    )
  }
}