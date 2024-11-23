import React, { useState } from 'react';
import { View, Text, Image, SectionList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { pokemonData } from './Data.js';

const Home = ({ navigation }) => {
    const [data, setData] = useState(pokemonData);

    const handleCardPress = (pokemon, sectionIndex, itemIndex) => {
        navigation.navigate('Edit', {
            pokemon,
            sectionIndex,
            itemIndex,
            setData,
            data,
        });
    };

    return (
        <View style={styles.container}>
            <Button
                title="Add Pokémon"
                onPress={() => navigation.navigate('Add', { data, setData })}
            />

            <SectionList
                sections={data}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item, section, index }) => (
                    <TouchableOpacity
                        onPress={() => handleCardPress(item, data.indexOf(section), index)}
                        style={styles.item}
                    >
                        <Text style={styles.name}>{item.name}</Text>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section }) => (
                    <View style={[styles.header, { backgroundColor: getElementColor(section.title) }]}>
                        <Text style={styles.headerText}>{section.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const getElementColor = (element) => {
    switch (element) {
        case 'Fire 🔥':
            return '#FF6347';
        case 'Lightning ⚡':
            return '#FFD700';
        case 'Fighting 🥊':
            return '#8B4513';
        default:
            return '#D3D3D3';
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5F5F5',
        justifyContent: 'flex-start',
        marginTop: 30,
    },
    header: {
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },
    name: {
        flex: 1,
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
});

export default Home;


