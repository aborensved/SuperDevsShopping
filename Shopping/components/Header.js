import {View,Text, StyleSheet} from 'react-native'

const Header = () => {

return (
    <View style={styles.container}>
        <Text style={styles.header}>Super-Shopping</Text>
        <Text style={styles.text}>Next gen shopping "Shopping in the future is here"-Melon Husk</Text>
    </View>

)


}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontWeight: 'bold',
       
    },
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
        paddingTop: 20
    },
    text: {
        fontSize: 15,
        paddingTop: 35,
        color: '#3297a8'
    }
    
})

export default Header