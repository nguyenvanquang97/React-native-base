import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Snackbar } from 'react-native-paper';
import CBText from '../CBText';




interface SnackBar {
    visible: any,
    onDismiss: () => void;
    onPressRight?: (e: GestureResponderEvent) => void
    duration?: number,
    iconLeft?: IconSource | any,
    title: string,
    backgroundColor: string,
    titleRight?: string | any,
    textColor?: string
}

const SnackBar: React.FC<SnackBar> = ({
    visible,
    onDismiss,
    duration,
    iconLeft,
    title,
    backgroundColor,
    onPressRight,
    titleRight,
    textColor
}) => {
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={duration}
            style={{ backgroundColor: backgroundColor }

            }

            action={{
                label: titleRight && titleRight,
                onPress: onPressRight,
                labelStyle: { color: textColor }
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 10 }}>
                    {iconLeft}
                </View>
                <CBText styleName='BodyText2' color={textColor}>{title}</CBText>
            </View>

        </Snackbar>
    );
};
export default SnackBar;
