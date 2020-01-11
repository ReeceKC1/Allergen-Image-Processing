import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toolbar, Icon } from 'react-native-material-ui';
import { globalState } from './state';

export default class HeaderBar extends React.Component {
    reRoute = (index) => {
        if (index === 0) {
            console.log(globalState.pageState.page)
            globalState.pageState.page = 0
            console.log(globalState.pageState.page)
        }
        else if (index === 1) {
            console.log(globalState.pageState.page)
            globalState.pageState.page = 1
            console.log(globalState.pageState.page)
        }
        else if (index === 2) {
            console.log(globalState.pageState.page)
            globalState.pageState.page = 2
            console.log(globalState.pageState.page)
        }
    }
    render(){
        return(
            <Toolbar
                style={{flex:1, color: 'black'}}
                centerElement="Allergen Detection"
                rightElement={{
                    menu: {
                        icon: "more",
                        labels: ["Scan for allergies", "Edit Allergies", "Response"]
                    }
                }}
                onRightElementPress={ (label) => { this.reRoute(label.index)}}
            />
        )
    }
}