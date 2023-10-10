import Product  from './Screen/Product';
import ChoseColor from './Screen/ChoseColor';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }} // Ẩn thanh điều hướng
        />
        <Stack.Screen name="ChoseColor" component={ChoseColor} />
        {/* Các màn hình khác nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;