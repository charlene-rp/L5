// // import React from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
//
// export default function App() {
//   // Step 2: Create the data source split into vowels and consonants
//   const vowels = [{ key: 'a' }, { key: 'e' }, { key: 'i' }, { key: 'o' }, { key: 'u' }];
//   const consonants = [
//     { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'f' }, { key: 'g' },
//     { key: 'h' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' },
//     { key: 'n' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' },
//     { key: 't' }, { key: 'v' }, { key: 'w' }, { key: 'x' }, { key: 'y' }, { key: 'z' },
//   ];
//
//   // Step 4: Create the renderItem function
//   const renderItem = ({ item }) => (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
//
//   // Render the header for each section
//   const renderHeader = (title, backgroundColor) => (
//       <View style={[styles.headerContainer, { backgroundColor }]}>
//         <Text style={styles.headerText}>{title}</Text>
//       </View>
//   );
//
//   return (
//       <View style={styles.container}>
//         {/* FlatList for Vowels */}
//         <FlatList
//             ListHeaderComponent={() => renderHeader('Vowels', '#add8e6')}
//             data={vowels}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.key}
//         />
//         {/* FlatList for Consonants */}
//         <FlatList
//             ListHeaderComponent={() => renderHeader('Consonants', '#ffff99')}
//             data={consonants}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.key}
//         />
//         <StatusBar style="auto" />
//       </View>
//   );
// }
//
// // Step 3: Define the StyleSheet
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   opacityStyle: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 5,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
//   headerContainer: {
//     padding: 10,
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });



// // =================== Exercise 1 ==================================
//
// import React from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
//
// const datasource = [
//   { key: 'a' },
//   { key: 'b' },
//   { key: 'c' },
//   { key: 'd' },
//   { key: 'e' },
//   { key: 'f' },
//   { key: 'g' },
//   { key: 'h' },
//   { key: 'i' },
//   { key: 'j' },
//   { key: 'k' },
//   { key: 'l' },
//   { key: 'm' },
//   { key: 'n' },
//   { key: 'o' },
//   { key: 'p' },
//   { key: 'q' },
//   { key: 'r' },
//   { key: 's' },
//   { key: 't' },
// ];
//
// const renderItem = ({ item }) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// export default function App() {
//   return (
//       <View style={styles.container}>
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.key}
//         />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50,
//   },
//   opacityStyle: {
//     borderWidth: 1,
//     width: '90%',
//     alignSelf: 'center',
//     marginVertical: 5,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
// });



// // ======================== Exercise 2 =================================
//
// import React from 'react';
// import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';
//
// const datasource = [
//   {
//     data: [
//       { key: 'a' },
//       { key: 'e' },
//       { key: 'i' },
//       { key: 'o' },
//     ],
//     title: "Vowels",
//     backgroundColor: '#7ad4f3',
//   },
//   {
//     data: [
//       { key: 'b' },
//       { key: 'c' },
//       { key: 'd' },
//       { key: 'f' },
//       { key: 'g' },
//       { key: 'h' },
//       { key: 'j' },
//       { key: 'k' },
//       { key: 'l' },
//       { key: 'm' },
//       { key: 'n' },
//       { key: 'p' },
//       { key: 'q' },
//     ],
//     title: "Consonants",
//     backgroundColor: '#f8ee8f',
//   },
// ];
//
// const renderItem = ({ item }) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// export default function App() {
//   return (
//       <View style={styles.container}>
//         <SectionList
//             sections={datasource}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.key}
//             renderSectionHeader={({ section: { title, backgroundColor } }) => (
//                 <View style={[styles.headerContainer, { backgroundColor }]}>
//                   <Text style={styles.headerText}>{title}</Text>
//                 </View>
//             )}
//         />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//     padding: 10,
//   },
//   opacityStyle: {
//     borderWidth: 1,
//     width: '100%',
//     alignSelf: 'center',
//     marginVertical: 5,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
//   headerContainer: {
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
//   headerText: {
//     fontSize: 20,
//     margin: 10,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });


// ========================== Exercise 3 ====================================

import React from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

const App = () => {
  // Pokémon Data
  const pokemonData = [
    {
      title: 'Fire 🔥',
      data: [
        {
          name: 'Charmander',
          imageUrl:
              'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png',
        },
        {
          name: 'Charizard',
          imageUrl:
              'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png',
        },
      ],
    },
    {
      title: 'Lightning ⚡',
      data: [
        {
          name: 'Pikachu',
          imageUrl:
              'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png',
        },
        {
          name: 'Raichu',
          imageUrl:
              'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png',
        },
      ],
    },
    {
      title: 'Fighting 🥊',
      data: [
        {
          name: 'Machop',
          imageUrl:
              'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_66-2x.png',
        },
        {
          name: 'Machamp',
          imageUrl:
              'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_68-2x.png',
        },
      ],
    },
  ];

  const handlePress = (pokemon) => {
    alert(`You clicked on ${pokemon.name}`);
  };

  return (
      <View style={styles.container}>
        {/* Add Pokémon Button */}
        <Button title="Add Pokémon" onPress={() => alert('Add Pokémon pressed')} />

        {/* Pokémon Section List */}
        <SectionList
            sections={pokemonData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePress(item)} style={styles.item}>
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

// Helper to Get Element Color
const getElementColor = (element) => {
  switch (element) {
    case 'Fire 🔥':
      return '#FF6347'; // Tomato Red
    case 'Lightning ⚡':
      return '#FFD700'; // Gold
    case 'Fighting 🥊':
      return '#8B4513'; // Saddle Brown
    default:
      return '#D3D3D3'; // Light Gray
  }
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
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
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
});

export default App;





