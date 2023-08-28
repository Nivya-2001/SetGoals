import React,{useState} from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function GoalScreen() {
    const [goals, setGoals] = useState("")
  const [arr, setArr] = useState([])

  function takegoal(entergoal) {
    setGoals(entergoal)
  }

  function addGoals() {
    setArr((currentgoals) => [...currentgoals, goals,])
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.addBox}>
        <TextInput placeholder='Enter Goals' style={styles.goalInput}
          onChangeText={(text) => takegoal(text)}
        />
        <TouchableHighlight style={styles.addBtn} onPress={addGoals} >
          <Text style={{ fontSize: 20, color: 'white' }}>Add</Text>
        </TouchableHighlight>
      </View>
     
      <View style={styles.goalBox} >
        <Text style={{fontSize:20,margin:10,fontWeight:'800'}}>Your Goals</Text>
        <FlatList
          data={arr}
          renderItem={(goalitems) => {
            return (
              <View style={{ backgroundColor: 'purple', padding: 15, margin: 5, borderRadius: 10 }}>
                <Text style={{fontSize:20,color:'white'}}>{goalitems.item}</Text>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    addBox: {
      flex: 1,
      padding: 10,
      margin:5,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderColor: 'purple',
      flexDirection: 'row'
    },
    goalInput: {
      width: '75%',
      borderRadius:10,
      fontSize:20,
      marginRight: 10,
      padding: 10,
      height: 60,
      borderWidth: 1,
      borderColor: 'purple'
    },
    addBtn: {
      width: '25%',
      height: 60,
      backgroundColor: 'purple',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },
    goalBox: {
      flex: 4,
      margin: 10,
      padding: 5,
      flexDirection: 'column'
    }
  })
