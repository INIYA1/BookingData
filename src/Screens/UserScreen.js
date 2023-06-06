import React, { useContext } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MyContext from '../Components/MyContext';
import { UserScreenStyle } from '../Styles/UserScreenStyle';



const GenderOptions = ['Male', 'Female'];

const UserScreen = ({ navigation }) => {

  const {name,setName,age,setAge,mobileNumber,setMobileNumber, gender,setGender} =  useContext(MyContext)
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [mobileNumber, setMobileNumber] = useState('');
  // const [gender, setGender] = useState('');
  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleNextPress = () => {
    navigation.navigate('Address');
  };
  const textInput = (placeholder, value, onChangeText) => {
    return (
      <TextInput style={UserScreenStyle.input}
        placeholder={placeholder}
        placeholderTextColor='black'
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    )}
  return (
    <View style={UserScreenStyle.container}>
      {textInput('Name', name, setName)}
      {textInput('Age', age, setAge)}
      {textInput('MobileNumber', mobileNumber, setMobileNumber)}
      <Picker
        style={UserScreenStyle.dropdown}
        selectedValue={gender}
        onValueChange={handleGenderChange}>
        <Picker.Item label="Select Gender" value="" />
        {GenderOptions.map((gender) => (
          <Picker.Item key={gender} label={gender} value={gender} />
        ))}
      </Picker>

      <TouchableOpacity style={UserScreenStyle.button} onPress={handleNextPress}>
        <Text style={UserScreenStyle.buttonText}>Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default UserScreen;