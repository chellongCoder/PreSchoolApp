import * as React from 'react';
import styles from './styles';
import {
    View,
    Text
} from 'react-native';
import BackgroundDefault from '../../components/BackgroundDefault';
import ButtonCustom from '../../components/ButtonCustom';

export interface IQualificationTestProps {
    navigation: any;
}

export interface IQualificationTestState {
}

export default class QualificationTest extends React.Component<IQualificationTestProps, IQualificationTestState> {

    constructor(props: IQualificationTestProps) {
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
                <View style={{paddingHorizontal: 30}}>
                    <View style={{marginBottom: 30}}>
                        <Text style={styles.title}>SMARTCOM-VIETTEL:</Text>
                        <Text style={styles.title}>LEARNING ENGLISH</Text>
                    </View>
                    <View>
                        <View style={{marginBottom: 15}}>
                            <ButtonCustom colors='color1' text='Đăng nhập' onPress={this.goToLogin} />
                        </View>
                        <View style={{marginBottom: 15}}>
                            <ButtonCustom colors='color2' text='Kiểm tra trình độ tiếng anh' />
                        </View>
                        <View style={{marginBottom: 15}}>
                            <ButtonCustom colors='color3' text='C2 – English at 5 finger tips' />
                        </View>
                        <View style={{marginBottom: 15}}>
                            <ButtonCustom colors='color4' text='TOEIC at 5 finger tips' />
                        </View>
                        <View>
                            <ButtonCustom colors='color5' text='Smartcom – English for Specific Purposes ' />
                        </View>
                    </View>
                    <View style={{marginTop: 45, alignItems: 'center'}}>
                        <Text style={styles.note}>
                            Quý vị chỉ cần sử dụng tài khoản
                            được cấp cho cán bộ nhân viên Viettel
                            để đăng nhập và sử dụng đầy đủ
                            các chức năng của App này.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}