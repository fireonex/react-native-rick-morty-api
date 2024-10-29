import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { charactersApi } from "../api/charactersApi";

export const AppContent = () => {
    const { data, isLoading, isError } = charactersApi.useGetCharactersQuery();

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
            <Text style={styles.header}>Characters</Text>
            <FlatList
                data={data?.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.characterContainer}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.characterImage}
                        />
                        <Text style={styles.characterName}>{item.name}</Text>
                        <Text>Status: {item.status}</Text>
                        <Text>Species: {item.species}</Text>
                        <Text>Gender: {item.gender}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    characterContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
        alignItems: 'center',
    },
    characterImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: 50,
    },
    characterName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
