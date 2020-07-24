import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button, Header, Footer } from '../components/Index';


export const Login: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header headerText={'Login'}/>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <Input label="Email" />
                    <Input label="Password" />
                    <Button title="Login" onPress={() => Alert.alert('Login')} />
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <Footer />
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
});
