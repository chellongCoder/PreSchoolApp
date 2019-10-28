import React, { Component } from 'react'
import {  View, Image } from 'react-native'
import styles from './styles';
import {Card, CardItem, Left, Thumbnail, Body, Text, Button, Icon, Content, Right} from 'native-base';
import commonStyles from '../../utils/commonStyles';
import {IC_DOWN, IC_SHARE, IC_LIKE} from '../../utils/icons';

interface IProps {
    moment: any
}

export default class CardMoment extends Component<IProps> {
    render() {
        return (
            <Content scrollEnabled={false} style={styles.container}>
            <Card style={{shadowOpacity: 0}}>
                <CardItem>
                <Left>
                    <Thumbnail source={{uri: 'https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg'}} />
                    <Body>
                        <Text style={commonStyles.boldText}>{this.props.moment.author}</Text>
                        <Text note>8, Nov</Text>
                    </Body>
                    <View style={styles.dropdown}>
                        <Image source={IC_DOWN} style={commonStyles.imageSmall}/>
                    </View>
                </Left>
                </CardItem>
                <CardItem>
                <Body>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: this.props.moment.image}} style={{resizeMode: 'contain', height: "100%", width: "100%",}}/>
                    </View>
                    <Text style={commonStyles.textNote}>
                        {this.props.moment.content}
                    </Text>
                </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Image source={IC_SHARE} style={commonStyles.imageMedium}/>
                    </Left>
                    <Right>
                        <View style={styles.heart}>
                            <Text style={commonStyles.textNote}>{this.props.moment.likes}</Text>
                            <Image source={IC_LIKE} style={commonStyles.imageMedium}/>
                        </View>
                    </Right>
                </CardItem>
            </Card>
            </Content>
        )
    }
}
