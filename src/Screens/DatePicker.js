import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { monthdata } from '../Components/monthdata'
import { DatePickerStyle } from '../Styles/datePickerStyles';


const DatePickers = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [bookingData, setBookingData] = useState(null); // State to store the fetched data

  const handleDayPress = (day) => {
    setSelectedDate(day);
    const updatedDate = new Date(date.getFullYear(), date.getMonth(), day);
    setDate(updatedDate);
    fetchBookingData(updatedDate); // Fetch the data for the selected date
  };
// Date change in the date picker
  const handleDateChange = ( event ,selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setSelectedDate(currentDate.getDate());
    setDate(currentDate);
    fetchBookingData(currentDate); // Fetch the data for the selected date
  };

  const fetchBookingData = (selectedDate) => {
    const formattedDate = moment(selectedDate).format('DD-MM-YYYY');
    const data = monthdata[formattedDate];
    setBookingData(data);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const formattedDate = moment(date).format(' DD : MMMM : YYYY');

  return (
    <View style={DatePickerStyle.container}>
      <TouchableOpacity style={DatePickerStyle.labelButton} onPress={openDatePicker}>
        <Text style={DatePickerStyle.labelText}>{formattedDate}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <View style={DatePickerStyle.daysContainer}>
        {days.map((day) => (
          <TouchableOpacity style={[DatePickerStyle.dayButton, selectedDate === day && DatePickerStyle.selectedDayButton]}
            key={day}
            onPress={() => handleDayPress(day)} >
            <Text style={[DatePickerStyle.dayText, selectedDate === day && DatePickerStyle.selectedDayText,]}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {bookingData ? (
        <View style={DatePickerStyle.selectedDateContainer}>
          <Text style={DatePickerStyle.selectedDateText}>Selected Date : {selectedDate} {moment(date).format('MMMM')} {moment(date).format('YYYY')}</Text>
          <Text style={DatePickerStyle.selectedDateText}>Booking Count : {bookingData.bookingCount}</Text>
          <Text style={DatePickerStyle.selectedDateText}>Members: {bookingData.memberName.join(' , ')}</Text>
        </View>
      ) : (
        <View style={DatePickerStyle.selectedDateContainer}>
          <Text style={DatePickerStyle.selectedDateText}>Selected Date: {selectedDate} {moment(date).format('MMMM')} {moment(date).format('YYYY')}</Text>
          <Text style={DatePickerStyle.selectedDateText1}>No data available for the selected date.</Text>
        </View>
      )}
    </View>
  );
};

export default DatePickers;