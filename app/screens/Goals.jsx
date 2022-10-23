import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

const Goals = () => {
  const [goals, setGoals] = useState([]);

  return (
    <View style={styles.container}>
      <GoalInput setGoals={setGoals} />
      <View style={styles.goalContainer}>
        <Text style={styles.listText}>List of goals...</Text>
        <FlatList
          data={goals} //accepts an array i.e the goals
          renderItem={({ item, index, separators }) => {
            //instead of renderItem(itemData); bcos itemData is an obj and then itemData.item we destructure the item
            return <GoalItem item={item} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d1cb',
    paddingTop: 50,
    paddingHorizontal: 16, //padding left and right
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  textInput: {
    width: '75%',
    backgroundColor: '#fff',
    padding: 4,
  },
  goalContainer: {
    flex: 5,
  },
  listText: {
    fontWeight: 'bold',
    width: '100%',
  },
  goalItem: {
    margin: 5,
    padding: 5,
    borderRadius: 6,
    backgroundColor: '#de84f5',
  },
});

export default Goals;
