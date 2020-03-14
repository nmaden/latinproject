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
    AsyncStorage
 
} from "react-native";
import Welcome from './WelcomePage';
import { whileStatement } from "@babel/types";

export default class SignPage extends Component {

    static navigationOptions = {
        header: 'none'
    }
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
            name: '',
            country: '',
            value: '',
            phone: '',
            unique_id: ''
        };
       
    }

         
        
            async checkUserSignedIn(){
                let context = this;
                try {
                    let value = await AsyncStorage.getItem('user');
                    if (value != null){
                        return true; 
                    }
                    else {
                        return false;
                    }
                } catch (error) {
                    // Error retrieving data
                }
            }

            
    componentDidMount () {
        setTimeout(() => this.setState({timePassed: true}), 4000)
    }
   
    render() {
     
            return  this.state.timePassed ? (
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
                    <Text style={{color: 'white', fontSize: 8}}>Қолдануды жалғастыру үшін төмендегі сілтеме бойынша</Text>
                    <Text style={{color: 'white', fontSize: 8}}>Qazaq Latyn пернетақтасын қондырыңыз</Text>
                    <Text
                            style={{ color: "#5fc7f1",marginBottom: 10,alignSelf:'center', textDecorationLine: 'underline' }}
                            onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.qazaqlatinkeyboard&hl=ru')}
                            >Qazaq Latyn Keyboard</Text>
                    <TouchableOpacity
                     style={styles.button}  onPress={  
        this.handleClick}><Text  style={{textAlign: 'center', fontWeight: 'bold', color: "#8c51d9"}} onPress={this.handleClick} >КЕЛЕСІ</Text></TouchableOpacity>
                                                   <TouchableOpacity
                     style={styles.button}  onPress={() => this.props.navigation.navigate('RegistrationPage')}><Text  style={{textAlign: 'center', fontWeight: 'bold', color: "#8c51d9"}}  >ТІРКЕЛУ</Text></TouchableOpacity>
                </View>
              
                    
                </View>
                </KeyboardAvoidingView>
            ):  <Welcome/> ;
        // }
        
    }
    
    handleClick = () => {
       
        if( this.state.phone!='') {
            fetch('http://latinapi.herokuapp.com/v2/insert_data/sign', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: this.state.phone
                })
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("coming to check");
                if(responseData) {
                  
                    let UID123_object = {
                        phone: this.state.phone,
                        user_id: responseData.unique_id,
                        name: 'Default',
                    };
                   
                    let keys = ['phone', 'user_id','name'];
                   
                        AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
       
                            AsyncStorage.getItem('UID123', (err, result) => {
                            //   console.log(JSON.parse(result).user_id)
                            });
   
                        }); 
                
        
                    this.props.navigation.navigate('Home',{id:responseData.unique_id });
                }
                else {
                    alert("Бұл логин жүйеге тіркелмеген");
                }
             
            }).catch((error) => {
                console.error(error);

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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c51d9'
    },
    secondContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
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
    text: {
       fontSize: 20
    }
});