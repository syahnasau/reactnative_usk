import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants/URL';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from '../../constants/Color';
import formatToRp from '../../constants/FormatRp';
import formatDate from '../../constants/FormatDate';
import { useNavigation } from '@react-navigation/native';


const History = () => {
  return (
    <View>
      <Text>HistorySiswa</Text>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
    viewUser: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20
    },
    textName: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    container: {
        // backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 16,
        backgroundColor: '#f7faf9',
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
    status: {
        // flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        margin: 5,
        color: Colors.oren,
    },
    status2: {
        // flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        margin: 5,
        color: Colors.green,
    },

    orderCode: {
        color: Colors.grey,
        marginTop: 4,
        fontWeight: 'bold'
    },
    total: {
        fontSize: 14,
        color: Colors.green,
        fontWeight: 'bold'
    }
})