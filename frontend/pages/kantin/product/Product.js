import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from '../../../constants/URL';
import Colors from '../../../constants/Color';
import { Ionicons } from '@expo/vector-icons';
import formatToRp from '../../../constants/FormatRp';
import formatText from '../../../constants/FormatText';

const CardProductKantin = ({ name, photo, price, role, stand, stock, id, navigation }) => {
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState("");

    const fetchData = async () => {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${API_URL}kantin`, { headers: { Authorization: `Bearer ${token}` } });
        console.log(response.data);
        setData(response.data);
    };

    const handleDeleteProduct = async (id) => {
        const token = await AsyncStorage.getItem("token");
        await axios.delete(`${API_URL}delete-product-url/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log("berhasil delete");
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            <Image source={{ uri: photo }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{formatText(name)}</Text>
                <Text style={styles.subtitle}>Stock: {stock}</Text>
                <Text style={styles.price}>{formatToRp(price)}</Text>
                <View style={styles.addToCartContainer}>
                    <TouchableOpacity
                        style={styles.HapusButton}
                        onPress={() => handleDeleteProduct(id)}
                    >
                        <Ionicons name="trash" size={15} color={Colors.red} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.EditButton}
                        onPress={() => navigation.navigate("EditProduct", { id: id })}
                        marginLeft={10}
                    >
                        <Ionicons name="pencil" size={15} color={Colors.oren} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
        marginVertical: 10,
        flexDirection: 'row',
        height: 120
    },
    image: {
        width: 130,
        height: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    detailsContainer: {
        padding: 15,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
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
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    HapusButton: {
        // backgroundColor: Colors.green,
        padding: 5,
        paddingHorizontal: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.red,
        // backgroundColor: Colors.red,
        marginRight: 10,
    },
    EditButton: {
        // backgroundColor: Colors.green,
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
    },
    EditButtonText: {
        color: Colors.oren,
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },
});

export default CardProductKantin;