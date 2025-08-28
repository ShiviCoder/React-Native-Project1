import {View , Text , Button,Alert} from 'react-native'

const CompanyData = () => {
    let data = 100;

    function press(){
        data = 1000;
        Alert.alert(data.toString());
    }
    return (
        <View>
            <Text style={{color : 'white'}}>{data}</Text>
            <Text style={{color: 'yellow',fontSize : 20}}>Name : Shivani</Text>
            <Text style={{color: 'yellow',fontSize : 20}}>Email : shivani123@gmail.com</Text>
            <Text style={{color: 'yellow',fontSize : 20}}>Address : Indore</Text>
            <Text style={{color: 'yellow',fontSize : 20}}>Mob No : 9883288392</Text>

            <Button title="Contact Me" onPress={press}></Button>
        </View>
    )
}

export default CompanyData;