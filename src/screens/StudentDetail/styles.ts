import {StyleSheet} from 'react-native';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: commonColor.cardBackGround ,
        marginVertical: moderateScale(20),
        marginHorizontal: moderateScale(20),
        padding: moderateScale(10),
        borderRadius: moderateScale(15),
    },
    content: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        marginLeft: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        marginTop: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(20),
    }
})

export default styles;