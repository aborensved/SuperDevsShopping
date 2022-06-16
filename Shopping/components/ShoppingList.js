import { FlatList } from "react-native";


const ShoppingList = ({shopList}) => {
    
    const _renderItem = ({item: shopItem}) => {

        return(

            <Text>{shopItem}</Text>

        )

    }

    return(
        <FlatList
        data={shopList}
        renderItem={_renderItem}
        keyExtractor={(shopItem, index) => index}
        />
    )

}

export default ShoppingList;