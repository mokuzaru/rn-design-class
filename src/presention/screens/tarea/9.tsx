import { StyleSheet, View } from 'react-native'

export const HomerokScreen9 = () => {
  return (
    <View style={styles.container}>
        
        <View style={[styles.box, styles.purpleBox]}/>
        <View style={[styles.box, styles.orangeBox]}/>
        <View style={[styles.box, styles.blueBox]}/>
    </View>
  )
}


const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#28425B',
        //Todo tarea
        justifyContent: 'center',
        alignItems: 'center'

    },
    purpleBox: {
        backgroundColor: '#5856D6',
        bottom: -100
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        left: 100
    },
    blueBox:{
        backgroundColor: '#28C4D9',
    },
    box: {
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
    }
})