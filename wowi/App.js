import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Constants, WebBrowser, LinearGradient } from 'expo';
import Logo from './assets/wowi.png';
import ButtonPicture from './assets/button.png';
import OwenWilson from './assets/owenwilson.jpg';


const { width, height } = Dimensions.get('window');


export default class App extends React.Component {


  
  Play() {

    let getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let num = getRandomInt(1, 6);

    if (num === 1) {
      this.clickSound();    
    } else if (num === 2) {
      this.clickSound2();
    } else if (num === 3) {
      this.clickSound3();
    } else if (num === 4) {
      this.clickSound4();
    } else if (num === 5) {
      this.clickSound5();
    } else if (num === 6) {
      this.clickSound6();
    }

  }
    
  async clickSound() {
    const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/wow1.mp3'));
        await soundObject.playAsync();
      } catch (error) {
    }
  }

  async clickSound2() {
    const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/wow2.mp3'));
        await soundObject.playAsync();
      } catch (error) {
    }
  }

  async clickSound3() {
    const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/wow3.mp3'));
        await soundObject.playAsync();
      } catch (error) {
    }
  }

  async clickSound4() {
    const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/wow4.mp3'));
        await soundObject.playAsync();
      } catch (error) {
    }
  }

  async clickSound5() {
    const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/wow5.mp3'));
        await soundObject.playAsync();
      } catch (error) {
    }
  }

  async clickSound6() {
    const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(require('./assets/wow6.mp3'));
        await soundObject.playAsync();
      } catch (error) {
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <LinearGradient colors={['#5161B9', '#9C69CC']} style={{ position: 'absolute', height: height, width: width }} />

        <Image style={{ width: 200, height: 150 }} source={Logo}/>

        <TouchableOpacity onPress={() => this.Play()}> 
          <Image style={{ width: 200, height: 200 }}source={ButtonPicture} />
          <Image style={{ position: 'absolute', width: 100, height: 100, marginLeft: 50, marginTop: 25 }}source={OwenWilson} />
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