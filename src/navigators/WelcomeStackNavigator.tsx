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
