import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Pagina1" component={Pagina1Screen} />
      <Tab.Screen name="Pagina2" component={Pagina2Screen} />
      
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name= "Bottom" component={ MyTabs }/>
      
    </Stack.Navigator>
  );
}

export default function MainNavigator (){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}