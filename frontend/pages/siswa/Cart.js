import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, RefreshControl, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Colors from '../../constants/Color';
import ProductCard from './CardProduct';
import { API_URL } from '../../constants/URL';
import { Ionicons } from '@expo/vector-icons';
import formatToRp from '../../constants/FormatRp';

const Cart = ({ navigation, route }) => {

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView refreshControl={
                    <RefreshControl  />
               }>

                    <Text>HELLo</Text>    

               
               </ScrollView>
          </SafeAreaView>
     )
}

export default Cart

const styles = StyleSheet.create({
     container: {
          borderRadius: 10,
          padding: 16,

     },
     cardContainer: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 16,
          marginBottom: 20,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },

     },
     cardPayment: {
          flexDirection: 'row',
          justifyContent: 'space-between'
     },
     button: {
          flex: 2,
          backgroundColor: Colors.green,
          borderRadius: 13,
          padding: 10,
          alignItems: 'center',
          margin: 5,
     },
     buttonText: {
          color: Colors.white,
          fontWeight: 'bold',
          fontSize: 12,
     },
     buttonContainer: {
          // justifyContent: 'space-between',
     },
     balanceText: {
          fontSize: 20,
          fontWeight: 'bold',
     },

     image: {
          width: 130,
          height: 150,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
     },
     detailsContainer: {
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-between',
     },
     title: {
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 2,
     },
     subtitle: {
          fontSize: 12,
          marginBottom: 5,
          color: '#555',
     },
     price: {
          fontSize: 14,
          fontWeight: 'bold',
          color: Colors.green
     },
     addToCartContainer: {
          flexDirection: 'row',
          marginTop: 10,
          alignItems: 'center',

     },
     addToCartButton: {
          // backgroundColor: Colors.green,
          padding: 7,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.red,
          marginLeft: 160
     },
     addToCartButtonText: {
          color: Colors.red,
          fontWeight: 'bold',
          fontSize: 12,
     },
     quantityContainer: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     quantityButton: {
          // backgroundColor: Colors.grey,
          padding: 8,
          borderRadius: 5,
     },
     quantityButtonText: {
          fontSize: 18,
          color: '#555',
     },
     quantityText: {
          fontSize: 16,
          marginHorizontal: 10,
     },
     container2: {
          backgroundColor: '#fff',
          // borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 10,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          width: '100%',
          //     maxWidth: 300,
          marginVertical: 2,
          flexDirection: 'row',
          alignContent: 'space-between',
          alignItems: 'center',
     },
})