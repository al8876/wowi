import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Constants, WebBrowser, LinearGradient } from 'expo';
import Logo from './assets/wowi.png'


export default class App extends React.Component {
  
  Play() {
    this.clickSound();
  }
    
  async clickSound() {
    const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/wow1.mp3'));
        await soundObject.playAsync();
      } catch (error) {
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <LinearGradient colors={['#5161B9', '#9C69CC']} style={{ position: 'absolute', height: 900, width: 400 }} />

        <Image style={{ width: 200, height: 150 }} source={Logo}/>

        <TouchableOpacity onPress={() => this.Play()}> 
          <Image style={{ width: 200, height: 200 }}source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Perspective-Button-Stop-icon.png'}} />
          <Image style={{ position: 'absolute', width: 100, height: 100, marginLeft: 50, marginTop: 25 }}source={{ uri: 'https://cdn.famousoutfits.com/wp-content/uploads/2014/12/owen-wilson.png'}} />
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