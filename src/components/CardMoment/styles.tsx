import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scale';
import commonColor from '../../utils/commonColor';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(10),
    },
    dropdown: {
        position: 'absolute',
        right: 0,
        top: moderateScale(10)
    },
    imageContainer: {
        // height: moderateScale(500),
        width: moderateScale(300),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'blue'
    },
    heart: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;