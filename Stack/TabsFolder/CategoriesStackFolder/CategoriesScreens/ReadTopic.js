import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";







export default function ReadTopic({ navigation }) {

    var wd = Dimensions.get('screen').width

    return (

        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>

                    <View style={{ marginTop: 20, marginStart: 5 }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.pop()
                            }}
                        >
                            <Image source={require('../../../../assets/back.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: wd - 40, alignSelf: 'center', marginTop: 30, marginBottom: 15 }}>
                        <Image source={require('../../../../assets/war.jpeg')} style={{ height: 250, width: '100%' }} />

                        <Text style={{ fontWeight: 'bold', marginTop: 15, fontSize: 20 }}>
                            Guerre en Ukraine : les services de renseignement américains ont aidé l’Ukraine à cibler des généraux russes
                        </Text>
                        <Text style={{ marginTop: 15 }}>
                            Selon le New York Times, les renseignements fournis par les États-Unis ont aidé l’armée ukrainienne à cibler plusieurs généraux russes. Citant plusieurs hauts responsables américains, le quotidien outre-Atlantique a déclaré que sur la douzaine de généraux russes tués par les forces ukrainiennes, « beaucoup » avaient été ciblés avec l’aide des services de renseignement américains.

                            Par ailleurs, le Conseil national de sécurité des États-Unis (NSC) a qualifié « d’irresponsable » l’affirmation selon laquelle les États-Unis aidaient l’Ukraine à tuer des généraux russes. Adrienne Watson porte-parole du NSC a affirmé à l’AFP : « Les États-Unis fournissent des renseignements sur le champ de bataille pour aider les Ukrainiens à défendre leur pays ». Il a formellement démenti l’information selon laquelle ses renseignements sont donnés dans l’intention de tuer des généraux russes.

                            L’armée ukrainienne revendique avoir tué plusieurs généraux russes
                            Depuis le début des hostilités, la lourde perte d’officiers militaires russes de haut rang a stupéfié les responsables occidentaux de la sécurité. Ces derniers ont confirmé un décompte officiel de sept généraux fin mars, bien que l’Ukraine en ait annoncé davantage.

                            Le New York Times indique que l’aide directe des États-Unis et d’autres services de renseignement occidentaux a joué un rôle majeur dans le succès ukrainien.

                            Selon le quotidien, les États-Unis ont fourni des détails sur le quartier général mobile de l’armée de Vladimir Poutine, qui change fréquemment d’emplacement. Les forces ukrainiennes ont utilisé ces informations tout en utilisant les leurs pour mener des attaques ciblées.

                            Afin de ne pas être considéré officiellement comme un ennemi direct du gouvernement de Vladimir Poutine, l’administration du président américain Joe Biden n’a pas divulgué les renseignements militaires qu’elle fournit à l’Ukraine par crainte de compromettre ses sources.

                            Au début du conflit, le Pentagone a fait preuve de la même prudence en indiquant que seuls des armes dites « défensifs » étaient fournis à l’Ukraine. Cependant, depuis quelques semaines les Etats-Unis livrent des armes plutôt « offensives » comme des drones avec le « Phoenix ghost » ou encore des Hélicoptères.

                            Dorénavant la maison Blanche Washington affirme que son objectif dans ce conflit est d’affaiblir drastiquement le plus rapidement possible la Russie. « Nous voulons voir la Russie affaiblie au point qu’elle ne puisse plus faire le genre de choses qu’elle a faites en envahissant l’Ukraine », a indiqué le secrétaire américain à la défense, Lloyd Austin après sa visite à Kiev lundi dernier.
                        </Text>

                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>


    )
}