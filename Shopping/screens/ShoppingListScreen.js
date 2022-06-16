import {View, Text, Pressable, TextInput, StyleSheet} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import ShoppingList from '../components/ShoppingList';

const ShoppingListScreen = ({navigation}) => {

    const addItem = () => {
        console.log('new itemsss')
        setShopList()
    }

    const handleSetShopList = (text) => {
        setShopList(text)
    } 


    const [shopList, setShopList] = useState([])

    return(
    <View style={styles.shopListContainer}>
        <ShoppingList 
        shopList={shopList}
        />
        <TextInput
        style={styles.textinput}
        onChangeText={handleSetShopList}
        value={shopList}
      />
          <Pressable
            onPress={addItem}
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

export default ShoppingList;