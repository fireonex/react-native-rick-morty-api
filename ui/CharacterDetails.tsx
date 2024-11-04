import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import {RootStackParamList} from "../App";


type CharacterDetailsRouteProp = RouteProp<RootStackParamList, 'Character'>;

export const CharacterDetails = () => {
    const route = useRoute<CharacterDetailsRouteProp>();
    const { character } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{character.name}</Text>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text>Status: {character.status}</Text>
            <Text>Species: {character.species}</Text>
            <Text>Gender: {character.gender}</Text>
            <Text>Origin: {character.origin.name}</Text>
            <Text>Location: {character.location.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});
