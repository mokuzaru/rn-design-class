import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import {Dimensions} from 'react-native'


/* const {width,height} = Dimensions.get('window') */

export const DimensionScreen = () => {

    const {width, height} = useWindowDimensions()
  return (
    <View style={styles.container}>
        {/* <Text style= {styles.purpleBox}>Dimension Screen</Text> */}
        <View style= {{
            ...styles.purpleBox,
            width:width*0.5
            }} />

        <Text style={styles.title}>w: {width}, h: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({

    container: {
        width: '100%',
        backgroundColor: 'red',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%',
    },
    title: {
        fontSize:30,
        textAlign: 'center'
    }
})