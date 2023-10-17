import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, FlatList, Text, ActivityIndicator, Touchable, TouchableOpacity } from 'react-native';


import { connect, useDispatch, useSelector } from 'react-redux';
import { getData } from '../actions/ActionData';
import fetchClient from '../api/getData/fetchClient';

export default function ListSon(props) {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const listData = useSelector((state) => state.reducersData);
    useEffect(() => {
        handleReig();

    }, []);
    const handleReig = async () => {
        try {
            const res = await fetchClient(`/api/app/get/pb?page=${page}&size=2`, {
                method: "GET"
            })
            dispatch(getData(res.data.data))
            console.log(res.data.data)
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleReigUpdate = async () => {

        try {
            const res = await fetchClient(`/api/app/get/pb?page=${page + 1}&size=2`, {
                method: "GET"
            })
            setIsLoading(true);
            setTimeout(() => {
                setData((prevData) => [...data, ...res.data.data]);
                console.log(page);
                setIsLoading(false);

            }, 2000);

        } catch (error) {
            console.log(error);
        }
    }

    const [isLoading, setIsLoading] = useState(false);
    const updatePage = () => {
        setPage((prevPage) => {
            const nextPage = prevPage + 1;
            return nextPage;
        });
    };
    // Trang hiện tại


    // Dữ liệu cứng




    return (

        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => console.log(item.id)} style={{ backgroundColor: 'yellow', margin: 10, padding: 20, height: 400 }}>
                        <Text>{item.appCatalog}</Text>

                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={() => {
                    if (!isLoading && page <= 4) {
                        updatePage();
                        handleReigUpdate();
                    }
                }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    isLoading ? <ActivityIndicator size="large" color="blue" /> : null
                )}
            />

        </View>



    );

}