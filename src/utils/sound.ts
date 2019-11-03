import { Alert } from 'react-native';

import Sound from 'react-native-sound';
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
        this.sound = new Sound(require('./CaptureSound.mp3'), "", this.onStart);
    }

    startBundle(url, callback) {
        console.log('====================================');
        console.log('start ', url);
        console.log('====================================');
        this.sound = new Sound(url, Sound.MAIN_BUNDLE, (err) => this.onStart(err, callback));
    }

    stop() {
        if (this.sound)
            this.sound.stop();
    }

    release() {
        if (this.sound)
            this.sound.release();
    }

    private onStart = (err, callback) => {
        console.log("err", err);
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
                callback();
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

    static playBundle(url, callback) {
        if (!this.instance) {
            this.instance = new SoundPlayer();
        } else {
            this.instance.stop();
            this.instance.release();
        }

        this.instance.startBundle(url, callback);
    }

    static stop() {
        if (this.instance) {
            this.instance.stop();
            this.instance.release();
        }
    }
}