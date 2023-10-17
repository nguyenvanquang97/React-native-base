import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text } from 'react-native';

import TextStyle from '../assets/styles/TextStyle';



interface CBText {
    styleName?: keyof typeof TextStyle,
    color?: string,
    children: React.ReactNode;
    textAlign?: 'center' | 'left' | 'right' | 'auto'
}

const CBText: React.FC<CBText> = ({
    styleName,
    color,
    children,
    textAlign
}) => {
    return (
        <Text style={[styleName ? TextStyle[styleName] : TextStyle.Title4, { color: color, textAlign: textAlign }]}>{children}</Text>
    );
};



export default CBText;