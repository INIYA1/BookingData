import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const AddressPage = ({ navigation }) => {
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');


  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Address'
        placeholderTextColor='black'
        value={address}
        onChangeText={(text) => setAddress(text)}
      />


      <TextInput
        style={styles.input}
        placeholder="Pincode"
        keyboardType="numeric"
        placeholderTextColor='black'

        value={pincode}
        onChangeText={(text) => setPincode(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Landmark"
        placeholderTextColor='black'
        value={landmark}
        onChangeText={setLandmark}
      />
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("ProfileImage")}>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '500', color: 'white' }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#20B2AA'
  },
  input: {
    top: 50,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    top: 50,
    backgroundColor: 'green',
    marginTop: 20,
    justifyContent: 'center',
    height: 40,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10
  }
});

export default AddressPage;
