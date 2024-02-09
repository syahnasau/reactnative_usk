import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, RefreshControl } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { API_URL } from '../../constants/URL';
import Colors from "../../constants/Color";
import formatText from "../../constants/FormatText";

const HomeAdmin = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const { username } = route.params || {};
  const [roleAuth, setRoleAuth] = useState("");
  const [data, setData] = useState([]);
  const { userEdit, createUserCallback } = route.params || {};
  const [refresh, setRefresh] = useState(false);


  const fetchData = async () => {
    const name = await AsyncStorage.getItem("name");
    const role = await AsyncStorage.getItem("role");
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${API_URL}getsiswa`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data)
    setData(response.data);
    setName(name);
  };

  const handelDeleteUser = async (id) => {
    const token = await AsyncStorage.getItem("token");
    await axios.delete(`${API_URL}user-admin-delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
    if (userEdit || createUserCallback) {
      fetchData();
    }
  }, [userEdit, createUserCallback]);

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.post(`${API_URL}logout`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await AsyncStorage.multiRemove(["token", "role"]);
      navigation.navigate('WelcomePage');
    } catch (e) {
      console.log(e);
    }
  };

  const onRefresh = async () => {
    setRefresh(true);
    fetchData();
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };


  return (
    <SafeAreaView>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
        <View style={styles.container}>
          <View style={styles.viewUser}>
            <Text style={styles.textName}>Hi, {username ?? name}! | Admin</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={26} color="black" />
            </TouchableOpacity>

          </View>


          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardContent}>
                <Ionicons name="cube-outline" size={26} color={Colors.green} />
                <Text style={styles.title}> Product: {data?.products?.length || 0}</Text>
              </View>
            </View>
            <View style={styles.cardHeader}>
              <View style={styles.cardContent}>
                <Ionicons name="person-outline" size={26} color={Colors.green} />
                <Text style={styles.title}> User: {data?.users?.length}</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardContent}>
                <Ionicons name="wallet-outline" size={26} color={Colors.green} />
                <Text style={styles.title}>Wallet: {data?.wallet_count || 0}</Text>
              </View>
            </View>
            <View style={styles.cardHeader}>
              <View style={styles.cardContent}>
                <Ionicons name="person" size={26} color={Colors.green} />
                {/* <Text style={styles.title}> | {data.users.length}</Text> */}
              </View>
            </View>
          </View>

          <View style={styles.cardContainer}>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateUser')} >
                <Text style={styles.buttonText}>Create User</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.textName2}>List User</Text>

          <View>
            {data.users?.map((item, index) => (
              <View style={styles.cardReport} key={index}>
                <View>
                  <Text style={styles.txtName}>{formatText(item.name)}</Text>
                  <Text style={styles.txtRole}>{formatText(item.roles.name)}</Text>
                </View>
                <View style={styles.addToCartContainer}>
                  <TouchableOpacity
                    style={styles.HapusButton}
                    onPress={() => handelDeleteUser(item.id)}
                  >
                    <Ionicons name="trash-outline" size={20} color={Colors.red} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.EditButton}
                    onPress={() => navigation.navigate('EditUser', { id: item.id, })}
                    marginLeft={10}
                  >
                    <Ionicons name="pencil-outline" size={20} color={Colors.oren} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeAdmin

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
  textName2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
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
    padding: 16,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    height: 80,
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
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  txtName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  txtRole: {
    fontSize: 14,
    color: Colors.grey
  },
  HapusButton: {
    // backgroundColor: Colors.green,
    padding: 5,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.red,
    marginRight: 10,
  },
  EditButton: {
    padding: 5,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.oren,
  },
  HapusButtonText: {
    color: Colors.red,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
  },
  EditButtonText: {
    color: Colors.oren,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
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
    width: 155,
    height: 60,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})