import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import SoundPlayer from '../../utils/sound';
import NavigationServices from '../../navigators/NavigationServices';

export default class ScanQR extends Component {
    value: string = '';
    onQR_Code_Scan_Done = (value: string) => {
        console.log("value", value);
        if(!this.value) {
            SoundPlayer.playBundle('CaptureSound.wav', () => {
                NavigationServices.navigate("MyQRCode", null);
            });
        }
        this.value = value;
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
 
            <CameraKitCameraScreen
                showFrame={true}
                scanBarcode={true}
                laserColor={'#FF3D00'}
                frameColor={'#00C853'}
                colorForScannerFrame={'red'}
                onReadCode={event =>
                    this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
                }
                heightForScannerFrame = {300}
                cameraOptions={{
                    flashMode: 'auto',             // on/off/auto(default)
                    focusMode: 'on',               // off/on(default)
                    zoomMode: 'on',                // off/on(default)
                    ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
                    ratioOverlayColor: '#00000077' // optional
                }}
            />
      </View>
        )
    }
}
