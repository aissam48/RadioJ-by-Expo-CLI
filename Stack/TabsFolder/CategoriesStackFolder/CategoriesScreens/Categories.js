import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Topics() {

    var [backColor, setBackColor] = useState('#1251A0')

    var listItems = ["dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs",
        "dsjkgkjs",
        "dsjkgkjs",
        "dsjkgkjs",
        "dsjkgkjs",

    ]
    var [clickItem, setClickItem] = useState('Toutes')

    const listCategories = ["Toutes", "Culture", "France", "International", "Israel", "Judaisme"]
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <View>
                <Text style={{ color: '#1251A0', fontWeight: 'bold', marginTop: 50, marginStart: 20, fontSize: 40 }}>
                    Actualites
                </Text>
            </View>

            <View style={{ marginTop: 35, }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={listCategories}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        setClickItem(item)
                                        setBackColor('#1251A0')
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold', marginStart: 15, marginEnd: 15, backgroundColor: item == clickItem ? backColor : '#ffffff', color: item == clickItem ? '#ffffff' : '#000000', borderRadius: 10, paddingTop: 10, paddingBottom: 10, paddingStart: 20, paddingEnd: 20 }}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

            <View style={{ width: '100%', marginTop: 20, flex: 1 }}>

                <FlatList
                    numColumns={2}
                    data={listItems}
                    keyExtractor={(item, index) => index}

                    renderItem={({ item }) => {

                        return (
                            <View style={{ borderRadius: 10, flex: 1, height: 200, backgroundColor: "#ffffff", margin: 5 }}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%', width: '100%' }}
                                >

                                    <View style={{ backgroundColor: '#000000', height: '60%', width: '90%', borderRadius: 20, marginTop: 10 }}>
                                        <Image source={require('../../../../assets/radiojlogo.png')} style={{ borderRadius: 20, height: '100%', width: '100%' }} />
                                    </View>

                                    <Text>
                                        Yom Hazikaron : « Notre peuple aspire à l’unité », déclare Naftali Bennett
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

