import React, { JSX, use } from "react";
import { StyleSheet, View, Text , useColorScheme} from "react-native";

function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme() === 'light';
    return (
       <View style={[styles.container , {backgroundColor : isDarkMode ? 'black' : 'white'}]}>
          <Text style = {isDarkMode ? styles.white : styles.black}> Hello </Text>
       </View>
    )
}

 const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center'
        },
        white : {
            color : 'white',
            backgroundColor : 'black'
        },
        black : {
            color : 'black',
            backgroundColor  :'white'
        }
    }
 )
export default AppPro;