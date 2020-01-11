import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toolbar, Icon } from 'react-native-material-ui';
import { Ionicons } from '@expo/vector-icons'
import { globalState } from './state';

export default class ResponseScreen extends React.Component {

    render(){
        if (!globalState.pageState.loading){
            return(
                <View style={{flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center'}}>
                    {globalState.apiState.response === "clean" && 
                    <Ionicons name="md-checkmark-circle" size={250} color="green" />}
                    {globalState.apiState.response === "contaminated" && 
                    <Ionicons name="md-close-circle" size={250} color="red" />}
                    <Text>{globalState.apiState.allergens}</Text>
                    <Ionicons name="md-home" size={100} color="black" onPress={() => globalState.pageState.page = 0}/>
                </View>
            )
        }
        else if (globalState.pageState.loading){
            return(
                <View style={{flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        Loading...
                    </Text>
                    <Ionicons name="md-home" size={100} color="black" onPress={() => globalState.pageState.page = 0}/>
                </View>
            )
        }
    }
}