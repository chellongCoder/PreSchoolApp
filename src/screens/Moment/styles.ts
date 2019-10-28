import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scale';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginVertical: moderateScale(16),
        color: "black",
        fontWeight: "bold",
        fontSize: moderateScale(24)
      }
})

export default styles;