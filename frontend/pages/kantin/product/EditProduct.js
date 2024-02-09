import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView, RefreshControl, TextBase, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../../constants/Color';
import { API_URL } from '../../../constants/URL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Picker } from "@react-native-picker/picker";

const EditProduct = ({ navigation, route }) => {
    const [nameProduct, setnameProduct] = useState("");
    const [priceProduct, setpriceProduct] = useState("");
    const [stockProduct, setstockProduct] = useState("");
    const [standProduct, setstandProduct] = useState("");
    const [displayPhoto, setdisplayPhoto] = useState();
    const [descProduct, setdescProduct] = useState("");
    const [categoryProduct, setcategoryProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const { id } = route.params;

    const handleEditProduct = async (id) => {
        try {
            const token = await AsyncStorage.getItem("token");
            await axios.put(
                `${API_URL}product-update-url/${id}`,
                {
                    name: nameProduct,
                    price: priceProduct,
                    stock: stockProduct,
                    photo: displayPhoto,
                    desc: descProduct,
                    categories_id: selectedCategory,
                    stand: standProduct,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            Alert.alert("Success edit");
            navigation.navigate("_mainKantin", {
                editProductCallBack: [
                    nameProduct,
                    priceProduct,
                    stockProduct,
                    displayPhoto,
                    descProduct,
                    selectedCategory,
                    standProduct,
                ],
            });
        } catch (e) {
            console.log(e);
        }
    };

    const getProduct = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            const response = await axios.get(`${API_URL}product-edit/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setnameProduct(response.data.products.name);
            setpriceProduct(response.data.products.price.toString());
            setstockProduct(response.data.products.stock.toString());
            setdisplayPhoto(response.data.products.photo);
            setdescProduct(response.data.products.desc);
            setSelectedCategory(response.data.categories);
            setstandProduct(response.data.products.stand.toString());
            setSelectedCategory(response.data.products.categories_id);
        } catch (e) {
            console.log(e);
        }
    }

    const getCategories = async () => {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(`${API_URL}categories`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setcategoryProduct(response.data.categories);
    };

    useEffect(() => {
        getProduct();
        getCategories();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.form}>
                    <Text style={styles.h1}>Create Product</Text>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={nameProduct}
                        onChangeText={(e) => setnameProduct(e)}
                        placeholder="Enter title product"
                    />
                    <Text style={styles.label}>Price:</Text>
                    <TextInput
                        style={styles.input}
                        value={priceProduct}
                        onChangeText={(e) => setpriceProduct(e)}
                        placeholder="Enter price"
                    />
                    <Text style={styles.label}>Photo:</Text>
                    <TextInput
                        style={styles.input}
                        value={displayPhoto}
                        onChangeText={(text) => setdisplayPhoto(text)}
                        placeholder="Enter url"
                    />
                    <View style={styles.form2}>
                        <View>
                            <Text style={styles.label}>Stock:</Text>
                            <TextInput
                                style={styles.input2}
                                value={stockProduct}
                                onChangeText={(e) => setstockProduct(e)}
                                placeholder="Enter stock"
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Stand:</Text>
                            <TextInput
                                style={styles.input2}
                                value={standProduct}
                                onChangeText={(e) => setstandProduct(e)}
                                placeholder="Enter category"
                            />
                        </View>
                    </View>
                    <Text style={styles.label}>Category:</Text>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(item) => setSelectedCategory(item)}
                    >
                        {categoryProduct.map((item, index) => (
                            <Picker.Item key={index} label={item.name} value={item.id} />
                        ))}
                    </Picker>

                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        style={styles.input}
                        value={descProduct}
                        onChangeText={(e) => setdescProduct(e)}
                        placeholder="Enter description"
                    />


                    <TouchableOpacity style={styles.button} onPress={() => handleEditProduct(id)}>
                        <Text style={styles.buttonText}>Edit Product</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProduct

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
        marginTop: 15,
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
    input2: {
        width: 150,
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
    },
    form2: {
        flexDirection: 'row',
        width: '100%',
        gap: 20

    }
})