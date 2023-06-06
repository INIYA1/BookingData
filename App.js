import React from 'react';
import NavigationScreen from './navigationScreen';
import MyContext from './src/Components/MyContext';

// import DatePickers from './src/Screens/DatePicker';



const App = () => {
  return (
<MyContext.Provider>
<NavigationScreen />
</MyContext.Provider>

  )
}

export default App