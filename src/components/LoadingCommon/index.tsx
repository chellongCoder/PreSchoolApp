import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AnimatedEllipsis from 'react-native-animated-ellipsis';
import commonColor from '../../utils/commonColor';
import commonStyles from '../../utils/commonStyles';
import {observer, inject} from 'mobx-react';
import {LoadingStore} from '../../stores/loading.store';

interface IProps {
    loadingStore: LoadingStore
}
@inject('loadingStore')
@observer
export default class LoadingCommon extends Component<IProps> {
    render() {
        if(this.props.loadingStore.obsToggleLoading) {
            return (
                <View style={styles.container}>
                    <Text style={commonStyles.lightText}>
                        Loading
                    </Text>
                    <AnimatedEllipsis />
                </View>
            )
        } else {
            return null
        }
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: commonColor.deviceWidth,
        height: commonColor.deviceHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.5)"
    } 
});