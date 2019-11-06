import React, { Component } from 'react'
import { Text, View, Image, Animated, ImageSourcePropType, TouchableOpacity } from 'react-native'
import styles from './styles';
import {IC_BACK, IC_FILTER} from '../../utils/icons';
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';
import NavigationServices from '../../navigators/NavigationServices';
interface IProps {
    title: string;
    headerHeight?: Animated.AnimatedInterpolation,
    headerTitleOpacity?: Animated.AnimatedInterpolation,
    heroTitleOpacity?: Animated.AnimatedInterpolation,
    flexExpanded?: Animated.AnimatedInterpolation,
    flexColapsed?: Animated.AnimatedInterpolation
    iconRight?: any;
    onClickIconRight?: () => void
}
export default class HeaderCommon extends Component<IProps> {
    goBack = () => {
        NavigationServices.goBack();
    }
    render() {
        return (
            <Animated.View style={[styles.container, {height: this.props.headerHeight ? this.props.headerHeight : moderateScale(110)}]}>
                <Animated.View style={[styles.iconContainer, {flex: this.props.flexExpanded}]}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={IC_BACK}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Animated.Text style={[commonStyles.textHeader ,{opacity: this.props.headerTitleOpacity ? this.props.headerTitleOpacity : 0, fontSize: commonColor.fontSizeH3,}]}>{this.props.title}</Animated.Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <TouchableOpacity onPress={this.props.onClickIconRight}>
                            <Image style={commonStyles.imageMedium} source={this.props.iconRight}/>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.titleContainer, {flex: this.props.flexColapsed}]}>
                    <Animated.Text style={[commonStyles.textHeader, {opacity: this.props.heroTitleOpacity}]}>{this.props.title}</Animated.Text>
                </Animated.View>
            </Animated.View>
        )
    }
}
