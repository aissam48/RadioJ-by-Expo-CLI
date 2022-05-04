import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, ToastAndroid, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useSelector } from 'react-redux';
import { Audio } from 'expo-av';
import { useState, useRef, useEffect } from 'react';
import { Dimensions } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

const Stack = createNativeStackNavigator();

import Podcast from './PodcastFolder/Podcast';
import Podcasters from './PodcastFolder/Podcasters';
import PodcastsPlayList from './PodcastFolder/PodcastsPlayList';
import PlayPodcast from './PodcastFolder/PlayPodcast';

// i used async function to handle podcast player

export default function PodcastStack() {

    var podcastData = useSelector(state => (
        state.playPodcast.podcastData
    ))
    console.log(podcastData)

    async function playSync() {
        try {
            Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                staysActiveInBackground: true,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                playThroughEarpieceAndroid: false
            });

            await Audio.setIsEnabledAsync(false)
            await Audio.setIsEnabledAsync(true)
            const { sound, status } = await Audio.Sound.createAsync({
                uri: JSON.parse(JSON.stringify(podcastData)).text
            },

                { shouldPlay: true },

            )

            console.log('test')

            await sound.playAsync()
            await sound.getStatusAsync().then(result => {

                setDuration(result.durationMillis)
                setSound(sound)
                var intervalID = setInterval(async () => {

                    sound.getStatusAsync().then(posCur => {
                        const p = JSON.stringify(posCur)
                        const l = JSON.parse(p)
                        setCurrentTime(l.positionMillis)
                        if (l.durationMillis == l.positionMillis) {
                            clearInterval(intervalID)
                            //setIsPlaying('Empty')
                            console.log('setIsPlaying(')
                            setPodcastIsPlaying(false)
                            setCurrentTime(0)

                        }
                    })
                }, 1000)

            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {

        }

    }

    useEffect(() => {
        console.log('inside Effect')
        switch (podcastData) {
            case 'Empty': {
                console.log('Empty')

                break
            }

            default: {
                console.log('default')
                switch (JSON.parse(JSON.stringify(podcastData)).text) {
                    case isPlaying: {
                        console.log('isPlaying')
                        break
                    }

                    default: {
                        playSync()
                        setIsPlaying(JSON.parse(JSON.stringify(podcastData)).text)
                        setPodcastIsPlaying(true)
                    }

                }
                break
            }

        }

    })

    var [duration, setDuration] = useState(0)
    var [currentTime, setCurrentTime] = useState(0)
    var [sound_, setSound] = useState(undefined)
    var [isPlaying, setIsPlaying] = useState('Empty')
    var [podcastIsPlaying, setPodcastIsPlaying] = useState(false)


    /**/
    const refRBSheet = useRef();

    var mySH = Dimensions.get('screen').height


    return (

        <View style={{ flex: 1, }}>


            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Podcast" component={Podcast} options={{ headerShown: false }} />
                    <Stack.Screen name="Podcasters" component={Podcasters} options={{ headerShown: false }} />
                    <Stack.Screen name="PodcastsPlayList" component={PodcastsPlayList} options={{ headerShown: false }} />
                    <Stack.Screen name="PlayPodcast" component={PlayPodcast} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>

            <View style={{ width: '100%', }}>

                <View style={{ justifyContent: 'space-between', flexDirection: 'column', backgroundColor: '#1251A0', height: 80, marginBottom: 10, marginEnd: 10, marginStart: 10, borderRadius: 20 }}>
                    <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#1251A0', height: '100%', borderRadius: 20 }}>
                            <Image source={require('../../../assets/radiojlogo.png')} style={{ borderRadius: 10, height: 50, width: 50, alignSelf: 'center', marginStart: 15 }} />
                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 12, marginStart: 10, color: '#ffffff', fontWeight: 'bold' }}>Morning Show</Text>
                                <Text style={{ fontSize: 12, marginStart: 10, color: '#ffffff', fontWeight: 'bold' }}>Aniston</Text>
                                <Text style={{ fontSize: 12, marginStart: 10, color: '#ffffff', fontWeight: 'bold' }}>15:45</Text>
                            </View>

                        </View>

                        <TouchableOpacity
                            onPress={async () => {

                                ToastAndroid.show('ghfdjksnl,', ToastAndroid.show)
                                //playSync()
                                switch (podcastIsPlaying) {
                                    case true: {
                                        await sound_.pauseAsync()
                                        setPodcastIsPlaying(false)
                                        break
                                    }

                                    case false: {
                                        await sound_.playAsync()
                                        setPodcastIsPlaying(true)
                                        break
                                    }
                                }
                            }}
                            style={{ alignSelf: 'center', height: 35, width: 35, marginEnd: 15 }}>
                            <Image source={podcastIsPlaying == false ? require('../../../assets/playradio.png') : require('../../../assets/pauseradio.png')} style={{ alignSelf: 'center', height: 35, width: 35, marginEnd: 15 }} />

                        </TouchableOpacity>
                    </View>
                    <Slider
                        maximumValue={duration}
                        minimumValue={0}
                        disabled={false}
                        value={currentTime}
                        minimumTrackTintColor="#ffffff"
                        maximumTrackTintColor="#ffffff"
                        thumbTintColor="#ffffff"
                        onValueChange={async (value) => {
                            if (sound_ != undefined) {
                                await sound_.setPositionAsync(value)
                            }
                        }}
                        style={{ width: '100%' }} />
                </View>
            </View>
        </View>


    )
}

/**
  <RBSheet
                ref={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={false}
                height={mySH}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}


            >
                <View style={{ flex: 1, height: '100%' }}>

                    <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#141414', flex: 1, }}>

                        <TouchableOpacity
                            onPress={() => {
                                refRBSheet.current.close()
                            }}
                            style={{ alignSelf: 'flex-start', margin: 10 }}>
                            <Image source={require('../../../assets/closeit.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 150, width: 150, backgroundColor: '#ffffff', marginTop: 50, borderRadius: 20 }}>
                            <Image source={require('../../../assets/radiojlogo.png')} style={{ height: 100, width: 100, }} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff', textAlign: 'center', marginTop: 50, marginStart: 20, marginEnd: 20, fontWeight: 'bold' }}>
                                Le procès du négationniste Paul Touvier en 1994 (1/2) Une chronique de Michel Zerbib au micro d’Ilana Ferhadian
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 200, borderColor: '#ffffff', width: 80, height: 80 }}
                            onPress={() => {

                            }}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 200, borderColor: '#ffffff', width: 80, height: 80 }}>
                                <Image source={require('../../../assets/playradio.png')} style={{ height: 50, width: 50 }} />
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
            </RBSheet>
 */