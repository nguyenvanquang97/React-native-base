import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FIcon from '../../component/Icon/FIcon'
import { FFilled } from '../../assets/styles/FFilled'
import FText from '../../component/FText'
import messaging from '@react-native-firebase/messaging';

export default function Home() {
  const [fcmToken, setFcmToken] = useState("");
  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    setFcmToken(fcmToken);
    console.log('fcmToken', fcmToken);
  };

  const subscribeTopic = async () => {
    messaging()
      .subscribeToTopic("All")
      .then(() => console.log("Subscribed to topic:", "All"))
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(()=>{
    checkToken();
    subscribeTopic()
  },[])
  return (
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <FText textStyle='Title1'>Login</FText>
      <FIcon icon={FFilled.arrow_left} iconColor='red' size={50}/>
    </View>
  )
}

const styles = StyleSheet.create({})