import { StyleSheet } from "react-native";

export const ProfileScreenStyle =StyleSheet.create({
    container: {
        flex: 1,
    
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20B2AA',
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20, marginTop: 50
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 75,
      },
})