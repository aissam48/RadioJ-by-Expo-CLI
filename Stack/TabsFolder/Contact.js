import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
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

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Image source={require('../../assets/call.png')} style={{ height: 40, width: 40, marginStart: 20 }} />
                        <Text style={{ alignSelf: 'center', marginStart: 50, fontWeight: 'bold', fontSize: 18 }}>
                            +212-512121212
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Image source={require('../../assets/sms.png')} style={{ height: 40, width: 40, marginStart: 20 }} />
                        <Text style={{ alignSelf: 'center', marginStart: 50, fontWeight: 'bold', fontSize: 18 }}>
                            +212-512121212
                        </Text>
                    </View>
                    <View>
                        <Text style={{ marginStart: 20, marginTop: 40, fontWeight: 'bold', fontSize: 20 }}>
                            Envoyer un message
                        </Text>

                        <View>
                            <Text style={{ marginStart: 20, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>
                                Nom & Prénom
                            </Text>
                            <TextInput style={{ marginStart: 20, marginEnd: 20, borderRadius: 20, borderColor: '#000000', height: 60, padding: 10, borderWidth: 1 }} />

                        </View>

                        <View>
                            <Text style={{ marginStart: 20, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>
                                Email
                            </Text>
                            <TextInput style={{ marginStart: 20, marginEnd: 20, borderRadius: 20, borderColor: '#000000', height: 60, padding: 10, borderWidth: 1 }} />

                        </View>

                        <View>
                            <Text style={{ marginStart: 20, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>
                                Message
                            </Text>
                            <TextInput textAlignVertical='top' multiline style={{ marginStart: 20, marginEnd: 20, borderRadius: 20, borderColor: '#000000', height: 200, padding: 10, borderWidth: 1 }} />

                        </View>

                        <View style={{ marginBottom: 50, marginTop: 50, marginStart: 20, marginEnd: 20 }}>
                            <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#1251A0', width: '100%', borderRadius: 20, padding: 10 }}>
                                <Text style={{ alignSelf: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>
                                    Envoyer
                                </Text>
                            </TouchableOpacity>
                        </View>



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