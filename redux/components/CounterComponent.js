import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import FloatingLabelInput from '../component/TextInput';
import { Formik } from 'formik';
import { ValidationSchema, initialValues } from '../component/Validate';
import ListTitle from '../component/ListTitle/listTitle';
import Cancle from '../component/svg/cancel';
import CBText from '../component/CBText';
import CustomButton from '../component/Button/CustomButton';
import { connect, useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/ActionUser';

export default function CounterComponent(props) {
    

    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducersUser);
    const handleReig = (value) => {
        try {
            dispatch(register(value));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <View style={{ width: '100%', backgroundColor: 'white' }}>
                <ListTitle
                    iconLeft={<Cancle />}
                />
            </View>
            <CBText styleName='Title2'> Đăng ký</CBText>
            <View style={{ marginVertical: 5 }}>
                <CBText styleName='BodyText2' >Bạn đã có tài khoản?<CBText styleName='BodyText2' color='#1890FF' > Đăng nhập</CBText></CBText>
            </View>
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {

                    handleReig(values)
                    console.log(data);
                }}
            >
                {({ handleSubmit, isValid }) => (
                    <View style={{ paddingHorizontal: 10 }}>
                        <FloatingLabelInput
                            name='fullName'
                            colorLableInput={'#BFBFBF'}
                            label='Họ và tên'
                            colorLableOutput={'#BFBFBF'}
                        />
                        <View style={{ alignItems: 'center', marginVertical: 10 }}>
                            <CustomButton
                                title='Tiếp tục'
                                With={'100%'}
                                labelColor='#FFFFFF'
                                backgroundColor='#FBAF17'
                                onPress={() => {
                                    handleSubmit()
                                }}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );

}