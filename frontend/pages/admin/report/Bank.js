import { SafeAreaView, StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import formatText from '../../../constants/FormatText';
import formatToRp from '../../../constants/FormatRp';
import formatDate from '../../../constants/FormatDate';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../../constants/Color';
import { API_URL } from '../../../constants/URL';


const ReportByBank = ({ navigation, route }) => {
     const [data, setData] = useState([]);
     const [refresh, setRefresh] = useState(false);
     const [name, setName] = useState("");
     const { username } = route.params || {};
     const [roleAuth, setRoleAuth] = useState("");
     const { getDataBankCallBack } = route.params || {};

     const fetchData = async () => {
          const token = await AsyncStorage.getItem('token');
          const response = await axios.get(`${API_URL}admin`, { headers: { Authorization: `Bearer ${token}` } });
          console.log("berhasil data admin", response.data);
          setData(response.data);
     };

     useEffect(() => {
          fetchData();
          console.log(getDataBankCallBack);
          if (getDataBankCallBack) {
               fetchData();
          }
     }, [getDataBankCallBack]);

     const onRefresh = async () => {
          setRefresh(true);
          await fetchData();
          setTimeout(() => {
               setRefresh(false);
          }, 2000);
     };

     const printReport = async () => {
          const file = await printToFileAsync({
               html: htmlToPrint,
               base64: false,
          });
          await shareAsync(file.uri);
     };

     let htmlToPrint = `
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Invoice</title>
         <style>
             body {
                 font-family: 'Arial', sans-serif;
                 background-color: #fff;
                 margin: 20px;
             }
     
             h1, h3, h4 {
                 text-align: center;
             }
     
             table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-top: 20px;
             }
     
             th, td {
                 padding: 12px;
                 text-align: left;
                 border-bottom: 1px solid #ddd;
             }
     
             th {
                 background-color: #f7faf9;
             }
     
             tfoot {
                 font-weight: bold;
                 padding: 20;
     
             }
     
             .total-row {
                 background-color: #f7faf9;
             }
         </style>
     </head>
     <body>
         <h1>Report Bank</h1>
         <table>
             <thead>
                 <tr>
                     <th>Name</th>
                     <th>Credit</th>
                     <th>Debit</th>
                     <th>Desc</th>
                     <th>Date</th>
                 </tr>
             </thead>
             <tbody>
               ${data.wallets
               ? data.wallets
                    .filter((item) => item.debit !== null || item.credit !== null)
                    .map((item, index) => `
                         <tr key="${index}">
                              <td>${item.user?.name}</td>
                              ${item.debit !== null ? `<td>${formatToRp(item.debit)}</td>` : `<td>-</td>`}
                              ${item.credit !== null ? `<td>${formatToRp(item.credit)}</td>` : `<td>-</td>`}
                              <td>${item.debit !== null ? "Withdraw" : "Top Up"}</td>
                              <td>${formatDate(item.created_at)}</td>
                         </tr>
                         `)
                    .join("")
               : ""
          }
               <!-- ... (baris HTML lainnya) ... -->
               </tbody>
             <tfoot>
     
                 <tr class="total-row">
                     <td colspan="4">Total:</td>
                     <td>$49.50</td>
                 </tr>
             </tfoot>
         </table>
         <p>* Report Bank </p>
     </body>
     </html>
     
     `;

     return (
          <SafeAreaView>
               <ScrollView refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
               }>


                    <View style={styles.container}>

                         <View style={styles.titleDownload}>
                              <Text style={{ fontWeight: 'bold' }}></Text>
                              <TouchableOpacity onPress={printReport}>
                                   <Text style={{ color: Colors.green, fontWeight: 'bold' }}>Download All</Text>
                              </TouchableOpacity>
                         </View>

                         <View style={styles.cardWrap}>
  {data.wallets
    ?.filter((item) => item.status === 'selesai')
    .map((item, index) => (
      <View key={index} style={[styles.cardReport]}>
        <View style={styles.cardLeft}>
          <Text style={styles.txtName}>{formatText(item.user?.name)}</Text>
          {item.debit ? (
            <Text style={{ color: Colors.oren }}>WithDraw: {formatToRp(item.debit)}</Text>
          ) : (
            <Text style={{ color: Colors.green }}>Top Up: {formatToRp(item.credit)}</Text>
          )}
          <Text style={styles.txtDate}>{formatDate(item.created_at)}</Text>
        </View>
        {/* 
        {item.status === 'process' && (
          <View style={styles.cardRight}>
            <TouchableOpacity onPress={() => handleAcceptTopUp(item.id)} style={styles.pressable}>
              <Text>Accept</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </View>
    ))}
</View>

                    </View>
               </ScrollView>
          </SafeAreaView>
     )
}

export default ReportByBank

const styles = StyleSheet.create({
     container: {
          borderRadius: 10,
          padding: 16,
          backgroundColor: '#f7faf9',
          height: 900,

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
          height: 140
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
          // alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     txtDate: {
          fontSize: 12,
          color: Colors.grey,
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
          fontSize: 12,
          paddingVertical: 5
     },
     cardInfo: {
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     pressable: {
          backgroundColor: Colors.green,
          padding: 5,
          color: Colors.white,
     },

     titleDownload: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15
     }


})