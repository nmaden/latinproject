import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Linking,
    KeyboardAvoidingView,
    Picker,
    TouchableOpacity,
    AsyncStorage,Alert
 
} from "react-native";
import { whileStatement } from "@babel/types";

import Select from 'react-native-select-plus';
export default class RegistrationPage extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
            name: '',
            surname: '',
            country: '',
            phone: '',
           
            value: '',
            items: [
              { key: 1, label: "Ақмола облысы" },
              { key: 2, label: "Ақтөбе облысы" },
              { key: 3, label: "Алматы облысы" },
              { key: 4, label: "Атырау облысы" },
              { key: 5, label: "Батыс Қазақстан облысы" },
              { key: 6,  label: "Жамбыл облысы" },
              { key: 7,  label: "Қарағанды облысы" },
              { key: 8,  label: "Қызылорда облысы" },
              { key: 9,  label: "Қостанай облысы" },
              { key: 10, label: "Маңғыстау облысы" },
              { key: 11, label: "Түркістан облысы" },
              { key: 12, label: "Павлодар облысы" },
              { key: 13, label: "Солтүстік Қазақстан облысы" },
              { key: 14, label: "Шығыс Қазақстан облысы" }, 
              { key: 15, label: "Нұр-Сұлтан қаласы" },
              { key: 16, label: "Алматы қаласы" },
              { key: 17, label: "Шымкент қаласы" },
              { key: 18, label: "Қарағанды қаласы" },
            ],
            
          
        };
       
    }

    static navigationOptions = {
        header: 'none'
    }
    onSelectedItemsChange = (key, value) => {
        this.setState({ value: value });
    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                <View  style={styles.secondContainer}>
                <Text style={{color: 'white',alignSelf: 'center', fontWeight: 'bold', fontSize: 25,marginBottom: 15}}>ЖҮЙЕГЕ КІРУ</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>ЛОГИН</Text>
                <TextInput
                    style={{ height: 40, width: 250, marginBottom: 10, borderRadius: 20, backgroundColor: 'white',paddingLeft: 10 }}
                    selectionColor={'#8c51d9'}
                    onChangeText={phone =>this.setState({phone})}
                    value={this.state.phone}
                />
                <Text style={{color: 'white', fontWeight: 'bold'}}>АТЫҢЫЗ</Text>
                <TextInput
                    style={{ height: 40, width: 250, marginBottom: 10, borderRadius: 20, backgroundColor: 'white',paddingLeft: 10 }}
                    selectionColor={'#8c51d9'}
                    onChangeText={name =>this.setState({name})}
                    value={this.state.name}
                />
                 <Text style={{color: 'white', fontWeight: 'bold'}}>ТЕГІҢІЗ</Text>
                <TextInput
                    style={{ height: 40, width: 250, marginBottom: 10, borderRadius: 20, backgroundColor: 'white',paddingLeft: 10 }}
                    selectionColor={'#8c51d9'}
                    onChangeText={surname =>this.setState({surname})}
                    value={this.state.surname}
                />

                <Text style={{ color: 'white', fontWeight: 'bold'}}>ОБЛЫС</Text>
                <Select
                style={{ height: 40, width: 250, marginBottom: 10, borderRadius: 20, backgroundColor: 'white'}}
                data={this.state.items}
                width={250}
                placeholder="Облысты таңдаңыз ..."
                onSelect={this.onSelectedItemsChange.bind(this)}
                search={true}
                searchPlaceholder ="Іздеу"
                />
                <TouchableOpacity
                 style={styles.button}  onPress={  
                this.handleClick}><Text  style={{textAlign: 'center', fontWeight: 'bold', color: "#8c51d9"}} onPress={this.handleClick} >КЕЛЕСІ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={styles.button}  onPress={() => this.props.navigation.navigate('Welcome')}><Text  style={{textAlign: 'center', fontWeight: 'bold', color: "#8c51d9"}}>КЕРІ</Text>
                </TouchableOpacity>
            </View>
            
          
                
            </View>
            </KeyboardAvoidingView>
            
        );
    }
    handleClick = () => {
        if( this.state.name!='' &&  this.state.value!='') {
        
            fetch('http://latinapi.herokuapp.com/v2/insert_data/insert', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    surname: this.state.surname,
                    country: this.state.value,
                    phone: this.state.phone,
                    point: ''
                })
            })
            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.error=="user exist") {
                    Alert.alert("Хабарлама","Бұл логин тіркелген");
                }
                else {
                    Alert.alert("Хабарлама","Сәтті тіркелдіңіз");
                    this.props.navigation.navigate('Welcome');
                }
            }).catch((error) => {
                console.error("this is error "+error);
            });
            
         
        }
        else {
            alert("Толтырыңыз");
        }
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c51d9'
    },
    text: {
       textAlign: 'center',
       fontSize: 10,
       fontWeight: 'bold',
       color: "white",
       marginBottom: 5
    },
    textContainer: {
        
    },
    button: {
        padding: 10,
        width: 250,
        borderRadius: 20,
        backgroundColor:'white',
        color:'#8c51d9',
        alignSelf: 'center',
        marginBottom: 10,
    },
    
});