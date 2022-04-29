import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

export default function PodcastsPlayList() {

    /*
    <YoutubePlayer
                    height={250}
                    playList={'PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb'}
                    play={true}
                />
    */
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', width: '100%' }}>

            <View style={{ marginTop: 20, marginStart: 5 }}>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/back.png')} style={{ height: 40, width: 40 }} />
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: 50 }}>

                <Image source={require('../../../../assets/radiojlogo.png')} style={{ marginStart: 20 }} />

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ marginStart: 15, marginEnd: 20 }}>Le Journal de la Info Week-end de Christophe Dard</Text>
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