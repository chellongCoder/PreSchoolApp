import * as React from 'react';
import styles from './styles';
import {
    View,
    TextInput
} from 'react-native';
import { graySolid } from '../../config';

export interface InputCustomProps {
    placeholder:string;
}

export interface InputCustomState {
}

export default class InputCustom extends React.Component<InputCustomProps, InputCustomState> {

    constructor(props: InputCustomProps) {
        super(props);
    }

    public render() {
        const { placeholder } = this.props;

        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={graySolid} />
            </View>
        );
    }
}