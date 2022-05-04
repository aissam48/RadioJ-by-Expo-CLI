import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

export default function Podcasters({ navigation }) {
    const listPodcasters = [
        'Toutes',
        "fdbgdfdfb",
        "dsddfgfd",
        "fdbgdfdfdsffsdb",
        "fdbgdfdsdfzeedfb",
        "fdbqzdqgdfdfb",
        "fdbgdfddfdsfsfb",
        "fdbgdfsgklndfb",
        "fdbgdfdn,fsfb",
        "fdbgdfdfb",
        "fdbgd5468fdfb",
        "fdbgdfdfb",
        "fdbgdf6548dfb",
        "fdbgdf5454dfb",
        "fdbgd99fdfb",
    ]

    var [list, setList] = useState(listPodcasters)

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{ marginTop: 20, marginStart: 5 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.pop()
                    }}
                >
                    <Image source={require('../../../../assets/back.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: '#1251A0', fontWeight: 'bold', marginTop: 20, marginStart: 20, fontSize: 40 }}>
                    Journalistes
                </Text>
            </View>

            <View style={{ marginTop: 10, width: '100%' }}>
                <TextInput
                    placeholder='Trouver un(e) journalist(e)...'
                    style={{ fontSize: 18, color: '#000000', margin: 20, height: 50, backgroundColor: '#ffffff', borderRadius: 20, paddingStart: 10, paddingEnd: 10 }}
                    onChangeText={(text) => {
                        switch (text.length) {
                            case 0: {
                                setList(listPodcasters)
                                break
                            }
                            default: {
                                setList(listPodcasters.forEach((item_) =>
                                    item_.includes(text)
                                ))
                                break
                            }
                        }
                    }}
                />
            </View>

            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={list}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ paddingTop: 15, paddingBottom: 15, marginTop: 5, flex: 1, backgroundColor: 'white', marginStart: 20, marginEnd: 20, borderRadius: 20 }}>

                                <TouchableOpacity
                                    onPress={() => {
                                        dispatch({ type: 'search', text: item })
                                        navigation.pop()
                                    }}
                                >
                                    <Text style={{ marginStart: 20, fontWeight: 'bold' }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

