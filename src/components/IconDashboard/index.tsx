import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageSourcePropType, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';
import NavigationServices from '../../navigators/NavigationServices';

interface IProps {
    icon: ImageSourcePropType,
    style?: StyleProp<ViewStyle>,
    title: string,
    route?: string,
}
export default class IconDashboard extends Component<IProps> {
    navigate = () => {
        NavigationServices.navigate(this.props.route, null);
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