import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FilterAllComplete from './FilterAllComplete';
import FilterAll from './FilterAll';
import FilterNotComplete from './FilterNotComplete';
import FilterDue from './FileterDue';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="All"
        component={FilterAll}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                All
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Complete"
        component={FilterAllComplete}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Complete
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Not Complete"
        component={FilterNotComplete}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Uncomplete
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Due"
        component={FilterDue}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Due
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    textShadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
