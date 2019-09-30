import {
    StyleSheet
} from 'react-native';
import {
    whiteSolid
} from '../../config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: whiteSolid,
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
            width: 0,
            height: 4
        },
        textShadowRadius: 8
    },
    note: {
        color: whiteSolid,
        fontSize: 14,
        textAlign: 'center',
        width: 240
    }
});

export default styles;