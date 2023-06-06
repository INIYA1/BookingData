import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MyContext from '../Components/MyContext';
import { ProfileScreenStyle } from '../Styles/ProfileScreenStyle';

export default function ProfileScreen() {
  const { name, age, mobileNumber, address, pincode, landmark, gender } = useContext(MyContext)


  const [pic, setPic] = useState(null);

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Permission to access media library is required.');
    }
  };

  const uploadImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.cancelled) {
        setPic(result.uri);
      }
    } catch (error) {
      console.log('Error in uploading image:', error);
    }
  };

  return (
    <View style={ProfileScreenStyle.container}>
      <Text style={ProfileScreenStyle.headerText}>Upload your Profile Image:</Text>
      <TouchableOpacity onPress={uploadImage}>
        {pic ? (
          <Image style={ProfileScreenStyle.image} source={{ uri: pic }} />
        ) : (
          <Text>No Image Selected</Text>
        )}
      </TouchableOpacity>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{fontWeight:'bold', fontSize:18}}>Personal Details :- </Text>
        <Text> Name : {name}</Text>
        <Text> Age : {age} </Text>
        <Text> Gender : {gender} </Text>
        <Text> MobileNumber : {mobileNumber} </Text>

        <View>
          <Text style={{fontWeight:'bold', fontSize:18}}> Address :-  </Text>
          <Text> StreetName : {address}</Text>
          <Text> Pincode : {pincode} </Text>
          <Text> landmark : {landmark} </Text>
        </View>
      </View>
    </View>

  );
}
