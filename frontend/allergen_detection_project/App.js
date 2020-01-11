import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from './components/header'
import ResponseScreen from './components/response_screen'
import ScanScreen from './components/scan_screen'
import AllergiesScreen from './components/allergies_screen'
import { globalState} from './components/state'
import { observer } from "mobx-react";

const App = observer(class App extends React.Component{
  constructor(props){
    super(props);
    globalState.apiState.allergens = []
  }
  
  render(){
    return (
      <View >
        {globalState.pageState.page === 0 && 
        <ScanScreen/>}
        {globalState.pageState.page === 1 && 
        <AllergiesScreen/>}
        {globalState.pageState.page === 2 && 
        <ResponseScreen/>}
      </View>
    );}
})


export default App