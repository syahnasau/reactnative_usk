import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from '../../../constants/URL';
import axios from 'axios'
import { Picker } from "@react-native-picker/picker";
import Colors from '../../../constants/Color';

const CreateUser = ({ navigation }) => {
    const [role, setRole] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState(0);
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();


    const getRole = async () => {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(`${API_URL}user-admin-create`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setRole(response.data.data);
    };

    const handleCreateUser = async () => {
        const token = await AsyncStorage.getItem("token");
        await axios.post(
            `${API_URL}user-admin-store`,
            {
                name: name,
                password: password,
                roles_id: selectedRole,
            },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        navigation.navigate("_mainAdmin", {
            createUserCallback: seconds,
        });
    };

    useEffect(() => {
        getRole();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.form}>
                    <Text style={styles.h1}>Create User</Text>

                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(e) => setName(e)}
                        placeholder="Enter name"
                    />
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                        placeholder="Enter password"
                    />
                    <Text style={styles.label}>Role:</Text>
                    <Picker
                        selectedValue={selectedRole}
                        onValueChange={(item) => setSelectedRole(item)}
                    >
                        {role.map((item, index) => (
                            <Picker.Item key={index} label={item.name} value={item.id} />
                        ))}
                    </Picker>

                    <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
                        <Text style={styles.buttonText}>Create User</Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    h1: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    form: {
        padding: 20,
        borderRadius: 5,
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    },
    label: {
        marginTop: 20,
        marginBottom: 8,
        fontSize: 12,
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        // fontSize: 14
    },
    button: {
        backgroundColor: Colors.green,
        color: '#fff',
        borderRadius: 20,
        padding: 12,
        marginTop: 50,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnReg: {
        fontSize: 12,
        color: Colors.green,
        paddingTop: 10
    }
})