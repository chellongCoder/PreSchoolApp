import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomeStackNavigator from './WelcomeStackNavigator';
import NavigationServices from './NavigationServices';
import {View} from 'react-native';
import LoadingCommon from '../components/LoadingCommon';

const SwitchNavigator = createSwitchNavigator({
    WelcomeStackNavigator
});

const AppContainer = createAppContainer(SwitchNavigator);

class Container extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <AppContainer ref={navigatorRef => {
                    NavigationServices.setTopLevelNavigator(navigatorRef);
                }} />
                <LoadingCommon/>
            </View>
        )
    }
}
export default Container;
