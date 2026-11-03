import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider, AppContext } from './AppContext';
import ShopTab from './ShopTab';
import CartTab from './CartTab';

const Tab = createBottomTabNavigator();

// Lives inside the Provider so it can read the cart for the tab badge
function Tabs() {
  const { cart } = useContext(AppContext);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Shop" component={ShopTab} />
      <Tab.Screen
        name="Cart"
        component={CartTab}
        options={{ tabBarBadge: cart.length > 0 ? cart.length : undefined }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </AppProvider>
  );
}
