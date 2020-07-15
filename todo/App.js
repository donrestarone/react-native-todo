import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  let [goal, setGoal] = useState('')
  let [goals, setGoals] = useState([])

  function addGoalHandler() {
    setGoals(currentGoals => [...currentGoals, {value: goal, key: Math.random().toString() }])
  }

  function renderGoals(goal) {
    return <Text style={styles.goal}>{goal.item.value}</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput value={goal} onChangeText={(input) => { setGoal(input) }} placeholder="enter goal" style={styles.input}/>
        <Button onPress={addGoalHandler} title="Add"/>
      </View>
      <FlatList
        data={goals}
        renderItem={(goal) => {return renderGoals(goal)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding: 10,
    width: '70%'
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1
  }
});
