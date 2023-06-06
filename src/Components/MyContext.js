import React, { createContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [landmark, setLandmark] = useState('');
    return (
        <MyContext.Provider value={{
            name,
            setName,
            age,
            setAge,
            mobileNumber,
            setMobileNumber,
            gender,
            setGender,
            address,
            setAddress,
            pincode,
            setPincode,
            landmark,
            setLandmark
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;

