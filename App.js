 import React, { useEffect } from 'react';
 import Navigation from './src/navigation';
 import 'react-native-gesture-handler';
 import RNBootSplash from "react-native-bootsplash";
 
 export default function App() {

  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, []);

  return (
    <Navigation />
  )
};
 