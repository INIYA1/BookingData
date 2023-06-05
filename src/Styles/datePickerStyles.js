import { StyleSheet } from "react-native";

export const DatePickerStyle =StyleSheet.create({
    container: {
        alignItems: 'center',
        top: 90,
      },
      labelButton: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
      },
      labelText: {
        fontSize: 16,
        color: '#000',
      },
      datePicker: {
        width: '80%',
        marginBottom: 10,
      },
      daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      dayButton: {
        marginTop:30,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:2
      },
      selectedDayButton: {
        backgroundColor: '#007AFF',
      },
      dayText: {
        fontSize: 16,
        color: '#000',
      },
      selectedDayText: {
        color: 'yellow',
      },
      selectedDateContainer: {
        height:150,
        marginTop: 20,
        backgroundColor:'white',
        elevation:6,
        borderRadius:8,
        width:300,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:50
      },
      selectedDateText: {
        fontSize: 16,
        color: '#000',
        justifyContent:'center',
        margin:5
      },
      selectedDateText1: {
        fontSize: 16,
        color: 'red',
        justifyContent:'center',
        margin:5
      },
})