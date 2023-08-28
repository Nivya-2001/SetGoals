import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, StyleSheet, Button, Image, Text, Pressable } from 'react-native'
import GoalScreen from './components/GoalScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Goals' component={GoalScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  )
}
const Home = ({ navigation }) => {
  return (
    <View style={styles.Main}>
      <View style={styles.LogoBox}>
        <Image style={styles.LogoImage}
          source={require('../SetGoals/assets/logoImage.jpg')} />
        <Text style={styles.Tagline}>Set Goals to Achieve</Text>
      </View>
      <View style={styles.MainbtnBox}>
          <Pressable onPress={() => navigation.navigate('Goals')}>
        <View style={styles.Btn}>
            <Text style={{fontSize:20,color:'white'}}>Add Goals</Text>
        </View>
          </Pressable>
      </View>
    </View>
  )

}
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LogoBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LogoImage: {
    width: 350,
    height: 300
  },
  Tagline: {
    margin: 10,
    padding: 10,
    fontSize: 30,
    fontWeight: '900',
    color: 'purple'
  },
  MainbtnBox: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-end',
    margin: 20,
  },
  Btn:{
    margin:10,
    padding:20,
    backgroundColor:'purple',
    alignItems:'center',
    width:400
  }
})
