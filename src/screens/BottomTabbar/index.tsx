import React from 'react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Home from '../Home';
import Moment from '../Moment';
import Notification from '../Notification';
import BadgeIcon from '../../components/BadgeIcon';
import {Image} from 'react-native';
import commonStyles from '../../utils/commonStyles';
import {IC_HOME, IC_HOME_ACTIVE, IC_MOMENT, IC_MOMENT_ACTIVE, IC_NOTIFY, IC_NOTIFY_ACTIVE} from '../../utils/icons';
import commonColor from '../../utils/commonColor';

export default createAppContainer(createBottomTabNavigator(
    {
      Moment,
      Home,
      Notification
    },
    {
      /* Other configuration remains unchanged */
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let image;
          if (routeName === 'Home') {
            image = !focused ? (
                <Image style={commonStyles.imageMedium} source={IC_HOME}/>
            ) : (
                <Image style={commonStyles.imageMedium} source={IC_HOME_ACTIVE}/>
            )
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
          } else if (routeName === 'Moment') {
            image = !focused ? (
                <Image style={commonStyles.imageMedium} source={IC_MOMENT}/>
            ) : (
                <Image style={commonStyles.imageMedium} source={IC_MOMENT_ACTIVE}/>
            )
          } else if (routeName === 'Notification') {
            image = !focused ? (
                <Image style={commonStyles.imageMedium} source={IC_NOTIFY}/>
            ) : (
                <Image style={commonStyles.imageMedium} source={IC_NOTIFY_ACTIVE}/>
            )
          }
  
          // You can return any component that you like here!
          return <BadgeIcon image={image} badgeCount={10} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: commonColor.textButton,
        inactiveTintColor: 'gray',
      },
    }
  ));