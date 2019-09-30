import * as React from 'react';
import styles from './styles';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import BackgroundDefault from '../../components/BackgroundDefault';
import InputCustom from '../../components/InputCustom';
import ButtonCustom from '../../components/ButtonCustom';

const arrowBack = require('../../../assets/arrowBack.png');

export interface ISignUpProps {
    navigation:any;
}

export interface ISignUpState {
}

export default class SignUp extends React.Component<ISignUpProps, ISignUpState> {

    constructor(props: ISignUpProps) {
        super(props);
    }

    goToLogin = () => {
        const { navigation } = this.props;

        navigation.navigate('Login');
    }

    public render() {
        return (
            <View style={styles.container}>
                <BackgroundDefault />
                <ScrollView style={{paddingHorizontal: 30}}>
                    <View style={{marginBottom: 30, marginTop: 65}}>
                        <Text style={styles.title}>ĐĂNG KÝ</Text>
                        <Text style={styles.subTitle}>Một lần cho tất cả</Text>
                    </View>
                    <View>
                        <View style={{marginBottom: 15}}>
                            <InputCustom placeholder='Tài Khoản' />
                        </View>
                        <View style={{marginBottom: 15}}>
                            <InputCustom placeholder='Email' />
                        </View>
                        <View style={{marginBottom: 15}}>
                            <InputCustom placeholder='Mật Khẩu' />
                        </View>
                        <View>
                            <InputCustom placeholder='Nhập lại mật khẩu' />
                        </View>
                    </View>
                    <View style={{marginTop: 40}}>
                        <View>
                            <ButtonCustom colors='color1' text='Đăng Ký' />
                        </View>
                    </View>
                    <View style={{marginTop: 25, alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.goToLogin}>
                            <Text style={styles.signUp}>Đã có tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
                        <Text style={styles.note}>
                            Tài khoản đăng nhập App này sẽ sử dụng
                            để đăng nhập được tất cả các App khác
                            trong danh mục App khóa học.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}