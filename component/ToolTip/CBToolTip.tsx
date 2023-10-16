import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import Tooltip from 'rn-tooltip';
import CBText from '../CBText';




interface CBToolTip {
    message: string,
    children: ReactNode,
    backgroundMess?: string,
    containerStyles?: ViewStyle,
    TextColor?: string
}

const CBToolTip: React.FC<CBToolTip> = ({
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

                <CBText styleName='BodyText2' color={TextColor}>{message}</CBText>}>
            {children}
        </Tooltip>
    );
};
export default CBToolTip;
