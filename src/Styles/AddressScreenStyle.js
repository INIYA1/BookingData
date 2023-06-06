import { StyleSheet } from "react-native";

export const AddressScreenStyle =StyleSheet.create({
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
})