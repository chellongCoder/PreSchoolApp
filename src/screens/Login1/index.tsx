import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import commonStyles from '../../utils/commonStyles';
import commonColor from '../../utils/commonColor';
import { moderateScale } from '../../utils/scale';
import { Form, Item, Input, Label, Content, Icon } from 'native-base';
import {observer, inject} from 'mobx-react';
import {observable, action} from 'mobx';
import {IC_USERNAME, IC_PASSWORD, IC_VIEW_PASSWORD, IC_SHOW_PASSWORD} from '../../utils/icons';
import {ButtonCustom} from '../../components';
import {UserStore} from '../../stores/user.store';
import {LoadingStore} from '../../stores/loading.store';

interface IProps {
    navigation: any;
    userStore: UserStore;
    loadingStore: LoadingStore
}
@inject("userStore", "loadingStore")
@observer
export default class Login extends Component<IProps> {
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
        this.props.userStore.errorLogin = '';
        this.isFocusPassword = true;
    }

    @action onBlurPassword = () => {
        this.isFocusPassword = false;
    }

    @action onShowPassword = () => {
        this.isShowPassword = !this.isShowPassword;
    }

    onLogin = async () => {
        console.log('====================================');
        console.log(this.props.userStore.username, this.props.userStore.password);
        console.log('====================================');
        this.props.loadingStore.actToggleLoading(true);
        let [err, res] = await this.props.userStore.login();
        console.log('login ', [err, res]);
        this.props.loadingStore.actToggleLoading(false);
        if(!err) {
            this.props.navigation.navigate("BottomTabbar")
        }
    }
    render() {
        let {errorLogin, password, username} = this.props.userStore;
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
                                    autoCapitalize="none"
                                    onBlur={this.onBlurUsername}
                                    onFocus={this.onFocusUsername}
                                    placeholder="Username"
                                    style={{width: commonColor.deviceWidth-100}}
                                    onChangeText={this.props.userStore.onChangeUsername}
                                />
                            </View>
                        </View>
                        <View style={[styles.inputContainer, {
                            borderBottomColor: !this.isFocusPassword ? (errorLogin ? commonColor.brandDanger : commonColor.inputBorderNormal) : commonColor.inputBorderColor, 
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
                                    onChangeText={this.props.userStore.onChangePassword}
                                />
                                <TouchableOpacity onPress={this.onShowPassword}>
                                    <Image source={this.isShowPassword ? IC_SHOW_PASSWORD : IC_VIEW_PASSWORD} style={commonStyles.imageMedium}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.props.userStore.errorLogin!=='' ? (<View style={styles.error}>
                            <Text style={commonStyles.dangerText}>{this.props.userStore.errorLogin}</Text>
                        </View>): null}
                    </View>
                    <View style={styles.buttonLogin}>
                        <ButtonCustom 
                        onPress={this.onLogin}
                        colors='color6' text='Sign in' />
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