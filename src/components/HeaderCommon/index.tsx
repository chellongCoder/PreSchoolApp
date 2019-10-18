import React, { Component } from 'react'
import { Text, View, Image, Animated } from 'react-native'
import styles from './styles';
import {IC_BACK, IC_FILTER} from '../../utils/icons';
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
interface IProps {
    headerHeight: Animated.AnimatedInterpolation,
    headerTitleOpacity: Animated.AnimatedInterpolation,
    heroTitleOpacity: Animated.AnimatedInterpolation,
    flexExpanded: Animated.AnimatedInterpolation,
    flexColapsed: Animated.AnimatedInterpolation
}
export default class HeaderCommon extends Component<IProps> {
    render() {
        return (
            <Animated.View style={[styles.container, {height: this.props.headerHeight}]}>
                <Animated.View style={[styles.iconContainer, {flex: this.props.flexExpanded}]}>
                    <View style={{flex: 1}}>
                        <Image source={IC_BACK}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Animated.Text style={[commonStyles.textHeader ,{opacity: this.props.headerTitleOpacity, fontSize: commonColor.fontSizeH3,}]}>Header</Animated.Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image source={IC_FILTER}/>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.titleContainer, {flex: this.props.flexColapsed}]}>
                    <Animated.Text style={[commonStyles.textHeader, {opacity: this.props.heroTitleOpacity}]}>MOMENTS</Animated.Text>
                </Animated.View>
            </Animated.View>
        )
    }
}
