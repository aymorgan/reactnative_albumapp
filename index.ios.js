// Index.ios.js - this is the file that I put code for the iOS App

// Step 1 - Import the libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Step 2 - Create a conponent
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// Step 3 - Render this conponent
AppRegistry.registerComponent('albums', () => App);
