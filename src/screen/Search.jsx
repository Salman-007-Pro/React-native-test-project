import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';

//components
import Container from '../components/Container/Container';
import { Text, Input, Item } from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures';

//icon
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const areasName = [
  'Mosque',
  'Events',
  'Announcement',
  'PlayGround',
  'Beaches',
  'Parks',
];

const Search = ({ navigation }) => {
  const onSwipeUp = (gestureState) => {
    console.log(gestureState);
    navigation.navigate('Auth');
  };
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  const [search, setSearch] = useState('');

  const searchHandle = (text) => {
    setSearch(text);
  };

  const renderAreas = ({ item }) => {
    return (
      <View style={styles.areaListContainer}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <Container>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View style={styles.container}>
          <View style={styles.searchWrapper}>
            <Text
              style={{
                color: '#BEBEBE',
                fontWeight: 'bold',
                marginBottom: 20,
                marginLeft: 5,
              }}
            >
              Enter Islamic Institution Name
            </Text>
            <View style={styles.searchContainer}>
              <Item regular style={styles.inputText}>
                <Input
                  nativeID="search"
                  defaultValue={search}
                  value={search}
                  onChangeText={searchHandle}
                  placeholder="e.g Islamic Center of Southern California"
                  placeholderTextColor="#BEBEBE"
                  style={{ fontSize: 14 }}
                  underlineColorAndroid={'transparent'}
                />
              </Item>
              <Pressable
                android_ripple={{ color: '#d3d3d3', borderless: true }}
                style={styles.searchIcon}
              >
                <Feather name="search" size={30} color="black" />
              </Pressable>
            </View>
          </View>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 24.8607,
                longitude: 67.0011,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            />
            <Text style={styles.area}>Search this area</Text>
            <TouchableOpacity style={styles.gps}>
              <MaterialCommunityIcons
                name="crosshairs-gps"
                size={28}
                color="green"
              />
            </TouchableOpacity>
            <View style={styles.areaListWrapper}>
              <FlatList
                data={areasName}
                keyExtractor={(item) => item}
                renderItem={renderAreas}
                horizontal
                contentContainerStyle={{ padding: 15 }}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
        <GestureRecognizer
          onSwipeUp={(state) => onSwipeUp(state)}
          config={config}
          style={{ backgroundColor: 'transparent' }}
        >
          <View style={{ height: 20 }}></View>
        </GestureRecognizer>
      </View>
    </Container>
  );
};

export default Search;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: 'red',
  },
  container: {
    flex: 1,
  },
  inputText: {
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 1,
  },
  searchWrapper: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 40,
    height: 40,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  area: {
    position: 'absolute',
    left: 15,
    top: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  gps: {
    position: 'absolute',
    right: 15,
    top: 15,
    padding: 15,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  areaListWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  areaListContainer: {
    backgroundColor: 'white',
    marginRight: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 100,
  },
});
