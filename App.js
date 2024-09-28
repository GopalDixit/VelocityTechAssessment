import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './screens/Welcome';
import Categories from './screens/CategoriesTab';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { getFont } from './helpers';

const Tab = createBottomTabNavigator();


export default function App() {
  const screenOptions = {
    showLabel: false,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.navigatorStyle,
  };
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator backBehavior="history" screenOptions={screenOptions}>
        <Tab.Screen name="Welcome" component={Welcome} options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabStyle}>
                <Text style={[styles.text, focused ? { color: 'white',backgroundColor:'orange',borderRadius:8,padding:4 } : null]}>Welcome</Text>
              </View>
            ),
          }} />

          <Tab.Screen name="Categories" component={Categories} options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabStyle}>
                <Text style={[styles.text, focused ? { color: 'white',backgroundColor:'orange',borderRadius:8,padding:4 } : null]}>Categories</Text>
              </View>
            ),
          }} />
          
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigatorStyle: {
    height: Platform.OS === 'android' ? 70 : 50,
    alignItems: 'center',
  },
  tabStyle: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: getFont('Regular')
  },

  
});