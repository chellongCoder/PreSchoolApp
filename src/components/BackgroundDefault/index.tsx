import * as React from 'react';
import styles from './styles';
import {
    View,
    ImageBackground
} from 'react-native';

const background = require('../../../assets/background.png');

export interface IBackgroundDefaultProps {
}

export interface IBackgroundDefaultState {
}

export default class BackgroundDefault extends React.Component<IBackgroundDefaultProps, IBackgroundDefaultState> {

    constructor(props: IBackgroundDefaultProps) {
        super(props);
    }

    public render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background} style={{width: '100%', height: '100%'}} />
            </View>
        );
    }
}