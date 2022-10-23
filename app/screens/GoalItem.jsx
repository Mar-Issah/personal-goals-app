import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ item }) => {
  return (
    <View key={item.key} style={styles.goalItem}>
      <Text>{item}</Text>
    </View>
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
