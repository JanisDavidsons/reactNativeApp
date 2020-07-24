import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button, Header, Footer } from '../components/Index';

export const SignUp: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header headerText={'Sign in'} />
                </View>
                <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
                    <Input label="Name" />
                    <Input label="Email" />
                    <Input label="Password" />
                    <Button title="Sign Up" onPress={() => Alert.alert('Sign Up')} />
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