import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PaginaBase from '../PaginaBase';
export default function Home() {

    return (
        <View style={styles.container}>
            <PaginaBase>
                <View style={styles.contentContainer}>
                    <Image source={require('../../assets/doracorde.png')} style={styles.doracorde} />
                    <Text style={[styles.text, styles.title]}>Boas-vindas!</Text>
                    <Text style={styles.text}>Música para todos os sentidos: Abraçando a diversidade musical! </Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textoBotao}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textoBotao}>Cadastro</Text>
                    </TouchableOpacity>

                    <Image source={require('../../assets/music.png')} style={styles.imagem}></Image>
                </View>
            </PaginaBase>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        color: "black",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
    },
    title: {
        fontSize: 26,
        fontWeight: 500,
    },
    contentContainer: {
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
        gap: 32,
    },
    imagem: {
        alignSelf: 'center',
        width: 180,
        height: 200,
    },

    button: {
        borderRadius: 8,
        backgroundColor: 'black', // Pode ser ajustado conforme necessário
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4, // Adiciona a elevação para sombra no Android
        padding: 10, // Pode ser ajustado conforme necessário
        width: 200,
        alignSelf: 'center',
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    doracorde: {
        alignSelf: 'center',
        width: 160,
        height: 30,
    }
});