import { useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View, ToastAndroid, ScrollView, DeviceEventEmitter, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import Swiper from 'react-native-swiper'
import { useDispatch, useSelector } from 'react-redux';



export default function Radio() {

    const dispatch = useDispatch()

    var isPlaying = useSelector(state => (
        state.storeRedux.isPlaying
    ))


    var [clickAble, setClickAble] = useState(false)

    console.log(isPlaying + '---------------------------------')

    var [radio, setRadio] = useState()


    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        playThroughEarpieceAndroid: false
    });

    async function playRadio() {
        await Audio.setIsEnabledAsync(true)
        const { sound } = await Audio.Sound.createAsync({
            uri: 'https://listen.radioking.com/radio/261427/stream/306436'
        })
        setRadio(sound)
        await sound.playAsync()
        sound.getStatusAsync().then(state => {
            if (state.isPlaying) {
                setClickAble(false)

            } else {
                setClickAble(true)
            }
        })


    }

    async function stopRadio() {
        setRadio(undefined)
        await Audio.setIsEnabledAsync(false)
    }

    var listSoir = [
        { title: 'Le premier journal de la journée', time: 'Mardi-6h:01 6h:06' },
        { title: 'Le Journal de 6h30', time: 'Mardi-6h:30 6h:35', },
        { title: 'Dvar Torah', time: 'Mardi-6h:40 6h:45', },
        { title: "C'est bon pour la santé du Docteur Serge Rafal", time: 'Mardi-6h:47 6h:50', },
        { title: "Toutes les chansons ont une histoire", time: 'Mardi-6h:50 6h:54', },

    ]


    /*
    <View style={{ alignSelf: 'center', marginTop: 20 }}>
                <Image source={require('../../../../assets/radiojlogo.png')} />
            </View>
            <View>
                <TouchableOpacity

                    onPress={async () => {

                        switch (isPlaying) {
                            case true: {
                                dispatch({ type: 'stopRadio' })
                                stopRadio()
                                break
                            }
                            case false: {
                                dispatch({ type: 'startRadio' })
                                playRadio()
                                break
                            }
                        }

                    }}
                    style={{ marginStart: 20, marginEnd: 20, marginTop: 50 }}>
                    <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#29C5F6', paddingStart: 20, paddingEnd: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 30 }}>
                        <Image source={require('../../../../assets/play.png')} style={{ height: 15, width: 15, alignSelf: 'center' }} />
                        <Text style={{ color: '#ffffff', alignSelf: 'center', marginStart: 3, fontWeight: 'bold' }}>ECOUTER EN DIRECT</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, borderRadius: 20 }}>

                <Swiper
                    autoplay
                    pagingEnabled
                    autoplayTimeout={3}
                    style={{ paddingBottom: 30, flexDirection: 'row', height: 400 }}
                >

                    {listSoir.map((item) => (

                        <View style={{ height: 'auto', width: '70%', flexDirection: 'column', backgroundColor: '#4B0076', paddingBottom: 30, alignSelf: 'center', marginTop: 20, borderRadius: 20 }}>

                            <Text key={item.title} style={{ color: '#ffffff', fontWeight: 'bold', marginTop: 20, marginEnd: 20, marginStart: 20, fontSize: 18 }}>
                                Philosophes et philosophiles contemporaines
                            </Text>

                            <Text style={{ color: '#ffffff', marginTop: 20, marginEnd: 20, marginStart: 20 }}>
                                Philosophes et philosophiles contemporaines

                            </Text>


                            <TouchableOpacity style={{ margin: 20 }}>
                                <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#29C5F6', paddingStart: 20, paddingEnd: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 30 }}>
                                    <Image source={require('../../../../assets/play.png')} style={{ height: 15, width: 15, alignSelf: 'center' }} />
                                    <Text style={{ color: '#ffffff', alignSelf: 'center', marginStart: 3, fontWeight: 'bold' }}>ECOUTER EN DIRECT</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ margin: 20 }} >
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', alignSelf: 'center' }}>
                                        En savoir plus
                                    </Text>
                                    <Image source={require('../../../../assets/savoir.png')} style={{ marginStart: 10, height: 18, width: 18, alignSelf: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    ))}
                </Swiper>

            </View >
    */
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'center', width: '100%' }}>

            <ScrollView style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 70 }}>
                    <View style={{ flexDirection: 'column-reverse', paddingBottom: 50, marginTop: 20 }}>

                        <View style={{ backgroundColor: 'white', padding: 100, borderRadius: 50 }}>
                            <Image source={require('../../../../assets/radiojlogo.png')} />
                        </View>

                        <View style={{ alignSelf: 'center', position: 'absolute', backgroundColor: '#000000', height: 70, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>

                            <TouchableOpacity
                                disabled={clickAble}
                                onPress={async () => {
                                    setClickAble(true)
                                    await Audio.setIsEnabledAsync(false)
                                    switch (isPlaying) {
                                        case true: {
                                            isPlaying = false
                                            dispatch({ type: 'stopRadio' })
                                            stopRadio()
                                            setClickAble(false)
                                            break
                                        }
                                        case false: {
                                            isPlaying = true
                                            dispatch({ type: 'startRadio' })
                                            playRadio()
                                            break
                                        }
                                    }
                                }}
                            >
                                <Image
                                    source={isPlaying == true ? require('../../../../assets/pauseradio.png') : require('../../../../assets/playradio.png')}
                                    style={{ height: 40, width: 40 }} />
                            </TouchableOpacity>


                        </View>

                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ color: '#1251A0', fontWeight: 'bold', fontSize: 18 }}>
                            ECOUTER EN DIRECT
                        </Text>
                    </View>

                    <View style={{ marginTop: 25, backgroundColor: '#1251A0', borderTopStartRadius: 30, borderTopEndRadius: 30, paddingTop: 30, marginStart: 20, marginEnd: 20 }}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 35, alignSelf: 'center' }}>
                            Programmes
                        </Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5, borderRadius: 20, }}>

                            <Swiper
                                autoplay
                                pagingEnabled

                                autoplayTimeout={3}
                                style={{ paddingBottom: 30, flexDirection: 'row', height: 400 }}
                            >

                                {listSoir.map((item) => (

                                    <View style={{ height: 'auto', width: '70%', flexDirection: 'column', backgroundColor: '#4B0076', paddingBottom: 30, alignSelf: 'center', marginTop: 20, borderRadius: 20 }}>

                                        <Text key={item.title} style={{ color: '#ffffff', fontWeight: 'bold', marginTop: 20, marginEnd: 20, marginStart: 20, fontSize: 18 }}>
                                            Philosophes et philosophiles contemporaines
                                        </Text>

                                        <Text style={{ color: '#ffffff', marginTop: 20, marginEnd: 20, marginStart: 20 }}>
                                            Philosophes et philosophiles contemporaines

                                        </Text>


                                        <TouchableOpacity style={{ margin: 20 }}>
                                            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#29C5F6', paddingStart: 20, paddingEnd: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 30 }}>
                                                <Image source={require('../../../../assets/play.png')} style={{ height: 15, width: 15, alignSelf: 'center' }} />
                                                <Text style={{ color: '#ffffff', alignSelf: 'center', marginStart: 3, fontWeight: 'bold' }}>ECOUTER EN DIRECT</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ margin: 20 }} >
                                            <View style={{ flexDirection: 'row', }}>
                                                <Text style={{ color: '#ffffff', fontWeight: 'bold', alignSelf: 'center' }}>
                                                    En savoir plus
                                                </Text>
                                                <Image source={require('../../../../assets/savoir.png')} style={{ marginStart: 10, height: 18, width: 18, alignSelf: 'center' }} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                ))}
                            </Swiper>

                        </View >
                    </View>
                </View>
            </ScrollView>


        </SafeAreaView >
    );
}

