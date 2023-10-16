import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import CustomButton from '../../component/Button/CustomButton';


const Button = ({ onPress }) => {

    return (
        <View style={{ alignItems: 'center', margin: 10 }}>
            <CustomButton
                title='Tiếp tục'
                With={'100%'}
                labelColor='#FFFFFF'
                backgroundColor='#FBAF17'
                onPress={() => {
                    onPress();
                }}

            />
        </View>

    );

}
export default Button