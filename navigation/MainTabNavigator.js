import React from 'react';
import { Platform,Button,TouchableOpacity } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Level from '../screens/Level';
import Question from '../screens/Question';


import Welcome from '../navigation/WelcomeNavigator';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  headerRight: <Button
    onPress={() => this.props.navigation.navigate('Welcome')}
    title="Parameters"
    color="red"
/>,
  tabBarLabel: 'Алфавит',
  tabBarOptions: { 
    activeTintColor: '#8c51d9',
    inactiveTintColor: '#8c51d9',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    Level: Level,
    Question: Question,
  
  },
  config
);

LinksStack.navigationOptions = {
  headerRight: <Button
  onPress={() => this.props.navigation.navigate('Welcome')}
  title="Parameters"
  color="#fff"
/>,
  tabBarLabel: 'Бақылау',
  tabBarOptions: { 
    activeTintColor: '#8c51d9',
    inactiveTintColor: '#8c51d9',
},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Welcome: Welcome,
    Level: Level,
  }
);

SettingsStack.navigationOptions = {
  headerRight: <TouchableOpacity
  onPress={() => this.props.navigation.navigate('Welcome')}
  title="Parameters"
  color="#fff"
/>,
  tabBarLabel: 'Статистика',
  tabBarOptions: { 
    activeTintColor: '#8c51d9',
    inactiveTintColor: '#8c51d9',
},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
