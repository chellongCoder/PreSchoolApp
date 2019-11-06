import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scale';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dateContainer: {
        flexDirection: 'row',
        marginVertical: moderateScale(20),
    },
    buttonDate: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

export default styles;