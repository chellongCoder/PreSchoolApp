import {StyleSheet} from 'react-native';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FA'
    },
    searchContainer: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(20),
        borderRadius: 10,
    },
    titleList: {
        padding: moderateScale(10)
    }
});

export default styles;