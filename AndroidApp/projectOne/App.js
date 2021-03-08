import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Form } from 'react-native';
import axios from 'axios';

const App = () => {
  const [imgur, setImgur] = useState([]);

  async function callImgur(tag) {
    console.log(tag)
    const uri = `https://api.imgur.com/3/gallery/t/${tag}`;
    // await axios.get(uri).then((response) => {
    //   console.log(response)
    // });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Form>
          <Input
            placeholder="Tag of imgur"
            style={styles.input}
            onSubmit={event => callImgur(event.target.value)}
          />
        </Form>
      </View>
      <View>
        {imgur.map((title) => <Text>{title}</Text>)}
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    bottom: 20
  },
});
