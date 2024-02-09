import { StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { SafeAreaView } from 'react-native-safe-area-context';
import formatText from '../../../constants/FormatText';
import formatToRp from '../../../constants/FormatRp';
import formatDate from '../../../constants/FormatDate';
import Colors from '../../../constants/Color';
import { API_URL } from '../../../constants/URL';

const ReportByKantin = () => {
     const [reportAdmin, setReportAdmin] = useState([]);
     const [refreshing, setRefresh] = useState(false);

     getReport = async () => {
          const token = await AsyncStorage.getItem("token");
          const response = await axios.get(`${API_URL}report/all`, {
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          });
          console.log(response.data);
          setReportAdmin(response.data);
     }


     useEffect(() => {
          getReport();
     }, []);

     const onRefresh = () => {
          getReport();
     };


     return (
          <SafeAreaView style={styles.container}>
               <ScrollView
                    refreshControl={
                         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
               >
                    <View>
                         <View style={styles.download}>
                              <Text style={styles.textTitle}> Report Pembelian</Text>
                              <TouchableOpacity>
                                   <Text style={{ color: Colors.green, fontWeight: 'bold' }}>Download All</Text>
                              </TouchableOpacity>
                         </View>
                         {/* {reportAdmin.transactions?.map((item, index) => (
                              <View key={index}>
                                   <View style={styles.card2}>
                                        <View style={styles.textContainer}>
                                             <View style={styles.nameContainer}>
                                                  {item.user_transactions?.map((val, ind) => (
                                                       <Text key={ind} style={styles.priceText}>
                                                            {formatText(val.name)}
                                                       </Text>
                                                  ))}
                                             </View>
                                             <Text style={styles.nameText}>
                                                  <Text style={{ color: Colors.green, fontWeight: 'bold' }}>Product : </Text>
                                                  {item.products.name}   |   {item.quantity}x
                                             </Text>

                                             <Text style={styles.nameText}>
                                                  <Text style={{ color: Colors.green, fontWeight: 'bold' }}>Total : </Text>
                                                  {formatToRp(item.price * item.quantity)}
                                             </Text>

                                             <View style={styles.greyTxt}>
                                                  <Text style={styles.orderCodeText}>{item.order_code}</Text>
                                                  <Text style={styles.txtDate}>{formatDate(item.created_at)}</Text>
                                             </View>
                                        </View>
                                        <Text style={styles.statusText}>{item.status}</Text>
                                        {item.status === 'dibayar' ? (
                                             <Text></Text>
                                        ) : (
                                             <Text></Text>
                                        )}
                                   </View>
                              </View>
                         ))} */}
                    </View>


               </ScrollView>
          </SafeAreaView>
     )
}

export default ReportByKantin

const styles = StyleSheet.create({})