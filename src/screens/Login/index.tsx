import * as React from 'react';
import styles from './styles';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import BackgroundDefault from '../../components/BackgroundDefault';
import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';

const arrowBack = require('../../../assets/arrowBack.png');

export interface ILoginProps {
    navigation:any;
}

export interface ILoginState {
}

export default class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props);
    }

    goBack = () => {
        const { navigation } = this.props;

        navigation.goBack();
    }

    goToSignUp = () => {
        const { navigation } = this.props;

        navigation.navigate('SignUp');
    }

    public render() {
        return (
            <View style={styles.container}>
                <BackgroundDefault />
                <View style={{paddingHorizontal: 30, marginTop: 65}}>
                    <View style={{marginBottom: 30, justifyContent: 'center'}}>
                        <Text style={styles.title}>ĐĂNG NHẬP</Text>
                        <Text style={styles.subTitle}>Một lần cho tất cả</Text>
                        <View style={{position: 'absolute'}}>
                            <TouchableOpacity onPress={this.goBack}>
                                <Image
                                    source={arrowBack}
                                    style={{width: 12, height: 23, marginRight: 15}}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{marginBottom: 15}}>
                            <InputCustom placeholder='Tài Khoản' />
                        </View>
                        <View>
                            <InputCustom placeholder='Mật Khẩu' />
                        </View>
                    </View>
                    <View style={{marginTop: 40}}>
                        <View>
                            <ButtonCustom colors='color1' text='Đăng nhập' />
                        </View>
                    </View>
                    <View style={{marginTop: 25, alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.goToSignUp}>
                            <Text style={styles.signUp}>Đăng ký ngay</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20, alignItems: 'center'}}>
                        <Text style={styles.note}>
                            Tài khoản đăng nhập App này sẽ sử dụng
                            để đăng nhập được tất cả các App khác
                            trong danh mục App khóa học.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}