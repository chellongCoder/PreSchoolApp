import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image} from 'react-native';
import {IC_HOME} from '../../utils/icons';
import commonStyles from '../../utils/commonStyles';

interface IProps {
    image: any,
    badgeCount: number,
    color: string | any,
    size: number
}
export default class BadgeIcon extends React.Component<IProps> {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
          {/* <Ionicons name={name} size={size} color={color} /> */}
          {
            this.props.image
          }
          { badgeCount > 0 && (
            <View style={{
              // If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
            </View>
          )}
        </View>
      );
    }
  }