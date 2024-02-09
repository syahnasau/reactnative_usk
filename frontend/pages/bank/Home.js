import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from '../../constants/URL'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Color'
import formatToRp from '../../constants/FormatRp'
import formatDate from '../../constants/FormatDate'
import formatText from '../../constants/FormatText'

const HomeBank = ({ navigation, route }) => {
     
     return (
          <SafeAreaView style={styles.container}>

               <ScrollView refreshControl={
                    <RefreshControl  />
               }>

                    <Text>HELLO</Text>
               </ScrollView>

          </SafeAreaView>
     )
}

export default HomeBank




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
     textTitle: {
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 10,
     },
     container: {
          padding: 16,
          paddingTop: 30,
          backgroundColor: '#f7faf9',
          height: 900,
     },
     cardContainer: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 16,
          marginBottom: 10,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          height: 140, 
          alignContent: 'center',
          alignItems: 'center'
     },
     balanceText: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 15,
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
     cardReport: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          flexDirection: 'row',
          // alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     txtDate: {
          fontSize: 12,
          color: Colors.grey,
          marginTop: 5
     },
     txtName: {
          fontSize: 14,
          fontWeight: "bold",
          marginBottom: 5
     },
     txtTopUp: {
          fontSize: 14,
          color: Colors.green,
          fontWeight: "bold",
     },
     txtWithdraw: {
          fontSize: 14,
          color: Colors.oren,
          fontWeight: "bold",
     },
     status: {
          // flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 5,
          padding: 10,
          alignItems: 'center',
          margin: 5,
          backgroundColor: Colors.green,
     },
     cardInfo: {
          flexDirection: 'row',
          justifyContent: 'space-between',
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
          fontSize: 13,
          fontWeight: 'bold',
          marginLeft: 15
     },
     cardContent: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
     }


})

