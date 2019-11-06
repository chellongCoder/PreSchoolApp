import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scale';
import commonColor from '../../utils/commonColor';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginVertical: moderateScale(16),
        color: "black",
        fontWeight: "bold",
        fontSize: moderateScale(24)
    },
    searchContainer: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(20),
        borderRadius: 10,
    },
    form: {
        backgroundColor: commonColor.whitebackground,
        width: commonColor.deviceWidth-50,
        height: commonColor.deviceHeight/2,
        borderRadius: moderateScale(5),
    },
    textArea: {
        borderColor: commonColor.brandInfo, 
        borderWidth: 1,
        margin: moderateScale(10),
        padding: moderateScale(10),
        borderRadius: moderateScale(5),
    },
    uploadImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageUpload: {
        width: moderateScale(100),
        height: moderateScale(100),
        opacity: 0.5,
        padding: moderateScale(10),
        borderWidth: 1,
        borderRadius: moderateScale(5),
    }
})

export default styles;