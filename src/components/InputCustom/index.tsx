import * as React from 'react';
import styles from './styles';
import {
    View,
    TextInput
} from 'react-native';
import { graySolid } from '../../config';

export interface IInputCustomProps {
    placeholder:string;
}

export interface IInputCustomState {
}

export default class InputCustom extends React.Component<IInputCustomProps, IInputCustomState> {

    constructor(props: IInputCustomProps) {
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