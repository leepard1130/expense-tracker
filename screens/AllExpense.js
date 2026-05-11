import ExpenseOutput from '../components/ExpenseOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';

function AllExpense() {
  const { expenses } = useContext(ExpensesContext);
  return(
    <ExpenseOutput 
      expenses={expenses}
      periodName='Total'
      fallbackText='No expenses registered.'
    />
  )
}

export default AllExpense;