import { Alert } from 'react-native';

var Sound = require('react-native-sound');
export default class SoundPlayer {

    private static instance: SoundPlayer;
    private sound: any;
    constructor() {
        Sound.setCategory('Playback', true); // true = mixWithOthers
    }

    start(url) {
        console.log('====================================');
        console.log('start ', url);
        console.log('====================================');
        this.sound = new Sound(url, null, this.onStart);
    }

    startBundle(url) {
        console.log('====================================');
        console.log('start ', url);
        console.log('====================================');
        this.sound = new Sound(url, Sound.MAIN_BUNDLE, this.onStart);
    }

    stop() {
        if (this.sound)
            this.sound.stop();
    }

    release() {
        if (this.sound)
            this.sound.release();
    }

    private onStart = (err) => {
        if (err) {
            Alert.alert("Không tải được âm thanh.");
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + this.sound.getDuration() + 'number of channels: ' + this.sound.getNumberOfChannels());

        // Play the sound with an onEnd callback
        this.sound.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
            this.sound.release();
        });
    }

    static play(url) {
        if (!this.instance) {
            this.instance = new SoundPlayer();
        } else {
            this.instance.stop();
            this.instance.release();
        }
        this.instance.start(url);
    }

    static playBundle(url) {
        if (!this.instance) {
            this.instance = new SoundPlayer();
        } else {
            this.instance.stop();
            this.instance.release();
        }

        this.instance.startBundle(url);
    }

    static stop() {
        if (this.instance) {
            this.instance.stop();
            this.instance.release();
        }
    }
}