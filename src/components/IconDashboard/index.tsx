import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageSourcePropType, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';
import NavigationServices from '../../navigators/NavigationServices';
import {inject, observer} from 'mobx-react';
import {UserStore, ROLE} from '../../stores/user.store';

interface IProps {
    icon: ImageSourcePropType,
    style?: StyleProp<ViewStyle>,
    title: string,
    userStore: UserStore
}
@inject('userStore')
@observer
export default class IconDashboard extends Component<IProps> {
    navigate = () => {
        if(this.props.userStore.user.role === ROLE.PARENT) {
            NavigationServices.navigate("StudentDetail", null);    
        } else {
            NavigationServices.navigate("StudentInfo", null);
        }
    }
  render() {
    return (
        <TouchableOpacity 
        onPress={this.navigate}
        style={[styles.item, this.props.style]}>
            <Image source={this.props.icon} style={commonStyles.imageNormal}/>
            <Text style={[commonStyles.textNote, {textAlign: 'center'}]}>{this.props.title}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    item: {
        flexWrap: 'wrap', 
        width: commonColor.deviceWidth/5, 
        alignItems: 'center', 
        marginVertical: moderateScale(10)
    }
});