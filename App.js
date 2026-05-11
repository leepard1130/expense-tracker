import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import  ExpensesContextProvider from './store/expenses-context';
import AllExpense from './screens/AllExpense';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';

import {GlobalStyles} from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return(
    <BottomTabs.Navigator screenOptions={({navigation}) => ({
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => (
        <Ionicons 
          name='add' 
          size={24} 
          color={tintColor} 
          onPress={() => {navigation.navigate('ManageExpense')}
          }
        />
      )
    })}>
      <BottomTabs.Screen
        name='RecentExpense'
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) =>(
            <Ionicons name='hourglass' size={size} color={color}/>
          )
        }}
      />
      <BottomTabs.Screen 
        name='AllExpense'
        component={AllExpense}
                options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) =>(
            <Ionicons name='calendar' size={size} color={color}/>
          )
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor:'white'
            }}
          >
            <Stack.Screen 
              name='ExpenseOverview'
              component={ExpenseOverview}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name='ManageExpense'
              component={ManageExpense}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
