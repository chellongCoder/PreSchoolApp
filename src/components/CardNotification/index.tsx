import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import {moderateScale} from '../../utils/scale';
import commonStyles from '../../utils/commonStyles';
import {IC_HANDDOWN} from '../../utils/icons';

export default class CardNotification extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={commonStyles.textTitle}> Notification Title </Text>
                </View>
                <View style={styles.author}>
                    <Image source={IC_HANDDOWN} style={commonStyles.imageMedium}/>
                    <Text style={[commonStyles.lightText, {fontStyle: 'italic', marginLeft: moderateScale(10)}]}>Longnn</Text>
                </View>
                <View style={styles.content}>
                    <Text style={[commonStyles.lightText, {opacity: 0.8}]}> Before we start, remember that you can never cross the ocean until you have the courage to lose sight of the shore.  </Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2E43',
        marginTop: moderateScale(20),
        marginHorizontal: moderateScale(30),
        padding: moderateScale(15),
        borderRadius: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    content: {
        marginTop: moderateScale(10)
    },
    author: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});