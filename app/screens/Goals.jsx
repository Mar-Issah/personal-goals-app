import React from 'react';

import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const Goals = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Type your goal' style={styles.textInput} />
        <Button title='ADD GOAL' color='#000' style={styles.button} />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d1cb',
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 40,
  },
  textInput: {
    width: '75%',
    backgroundColor: '#fff',
  },
});

export default Goals;
