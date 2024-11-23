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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import Add from './Add.js';
import Edit from './Edit.js';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="Edit" component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;







