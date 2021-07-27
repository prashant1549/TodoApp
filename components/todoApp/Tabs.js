import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FilterAllComplete from './FilterAllComplete';
import FilterAll from './FilterAll';
import FilterNotComplete from './FilterNotComplete';
import FilterDue from './FileterDue';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={FilterAll} />
      <Tab.Screen name="Complete" component={FilterAllComplete} />
      <Tab.Screen name="Not Complete" component={FilterNotComplete} />
      <Tab.Screen name="Due" component={FilterDue} />
    </Tab.Navigator>
  );
};
export default Tabs;
