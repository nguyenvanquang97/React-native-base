import React, { ReactNode, useState } from 'react';
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import Modal from 'react-native-modal';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';

import CBText from '../CBText';



interface PopupTab {
    label: string,
    label2: string,
    contentTitle: string,
    subTitle: String,
    soucreImgae?: ImageSourcePropType,
    Screen1: any;
    Screen2: any,
    ActiveLabelColor?: string
    UnLabelColor?: string
    titleButton?: string
    titleButtonSecondary?: string
    row?: boolean | any

}

const PopupTab: React.FC<PopupTab> = ({
    label,
    label2,
    contentTitle,
    subTitle,
    soucreImgae,
    Screen1,
    Screen2,
    ActiveLabelColor,
    UnLabelColor,
    titleButton,
    titleButtonSecondary,
    row

}) => {
    const [selectedTab, setSelectedTab] = useState(label);
    const [currentScreen, setCurrentScreen] = useState(Screen1);

    const handleTabPress = (tabName: string) => {
        setSelectedTab(tabName);
        if (tabName === label) {
            setCurrentScreen(Screen1);
        } else if (tabName === label2) {
            setCurrentScreen(Screen2);
        }
    };
    return (
        <View style={[styles.container, row && { flexDirection: 'row' }]}>
            <View style={[{ padding: 10 }, row && { flex: 0.8 }]}>
                {soucreImgae !== undefined
                    && <Image source={soucreImgae} style={{ width: '100%' }} />
                }
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ padding: 10 }}>

                    <CBText>{contentTitle}</CBText>
                    <CBText>{subTitle}</CBText>
                </View>

                <View style={styles.tabBar}>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === label && styles.selectedTab]}
                        onPress={() => handleTabPress(label)}
                    >
                        {selectedTab === label
                            ? (<CBText color={ActiveLabelColor}> {label}</CBText>)
                            : (<CBText color={UnLabelColor}>{label}</CBText>)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === label2 && styles.selectedTab]}
                        onPress={() => handleTabPress(label2)}
                    >
                        {selectedTab === label2
                            ? (<CBText color={ActiveLabelColor}>{label2}</CBText>)
                            : (<CBText color={UnLabelColor}>{label2}</CBText>)
                        }

                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    {currentScreen}
                </View>
                {
                    titleButton !== undefined &&
                    <View style={styles.viewBottom}>
                        {titleButtonSecondary != undefined &&
                            <TouchableOpacity  >
                                <CBText>{titleButtonSecondary}</CBText>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity style={styles.button}>
                            <CBText color='#FFFFFF'>{titleButton}</CBText>
                        </TouchableOpacity>
                    </View>
                }
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tabBar: {
        flexDirection: 'row',
    },
    tab: {
        padding: 10,
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
    },
    selectedTab: {
        borderBottomColor: '#1890FF',
    },
    viewBottom: {
        justifyContent: 'flex-end',
        marginVertical: 10,

        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {

        paddingHorizontal: 24,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#1890FF',
        marginHorizontal: 10
    }
});

export default PopupTab;