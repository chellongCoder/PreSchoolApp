import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scale';
import commonColor from '../../utils/commonColor';

const styles = StyleSheet.create({
    intro: {
        alignItems: 'center',
        marginHorizontal: moderateScale(20),
    },
    imageContainer: {
        width: commonColor.deviceWidth,
        height: commonColor.deviceWidth,
        resizeMode: "contain",
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    buttons: {
        marginHorizontal: moderateScale(60)
    }
});

export default styles;