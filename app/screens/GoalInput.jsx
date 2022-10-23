import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';

const GoalInput = ({ onAddGoal, modalVisible, handleModal }) => {
  const [text, setText] = useState('');

  const handleInput = (inputText) => {
    setText(inputText);
  };

  //move this onto the parent component
  const handleAddGoal = () => {
    onAddGoal(text);
    setText(''); //first set the value={text}
  };

  return (
    <Modal visible={modalVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          fadeDuration={300} //fade animation by default is 3ms we can make it 1sec ie {1000}
          style={styles.image}
          source={{
            uri: 'https://res.cloudinary.com/dytnpjxrd/image/upload/v1666549301/1608236387-goalfea_efirhh.jpg',
          }}
        />
        <TextInput placeholder='Type your goal' style={styles.textInput} onChangeText={handleInput} value={text} />
        <View style={styles.buttonContainer}>
          <Button title='ADD GOAL' color='#000' onPress={handleAddGoal} />
          <Button title='CLOSE' color='#000' onPress={handleModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
    // borderBottomWidth: 2,
    // borderBottomColor: '#000',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 4,
  },
  buttonContainer: {
    marginTop: 8,
    height: '13%',
    justifyContent: 'space-between',
  },
  image: {
    width: 400,
    height: '50%',
  },
});

export default GoalInput;
