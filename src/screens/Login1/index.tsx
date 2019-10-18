import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
import { moderateScale } from '../../utils/scale';
import { Form, Item, Input, Label, Content, Icon } from 'native-base';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import {IC_USERNAME, IC_PASSWORD, IC_VIEW_PASSWORD, IC_SHOW_PASSWORD} from '../../utils/icons';
import {ButtonCustom} from '../../components';

@observer
export default class Login extends Component {
    @observable isFocusUsername: boolean = false;
    @observable isFocusPassword: boolean = false;
    @observable isShowPassword: boolean = false;
    
    @action onFocusUsername = () => {
        this.isFocusUsername = true;
    }

    @action onBlurUsername = () => {
        this.isFocusUsername = false;
    }

    @action onFocusPassword = () => {
        this.isFocusPassword = true;
    }

    @action onBlurPassword = () => {
        this.isFocusPassword = false;
    }

    @action onShowPassword = () => {
        this.isShowPassword = !this.isShowPassword;
    }
    render() {
        return (<View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={[commonStyles.boldText, {fontSize: commonColor.fontSizeH1}]}>Sign in</Text>
                        <Text style={[commonStyles.textNote ,{textAlign: 'center', marginTop: moderateScale(10)}]}>
                            Preschool and child care - Where children grow And learn
                            while having fun
                        </Text>
                    </View>
                    <View>
                        <View style={[styles.inputContainer, {
                            borderBottomColor: !this.isFocusUsername ? commonColor.inputBorderNormal : commonColor.inputBorderColor, 
                        }]}>
                            <Text>Username</Text>
                            <View style={{flexDirection: 'row', paddingVertical: moderateScale(10)}}>
                                <Image source={IC_USERNAME} style={commonStyles.imageMedium}/>
                                <TextInput
                                    onBlur={this.onBlurUsername}
                                    onFocus={this.onFocusUsername}
                                    placeholder="Username"
                                />
                            </View>
                        </View>
                        <View style={[styles.inputContainer, {
                            borderBottomColor: !this.isFocusPassword ? commonColor.inputBorderNormal : commonColor.inputBorderColor, 
                        }]}>
                            <Text>Password</Text>
                            <View style={{flexDirection: 'row', paddingVertical: moderateScale(10)}}>
                                <Image source={IC_PASSWORD} style={commonStyles.imageMedium}/>
                                <TextInput
                                    secureTextEntry={!this.isShowPassword}
                                    onBlur={this.onBlurPassword}
                                    onFocus={this.onFocusPassword}
                                    placeholder="Password"
                                    style={{width: commonColor.deviceWidth-100}}
                                />
                                <TouchableOpacity onPress={this.onShowPassword}>
                                    <Image source={this.isShowPassword ? IC_SHOW_PASSWORD : IC_VIEW_PASSWORD} style={commonStyles.imageMedium}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonLogin}>
                        <ButtonCustom colors='color6' text='Sign in' />
                        <Text style={[commonStyles.buttonText, {marginTop: moderateScale(20)}]}>
                            Forgot password?
                        </Text>
                    </View>
                    <View style={styles.copyRight}>
                        <Text style={[{marginTop: moderateScale(20)}]}>
                            Copyright © <Text style={commonStyles.textButton}>KMA_VN</Text>
                        </Text>
                    </View>
            </View>)
    }
}