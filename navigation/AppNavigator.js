import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import MainTabNavigator from './MainTabNavigator';
import WelcomeNavigator from './WelcomeNavigator';
import RegistrationPage from './RegistrationPage';
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html,
    Welcome: WelcomeNavigator,
    Main: MainTabNavigator,
    RegistrationPage: RegistrationPage
  })
);
