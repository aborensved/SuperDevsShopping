import CreateShoppingList from "../components/CreateShoppingList";
import Header from "../components/Header";
import {View, StyleSheet} from 'react-native';


const HomeScreen = ({navigation}) => {
    
    return(
        <View style={styles.container}>
        <Header style={styles.Header}/>
        <CreateShoppingList
        navigation={navigation}
        />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
   
}

})

export default HomeScreen;