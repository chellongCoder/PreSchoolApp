import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header, Left, Button, Icon, Body, Title, Right} from 'native-base'

export default class HeaderCustom extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>
    )
  }
}