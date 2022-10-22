import React from 'react';

import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const Goals = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Type your goal' />
        <Button title='ADD GOAL' />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Goals;
