import {View, Text, Pressable, TextInput, StyleSheet, NativeEventEmitter} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import ShoppingList from '../components/ShoppingList';

const ShoppingListScreen = ({ navigation}) => {

    const [shopList, setShopList] = useState([])    
    const [shopInput, setShopInput] = useState('')

    const emitter = new NativeEventEmitter()

    const deleteListener = emitter.addListener("delete", (shopInputName) => {
        setShopList(prev => prev.filter(shopInput => shopInput !== shopInputName))
    })

    useEffect(() => {
        return() => deleteListener.remove()
    }, [shopList]) 

    const handleSetShopList = () => {
        setShopList((prev) => prev.concat(shopInput))
    } 

    const handleShopInput = (text) => {
        setShopInput(text)
    }

   

    return(
    <View style={styles.shopListContainer}>
        <ShoppingList 
        shopList={shopList}
        />
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.textinput}
            onChangeText={handleShopInput}
            
            value={shopInput}
            />
          <Pressable
            onPress={handleSetShopList}
            style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0 }, styles.button]}
            >
            <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    </View>

    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        height: '20%',
        backgroundColor: 'lightblue',
        marginBottom: 30, 
    },
    
    textinput: {
        width: '69%',
        marginHorizontal: 10,
        borderRadius: 6,
        padding: 10,
        backgroundColor: 'white',
        fontSize: 20,
    },

    button: {
        backgroundColor: "dodgerblue",
        marginHorizontal: 10,
        borderRadius: 6,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },

    buttonText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },  
   
    shopListContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
   
})

export default ShoppingListScreen;