import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import FloatingLabelInput from '../../component/TextInput/TextInput';



export default function View1(props) {
    return (

        <View style={{ paddingHorizontal: 10 }}>
            <Text>aaaaaaaaaaaa</Text>
            <FloatingLabelInput
                name='fullName'
                colorLableInput={'#BFBFBF'}
                label='Họ và tên'
                colorLableOutput={'#BFBFBF'}
            />
            <FloatingLabelInput
                name='email'
                colorLableInput={'#BFBFBF'}
                label='email'

                colorLableOutput={'#BFBFBF'}
            />
            <FloatingLabelInput
                name='phoneNumber'
                colorLableInput={'#BFBFBF'}
                label='phoneNumber'
                colorLableOutput={'#BFBFBF'}
            />
            <FloatingLabelInput
                name='password'
                colorLableInput={'#BFBFBF'}
                label='password'
                colorLableOutput={'#BFBFBF'}
            />
            <FloatingLabelInput
                name='confirmPassword'
                colorLableInput={'#BFBFBF'}
                label='confirmPassword'
                colorLableOutput={'#BFBFBF'}
            />

        </View>

    );

}