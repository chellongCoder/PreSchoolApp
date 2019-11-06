import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import commonColor from '../../utils/commonColor';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

interface IProps {
    isShow: boolean;
    child: any;
    changeIsShowPopup: () => void
}
@observer
export default class PopupModal extends Component<IProps> {

    changeIsShow = () => {
        this.props.changeIsShowPopup();
    }

    render() {
        if(this.props.isShow) {
            return (
                <TouchableOpacity 
                onPress={this.changeIsShow}
                style={styles.container}>
                    {this.props.child}
                </TouchableOpacity>
            )
        } else {
            return null;
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
        backgroundColor: "rgba(0,0,0,0.6)"
    }
});