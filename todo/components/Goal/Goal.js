import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Goal(props) {
  let goal = props.goal
  return (
    <TouchableOpacity onPress={() => {props.onDelete(goal.item.key)}}>
      <Text style={styles.goal}>{goal.item.value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1
  }
});
