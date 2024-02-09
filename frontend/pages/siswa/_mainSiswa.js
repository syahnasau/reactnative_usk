import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeSiswa from './Home';
import Cart from './Cart';
import Profile from './Profile';
import History from './History';
import Colors from '../../constants/Color';

const _mainSiswa = () => {
     const Tab = createBottomTabNavigator();
     return (
          <Tab.Navigator
               initialRouteName="Feed"
               activeColor="#00c190"
               barStyle={{ backgroundColor: "white" }}
               style={{ borderTopWidth: 1, borderTopColor: "#E2E8F0" }}
               tabBarOptions={{
                    activeTintColor: Colors.green, 
                    inactiveTintColor: Colors.grey,
               }}
          >
               <Tab.Screen
                    name="Home"
                    component={HomeSiswa}
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
                    name="Cart"
                    component={Cart}
                    options={{
                         tabBarLabel: "Cart",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="cart-outline" size={size} color={color} />
                         ),
                         headerShown: true,
                         headerTitleAlign: 'center',
                    }}
               />
               <Tab.Screen
                    name="History"
                    component={History}
                    options={{
                         tabBarLabel: "History",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="archive-outline" size={size} color={color} />
                         ),
                         headerShown: true,
                         headerTitleAlign: 'center',
                    }}
               />
               <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                         tabBarLabel: "Profile",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="person-outline" size={size} color={color} />
                         ),
                         headerShown: true,
                         headerTitleAlign: 'center',
                    }}
               />
          </Tab.Navigator>
     )
}

export default _mainSiswa

const styles = StyleSheet.create({})