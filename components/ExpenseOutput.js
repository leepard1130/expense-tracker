import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/styles';

import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

function ExpenseOutput({expenses, periodName}){
  return(
    <View style={styles.container}>
      <ExpenseSummary
        expenses={DUMMY_EXPENSES}
        periodName={periodName}
      />
      <ExpenseList
        expenses={DUMMY_EXPENSES}
      />
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  }
});