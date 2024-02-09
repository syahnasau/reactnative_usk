import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeBank from './Home';
import ReportBank from './Report';
import Colors from '../../constants/Color';

const _mainBank = () => {
     const Tab = createBottomTabNavigator();
     return (
          <Tab.Navigator
               initialRouteName="Feed"
               activeColor="#2c365a"
               barStyle={{ backgroundColor: "white" }}
               style={{ borderTopWidth: 1, borderTopColor: "#E2E8F0" }}
               tabBarOptions={{
                    activeTintColor: Colors.green, 
                    inactiveTintColor: Colors.grey,
               }}
          >
               <Tab.Screen
                    name="Home"
                    component={HomeBank}
                    options={{
                         tabBarLabel: "Home",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="home-outline" size={size} color={color} />
                         ),
                         headerShown: false,
                         headerTitleAlign: 'center',
                    }}
               />
               <Tab.Screen
                    name="Report Wallet"
                    component={ReportBank}
                    options={{
                         tabBarLabel: "Report Wallet",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="folder-outline" size={size} color={color} />
                         ),
                         headerShown: true,
                         headerTitleAlign: 'center',
                    }}
               />
               
          </Tab.Navigator>
     )
}

export default _mainBank

const styles = StyleSheet.create({})