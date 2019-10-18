import {StyleSheet} from 'react-native';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';

const styles = StyleSheet.create({
    container: {
        width: commonColor.deviceWidth,
        height: commonColor.deviceHeight/4,
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9999,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        paddingHorizontal: moderateScale(10),
        backgroundColor: commonColor.whitebackground
    },
    iconContainer: {
        flexDirection: 'row',
        flex: 4/10,
        alignItems: 'flex-end',
    },
    titleContainer: {
        flex: 3/10,
        
    }
});

export default styles;