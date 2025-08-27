import React, { JSX, use } from "react";
import { StyleSheet, View, Text , useColorScheme} from "react-native";

function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return (
       <View style={styles.container}>
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
            color : 'white'
        },
        black : {
            color : 'black'
        }
    }
 )
export default AppPro;