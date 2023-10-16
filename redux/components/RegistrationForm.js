import React, { Component, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';

import { Formik } from 'formik';
import { ValidationSchema, initialValues } from '../../component/TextInput/Validate';

import ListTitle from '../../component/ListTitle/listTitle';

import CBText from '../../component/CBText';

import CustomButton from '../../component/Button/CustomButton';
import View1 from './View1';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/ActionData';


export default function RegistrationForm(props) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.reducer.data);
    const loading = useSelector(state => state.reducer.loading);
    const error = useSelector(state => state.reducer.error);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    console.log(1, data);
    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <View style={{ width: '100%', backgroundColor: 'white' }}>
                {/* <ListTitle
                    iconLeft={<Cancle />}
                /> */}
            </View>
            <CBText styleName='Title2'></CBText>
            <View style={{ marginVertical: 5 }}>
                <CBText styleName='BodyText2' >Bạn đã có tài khoản?<CBText styleName='BodyText2' color='#1890FF' > Đăng nhập</CBText></CBText>
            </View>


            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {
                    // Handle form submission here
                    console.log(values);
                }}
            >
                {({ handleSubmit, isValid }) => (
                    <View style={{ width: '100%' }}>
                        <View1 />
                        <Button onPress={handleSubmit} />
                    </View>

                )}

            </Formik>
        </View>
    );
}



