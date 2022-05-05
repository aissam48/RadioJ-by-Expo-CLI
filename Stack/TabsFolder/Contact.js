import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import { useSelector } from 'react-redux';


export default function Contact() {

    /*
    <YoutubePlayer
                    height={250}
                    playList={'PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb'}
                    play={true}
                />
    */
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                    <View style={{ alignSelf: 'center', marginTop: 30 }}>
                        <Image source={require('../../assets/radiojlogo.png')} />
                    </View>

                    <View style={{ marginStart: 20, marginEnd: 20, marginTop: 80 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Info Contacts
                        </Text>

                    </View>
                </View>


            </ScrollView>
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