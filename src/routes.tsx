import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Chat from './pages/Chat';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Chat" component={Chat} />
    </App.Navigator>
  );
};

export default Routes;
