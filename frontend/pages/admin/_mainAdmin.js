import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeAdmin from './Home';
import Colors from '../../constants/Color';
import ReportAdmin from './Report';
import ReportByBank from './report/Bank';
import ReportByKantin from './report/Kantin';

const _mainAdmin = () => {
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
                    component={HomeAdmin}
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
                    name="Report Bank"
                    component={ReportByBank}
                    options={{
                         tabBarLabel: "Report Bank",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="folder-outline" size={size} color={color} />
                         ),
                         headerShown: true,
                         headerTitleAlign: 'center',
                    }}
               />
               <Tab.Screen
                    name="Report Kantin"
                    component={ReportByKantin}
                    options={{
                         tabBarLabel: "Report Kantin",
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

export default _mainAdmin

const styles = StyleSheet.create({})