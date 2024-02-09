import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../constants/Color'


const DetailTransaction = ({ navigation, route }) => {
     

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView>
                    <View>

                         <View style={styles.cardContainer}>
                              <View style={styles.buttonContainer}>
                                   <Text style={styles.balanceText}>inv_3423</Text>
                                   <Text style={styles.txtDate}>date</Text>
                                   
                              </View>
                         </View>

                         <View style={styles.historyBeliContainer}>
                              <View style={[styles.cardReport]}>
                                   {/* {detail.report?.map((item, index) => (
                                        <View key={index}>
                                             
                                             <View style={styles.cardReport3}>
                                                  <Text style={styles.txtName}>{formatText(item.products.name)}</Text>
                                                  <Text style={[styles.status2, styles.textGreen]}>x{item.quantity}</Text>
                                                  <Text style={[styles.statu2s, styles.textGreen]}>Rp.{item.price}</Text>
                                             </View>
                                             <Text style={styles.total}>
                                                  Total Price : Rp{item.price * item.quantity}
                                             </Text>
                                        </View>
                                   ))} */}
                              </View>
                         </View>
                         <View style={styles.buttonContainer2}>
                              <TouchableOpacity style={styles.button} >
                                   <Text style={styles.buttonText}>Download as PDF</Text>
                              </TouchableOpacity>
                         </View>

                    </View>
               </ScrollView>
          </SafeAreaView>
     )
}

export default DetailTransaction

const styles = StyleSheet.create({
     container: {
          borderRadius: 10,
          padding: 16,
          overflow: 'hidden',
          backgroundColor: '#f7faf9',
          height: 900
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
          height: 75,
          alignContent: 'center',
          alignItems: 'center'
     },
     cardContainer2: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 16,
          marginBottom: 20,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          height: 80,
          alignContent: 'center',
          // alignItems: 'center'
     },
     balanceText: {
          fontSize: 16,
          fontWeight: 'bold',
     },
     balanceText2: {
          fontSize: 14,
          // fontWeight: 'bold',
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
     },
     cardReport3: {
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     buttonContainer: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center'
     },
     buttonContainer2: {
          flexDirection: 'column',
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

     cardReport2: {
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 10,
          marginBottom: 7,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          flexDirection: 'row',
          // alignItems: 'center',
          flexDirection: 'col',
          justifyContent: 'space-between',
     },
     txtDate: {
          fontSize: 12,
          color: Colors.grey,
          marginTop: 3
     },
     txtName: {
          fontSize: 14,
          fontWeight: "bold",
     },
     txtDetail2: {
          fontSize: 14,
          fontWeight: "bold",
          color: Colors.green
     },
     txtDetail: {
          fontSize: 14,
          fontWeight: "bold",
          color: Colors.oren
     },
     status2: {
          // flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 5,
          padding: 10,
          alignItems: 'center',
          margin: 5,
          // color: Colors.green,
     },
     textName: {
          fontSize: 14,
          fontWeight: 'bold',
          paddingBottom: 10
     },

     orderCode: {
          color: Colors.grey,
          marginTop: 4,
          fontWeight: 'bold'
     },
     total: {
          fontSize: 14,
          color: Colors.green,
          fontWeight: 'bold',
          alignSelf: 'flex-end',
          padding: 10,

     }

})