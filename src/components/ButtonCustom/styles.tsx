import {
    StyleSheet
} from 'react-native';
import {
    whiteSolid
} from '../../config';
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
    },
    btn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        paddingHorizontal: 10,
        borderRadius: 50
    },
    text: {
        color: whiteSolid,
        width: '100%',
        textAlign: 'center',
        fontSize: wp('4%'),
        fontWeight: 'bold',
    }
});

export default styles;