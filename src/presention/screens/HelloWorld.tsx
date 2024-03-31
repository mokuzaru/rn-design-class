import { StyleSheet, Text, View } from "react-native"


export const HelloWorld = () => {
  return (
    <View style={ styles.container }>
        
        <Text style={ styles.title }>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})