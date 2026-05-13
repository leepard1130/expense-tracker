import { useContext, useEffect } from 'react';
import ExpenseOutput from '../components/ExpenseOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpense(){
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    // Fetch expenses from the backend and update the context
    // You can implement this using your fetchExpenses function and then update the context with the fetched data
    async function getExpenses(){
      const expenses =await fetchExpenses();
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return(
    <ExpenseOutput 
      expenses={recentExpenses}
      periodName='Last 7 Days'
      fallbackText='No expenses registered for the last 7 days.'
    />
  )
}

export default RecentExpense;