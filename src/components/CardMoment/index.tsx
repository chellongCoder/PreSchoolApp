import React, { Component } from 'react'
import {  View, Image } from 'react-native'
import styles from './styles';
import {Card, CardItem, Left, Thumbnail, Body, Text, Button, Icon, Content, Right} from 'native-base';
import commonStyles from '../../utils/commonStyles';
import {IC_DOWN, IC_SHARE, IC_LIKE} from '../../utils/icons';
import {Moment} from '../../stores/moment.store';

interface IProps {
    moment: Moment
}

export default class CardMoment extends Component<IProps> {
    render() {
        return (
            <Content scrollEnabled={false} style={styles.container}>
            <Card style={{shadowOpacity: 0}}>
                <CardItem>
                <Left>
                    <Thumbnail source={{uri: this.props.moment.teacher.avatar}} />
                    <Body>
                        <Text style={commonStyles.boldText}>{`${this.props.moment.teacher.first_name} ${this.props.moment.teacher.last_name}`}</Text>
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
                        {
                            this.props.moment.image.map((value, index) => {
                                return (<Image key={index} source={{uri: value.path}} style={{resizeMode: 'contain', height: "100%", width: "100%",}}/>)
                            })
                        }
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
