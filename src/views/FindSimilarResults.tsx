import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Header, Footer } from '../components/Index';

export const FindSimilarResults: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                </View>
                <View style={{flex: 1, justifyContent: 'space-evenly'} }>
                    <Text style= {style.textStyle}>Finding similar results...</Text>
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
        alignItems:'center'
    },
    textStyle:{
        textAlign:'center',
        width:261,
        fontSize:34,
        color:'white',
    }
});
