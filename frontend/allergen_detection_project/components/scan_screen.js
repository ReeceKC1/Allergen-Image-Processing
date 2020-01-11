import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Toolbar, Icon } from 'react-native-material-ui';
import HeaderBar from './header';
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-material-ui';
import { globalState, check_allergens } from './state';

export default class ScanScreen extends React.Component {
    img = null

    async componentDidMount(){
        const cameraPerms = await ImagePicker.getCameraPermissionsAsync()
        if (cameraPerms.granted === false){
            ImagePicker.requestCameraPermissionsAsync()
        }
        
        const cameraRollPerms = await ImagePicker.getCameraRollPermissionsAsync()
        if (cameraRollPerms.granted === false){
            ImagePicker.requestCameraRollPermissionsAsync()
        }
        console.log('a')

    }

    camera = async () => {
        console.log('b')
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        })
        if (result.type === ImagePicker.MediaTypeOptions.Images){
            this.img = result.uri
            if (this.img !== null){
                globalState.apiState.response = await check_allergens(this.img)
                globalState.pageState.page = 2
            }
        }
    }

    library = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        if (result.type === "image" && result.cancelled === false){
            this.img = result.uri
            if (this.img !== null){
                globalState.apiState.response = await check_allergens(this.img)
                globalState.pageState.page = 2
            }
        }
    }

    editAllergens = () => {
        globalState.pageState.page = 1
    }

    makeAllergenString = () => {
        let allergenString = ""
        for (let i = 0; i < globalState.apiState.allergens.length; i++){
            allergenString = allergenString + globalState.apiState.allergens[i] + " "
        }
        return allergenString
    }

    render(){
        return(
            <View>
                <View style={{flex: 2,
                flexDirection: 'column',
                alignItems: 'center'}}>
                    <Text>
                    </Text>
                    <Text>
                    </Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold',}}>
                        Allergen Scanning Tool
                    </Text>
                    <Text>
                        Developed by Reece Kemball-Cook
                    </Text>
                    <Ionicons name="md-camera" size={100} color="black" onPress={() => this.camera()}/>
                    <Ionicons name="md-archive" size={100} color="black" onPress={() => this.library()}/>
                    <Ionicons name="md-create" size={100} color="black" onPress={() => this.editAllergens()}/>
                    <Text style={{fontSize: 20, fontWeight: 'bold',}}>
                        Your Allergies:
                    </Text>
                    <Text style={{flexWrap: 'wrap'}}>
                        {this.makeAllergenString()}
                    </Text>
                </View>
            </View>
        )
    }
}