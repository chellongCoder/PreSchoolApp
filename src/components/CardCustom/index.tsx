import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles';
import {IC_INFO_STUDENT} from '../../utils/icons';
import commonStyles from '../../utils/commonStyles';
import {moderateScale} from '../../utils/scale';
import IconDashboard from '../IconDashboard';

interface IProps {
    icons: any[]
}
export default class CardCustom extends Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.icons.map((value) => {
              if(!value.key) {
                  return <IconDashboard action={value.action} routeRole11={value.routeRole11} routeRole12={value.routeRole12} title={value.title} icon={value.icon}/>
              } else {
                  return <IconDashboard action={value.action} routeRole11={value.routeRole11} routeRole12={value.routeRole12} title={value.title} icon={value.icon} style={{marginHorizontal: moderateScale(40)}}/>
              }
          })
        }
      </View>
    )
  }
}