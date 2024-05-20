import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import PaginaBase from "../PaginaBase";

const PianoKey = ({ color, onPress, label }) => {
    return (
        <TouchableOpacity style={[styles.key, { backgroundColor: color }]} onPress={onPress}>
            {label && <Text style={styles.keyLabel}>{label}</Text>}
        </TouchableOpacity>
    );
};

export default function Mensagem() {
    const handlePress = (note) => {
        Alert.alert(`Você pressionou a nota ${note}`);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <PaginaBase>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Que nota é essa</Text>
                        <View style={styles.progressContainer}>
                            <View style={styles.progressBar}>
                                <Text style={styles.progressText}>Notas {'>'} Piano {'>'} Naturais 1</Text>
                                <Text style={styles.exerciseText}>Exercicio 1</Text>
                                <Text style={styles.progressPercentage}>67 %</Text>
                            </View>
                        </View>
                        
                        <View style={styles.keyboard}>
                            <PianoKey color="white" onPress={() => handlePress('C')} label="C" />
                            <PianoKey color="black" onPress={() => handlePress('C#')} />
                            <PianoKey color="white" onPress={() => handlePress('D')} label="D" />
                            <PianoKey color="black" onPress={() => handlePress('D#')} />
                            <PianoKey color="white" onPress={() => handlePress('E')} label="E" />
                            <PianoKey color="white" onPress={() => handlePress('F')} label="F" />
                            <PianoKey color="black" onPress={() => handlePress('F#')} />
                            <PianoKey color="white" onPress={() => handlePress('G')} label="G" />
                            <PianoKey color="black" onPress={() => handlePress('G#')} />
                            <PianoKey color="white" onPress={() => handlePress('A')} label="A" />
                            <PianoKey color="black" onPress={() => handlePress('A#')} />
                            <PianoKey color="white" onPress={() => handlePress('B')} label="B" />
                        </View>
                    </View>
                </PaginaBase>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    text: {
        color: "#000",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 20,
    },
    contentContainer: {
        alignItems: 'center',
        paddingTop: 50,
    },
    progressContainer: {
        backgroundColor: '#000',
        width: '90%',
        borderRadius: 8,
        padding: 10,
        marginVertical: 20,
    },
    progressBar: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    progressText: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 10,
    },
    exerciseText: {
        color: '#FFF',
        fontSize: 14,
        marginBottom: 10,
    },
    progressPercentage: {
        color: '#FFF',
        fontSize: 16,
    },
    keyboard: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    key: {
        width: 40,
        height: 150,
        margin: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    keyLabel: {
        fontSize: 12,
        color: '#000',
        marginBottom: 4,
    },
});
