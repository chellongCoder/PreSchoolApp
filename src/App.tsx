import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Provider } from 'mobx-react';
import { createStores } from './stores';
import SwitchNavigator from './navigators/SwitchNavigator';
import SplashScreen from 'react-native-splash-screen';
import CodePush from 'react-native-code-push';
import deploymentKeys from '../code-push-deployments.json';

const rootStore = createStores();

const codePushOptions = {
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
    deploymentKey: deploymentKeys[Platform.OS].staging,
};

class App extends React.Component<any, any> {
    async componentDidMount() {
        SplashScreen.hide();
    }
    public render() {
        return (
            <Provider {...rootStore}>
                <View style={styles.container}>
                    <SwitchNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

// const MyApp = CodePush(codePushOptions)(App);

export default App;
