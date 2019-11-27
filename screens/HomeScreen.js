import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';

import { Audio } from 'expo-av';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.audioPlayer = new Audio.Sound();
  }

  
  render() {
  
        return (
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
               
              <View style={styles.welcomeContainer}>
                <Image
                  source={
                    __DEV__
                      ? require('../assets/images/microphone.png')
                      : require('../assets/images/microphone.png')
                  }
                  style={styles.welcomeImage}
                />
              </View>
              
              <View style={styles.helpContainer}>
              
                <TouchableOpacity   style={styles.helpLink}  onPress={this.playSound}>
                  <Text style={styles.helpLinkText}  >
                    A a
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound2}>
                  <Text style={styles.helpLinkText}>
                   Á á
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}   onPress={this.playSound3}>
                  <Text style={styles.helpLinkText}>
                    B b
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound4}>
                  <Text style={styles.helpLinkText}>
                    D d
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound5}>
                  <Text style={styles.helpLinkText}>
                    E e
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound6}>
                  <Text style={styles.helpLinkText}>
                    F f
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound7}>
                  <Text style={styles.helpLinkText}>
                    G g
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound8}>
                  <Text style={styles.helpLinkText}>
                    Ǵ ǵ
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound9}>
                  <Text style={styles.helpLinkText}>
                    H h
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.helpLink}  onPress={this.playSound10}>
                  <Text style={styles.helpLinkText}>
                    I i
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound11}>
                  <Text style={styles.helpLinkText}>
                    I ı
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound12}>
                  <Text style={styles.helpLinkText}>
                    J j
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound13}>
                  <Text style={styles.helpLinkText}>
                    K k
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound14}>
                  <Text style={styles.helpLinkText}>
                    L l
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound15}>
                  <Text style={styles.helpLinkText}>
                    M m
                  
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound16}>
                  <Text style={styles.helpLinkText}>
                    N n
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound17}>
                  <Text style={styles.helpLinkText}>
                    Ń ń
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.helpLink}  onPress={this.playSound18}>
                  <Text style={styles.helpLinkText}>
                    O o
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound19}>
                  <Text style={styles.helpLinkText}>
                    Ó ó
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound20}>
                  <Text style={styles.helpLinkText}>
                    P p
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound21}>
                  <Text style={styles.helpLinkText}>
                    Q q
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound22}>
                  <Text style={styles.helpLinkText}>
                    R r
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound23}>
                  <Text style={styles.helpLinkText}>
                    S s
                 
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound24}>
                  <Text style={styles.helpLinkText}>
                    T t
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound25}>
                  <Text style={styles.helpLinkText}>
                    U u
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound26}>
                  <Text style={styles.helpLinkText}>
                  Ú ú
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound27}>
                  <Text style={styles.helpLinkText}>
                    V v
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound28}>
                  <Text style={styles.helpLinkText}>
                    Y y
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound29}>
                  <Text style={styles.helpLinkText}>
                    Ý ý
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound30}>
                  <Text style={styles.helpLinkText}>
                    Z z
                  </Text>
                </TouchableOpacity>
             
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound31}>
                  <Text style={styles.helpLinkText}>
                    Sh sh
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.helpLink}  onPress={this.playSound32}>
                  <Text style={styles.helpLinkText}>
                    Ch ch
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* <View style={styles.tabBarInfoContainer}>
              <Text style={styles.tabBarInfoText}>
                This is a tab bar. You can edit it in:
              </Text>

              <View
                style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                <MonoText style={styles.codeHighlightText}>
                  navigation/MainTabNavigator.js
                </MonoText>
              </View>
            </View> */}
          </View>
        );
    }
    
  
  playSound = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/1.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound2 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/2.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  } 
  playSound3 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/3.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  } 
  playSound4 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/4.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound5 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/5.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound6 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/6.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound7 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/7.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound8 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/8.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound9 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/9.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound10 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/10.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound11 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/11.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound12 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/12.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound13 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/13.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound14 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/14.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound15 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/15.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound16 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/16.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound17 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/17.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound18 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/18.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound19 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/19.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound20 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/20.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound21 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/21.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound22 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/22.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound23 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/23.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound24 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/24.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound25 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/25.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound26 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/26.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound27 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/27.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound28 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/28.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound29 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/29.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound30 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/30.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound31 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/31.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
  playSound32 = async () => {
    try {
      await this.audioPlayer.unloadAsync()
      await this.audioPlayer.loadAsync(require('../assets/sound/32.mp3'));
      await this.audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }
}


HomeScreen.navigationOptions = {
  title: "Әріп дыбысталуы",
  headerTintColor: '#8c51d9',
  headerTitleStyle: { alignSelf: 'center' }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },

  helpLink: {
    paddingVertical: 15,
    backgroundColor: "#8c51d9",
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderRadius: 3,
    margin: 5, 
    width: 70,
  },
  helpLinkText: {
    fontSize: 14,
    color: 'white'
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center',
  
  }

});
