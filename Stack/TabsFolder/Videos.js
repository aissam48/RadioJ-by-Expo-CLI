import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";


export default function Videos({ navigation }) {

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

    ]

    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        playThroughEarpieceAndroid: false
    });

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View>
                        <Text style={{ color: '#1251A0', fontWeight: 'bold', marginTop: 50, marginStart: 20, fontSize: 40 }}>
                            Videos
                        </Text>

                        <Text style={{ color: '#1251A0', fontWeight: 'bold', marginTop: 10, marginStart: 20, fontSize: 20 }}>
                            PARCOUREZ NOS PLAYLISTS
                        </Text>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <YoutubePlayer
                            height={270}
                            playList={'PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb'}

                        />
                    </View>




                    <View style={{ alignSelf: 'center', flex: 1, width: '100%' }}>
                        <FlatList
                            nestedScrollEnabled
                            keyExtractor={(item, index) => index}

                            data={podcast}
                            renderItem={({ item }) => {


                                const wi = Dimensions.get('screen').width
                                return (

                                    <TouchableOpacity style={{ flexDirection: 'column', alignSelf: 'center', width: wi - 20 }}>

                                        <Image source={require('../../assets/pngvideo.jpg')} style={{ borderRadius: 20, height: 250, width: wi - 25, alignSelf: 'center' }} />

                                        <View style={{ marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between', width: wi - 35, alignSelf: 'center' }}>
                                            <Text >lskdglksjfld,gdsklg, smeofkeso sdlkfqekof dsmlfkmq qùpfrkpose ljhi egpkfdsfmefjk</Text>
                                            <Text style={{ fontWeight: 'bold' }}>15:37</Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            }}
                        />
                    </View>


                </View>
            </ScrollView>




        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});