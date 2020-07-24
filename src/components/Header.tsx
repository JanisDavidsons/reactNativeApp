import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
    headerText:string
}

export const Header: React.FC<Props> = ({headerText}) => {
    return (
        <View>
            <Text style={headerStyle.text}>{headerText}</Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold',
    },
});
