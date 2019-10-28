import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles';
import {IC_SHARE} from '../../utils/icons';
import HeaderCommon from '../../components/HeaderCommon';
import faker from 'faker';
import commonStyles from '../../utils/commonStyles';
import {Thumbnail} from 'native-base';
import {moderateScale} from '../../utils/scale';

const student = {
    id: 1,
    last_name: faker.name.lastName(),
    first_name: faker.name.firstName(),
    gender: Math.round(Math.random()),
    birthday: faker.date.past(),
    address: faker.address.country(),
    parent_id: 1,
    weight: (Math.random() * 100 + 1).toFixed(2),
    height: (Math.random() * 200 + 1).toFixed(2),
    avatar: faker.image.imageUrl(),
    school_id: 1,
    class_id: 1
}
export default class StudentDetail extends Component {
    render() {
        const header = [
            {avatar: ""},
            {name: "Name"},
            {birthday: "Birthday"},
            {weight: "Weight"},
            {height: "Height"},
        ]
        return (
            <View style={styles.container}>
                <HeaderCommon
                    iconRight={IC_SHARE}
                    title="MY STUDENT"
                />
                <View style={styles.card}>
                    <View style={styles.avatar}>
                        <Thumbnail large source={{uri: student.avatar}}/>
                        <Text style={[commonStyles.textTitle, {marginLeft: moderateScale(10)}]}>{`${student.first_name} ${student.last_name}`}</Text>
                    </View>
                    {
                        header.map((value, index) => {
                            return (
                                <View style={styles.content} key={index}>
                                    <Text>{Object.keys(value)[0]}</Text>
                                    <Text>  asdasd</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
