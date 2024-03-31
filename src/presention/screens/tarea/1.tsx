import { StyleSheet, View } from 'react-native'

export const HomerokScreen1 = () => {
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
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        flex:1
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        height: 'auto',
        minHeight: 100,
        flex:6
    },
    blueBox:{
        backgroundColor: '#28C4D9',
        flex:1
    },
    box: {
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
    }
})