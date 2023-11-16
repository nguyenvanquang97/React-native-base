import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text } from 'react-native';

import TextStyle from '../assets/styles/TextStyle';



interface FText {
    textStyle?: keyof typeof TextStyle,
    color?: string,
    children: React.ReactNode;
    textAlign?: 'center' | 'left' | 'right' | 'auto'
}

const FText: React.FC<FText> = ({
    textStyle,
    color,
    children,
    textAlign
}) => {
    return (
        <Text style={[textStyle ? TextStyle[textStyle] : TextStyle.Title4, { color: color, textAlign: textAlign }]}>{children}</Text>
    );
};



export default FText;