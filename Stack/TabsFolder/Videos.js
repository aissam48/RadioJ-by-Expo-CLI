import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';


export default function Videos() {

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

                    <View style={{ flex: 1, marginTop: 50, marginStart: 15, marginEnd: 15 }}>

                        <View style={{ alignSelf: 'center', flex: 1, width: '100%' }}>
                            <FlatList
                                nestedScrollEnabled
                                numColumns={2}
                                data={podcast}
                                renderItem={({ item }) => (
                                    <View style={{ borderRadius: 20, flex: 1, flexDirection: 'column', alignSelf: 'center', margin: 5, height: 200, backgroundColor: '#ffffff' }}>
                                        <Text style={{ alignItems: 'center' }}>{item}</Text>
                                    </View>
                                )}
                            />
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
        justifyContent: 'center',
    },
});