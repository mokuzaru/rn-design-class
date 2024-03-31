import { SafeAreaView } from "react-native"

//import IonIcon from 'react-native-vector-icons/Ionicons'
import { HelloWorld } from "./src/presention/screens/HelloWorld"

export const App = () => {
  return (
      <SafeAreaView style={{flex:1}}>
        <HelloWorld/>
      </SafeAreaView>
    
  )
}