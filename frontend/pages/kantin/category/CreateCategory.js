import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    ScrollView,
    RefreshControl,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Colors from '../../../constants/Color';
import { API_URL } from '../../../constants/URL';

const CreateCategory = ({ navigation }) => {
    const [name, setName] = useState('');

    const handleCreateCategory = async () => {
        const token = await AsyncStorage.getItem('token');
        try {
            await axios.post(`${API_URL}category-kantin-store`, {
                name: name,
            }, { headers: { Authorization: `Bearer ${token}` } });
            Alert.alert('Success create');
            navigation.navigate('_mainKantin');
        } catch (e) {
            console.log(e);
        }
    };

    const createCategory = async () => {
        const token = await AsyncStorage.getItem('token');
        try {
            await axios.post(`${API_URL}category-kantin-store`, {
                name: name,
            }, { headers: { Authorization: `Bearer ${token}` } });
            navigation.navigate('_mainKantin', {
                createCategoryCallback: name,
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.h1}>Create Category</Text>

                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(e) => setName(e)}
                    placeholder="Enter title category"
                />

                <TouchableOpacity style={styles.button} onPress={createCategory}>
                    <Text style={styles.buttonText}>Create Category</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreateCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    h1: {
        fontSize: 16,
        paddingTop: 40,
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
        marginTop: 15,
        fontSize: 12,
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
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
});