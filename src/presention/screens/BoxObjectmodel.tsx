import { StyleSheet, Text, View } from "react-native"


export const BoxObjectmodel = () => {
  return (
    <View style={ styles.container}>
        {/* <Text style={styles.title}>BoxObject</Text> */}
        <View style={ styles.purplebox}>
         <Text style={{color: 'white'}}> Hello World</Text>
        </View>
        
    </View>
  )
}


const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 50,
        paddingHorizontal: 30 ,
        paddingVertical: 10,
        borderWidth: 10,
    },
    purplebox: {
        height: 30,
        backgroundColor: 'purple',
        /* margin: 20, */
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5,
    }
})
