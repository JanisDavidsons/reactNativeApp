import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Footer: React.FC = () => {
    return <View style={footerStyle.container}></View>;
};

const footerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#3b3b3b',
        height: 120,
    },
});
