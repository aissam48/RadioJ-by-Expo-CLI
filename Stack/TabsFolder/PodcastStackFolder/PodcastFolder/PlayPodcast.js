import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import Slider from '@react-native-community/slider'
import { Audio } from 'expo-av';
import { Component, useEffect, useState, } from 'react';


export default function PlayPodcast({ navigation }) {

    var [duration, setDuration] = useState(0)
    var [currentTime, setCurrentTime] = useState(0)
    var [position, setPosition] = useState(0)
    var [sound_, setSound] = useState()

    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        playThroughEarpieceAndroid: false
    });



    async function PlayPodcast() {

        Audio.setIsEnabledAsync(true)
        const { sound, status } = await Audio.Sound.createAsync({
            uri: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
        },

            { shouldPlay: true },
            (status) => {
                const p = JSON.stringify(status)
                const l = JSON.parse(p)
                setCurrentTime(l.positionMillis)
            },
        )

        await sound.playAsync()
        await sound.getStatusAsync().then(result => {

            setDuration(result.durationMillis)
            setSound(sound)
        })

    }


    return (
        <SafeAreaView style={{ flex: 1, height: '100%' }}>
            <View style={{ flex: 1, height: '100%' }}>

                <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#141414', flex: 1, marginTop: 50, borderTopEndRadius: 50, borderTopStartRadius: 50 }}>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.pop()
                        }}
                        style={{ alignSelf: 'center', marginTop: 10 }}>
                        <Image source={require('../../../../assets/close.png')} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 150, width: 150, backgroundColor: '#ffffff', marginTop: 50, borderRadius: 20 }}>
                        <Image source={require('../../../../assets/radiojlogo.png')} style={{ height: 100, width: 100, }} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#ffffff', textAlign: 'center', marginTop: 50, marginStart: 20, marginEnd: 20, fontWeight: 'bold' }}>
                            Le procès du négationniste Paul Touvier en 1994 (1/2) Une chronique de Michel Zerbib au micro d’Ilana Ferhadian
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 200, borderColor: '#ffffff', width: 80, height: 80 }}
                        onPress={() => {
                            PlayPodcast()
                        }}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 200, borderColor: '#ffffff', width: 80, height: 80 }}>
                            <Image source={require('../../../../assets/playradio.png')} style={{ height: 50, width: 50 }} />
                        </View>
                    </TouchableOpacity >



                    <View style={{ marginTop: 100, width: '90%', alignSelf: 'center', borderRadius: 20 }}>
                        <Slider
                            maximumValue={duration}
                            minimumValue={0}
                            value={currentTime}
                            minimumTrackTintColor="#ffffff"
                            maximumTrackTintColor="#ffffff"
                            thumbTintColor="#ffffff"
                            style={{ width: '100%', borderRadius: 20 }}
                            onValueChange={async (value) => {
                                await sound_.setPositionAsync(value)
                                await sound_.playAsync()
                            }}
                        />
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ color: '#ffffff', marginStart: 15 }}>
                                02:35
                            </Text>
                            <Text style={{ color: '#ffffff', marginEnd: 15 }}>
                                02:35
                            </Text>
                        </View>
                    </View>

                </View>


            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});