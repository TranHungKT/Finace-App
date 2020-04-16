import React, { Component } from 'react';
import { Text, StyleSheet,Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'native-base';


const screenWidth = Math.round(Dimensions.get('window').width);
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <LinearGradient
                start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                locations={[0.1, 0.2, 0.6]}
                colors={['#5979D8', '#375AC0', '#1E3787']}
                style={styles.linearGradient}
            >
                <Icon 
                    name = 'arrow-forward' 
                    onPress = {()=> {this.props.navigation.navigate('authenticated')}}
                    style = {styles.icon} />
                <Text style={styles.buttonText}>
                    Finsma
                </Text>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 64,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
        position: 'relative',
        top: '30%',
        fontWeight: 'bold'
    },
    icon : {
        position: 'absolute',
        top: 20,
        left: screenWidth - 50
    }
});

export default Splash;