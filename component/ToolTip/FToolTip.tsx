import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import Tooltip from 'rn-tooltip';
import FText from '../FText';




interface FToolTip {
    message: string,
    children: ReactNode,
    backgroundMess?: string,
    containerStyles?: ViewStyle,
    TextColor?: string
}

const FToolTip: React.FC<FToolTip> = ({
    message,
    children,
    backgroundMess,
    containerStyles,
    TextColor
}) => {
    return (
        <Tooltip
            actionType='press'
            containerStyle={containerStyles}
            pointerColor={backgroundMess}
            backgroundColor={backgroundMess}
            popover={

                <FText styleName='BodyText2' color={TextColor}>{message}</FText>}>
            {children}
        </Tooltip>
    );
};
export default FToolTip;
