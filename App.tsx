import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import storybook from './storybook';

const IS_STORYBOOK = true;

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (IS_STORYBOOK ? storybook : App)




// import React, { useState } from 'react';
// import {
//     StatusBar,
//     FlatList,
//     ScrollView,
//     StyleSheet,
//     View,
//     Text,
//     Button,
//     TouchableOpacity,
//     SafeAreaView,
// } from 'react-native';

// const skills = [
//     {
//         title: 'PHP',
//         logo: '😀',
//         hours: 500,
//     },
//     {
//         title: 'javascript',
//         logo: '😀',
//         hours: 400,
//     },
//     {
//         title: 'React',
//         logo: '😀',
//         hours: 100,
//     },
//     {
//         title: 'React-native',
//         logo: '😀',
//         hours: 50,
//     },
//     {
//         title: 'Laravel',
//         logo: '😀',
//         hours: 400,
//     },
//     {
//         title: 'PHP1',
//         logo: '😀',
//         hours: 500,
//     },
//     {
//         title: 'javascript1',
//         logo: '😀',
//         hours: 400,
//     },
//     {
//         title: 'React1',
//         logo: '😀',
//         hours: 100,
//     },
//     {
//         title: 'React-native1',
//         logo: '😀',
//         hours: 50,
//     },
//     {
//         title: 'Laravel1',
//         logo: '😀',
//         hours: 400,
//     },
// ];

// interface SkillProps {
//     title: string;
//     logo: string;
//     hours: number;
// }


// const generateRandomSkills = (n: number):SkillProps => {
//   return [...new Array(n)].map((it, i)=>({
//     title: 'Laravel1',
//     logo: '😀',
//     hours: 400,
//   }))
// }


// const Skill: React.FC<SkillProps> = ({ title, logo, hours }) => {
//   console.log(title)
//     const [totalHoursSpent, setTotalHoursSpent] = useState<number>(hours);
//     return (
//         <View style={skillStyle.container}>
//             <Text>{title}</Text>
//             <Text>{logo}</Text>
//             <Text>{totalHoursSpent}</Text>
//             <TouchableOpacity onPress={() => setTotalHoursSpent(totalHoursSpent + 1)}>
//                 <Text>Add hours</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const skillStyle = StyleSheet.create({
//     container: {
//         height: 140,
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
// });

// const App: React.FC = () => {
//     const [count, setCount] = useState<number>(0);

//     const skills = generateRandomSkills(9999);

//     const onPress = () => {
//         setCount(count + 1);
//     };
//     return (
//         <FlatList<SkillProps>
//           data={skills}
//           renderItem={({item}) => <Skill title={item.title} logo={item.logo} hours={item.hours} ></Skill>}
//           ListEmptyComponent={<Text style={styles.bigBlue}>Counter is {count}</Text>}
//         />


//         // <>
//         //     <StatusBar backgroundColor="red"></StatusBar>
//         //     <ScrollView contentContainerStyle={styles.container}>
//         //         {skills.map(skill => (
//         //             <Skill key={skill.title} title={skill.title} logo={skill.logo} hours={skill.hours}></Skill>
//         //         ))}

//         //         <Text style={styles.bigBlue}>Counter is {count}</Text>
//         //         <TouchableOpacity onLongPress={() => setCount(count + 10)}>
//         //             <Text>Long press</Text>
//         //         </TouchableOpacity>
//         //         <Button onPress={onPress} title={'Increment'}></Button>
//         //     </ScrollView>
//         // </>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'green',
//         paddingVertical: 50,
//         paddingHorizontal: 12,
//     },
//     bigBlue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'red',
//     },
// });

// export default App;
