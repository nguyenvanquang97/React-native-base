import React, { useEffect, useState, ReactNode } from "react";
import { View, StyleSheet, Text, Animated, Dimensions, ViewStyle } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import CBText from '../CBText';
interface ExpansionPanel {
    expanded: boolean,
    height1: number,
    children: ReactNode;
    style?: ViewStyle
}

const ExpansionPanel: React.FC<ExpansionPanel> = ({
    expanded,
    height1,
    children,
    style
}) => {
    const [height] = useState(new Animated.Value(0));
    const screenHeight = Dimensions.get("window").height;
    useEffect(() => {
        Animated.timing(height, {
            toValue: expanded ? screenHeight * height1 : 0,
            duration: 150,
            useNativeDriver: false,
        }).start();
    }, [expanded, height]);

    return (
        <Animated.View
            style={[{ height }, style]}
        >
            {children}
        </Animated.View>
    );
};

export default ExpansionPanel;
