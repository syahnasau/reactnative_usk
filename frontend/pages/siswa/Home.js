import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Color';

const HomeSiswa = ({ navigation, route }) => {


     return (
          <SafeAreaView style={styles.container}>
               <ScrollView refreshControl={
                    <RefreshControl  />
               }>

                    <View style={styles.viewUser}>
                         <Text style={styles.textName}>Hi, name</Text>
                         <TouchableOpacity >
                              <Ionicons name="log-out-outline" size={26} color="black" />
                         </TouchableOpacity>

                    </View>

                    <View style={styles.cardContainer}>
                         <Text >Balance</Text>
                         <Text style={styles.balanceText}>32423</Text>
                         <View style={styles.buttonContainer}>
                              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TopUp')} >
                                   <Text style={styles.buttonText}>Top Up</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WithDrawSiswa')} >
                                   <Text style={styles.buttonText}>Withdraw</Text>
                              </TouchableOpacity>
                         </View>
                    </View>

                    {/* <View>
                         {data.products?.map((item, index) => (
                              <View key={index}>

                                   <ProductCard
                                        name={item.name}
                                        photo={`${item.photo}`}
                                        price={item.price}
                                        role={roleAuth}
                                        stand={item.stand}
                                        stock={item.stock}
                                        id={item.id}
                                        navigation={navigation}
                                   />
                              </View>

                         ))}
                    </View> */}

               </ScrollView>

          </SafeAreaView>
     )
}

export default HomeSiswa

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
          // backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 16,

          paddingTop: 30
     },
     cardContainer: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          height: 130,
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

})

