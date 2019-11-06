import React from 'react';
import { createStackNavigator } from 'react-navigation';
import QualificationTest from '../screens/QualificationTest';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login1';
import WelcomeScreen from '../screens/Welcome';
import BottomTabbar from '../screens/BottomTabbar';
import StudentInfo from '../screens/StudentInfo';
import StudentDetail from '../screens/StudentDetail';
import Test from '../Test';
import MyQRCode from '../screens/MyQRCode';
import ScanQR from '../screens/ScanQR';
import CheckinSuccess from '../screens/CheckinSuccess';
import Checkin from '../screens/Checkin';
import SchoolInfo from '../screens/SchoolInfo';
import TeacherInfo from '../screens/TeacherInfo';

const routeConfig = {
    QualificationTest: {
        screen: QualificationTest,
    },
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    },
    Welcome: {
        screen: WelcomeScreen
    },
    BottomTabbar: {
        screen: BottomTabbar
    },
    StudentInfo: {
        screen: StudentInfo
    },
    StudentDetail: {
        screen: StudentDetail
    },
    MyQRCode: {
        screen: MyQRCode
    },
    ScanQR: {
        screen: ScanQR
    },
    CheckinSuccess: {
        screen: CheckinSuccess
    },
    Checkin: {
        screen: Checkin
    },
    SchoolInfo: {
        screen: SchoolInfo
    },
    TeacherInfo: {
        screen: TeacherInfo
    },
    Test: {
        screen: Test
    }
};

const navigatorConfig = {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
        header: null,
    },
};

const WelcomeNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
    navigation: any;
}

class WelcomeStackNavigator extends React.Component<IProps> {
    private static router = WelcomeNavigator.router;

    public render() {
        return <WelcomeNavigator navigation={this.props.navigation} />;
    }
}

export default WelcomeStackNavigator;
