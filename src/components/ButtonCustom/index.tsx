import * as React from 'react';
import styles from './styles';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color1, color2, color3, color4, color5, color6, color7 } from '../../config';
import commonColor from '../../utils/commonColor';

export interface IButtonCustomProps {
    text:string;
    colors:string;
    onPress?:any;
}

export interface IButtonCustomState {
}

export default class ButtonCustom extends React.Component<IButtonCustomProps, IButtonCustomState> {

    constructor(props: IButtonCustomProps) {
        super(props);
    }

    public render() {
        const {
            text,
            colors,
            onPress
        } = this.props;
        let checkColors:any[] = [color1.color1, color1.color2];

        switch (colors) {
            case 'color1':
                checkColors = [color1.color1, color1.color2];
                break;
            case 'color2':
                checkColors = [color2.color1, color2.color2];
                break;
            case 'color3':
                checkColors = [color3.color1, color3.color2];
                break;
            case 'color4':
                checkColors = [color4.color1, color4.color2];
                break;
            case 'color5':
                checkColors = [color5.color1, color5.color2];
                break;
            case 'color6':
                checkColors = [color6.color1, color6.color2];
                break;
            case 'color7':
                checkColors = [color7.color1, color7.color2];
                break;
        }

        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <LinearGradient colors={checkColors} style={styles.btn}>
                    <Text style={[styles.text, {color: colors==="color7" ? commonColor.textColor : commonColor.textColorWhite}]}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}