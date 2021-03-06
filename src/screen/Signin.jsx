import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

//components
import Container from '../components/Container/Container';
import { Button, H1, Text, Input, Item } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';

//icons
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordViewState, setPasswordViewState] = useState(true);
  const [isloading, setLoading] = useState(true);

  const passwordViewStateHandle = () => {
    setPasswordViewState((prevState) => !prevState);
  };
  const emailHandle = (text) => {
    setEmail(text);
  };
  const passwordHandle = (text) => {
    setPassword(text);
  };

  useEffect(() => {
    const fixFont = async () => {
      try {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...AntDesign.font,
          ...Feather.font,
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fixFont();
  }, []);
  if (!isloading)
    return (
      <Container>
        <ScrollView>
          <KeyboardAwareScrollView>
            <View style={styles.container}>
              <View style={styles.headerSetting}>
                <Pressable
                  android_ripple={{ color: '#d3d3d3', borderless: true }}
                  onPress={() => navigation.goBack()}
                >
                  <AntDesign name="arrowleft" size={30} color="black" />
                </Pressable>
                <Text style={{ color: '#BEBEBE', fontWeight: '600' }}>
                  trouble signing in?
                </Text>
              </View>
              <View style={styles.mainContent}>
                <View>
                  <H1 style={{ fontWeight: 'bold', marginBottom: 10 }}>
                    Sign in
                  </H1>
                  <Text style={{ color: '#BEBEBE', fontWeight: '600' }}>
                    Enter your credentials to continue...!
                  </Text>
                </View>
                <View>
                  <View style={{ marginBottom: 35 }}>
                    <Item regular style={styles.inputText}>
                      <Input
                        nativeID="email"
                        defaultValue={email}
                        value={email}
                        onChangeText={emailHandle}
                        placeholder="Email"
                        placeholderTextColor="#BEBEBE"
                        underlineColorAndroid={'transparent'}
                      />
                    </Item>
                  </View>
                  <View style={{ marginBottom: 35 }}>
                    <Item regular style={styles.inputText}>
                      <Input
                        nativeID="password"
                        defaultValue={password}
                        value={password}
                        onChangeText={passwordHandle}
                        placeholder="Password"
                        autoCorrect={false}
                        placeholderTextColor="#BEBEBE"
                        secureTextEntry={passwordViewState}
                        textContentType={'password'}
                        underlineColorAndroid={'transparent'}
                      />
                      <Feather
                        onPress={passwordViewStateHandle}
                        name={passwordViewState ? 'eye-off' : 'eye'}
                        size={28}
                        color="black"
                        style={{ marginRight: 8 }}
                      />
                    </Item>
                  </View>
                  <Button
                    block
                    style={StyleSheet.flatten([
                      styles.buttonColor1,
                      styles.buttonSetting,
                    ])}
                  >
                    <Text style={{ fontSize: 12 }}>Login</Text>
                  </Button>
                </View>
                <View>
                  <Button
                    block
                    bordered
                    style={StyleSheet.flatten([
                      styles.buttonSetting,
                      { borderColor: '#BEBEBE' },
                    ])}
                    onPress={() => navigation.navigate('Signup')}
                  >
                    <Text
                      style={{ color: '#BEBEBE', textTransform: 'lowercase' }}
                    >
                      I don't have account
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </Container>
    );
  else
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#006B0E" />
        </View>
      </Container>
    );
};

export default Home;

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height - 26,
  },
  headerSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  mainContent: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  inputText: {
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  buttonSetting: {
    height: 65,
    borderRadius: 100,
  },
  buttonColor1: {
    backgroundColor: '#006B0E',
  },
});
