import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Constants, WebBrowser, LinearGradient } from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <LinearGradient colors={['#5161B9', '#9C69CC']} style={{ position: 'absolute', height: 900, width: 400 }} />
       
       <Text style={{color: 'white', fontSize: 20 }}>CLICK TO WOW</Text>

        <TouchableOpacity onPress={this._openWebBrowserAsync}> 
          <Image style={{ width: 200, height: 200 }}source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Perspective-Button-Stop-icon.png'}} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});