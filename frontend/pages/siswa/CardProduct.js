import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Colors from '../../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from '../../constants/URL'
import { Ionicons } from '@expo/vector-icons';
import formatToRp from '../../constants/FormatRp';
import formatText from '../../constants/FormatText';

const ProductCard = ({  name, photo, price, role, stand, stock, id, navigation}) => {
     const [quantity, setQuantity] = useState(1);

     const handleAddToCart = async () => {
          try {
               const token = await AsyncStorage.getItem("token");
               setQuantity("1");
               Alert.alert(
                    "Success",
                    "Check your cart!",
                    [
                         {
                              text: "OK",
                              onPress: () => {
                                   navigation.navigate("Cart", {
                                        successCart: [quantity.toString(), price, id],
                                   });
                              },
                         },
                    ],
                    { cancelable: false }
               );
               await axios.post(
                    `${API_URL}addcart`,
                    {
                         products_id: id,
                         price: price,
                         quantity: parseInt(quantity),
                    },
                    {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    }
               );
          } catch (e) {
               console.log(e);
          }
     };


     return (
               
               <View style={styles.container}>
                    <Image source={{ uri: photo }} style={styles.image} />
                    <View style={styles.detailsContainer}>
                         <Text style={styles.title}>{formatText(name)}</Text>
                         <Text style={styles.subtitle}>Stock: {stock}</Text>
                         <Text style={styles.price}>{formatToRp(price)}</Text>
                         <View style={styles.addToCartContainer}>

                              <View style={styles.quantityContainer}>
                                   <TouchableOpacity
                                        style={styles.quantityButton}
                                        onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                   >
                                        <Text style={styles.quantityButtonText}>-</Text>
                                   </TouchableOpacity>
                                   <Text style={styles.quantityText}>{quantity}</Text>
                                   <TouchableOpacity
                                        style={styles.quantityButton}
                                        onPress={() => setQuantity(quantity + 1)}
                                   >
                                        <Text style={styles.quantityButtonText}>+</Text>
                                   </TouchableOpacity>
                              </View>
                              <TouchableOpacity
                                   style={styles.addToCartButton}
                                   onPress={handleAddToCart}
                              >
                                   {/* <Text style={styles.addToCartButtonText}>Add Cart</Text> */}
                                   <Ionicons name="cart-outline" size={20} color={Colors.green} />
                              </TouchableOpacity>
                         </View>
                    </View>
               </View>
     );
};

export default ProductCard;

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
          alignItems: 'center',
          height: 120
     },
     image: {
          width: 130,
          height: 120,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
     },
     detailsContainer: {
          flex: 1,
          padding: 15,
     },
     title: {
          fontSize: 16,
          fontWeight: 'bold',
     },
     subtitle: {
          fontSize: 12,
          marginBottom: 3,
          color: '#555',
     },
     price: {
          fontSize: 15,
          fontWeight: 'bold',
          color: Colors.green
     },
     addToCartContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          
     },
     addToCartButton: {
          // backgroundColor: Colors.green,
          padding: 8,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.green,

     },
     addToCartButtonText: {
          color: Colors.green,
          fontWeight: 'bold',
          fontSize: 12,
     },
     quantityContainer: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     quantityButton: {
          // backgroundColor: Colors.grey,
          padding: 5,
          borderRadius: 5,
     },
     quantityButtonText: {
          fontSize: 18,
          color: '#555',
     },
     quantityText: {
          fontSize: 16,
          marginHorizontal: 13,
     },
});
