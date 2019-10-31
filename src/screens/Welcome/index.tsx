import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import commonStyles from '../../utils/commonStyles'
import styles from './styles'
import {moderateScale} from '../../utils/scale'
import {IMAGE_WELCOME} from '../../utils/images'
import {ButtonCustom} from '../../components'
import {getAccessKey} from '../../utils/common'
import {observable, action} from 'mobx'
import {observer, inject} from 'mobx-react'
import {LoadingStore} from '../../stores/loading.store'
import {UserStore} from '../../stores/user.store'
import jwtDecode from 'jwt-decode';
import APIBase from '../../services/api/base'

interface IProps {
    navigation: any;
    loadingStore: LoadingStore;
    userStore: UserStore;
}
@inject('loadingStore', 'userStore')
@observer
export default class WelcomeScreen extends Component<IProps> {
    @observable accessKey: string  = '';

    @action changeAccessKey = (accessKey: string) => {
      this.accessKey = accessKey;
    }
    onSignin = () => {
        this.props.navigation.navigate("Login");
    }
    async componentWillMount() {
      this.props.loadingStore.actToggleLoading(true);
      const accessKey = await getAccessKey();
      this.props.loadingStore.actToggleLoading(false);
      if(accessKey) {
        
        const user = jwtDecode(accessKey);
        console.log("userStore",user, this.props.userStore.user)
        await this.checkExpiredAPI(user, accessKey);
        
      }
    }

  checkExpiredAPI = async (user: any, accessKey: string) => {
    console.log("check epx");
    if(new Date(user.exp*1000) < new Date()) {
      await this.props.userStore.logout();
    } else {
      this.props.userStore.setUser(user);
      this.changeAccessKey(accessKey);
      await APIBase.getInstance().setAPIKey(accessKey);
      this.props.navigation.navigate("BottomTabbar")
    }
  }
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={styles.intro}>
            <Text style={commonStyles.headerText}>Welcome to Preschool</Text>
            <Text style={[commonStyles.textAlign, commonStyles.textNote, {marginTop: moderateScale(20)}]}>Tương tác với giáo viên, phụ huynh, nhà trường 
                và trẻ nhỏ chưa bao giờ dễ dàng hơn.</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={IMAGE_WELCOME}/>
        </View>
        {this.accessKey === '' ? (<View style={styles.buttons}>
            <View>
                <ButtonCustom onPress={this.onSignin} colors='color6' text='Sign in' />
            </View>
            <View style={{marginTop: moderateScale(30)}}>
                <ButtonCustom colors='color7' text='Forgot password?' />
            </View>
        </View>) : null}
      </View>
    )
  }
}