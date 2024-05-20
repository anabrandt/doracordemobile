import { Image, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import pets from "../../mocks/pets";
import PaginaBase from "../PaginaBase";

export default function ListaPets({ navigation }) {
    return (
        <View style={styles.container}>
            <PaginaBase>
                <View style={styles.contentContainer}>
                <Image source={require('../../assets/doracorde.png')} style={styles.doracorde} />
                    <Text style={styles.text}>Olá! Veja as músicas disponíveis para tocar!</Text>
                    <FlatList
                        data={pets}
                        renderItem={({ item }) => <Card {...item}
                            navigation={navigation} />}
                    >
                    </FlatList>
                </View>
            </PaginaBase>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    contentContainer: {
        gap: 32,
        paddingTop: 160,
        zIndex: 1,
    },
    text: {
        color: "black",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 67
    },
    doracorde: {
        alignSelf: 'center',
        width: 160,
        height: 30,
    },
});