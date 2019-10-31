import React, { Component } from 'react'
import { Text, View, Animated, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import {HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT} from '../../utils/common';
import {IC_SEARCH, IC_X} from '../../utils/icons';
import {Item, Input} from 'native-base';
import commonStyles from '../../utils/commonStyles';
import * as Animatable from 'react-native-animatable';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {StudentStore, IStudent} from '../../stores/student.store';
import StudentItem from '../../components/StudentItem';
import APIBase from '../../services/api/base';
import {api_getStudentByClass} from '../../services/api';
import ClassStore from '../../stores/class.store';

interface IProps {
  studentStore: StudentStore;
  classStore: ClassStore
}
interface IState {
    scrollY: Animated.Value
}
@inject('studentStore', 'classStore')
@observer
export default class StudentInfo extends Component<IProps, IState> {
    @observable isShowSearchbox: boolean = false;
    constructor(props) {
      super(props);
      this.state = {
          scrollY: new Animated.Value(0)
      }
    }
    @action onSearch = () => {
      console.log("show")
      this.isShowSearchbox = !this.isShowSearchbox;
    }
    renderItem = ({item, index}) => {
      return (
        <StudentItem student={item} key={index}/>
      )
    }
  async componentDidMount() {
    const id = this.props.classStore.currentClass.id;
    console.log("Id", id)
    let [err, res] = await APIBase.getInstance().get(api_getStudentByClass(id));
    console.log("res", [err, res]) 
    this.props.studentStore.setStudent(res);
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
      });
      const headerTitleOpacity = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
      });
      const heroTitleOpacity = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      });
      const flexExpanded = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [6/10, 1],
        extrapolate: 'clamp'
      });
      const flexColapsed = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [4/10, 0.01/10],
        extrapolate: 'clamp'
      });
    return (
      <View style={styles.container}>
        <HeaderCommon
          onClickIconRight={this.onSearch}
          iconRight={IC_SEARCH}
          title="STUDENTS"
          headerHeight={headerHeight}
          headerTitleOpacity={headerTitleOpacity}
          heroTitleOpacity={heroTitleOpacity}
          flexExpanded={flexExpanded}
          flexColapsed={flexColapsed}
        />
        {this.isShowSearchbox ? (<Animatable.View 
          animation={this.isShowSearchbox ? "fadeInDown" : ""}
          easing="ease"
          style={styles.searchContainer}>
          <Item style={{borderBottomWidth: 0, paddingHorizontal: 10}}>
            <Image source={IC_SEARCH} style={commonStyles.imageMedium}/>
            <Input placeholder='Search'/>
            <TouchableOpacity onPress={this.onSearch}>
              <Image source={IC_X} style={commonStyles.imageMedium}/>
            </TouchableOpacity>
          </Item>
        </Animatable.View>) : null}
        <View style={styles.titleList}>
          <Text style={commonStyles.textNote}>GIAO VIEN CHU NHIEM LOP 2A</Text>
        </View>
        <FlatList
            keyExtractor={(item: IStudent) => `${item.id}`}
            data={this.props.studentStore.students}
            renderItem={this.renderItem}
        />
      </View>
    )
  }
}