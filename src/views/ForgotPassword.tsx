import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button, Header, Footer } from '../components/Index';

export const ForgotPassword: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header headerText={'Forgot password'} />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <Input label="Email" />
                    <Button title="Send" onPress={() => Alert.alert('Forgot password')} />
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
