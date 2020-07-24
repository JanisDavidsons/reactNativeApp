import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#EF3651',
        borderRadius: 25,
        height: 48,

    },
    text: {   
        color: '#F5F5F4',
        fontSize: 14,
        lineHeight: 20,
        paddingVertical: 14,
        textTransform: 'uppercase',
    }
})
