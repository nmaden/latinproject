import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    KeyboardAvoidingView
} from "react-native";
import { whileStatement } from "@babel/types";

export default class Welcome extends Component {

    static navigationOptions = {
        header: 'none'
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 27, }}>AQYLDY</Text>
                <Text  style={{color: 'white', fontWeight: 'bold',fontSize: 27, marginBottom: 30}}>ÁLIPBI</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Ақтөбе облысының {'\n'} тілдерді дамыту басқармасы
                    </Text>
                    <Text style={styles.text}>ММ</Text>
                    <Text style={styles.text}>Тілдерді оқыту орталығы {'\n'} КММ тапсырысы бойынша</Text>
                </View>
            </View>
            </KeyboardAvoidingView>
        );
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
        
    }
});