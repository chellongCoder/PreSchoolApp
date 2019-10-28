import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import CardMoment from '../../components/CardMoment'
import styles from './styles'
import HeaderCommon from '../../components/HeaderCommon'
import CardNotification from '../../components/CardNotification'
import {inject, observer} from 'mobx-react'
import {NotificationStore, INotification} from '../../stores/notification.store'

interface IProps {
  notificationStore: NotificationStore
}
@inject("notificationStore")
@observer
export default class Notification extends Component<IProps> {
  renderItem = ({item, index}) => {
    return (
      <CardNotification key={index}/>
    )
  }
  render() {
    return (
      <View style={styles.container}>
         <HeaderCommon
            title="NOTIFICATIONS"
        />
        <FlatList
          scrollEventThrottle={16}
          keyExtractor={(item: INotification) => `${item.id}`}
          data={this.props.notificationStore.notifocations}
          renderItem={this.renderItem}
        />
        
      </View>    
    )
  }
}
