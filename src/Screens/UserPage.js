import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const GenderOptions = ['Male', 'Female '];

const UserPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');


  const handleGenderChange = (value) => {
    setGender(value);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Name'
        placeholderTextColor='black'
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput style={styles.input}
        placeholder='Age'
        placeholderTextColor='black'
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        placeholderTextColor='black'
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
      />

      <Picker
        style={styles.dropdown}
        selectedValue={gender}
        onValueChange={handleGenderChange}
      >
        <Picker.Item label="Select Gender" value="" />
        {GenderOptions.map((gender) => (
          <Picker.Item key={gender} label={gender} value={gender} />
        ))}
      </Picker>
      <TouchableOpacity style={styles.button}
      onPress={()=>navigation.navigate('Address')}>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '500', color: 'white' }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#40E0D0'
  },
  input: {
    top:40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  dropdown: {
    marginTop:50,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'pink',
    
  },
  button:{
    backgroundColor:'green',
    marginTop:20,
    justifyContent:'center',
    height:40,
    width:'50%',
    alignSelf:'center',
    borderRadius:10
  }
});

export default UserPage;
