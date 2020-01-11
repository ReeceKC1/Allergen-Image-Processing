import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toolbar, Icon } from 'react-native-material-ui';
import { Ionicons } from '@expo/vector-icons'
import { globalState } from './state';

export default class AllergiesScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 2,
                flexDirection: 'column',
                alignItems: 'center'}}>
                <Text>
                </Text>
                <Text>
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold',}}>
                    Edit Allergens
                </Text>
                <Ionicons name="md-home" size={100} color="black" onPress={() => globalState.pageState.page = 0}/>
            </View>
        )
    }
}