import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ToastAndroid, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@react-native-community/slider'
import { useState, useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';




export default function Podcast({ navigation }) {

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

            <ScrollView nestedScrollEnabled>
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
                            keyExtractor={(item, index) => index}
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

        </SafeAreaView>
    );
}


const PlayOrPause = () => {

}
