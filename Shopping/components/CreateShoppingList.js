import { Pressable, View, Text, StyleSheet} from "react-native";
import ShoppingListScreen from "../screens/ShoppingListScreen";
import { useNavigation } from "@react-navigation/native";


const CreateShoppingList = ({navigation}) => {

    const addList = () => {
        navigation.navigate('ShoppingListScreen')
    }

    return(
        <View style={styles.container}>
          <Pressable 
            onPress={addList}
            style={({pressed}) => [styles.button,{opacity: pressed ? 0.5 : 1.0 }]}
            >
                <Text style={styles.buttonText}>Add new list</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center', 
        height: '50%',
        width: '80%'

    },
    buttonText: {
        fontSize: 30,
        color: '#fff'
    },

    button: {
        backgroundColor: '#ababef',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    }
    
})



export default CreateShoppingList;