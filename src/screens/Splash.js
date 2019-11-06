import React ,{ Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class Splash extends Component {
    componentDidMount = () => {
        //apos 2 sec navega p App 
        setTimeout(
            ()=> {this.props.navigation.navigate('App')},
            2000
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/imgs/cartaslamb.png')} 
                    style={styles.image} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbc6ab'
    },
    Image:{
        height:200,
        width:200,
        resizeMode: 'contain'
    },
    header:{
        fontSize:32,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'shelter',
    }
})