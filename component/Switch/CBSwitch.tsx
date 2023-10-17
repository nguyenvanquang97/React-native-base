import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent, TouchableWithoutFeedback } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Snackbar } from 'react-native-paper';
import CBText from '../CBText';
import { COLORS } from '../../assets/styles/color';




interface CBSwitch {
    value: boolean | any
    onValueChange: any
    mode?: 'Right label' | 'Left label' | 'Contain label',
    Disable?: boolean | any
}

const CBSwitch: React.FC<CBSwitch> = ({
    value,
    onValueChange,
    mode,
    Disable
}) => {
    return (
        <TouchableWithoutFeedback

            onPress={() => !Disable && onValueChange(!value)}>
            {(mode === 'Contain label') ?
                (<View style={[styles.switchContainer, { backgroundColor: value ? COLORS.PrimaryColor : '#D9D9D9', opacity: Disable && 0.8 }]}>
                    {value && <Text style={{ marginStart: 12, color: 'white' }} >ON</Text>}
                    <View style={[styles.thumb, { left: value ? 38 : 2 }]} ></View>
                    {!value && <Text style={{ marginStart: 26, color: 'white' }} >OFF</Text>}
                </View>) : (
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        {mode === 'Left label' && <CBText textAlign='center' styleName='Label4'>{!value ? 'OFF' : 'On'} {Disable && ' - Disable'}</CBText>}
                        <View style={[styles.switchContainerde, { backgroundColor: value ? COLORS.PrimaryColor : '#E5E5EA', opacity: Disable && 0.7 }]}>

                            <View style={[styles.thumb, { left: value ? 22 : 2 }]} ></View>

                        </View>
                        {mode === 'Right label' && <CBText textAlign='center' styleName='Label4'>{!value ? 'OFF' : 'On'} {Disable && ' - Disable'}</CBText>}



                    </View>

                )
            }

        </TouchableWithoutFeedback >
    );
};
const styles = StyleSheet.create({
    label: {
        flex: 1,
        fontSize: 16,
    },
    switchContainer: {
        width: 60,
        height: 24,
        justifyContent: 'center',
        borderRadius: 24,
    },
    switchContainerde: {
        width: 44,
        height: 24,
        justifyContent: 'center',
        borderRadius: 24,

    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 2,
    },
});
export default CBSwitch;
