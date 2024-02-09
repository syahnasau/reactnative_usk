import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Colors from '../../constants/Color';

const Profile = () => {

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView refreshControl={
                    <RefreshControl  />
               }>
               


               </ScrollView>
          </SafeAreaView>
     )
}

export default Profile

const styles = StyleSheet.create({
     viewUser: {
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20
     },
     textName: {
          fontSize: 16,
          fontWeight: 'bold',
     },
     container: {
          backgroundColor: '#f7faf9',
          padding: 16,
          height: 800
     },
     cardContainer: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          height: 70,
          alignContent: 'center',
          alignItems: 'center'

     },
     cardContainer2: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
     },
     textTitle: {
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 15,
     },
     balanceText: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 15,
     },
     balanceText2: {
          fontSize: 12,
          color: Colors.grey
     },
     buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     button: {
          flex: 1,
          backgroundColor: Colors.green,
          borderRadius: 5,
          padding: 10,
          alignItems: 'center',
          margin: 5,
     },
     buttonText: {
          color: Colors.white,
          fontWeight: 'bold',
     },

     card: {
          // display: 'flex',
          flexDirection: 'row',
          marginBottom: 10,
          // gap: 20,
          justifyContent: 'space-between',

     },
     cardHeader: {
          // display: 'flex',
          // alignItems: 'center',
          padding: 10,
          width: 160,
          height: 60,
          flexDirection: 'row',
          backgroundColor: Colors.white,
          borderRadius: 10,
     },
     title: {
          fontSize: 12,
          fontWeight: 'bold',
          marginLeft: 10
     },
     cardContent: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
     },
})