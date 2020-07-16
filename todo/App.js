import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput/GoalInput'
import Goal from './components/Goal/Goal'

export default function App() {
  let [goals, setGoals] = useState([])
  let [inputModalVisible, setInputModalVisible] = useState(false)

  function addGoalHandler(goal) {
    setInputModalVisible(false)
    setGoals(currentGoals => [...currentGoals, {value: goal, key: Math.random().toString() }])
  }

  function deleteGoalHandler(key) {
    let removedFromList = goals.filter(g => g.key != key)
    setGoals([...removedFromList])
  }

  function renderGoals(goal) {
    return (
      <Goal goal={goal} onDelete={deleteGoalHandler}/>
    )
  }

  return (
    <View style={styles.container}>
      <Button title={'Add Goal'} onPress={() => {setInputModalVisible(!inputModalVisible)}}/>
      <GoalInput
        onCreate={addGoalHandler}
        visible={inputModalVisible}
      />
      <View style={styles.goalList}>
        <FlatList
          data={goals}
          renderItem={(goal) => {return renderGoals(goal)}}
        />
      </View>
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
  },
  goalList: {
    width: '100%',
    padding: 30
  }
});
