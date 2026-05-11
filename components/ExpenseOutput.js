import { View, StyleSheet, Text } from 'react-native';

import { GlobalStyles } from '../constants/styles';

import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

function ExpenseOutput({expenses, periodName, fallbackText}){
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>

  if( expenses.length > 0 ){
    content = <ExpenseList expenses={expenses}/>
  }
  return(
    <View style={styles.container}>
      <ExpenseSummary
        expenses={expenses}
        periodName={periodName}
      />
      {content}
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallbackText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 32,
  }
});