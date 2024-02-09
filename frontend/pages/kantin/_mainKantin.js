import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeKantin from './Home';
import ReportKantin from './Report';
import Colors from '../../constants/Color';
import ProductKantin from './ProductKantin';
import CategoryKantin from './CategoryKantin';

const _mainKantin = () => {
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
                    component={HomeKantin}
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
                    name="Product"
                    component={ProductKantin}
                    options={{
                         tabBarLabel: "Product",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="cube-outline" size={size} color={color} />
                         ),
                         headerShown: true,
                         headerTitleAlign: 'center',
                    }}
               />
               <Tab.Screen
                    name="Category"
                    component={CategoryKantin}
                    options={{
                         tabBarLabel: "Category",
                         tabBarIcon: ({ color, size }) => (
                              <Ionicons name="document-outline" size={size} color={color} />
                         ),
                         headerShown: true,
                         headerTitleAlign: 'center',
                    }}
               />
     
               <Tab.Screen
                    name="Report"
                    component={ReportKantin}
                    options={{
                         tabBarLabel: "Report",
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

export default _mainKantin

const styles = StyleSheet.create({})