import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PaginaBase from '../PaginaBase';


export default function Login({ navigation }) {
    const [nome, onChangeNome] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');

    return (
        <View style={styles.container}>
            <PaginaBase>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Já tem conta? Faça seu login:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNome}
                            value={nome}
                            placeholder='Digite seu  email'
                            placeholderTextColor={'#BCBCBC'}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeSenha}
                            value={senha}
                            placeholder="Digite sua senha"
                            placeholderTextColor={'#BCBCBC'}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tab')}>
                            <Text style={styles.textoBotao}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
            </PaginaBase>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    text: {
        color: "black",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
    },
    contentContainer: {
        gap: 32,
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
    },
    imagem: {
        alignSelf: 'center',
    },
    backgroundImagePatas: {
        height: '100%',
    },
    input: {
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        textAlign: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        padding: 12,
    },

    button: {
        borderRadius: 8,
        backgroundColor: 'black',
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
});
