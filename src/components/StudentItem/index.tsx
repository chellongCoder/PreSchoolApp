import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {moderateScale} from '../../utils/scale';
import commonStyles from '../../utils/commonStyles';
import {IC_NEXT} from '../../utils/icons';
import {IStudent} from '../../stores/student.store';
import NavigationServices from '../../navigators/NavigationServices';

interface IProp {
    student: IStudent
}
export default class StudentItem extends Component<IProp> {
    navigateToDetail = () => {
        NavigationServices.navigate('StudentDetail', null);
    }
    render() {
        let {student} = this.props;
        return (
            <TouchableOpacity 
            onPress={this.navigateToDetail}
            style={styles.container}>
                <View style={styles.info}>
                    <Text style={commonStyles.defaultText}> {student.first_name} </Text>
                    <Text style={commonStyles.textNote}> {student.gender} </Text>
                </View>
                <View style={styles.icon}>
                    <Image source={IC_NEXT} style={commonStyles.imageMedium}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(10),
        borderBottomWidth: 1,
        paddingBottom: moderateScale(10),
        paddingTop: moderateScale(10),
        borderColor: "#F1F2F6",
    },
    info: {
        flex: 8/10,
    },
    icon: {
        flex: 2/10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
});