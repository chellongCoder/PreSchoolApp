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
    userStore: UserStore,
    routeRole12: string,
    routeRole11: string,
    action: () => Promise<any>;
}
@inject('userStore')
@observer
export default class IconDashboard extends Component<IProps> {
    navigate = async () => {
        await this.props.action();
        if(this.props.userStore.user.role === ROLE.PARENT) {
            NavigationServices.navigate(this.props.routeRole12, null);    
        } else {
            NavigationServices.navigate(this.props.routeRole11, null);
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