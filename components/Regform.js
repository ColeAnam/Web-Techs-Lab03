import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Regform() {

    const [valFN, setFName] = React.useState("");
    const [valLN, setLName] = React.useState("");
    const [valAd, setAddr] = React.useState("");

    const sendBtnClicked = () => {
        alert(`${valFN}, your info was successfully sent`);
    }

    const clearBtnClicked = () => {
        alert('Fields Cleared');
        setFName("");
        setLName("");
        setAddr("");
    }

        return (
            <View style={styles.regform}>
                <Text style={styles.title}>Registration</Text>

                <Text style={styles.header}>First Name</Text>
                <TextInput style={styles.textinput} onChangeText={text=>setFName(text)} value={valFN}/>

                <Text style={styles.header}>Last Name</Text>
                <TextInput style={styles.textinput} onChangeText={text=>setLName(text)} value={valLN}/>

                <Text style={styles.header}>Email Address</Text>
                <TextInput style={styles.textinput} onChangeText={text=>setAddr(text)} value={valAd}/>

                <TouchableOpacity style={styles.buttonS} onPress={sendBtnClicked}>
                    <Text style={styles.btntext}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonC} onPress={clearBtnClicked}>
                    <Text style={styles.btntext}>Clear</Text>
                </TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 30,
        color: '#fff',
        paddingLeft: 50,
        paddingBottom: 50,
    },
    header: {
        fontSize: 20,
        color: '#fff',
        paddingBottom: 10,
        paddingTop: 15,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingLeft: 15,
    },
    buttonS: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#59cbbd',
        marginTop: 70,
        borderRadius: 25,
    },
    buttonC: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ff0000',
        marginTop: 30,
        borderRadius: 25,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    },
});