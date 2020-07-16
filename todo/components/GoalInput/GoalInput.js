import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Button, Modal} from 'react-native';

export default function GoalInput(props) {
  useEffect(() => {
    if (!props.visible) {
      setGoal('')
    }
  }, [props.visible])

  let [goal, setGoal] = useState('')

  return (
    <Modal style={styles.modal} visible={props.visible} animationType='slide'>
      <View style={styles.inputGroup}>
        <TextInput value={goal} onChangeText={(input) => { setGoal(input) }} placeholder="enter goal" style={styles.input}/>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button onPress={() => {props.onCreate(goal)} } title="Add"/>
          </View>
          <View style={styles.button}>
            <Button onPress={props.onCancel} title="Cancel" color="red"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding: 20,
    width: '70%'
  },
  inputGroup: {
    margin: 10,
    padding: 20,
    alignItems: 'center',
    flex: 1
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  button: {
    padding: 10
  }
});
