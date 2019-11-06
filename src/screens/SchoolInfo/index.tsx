import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {IC_SCHOOL, IC_YEAR, IC_PHONE, IC_MAIL, IC_DOMAIN, IC_DESCRIPTION, IC_ADDRESS, IC_SHARE} from '../../utils/icons';
import styles from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import commonStyles from '../../utils/commonStyles';
import {inject, observer} from 'mobx-react';
import {UserStore, ISchool} from '../../stores/user.store';
import SchoolStore from '../../stores/school.store';
import {toJS, observable, action} from 'mobx';

interface IProps {
    userStore: UserStore,
    schoolStore: SchoolStore
}
@inject('userStore', 'schoolStore')
@observer
export default class SchoolInfo extends Component<IProps> {

    async componentDidMount() {
        await this.props.schoolStore.getSchoolById(toJS(this.props.userStore.user).id);
    }
    render() {
        const header = [
            {school_name: "school_name", icon: IC_SCHOOL},
            {school_year: "school_year", icon: IC_YEAR},
            {phone: "phone", icon: IC_PHONE},
            {email: "email", icon: IC_MAIL},
            {website: "website", icon: IC_DOMAIN},
            {description: "description", icon: IC_DESCRIPTION},
            {address: "address", icon: IC_ADDRESS},    
        ];
        return (
            <View style={styles.container}>
                <HeaderCommon
                    iconRight={IC_SHARE}
                    title="STUDENT DETAIL"
                />
                <View style={styles.card}>
                    {
                        header.map((value, index) => {
                            return (
                                <View style={styles.content} key={index}>
                                    <View style={{flex: 2/10}}>
                                        {/* <Text>{Object.keys(value)[0]}</Text> */}
                                        <Image source={value[Object.keys(value)[1]]}/>
                                    </View>
                                    <View style={{flex: 8/10}}>
                                        <Text style={commonStyles.lightText}>{`${this.props.schoolStore.currentSchool && this.props.schoolStore.currentSchool[Object.keys(value)[0]]}`}</Text>
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
