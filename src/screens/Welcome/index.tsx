import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import commonStyles from '../../utils/commonStyles'
import styles from './styles'
import {moderateScale} from '../../utils/scale'
import {IMAGE_WELCOME} from '../../utils/images'
import {ButtonCustom} from '../../components'

interface IProps {
    navigation: any
}
export default class WelcomeScreen extends Component<IProps> {
    onSignin = () => {
        this.props.navigation.navigate("Login");
    }
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={styles.intro}>
            <Text style={commonStyles.headerText}>Welcome to Preschool</Text>
            <Text style={[commonStyles.textAlign, commonStyles.textNote, {marginTop: moderateScale(20)}]}>Tương tác với giáo viên, phụ huynh, nhà trường 
                và trẻ nhỏ chưa bao giờ dễ dàng hơn.</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={IMAGE_WELCOME}/>
        </View>
        <View style={styles.buttons}>
            <View>
                <ButtonCustom onPress={this.onSignin} colors='color6' text='Sign in' />
            </View>
            <View style={{marginTop: moderateScale(30)}}>
                <ButtonCustom colors='color7' text='Sign up' />
            </View>
        </View>
      </View>
    )
  }
}