import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text,StyleSheet } from 'react-native';
import MyContext from '../Components/MyContext';
import { AddressScreenStyle } from '../Styles/AddressScreenStyle';

const AddressScreen = ({ navigation }) => {
  const { address, setAddress, pincode, setPincode, landmark, setLandmark } = useContext(MyContext)
  // const [address, setAddress] = useState('');
  // const [pincode, setPincode] = useState('');
  // const [landmark, setLandmark] = useState('');
  const textInput = (placeholder, value, onChangeText) => {
    return (
      <TextInput style={AddressScreenStyle.input}
        placeholder={placeholder}
        placeholderTextColor='black'
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    )
  }
  return (
    <View style={AddressScreenStyle.container}>
      {textInput('Address', address, setAddress)}
      {textInput('Pincode', pincode, setPincode)}
      {textInput('Landmark', landmark, setLandmark)}
      <TouchableOpacity style={AddressScreenStyle.button}
        onPress={() => navigation.navigate("ProfileImage")}>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '500', color: 'white' }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;