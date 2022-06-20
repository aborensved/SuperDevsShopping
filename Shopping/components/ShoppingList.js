import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Pressable,
  NativeEventEmitter,
} from "react-native";
import { useEffect } from "react";

const ShoppingList = ({ shopList }) => {
  const emitter = new NativeEventEmitter();

  const handleDelete = (shopInputItem) => {
    emitter.emit("delete", shopInputItem);
  };

  const _renderItem = ({ item: shopInputItem }) => {
    return (
      <View style={styles.container}>
        <View style={styles.listContent}>
          <Text style={styles.text}>{shopInputItem}</Text>
          <Pressable onPress={() => handleDelete(shopInputItem)} style={styles.deleteButton}>
            <Text style={styles.buttonText}>x</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={shopList}
      renderItem={_renderItem}
      keyExtractor={(shopList, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  text: {
    fontSize: 30,
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    width: '80%',
    borderBottomWidth: .5, 
    borderBottomColor: '#aaa', 
  },

  deleteButton: {
    backgroundColor: "red",
    marginHorizontal: 10,
    borderRadius: 6,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
  },

  buttonText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 5,
  }
});

export default ShoppingList;
