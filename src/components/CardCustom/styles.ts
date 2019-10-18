import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scale';
import commonColor from '../../utils/commonColor';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: commonColor.whitebackground,
        padding: moderateScale(10),
        marginVertical: moderateScale(20),
        marginHorizontal: moderateScale(20),
        borderRadius: moderateScale(5),
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    item: {
        backgroundColor: 'red', 
        flexWrap: 'wrap', 
        width: commonColor.deviceWidth/5, 
        alignItems: 'center', 
        marginVertical: moderateScale(10)
    }
})

export default styles;