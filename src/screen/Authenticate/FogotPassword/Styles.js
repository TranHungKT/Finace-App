import {StyleSheet,Dimensions} from 'react-native';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);


export default Styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 40,
        borderBottomWidth: 2,
        marginRight: 40
    },
    button: {
        flexDirection: 'row',
        position: 'relative',
        top: '60%'
    },
    buttonSmall:{
        borderRadius: 55,
        height: 50,
        marginHorizontal: 20,
        width: screenWidth/ 3,
        borderWidth: 3,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    textButtonSmall: {
        fontSize: 30,
        color: '#375AC0',
        fontFamily: 'Poppins'
    },
    buttonBig: {
        width: screenWidth/ 2,
        borderRadius: 55,
        height: 50,
        justifyContent: 'center'
    },
    textButtonBig: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        marginHorizontal: 20,
        fontFamily: 'Poppins'
    },
})