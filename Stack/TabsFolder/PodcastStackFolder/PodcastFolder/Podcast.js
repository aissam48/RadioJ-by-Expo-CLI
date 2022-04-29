import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ToastAndroid, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@react-native-community/slider'
import { useState } from 'react';



export default function Podcast({ navigation }) {

    const dispatch = useDispatch()
    var podcast = [
        'fdlkfdk',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
        'lsngfkls',
    ]

    var podcasterName = useSelector(state => (
        state.findPodcaster.podcasterName
    ))
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        playThroughEarpieceAndroid: false
    });

    //ToastAndroid.show(podcasterName, ToastAndroid.SHORT)

    var [duration, setDuration] = useState(0)
    var [currentTime, setCurrentTime] = useState(0)
    var [position, setPosition] = useState(0)
    var [sound_, setSound] = useState()

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column-reverse' }}>

            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View>
                        <Text style={{ color: '#1251A0', fontWeight: 'bold', marginTop: 50, marginStart: 20, fontSize: 40 }}>
                            Podcasts
                        </Text>
                        <Text style={{ color: '#1251A0', fontWeight: 'bold', marginTop: 10, marginStart: 20, fontSize: 20 }}>
                            LA RADIO JUIVE PROGRAMMES
                        </Text>
                    </View>

                    <View>
                        <Text style={{ color: '#000000', fontWeight: 'bold', marginTop: 50, marginStart: 20, fontSize: 25 }}>
                            Filter
                        </Text>
                        <View style={{ marginTop: 10, width: '100%' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch({ type: 'stopRadio' })
                                    Audio.setIsEnabledAsync(false)
                                    navigation.navigate('Podcasters')

                                }}
                                style={{ flexDirection: 'row', justifyContent: 'center', height: 50, borderRadius: 20, backgroundColor: '#29C5F6', marginStart: 20, marginEnd: 20 }}>
                                <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
                                    {podcasterName == undefined ? 'Toutes' : podcasterName}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 10, width: '100%' }}>
                            <TextInput style={{ fontSize: 18, color: '#000000', margin: 20, height: 50, backgroundColor: '#ffffff', borderRadius: 20, paddingStart: 10, paddingEnd: 10 }} />
                        </View>

                    </View>

                    <View style={{ alignSelf: 'center', flex: 1, width: '100%' }}>
                        <FlatList
                            nestedScrollEnabled
                            numColumns={2}
                            data={podcast}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('PodcastsPlayList')
                                    }}

                                    style={{ borderRadius: 20, flex: 1, flexDirection: 'column', alignSelf: 'center', margin: 5, height: 100, backgroundColor: '#ffffff' }}>
                                    <View style={{ borderRadius: 20, flex: 1, flexDirection: 'column', alignSelf: 'center', margin: 5, height: 100, backgroundColor: '#ffffff' }}>
                                        <Text style={{ alignItems: 'center' }}>{item}</Text>
                                    </View>
                                </TouchableOpacity>

                            )}
                        />
                    </View>

                </View>
            </ScrollView>



            <View style={{ height: 70, alignSelf: 'center', backgroundColor: '#1251A0', position: 'absolute', flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>

                <View style={{ flexDirection: 'column', width: '80%', justifyContent: 'space-around' }}>
                    <Text style={{ marginStart: 20 }}>
                        Title
                    </Text>
                    <Slider
                        maximumValue={duration}
                        minimumValue={0}
                        value={currentTime}
                        style={{ width: '100%', marginBottom: 10 }}
                        onValueChange={async (value) => {
                            await sound_.setPositionAsync(value)
                            await sound_.playAsync()
                        }}
                    />
                </View>

                <TouchableOpacity
                    onPress={async () => {
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
                    }}

                    style={{ alignSelf: 'center', marginEnd: 15, width: '20%', }}>
                    <Image source={require('../../../../assets/play.png')} style={{ alignSelf: 'center', marginEnd: 10, height: 30, width: 30 }} />

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}


const PlayOrPause = () => {

}
