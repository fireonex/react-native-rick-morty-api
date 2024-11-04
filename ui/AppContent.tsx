import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, Button} from "react-native";
import { charactersApi } from "../api/charactersApi";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useDispatch, useSelector } from "react-redux";
import {locationsFilter, setCharacters} from "../api/charactersSlice";
import { Character } from "../types/types";
import { RootState } from "../api/store";

type CharactersScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Characters'>;

export const AppContent = () => {
    const { data, isLoading, isError } = charactersApi.useGetCharactersQuery();
    const navigation = useNavigation<CharactersScreenNavigationProp>();
    const dispatch = useDispatch();

    const filteredCharacters: Character[] = useSelector((state: RootState) => state.characters.filteredCharacters);

    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        if (data?.results) {
            dispatch(setCharacters(data.results));
        }
    }, [data, dispatch]);

    const sortByLocationsHandler = (title: string) => {
        setFilterText(title);
    };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.container}>
                <Text>Error loading characters</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Filter by location"
                value={filterText}
                onChangeText={sortByLocationsHandler}
            />
            <Button title={'sort'} onPress={() => dispatch(locationsFilter(filterText))}/>
            <FlatList
                data={filteredCharacters.length ? filteredCharacters : data?.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.characterContainer}
                        onPress={() => navigation.navigate("Character", { character: item })}
                    >
                        <Text style={styles.characterName}>{item.name}</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <View>
                                <Text>Status: {item.status}</Text>
                                <Text>Species: {item.species}</Text>
                                <Text>Gender: {item.gender}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    characterContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#e8e8e8",
        borderRadius: 8,
    },
    characterName: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    image: {
        width: 70,
        height: 50,
        marginBottom: 20,
    },
    input: {
        width: "80%",
        padding: 10,
        marginBottom: 20,
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 8,
    },
});
