import {View, Text, Pressable, TextInput, StyleSheet, NativeEventEmitter} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import ShoppingList from '../components/ShoppingList';

const ShoppingListScreen = ({navigation}) => {

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
        <TextInput
        style={styles.textinput}
        onChangeText={handleShopInput}
        value={shopInput}
      />
          <Pressable
            onPress={handleSetShopList}
            style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0 }]}
            >
            <Text>+</Text>
            </Pressable>
        </View>

    )

}

const styles = StyleSheet.create({
    textinput: {
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        width: '69%',
    },
   
    shopListContainer: {
        flex:1,
        justifyContent: 'space-evenly'
    },
   
})

export default ShoppingListScreen;