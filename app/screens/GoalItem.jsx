import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ item, onDeleteGoal, id }) => {
  const deleteGoal = () => {
    onDeleteGoal(id);
  };

  // console.log(item);

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={deleteGoal}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 6,
    backgroundColor: '#de84f5',
    //padding: 5,
  },
  text: {
    padding: 5, //move the padding here so the ripple effect can fill the container
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
