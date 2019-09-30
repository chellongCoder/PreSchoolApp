import React from 'react';
import { createStackNavigator } from 'react-navigation';
import QualificationTest from '../screens/QualificationTest';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const routeConfig = {
    QualificationTest: {
        screen: QualificationTest,
    },
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    }
};

const navigatorConfig = {
    initialRouteName: 'QualificationTest',
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
