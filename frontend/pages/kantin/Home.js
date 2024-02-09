import { StyleSheet, Text, View, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native';
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Color';

const HomeKantin = ({ navigation, route }) => {
     

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView refreshControl={
                    <RefreshControl />
               }>
                    <Text>HELLO</Text>

               </ScrollView>
          </SafeAreaView>
     )
}

export default HomeKantin

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
          height: 80,
          alignContent: 'center',
          alignItems: 'center'

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
          fontSize: 14,
          fontWeight: 'bold',
          marginLeft: 10
     },
     cardContent: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
     },




     card2: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 8,
          padding: 10,
          backgroundColor: Colors.white
     },
     iconContainer: {
          backgroundColor: Colors.green,
          padding: 10,
          borderRadius: 8,
          marginRight: 16,
     },
     textContainer: {
          flex: 1,
     },
     txtDate: {
          fontSize: 12,
          color: Colors.grey,
          marginVertical: 5
     },
     priceText: {
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 8,
     },
     nameContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
     },
     nameText: {
          fontSize: 14,
          marginRight: 8,
          marginBottom: 4,
     },
     quantityText: {
          fontSize: 14,
          fontWeight: 'bold',
          marginRight: 16,
     },
     statusText: {
          fontSize: 14,
          fontWeight: 'bold',
          color: Colors.grey
     },
     checkIconContainer: {
          backgroundColor: Colors.green,
          padding: 8,
          borderRadius: 8,
          marginLeft: 16,
     },

})