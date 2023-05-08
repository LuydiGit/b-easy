import { View, StyleSheet, Image} from 'react-native';
import React from 'react';
import { Button, Input, Text } from '@rneui/themed';
import {useNavigation} from "@react-navigation/native";


const Register = () => {

    const navigation = useNavigation();

    const handleNavRegister = () =>{
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../../../assets/logo.png")}/>

            <Text h4 h4Style={{color: "white", marginTop:20}}>Bem Vindo!</Text>

            <Input containerStyle={{width: "60%", marginTop:60}}
            style={{color: "white"}}
            placeholder="e-mail"/>

        <Input containerStyle={{width: "60%", marginTop:10}}
            style={{color: "white"}}
            placeholder="senha"
            secureTextEntry={true}
            />

            <Button 
            buttonStyle={{ width: 180 }}
            containerStyle={{ marginTop: 30 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#fff"
            }}
      
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => alert("click")}
            title="REGISTRAR"
            titleStyle={{ marginHorizontal: 5 }}
            />

            <Text 
            onPress={ () => {  
                handleNavRegister();
            }}
            h4 h4Style={{color: "white", marginTop:20}}> Faça  Login </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(174, 49, 255, 1)",
        paddingTop: 150,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
});

export default Register