import { ScrollView, StyleSheet, Text, View, TextInput, RefreshControl, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { API_URL } from '../../../constants/URL';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../constants/Color';

export default function EditCategory({ navigation, route}) {
    const [name, setName] = useState("");
    const { id } = route.params;

    const handleEditCategory = async (id) => {
        const token = await AsyncStorage.getItem("token");
        await axios.put(
            `${API_URL}category-admin-update/${id}`,
            {
                name: name,
            },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        navigation.navigate("_mainKantin", {
            editProductCallBack: [
                name,
            ],
        });
    };

    useEffect(() => {
        setName(name);
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.form}>
                    <Text style={styles.h1}>Edit Category</Text>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(e) => setName(e)}
                        placeholder="Edit title product"
                    />

                    <TouchableOpacity style={styles.button} onPress={() => handleEditCategory(id)}>
                        <Text style={styles.buttonText}>Edit Product</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

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


