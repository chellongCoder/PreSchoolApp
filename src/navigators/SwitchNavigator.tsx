import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomeStackNavigator from './WelcomeStackNavigator';

const SwitchNavigator = createSwitchNavigator({
    WelcomeStackNavigator
});

const AppContainer = createAppContainer(SwitchNavigator);

class Container extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <AppContainer />;
    }
}
export default Container;
