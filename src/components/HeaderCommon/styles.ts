import {StyleSheet} from 'react-native';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';
import { isIphoneX } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
    container: {
        width: commonColor.deviceWidth,
        justifyContent: 'flex-end',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: 999,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        height: moderateScale(110),
        paddingHorizontal: moderateScale(10),
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: isIphoneX() ? 'flex-end' : 'center',
    },
    titleContainer: {
    }
});

export default styles;