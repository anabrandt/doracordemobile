import { Link } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Card({ nome, idade, porte, imagem, caracteristicas, localidade, descricao, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Sobre', {
                nome: nome,
                imagem: imagem,
                localidade: localidade,
                descricao: descricao
            })}>
                <Image source={imagem} style={styles.imagem} />
            </TouchableOpacity>


            <View style={styles.containerInformacoes}>
                <Text style={styles.title}>{nome}</Text>
                <View style={styles.informacoes}>
                    <Text style={styles.informacoesTexto}>{idade}</Text>
                    <Text style={styles.informacoesTexto}>{porte}</Text>
                </View>

                <View style={styles.informacoes}>

                    <View style={styles.containerChat}>
                        <Image source={require('../../../assets/chat.png')} />
                        <Link to={{
                            screen: 'Mensagem', 
                        }} style={styles.local}>
                            Clique aqui para tocar 
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 16,
        paddingHorizontal: 21,
        marginBottom: 16
    },
    title: {
        color: "black",
        fontWeight: "600",
        lineHeight: 24,
        fontSize: 16,
        marginBottom: 8
    },
    informacoesTexto: {
        color: "black",
        lineHeight: 20,
        fontSize: 14,
    },
    informacoes: {
        display: 'flex',
        gap: 6,
        fontFamily: 'PoppinsRegular',
        marginBottom: 16
    },
    local: {
        color: "#737380",
        lineHeight: 16,
        fontSize: 12,
    },
    containerChat: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    imagem: {
        alignSelf: 'center',
        width: 180,
        height: 200,
    }
})
