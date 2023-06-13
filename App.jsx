import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/screens/Onboarding';
import { SafeAreaProvider } from 'react-native-safe-area-context';

 
const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};



function App() {
   
  return (
    <SafeAreaProvider>
    <View style={{flex: 1, backgroundColor: '#050203'}}>
      <NavigationContainer>
          
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  // ...TransitionPresets.SlideFromRightIOS,
                  transitionSpec: {
                    open: config,
                    close: config,
                  },
                  cardStyleInterpolator: ({current: {progress}}) => {
                    return {
                      cardStyle: {
                        opacity: progress,
                      },
                    };
                  },
                }}
                >
                 
                <Stack.Screen
                  name="onBoard"
                  options={{headerShown: false}}
                  component={Onboarding}
                />
              </Stack.Navigator>
           
      </NavigationContainer>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;