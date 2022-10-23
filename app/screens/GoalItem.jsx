import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ item, onDeleteGoal, id }) => {
  const deleteGoal = () => {
    onDeleteGoal(id);
  };

  // console.log(item);

  return (
    <Pressable onPress={deleteGoal}>
      <View style={styles.goalItem}>
        <Text>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    padding: 5,
    borderRadius: 6,
    backgroundColor: '#de84f5',
  },
});

export default GoalItem;
