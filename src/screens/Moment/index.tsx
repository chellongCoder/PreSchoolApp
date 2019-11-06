import React, { Component } from 'react'
import { Text, View, Animated, ScrollView, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import commonColor from '../../utils/commonColor';
import {moderateScale} from '../../utils/scale';
import CardMoment from '../../components/CardMoment';
import {observer, inject} from 'mobx-react';
import {MommentStore} from '../../stores/moment.store';
import {IC_SEARCH, IC_LOGOUT, IC_IMAGE, IC_UPLOAD} from '../../utils/icons';
import NavigationServices from '../../navigators/NavigationServices';
import {UserStore} from '../../stores/user.store';
import {LoadingStore} from '../../stores/loading.store';
import {Item, Input, Thumbnail, Textarea} from 'native-base';
import * as Animatable from 'react-native-animatable';
import commonStyles from '../../utils/commonStyles';
import {toJS, observable, action} from 'mobx';
import PopupModal from '../../components/PopupModal';
import {ButtonCustom} from '../../components';

interface IState {
  scrollY: Animated.Value
}
const HEADER_EXPANDED_HEIGHT = moderateScale(110);
const HEADER_COLLAPSED_HEIGHT =moderateScale(60);

interface IProps {
  momentStore: MommentStore;
  userStore: UserStore;
  loadingStore: LoadingStore;
}
@inject('momentStore', 'userStore', 'loadingStore')
@observer
export default class Moment extends Component<IProps, IState> {
  @observable isShowPopup: boolean = false;

  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  logout = async () => {
    NavigationServices.resetStack("Welcome");
    this.props.loadingStore.actToggleLoading(true);
    await this.props.userStore.logout();
    this.props.loadingStore.actToggleLoading(false);
  }

  async componentDidMount() {
    const [err, res] = await this.props.momentStore.getMoments();
    console.log('res', res);
  }

  renderItem = ({item}) => {
    return (
      <CardMoment moment={item} key={item.id}/>
    )
  }

  renderForm = () => {
    return (
      <View style={styles.form}>
          <Textarea style={styles.textArea} rowSpan={5} placeholder="Textarea" />
          <View style={styles.uploadImage}>
            <View style={styles.imageUpload}>
              <Image source={IC_UPLOAD} style={commonStyles.imageContain}/>
            </View>
          </View>
          <View style={{padding: moderateScale(10)}}>
            <ButtonCustom colors="color5" text="upload"/>
          </View>
      </View>
    )
  }

  @action popUpUploadForm = () => {
    this.isShowPopup = !this.isShowPopup;
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

    console.log("render");
    return (
      <View style={styles.container}>
        <HeaderCommon
          iconRight={IC_LOGOUT}
          title="MOMENTS"
          headerHeight={headerHeight}
          headerTitleOpacity={headerTitleOpacity}
          heroTitleOpacity={heroTitleOpacity}
          flexExpanded={flexExpanded}
          flexColapsed={flexColapsed}
          onClickIconRight={this.logout}
        />
        <Animatable.View 
          animation={"fadeInDown"}
          easing="ease"
          style={styles.searchContainer}>
          <Item style={{borderBottomWidth: 0, padding: 10, backgroundColor: commonColor.brandInfo, borderRadius: 10}}>
            <Thumbnail size={8} source={{uri: toJS(this.props.userStore.user).avatar}}/>
            {/* <Input onFocus={this.popUpUploadForm} placeholder='Upload anything?'/> */}
            <TouchableOpacity onPress={this.popUpUploadForm} style={{flex: 1}}>
              <Text style={commonStyles.lightText}>Upload anything?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.popUpUploadForm}>
              <Image source={IC_IMAGE} style={commonStyles.imageMedium}/>
            </TouchableOpacity>
          </Item>
        </Animatable.View>
        <FlatList
          scrollEnabled={this.props.momentStore.moments.length > 0}
          onScroll={Animated.event(
            [{ nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }])
          }
          scrollEventThrottle={16}
          keyExtractor={(item) => `${item.id}`}
          data={this.props.momentStore.moments}
          renderItem={this.renderItem}
        />

        <PopupModal
          changeIsShowPopup={this.popUpUploadForm}
          child={this.renderForm()}
          isShow={this.isShowPopup}/>
      </View>
    )
  }
}
