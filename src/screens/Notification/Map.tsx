import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 21.0245;
const LONGITUDE = 105.84117;
const LATITUDE_DELTA = 0.2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
        return <MapView style = {styles.map}
            initialRegion = {{
                latitude: 13.139238380834923,
                longitude: 80.25188422300266,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}/>;
    }
}

const styles = StyleSheet.create({
    map: {
        height: 100,
        flex: 1
        }
});
