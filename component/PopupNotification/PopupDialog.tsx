import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Text } from 'react-native-svg';
import CBText from '../CBText';


interface PopupDialog {
    isVisible: boolean;
    closeModal: () => void;
    ImageNotification?: IconSource | any
    style?: ViewStyle;
    title: string,
    bodyTitle: string,
    titleButtonleft?: string,
    titleButton: string,
    backgroundColor: string
}

const PopupDialog: React.FC<PopupDialog> = ({
    isVisible,
    closeModal,
    ImageNotification,
    style,
    title,
    bodyTitle,
    titleButtonleft,
    titleButton,
    backgroundColor
}) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            onSwipeComplete={closeModal}
            backdropOpacity={0.8}
            // onBackdropPress={closeModal}
            // swipeDirection="down"
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.container, style]}>
                {ImageNotification !== undefined &&
                    <View style={{ marginBottom: 15 }}>
                        {ImageNotification}
                    </View>

                }
                <CBText styleName='Title2'>{title}</CBText>
                <View style={{ marginVertical: 10 }}>
                    <CBText styleName='BodyText2' textAlign='center'>{bodyTitle}</CBText></View>

                <View style={{ flexDirection: 'row' }}>
                    {titleButtonleft !== undefined &&
                        <TouchableOpacity style={[styles.viewButton, { backgroundColor: '#F3F3F3', marginRight: 10 }]}>
                            <CBText styleName='ButonText2' color='#8C8C8C'>{titleButtonleft}</CBText>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={[styles.viewButton, { backgroundColor: backgroundColor }]}>
                        <CBText styleName='ButonText2' color='#FFFFFF'>{titleButton}</CBText>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 16,
        paddingTop: 25
    },
    viewButton: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
    }
});

export default PopupDialog;