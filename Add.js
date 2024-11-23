import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Add = ({ route, navigation }) => {
    const { data, setData } = route.params;
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleAdd = () => {
        const imageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${number}-2x.png`;

        const newPokemon = { name, imageUrl };

        const updatedData = [...data];
        updatedData[0].data.push(newPokemon);

        setData(updatedData);

        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
            <Text style={styles.label}>Card Number:</Text>
            <TextInput
                style={styles.input}
                value={number}
                onChangeText={setNumber}
                keyboardType="numeric"
            />
            <Button title="Add Pokémon" onPress={handleAdd} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontWeight: 'bold', marginBottom: 5 },
    input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
});

export default Add;


