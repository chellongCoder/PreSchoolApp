import { StyleSheet } from 'react-native';
import { whiteSolid } from '../../config';
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        backgroundColor: whiteSolid,
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 30,
        elevation: 5
    },
    input: {
        textAlign: 'center',
        fontSize: wp('4%')
    }
});

export default styles;