import React, { JSX, use } from "react";
import { StyleSheet, View, Text, Button, useColorScheme, Alert } from "react-native";
import CompanyData from "./components/CompanyData";
import Props from "./components/Props";
import FlatCards from "./components/FlatCards";
function AppPro(): JSX.Element {
    // const isDarkMode = useColorScheme() === 'light';
    function press() {
        Alert.alert('Hello! I am Pressed');
    }

    function pressMe() {
        Alert.alert("Hello! I am Pressed too")
    }
    return (
        //    <View style={[styles.container , {backgroundColor : isDarkMode ? 'black' : 'white'}]}>
        //       <Text style = {isDarkMode ? styles.white : styles.black}> Hello </Text>
        //    </View>
        <View> 
            {/* <Text style={[styles.white, { fontSize: 30 }]}>Hello World</Text>
            <Button title='Press Me' onPress={press}></Button>
            <Text style={[styles.white, { fontSize: 30 }]}>Hello Second World</Text>
            <Button title='Press Me to' onPress={pressMe}></Button> */}
            {/* <Props/> */}
            <FlatCards/>
        </View>
    )
}



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        white: {
            color: 'white',
            backgroundColor: 'black'
        },
        black: {
            color: 'black',
            backgroundColor: 'white'
        }
    }
)
export default AppPro;