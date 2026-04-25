import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/styles';

import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2026-03-19')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 150.99,
    date: new Date('2026-01-19')
  },
    {
    id: 'e3',
    description: 'A pair of jackets',
    amount: 200.99,
    date: new Date('2026-03-19')
  },
    {
    id: 'e4',
    description: 'A bag of fruits',
    amount: 10.99,
    date: new Date('2026-01-25')
  },  {
    id: 'e5',
    description: 'some books',
    amount: 100.99,
    date: new Date('2026-04-19')
  },
];

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