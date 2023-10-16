import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Snackbar } from 'react-native-paper';
import CBText from '../CBText';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
    MenuOptionProps,

} from 'react-native-popup-menu';


interface PopupMenu {
    iconButton: IconSource | any,
    children: ReactNode[];
    onPress: (index: number) => void,
    style?: ViewStyle
}

const PopupMenu: React.FC<PopupMenu> = ({
    iconButton,
    children,
    onPress,
    style
}) => {
    return (

        <Menu style={{ alignItems: 'flex-end', }}>
            <MenuTrigger>
                {iconButton}
            </MenuTrigger>
            <MenuOptions customStyles={{ optionsContainer: [style, { marginTop: 30 }] }}>
                {React.Children.map(children, (child, index) => (
                    <MenuOption key={index}
                        onSelect={() => onPress(index)}
                    >{child}</MenuOption>
                ))}
            </MenuOptions>
        </Menu>

    );
};
export default PopupMenu;
