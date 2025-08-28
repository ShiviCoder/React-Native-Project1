import {} from 'react-native';
import { View , Text} from 'react-native';

const Props= ()=>{
    const name = 'Shivani'
    return(
        <View>
            <Text style={{color : 'white' , fontSize  : 40}}>Parent Component</Text>
            <User namee={name}/>
        </View>
    )
}

const User = (props) => {
   
    return(
        <View>
            <Text style={{color : 'white' , fontSize  : 40}}>{props.namee}</Text>
        </View>
    )
}


export default Props;