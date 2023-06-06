import { StyleSheet } from "react-native";

export const UserScreenStyle =StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#40E0D0',
      },
      input: {
        top: 40,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
      },
      dropdown: {
        marginTop: 50,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'pink',
      },
      button: {
        backgroundColor: 'green',
        marginTop: 20,
        justifyContent: 'center',
        height: 40,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
      },
      buttonText: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
      },
})