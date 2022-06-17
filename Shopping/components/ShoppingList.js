import { FlatList, Text, StyleSheet,View, Pressable, NativeEventEmitter} from "react-native";
import { useEffect } from "react";


const ShoppingList = ({shopList}) => {

    const emitter = new NativeEventEmitter()

    const handleDelete = (shopInputItem) => {
        emitter.emit('delete', (shopInputItem))
    }

    const _renderItem = ({item: shopInputItem}) => {
        
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{shopInputItem}</Text>
                <Pressable onPress={() => handleDelete(shopInputItem)}>
                    <Text>X DELETE</Text>
                </Pressable>
            </View>
        )
    }

    return(
        <FlatList
        data={shopList}
        renderItem={_renderItem}
        keyExtractor={(shopList, index) => index}
        />
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    text: {
        fontSize: 30,
    }
})

export default ShoppingList;