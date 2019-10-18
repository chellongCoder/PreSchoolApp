import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native'
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';

interface IProps {
    icon: ImageSourcePropType,
    style?: StyleProp<ViewStyle>,
    title: string
}
export default class IconDashboard extends Component<IProps> {
  render() {
    return (
        <View style={[styles.item, this.props.style]}>
            <Image source={this.props.icon} style={commonStyles.imageNormal}/>
            <Text style={[commonStyles.textNote, {textAlign: 'center'}]}>{this.props.title}</Text>
        </View>
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