import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Programmes({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Programmes</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Drawer')
            }}>
                <Text>Start</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
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