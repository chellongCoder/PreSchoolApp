import React, { Component } from 'react'
import {  View, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import {Card, CardItem, Left, Thumbnail, Body, Text, Button, Icon, Content, Right} from 'native-base';
import commonStyles from '../../utils/commonStyles';
import {IC_DOWN, IC_SHARE, IC_LIKE, IC_REDHEART} from '../../utils/icons';
import {Moment, MommentStore} from '../../stores/moment.store';
import {moderateScale} from '../../utils/scale';
import {observer, inject} from 'mobx-react';
import {observable, action} from 'mobx';

interface IProps {
    moment: Moment;
    momentStore: MommentStore;
}

@inject("momentStore")
@observer
export default class CardMoment extends Component<IProps> {
    @observable isHeart : boolean = false;
    @action onHeart = () => {
        this.isHeart = true;
        // let likes = this.props.moment.likes;
        this.props.moment.uplike();
        console.log("like", this.props.moment.likes);
    }
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
                    <Text style={commonStyles.textNote}>
                        {this.props.moment.content}
                    </Text>
                    <View style={styles.imageContainer}>
                        {
                            this.props.moment.image && this.props.moment.image.map((value, index) => {
                                return (
                                    <View style={{width: moderateScale(100), height: moderateScale(100), marginLeft: moderateScale(10), }} key={index}>
                                        <Image source={{uri: value.path}} style={{resizeMode: 'contain', height: "100%", width: "100%",}}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                    
                </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Image source={IC_SHARE} style={commonStyles.imageMedium}/>
                    </Left>
                    <Right>
                        <TouchableOpacity disabled={this.isHeart} onPress={this.onHeart} style={styles.heart}>
                            <Text style={commonStyles.textNote}>{this.props.moment.likes}</Text>
                            <Image source={this.isHeart ? IC_REDHEART : IC_LIKE } style={commonStyles.imageMedium}/>
                        </TouchableOpacity>
                    </Right>
                </CardItem>
            </Card>
            </Content>
        )
    }
}
