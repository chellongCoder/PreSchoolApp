import { StyleSheet } from "react-native";
import { moderateScale } from '../../utils/scale';
import commonColor from '../../utils/commonColor';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: moderateScale(30),
    },
    title: {
        alignItems: 'center',   
    },
    inputContainer: {
        borderBottomWidth: 1.5,
        marginTop: moderateScale(20),
    },
    buttonLogin: {
        marginHorizontal: moderateScale(40),
        alignItems: 'center',
        marginVertical: moderateScale(30),
    },
    copyRight: {
        position: 'absolute',
        bottom: moderateScale(60),
        width: "100%",
        alignItems: 'center',
    }
})
export default styles;