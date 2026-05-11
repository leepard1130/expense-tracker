import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2026-05-10')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 150.99,
    date: new Date('2026-05-09')
  },
    {
    id: 'e3',
    description: 'A pair of jackets',
    amount: 200.99,
    date: new Date('2026-05-08')
  },
    {
    id: 'e4',
    description: 'A bag of fruits',
    amount: 10.99,
    date: new Date('2026-05-07')
  },  {
    id: 'e5',
    description: 'some books',
    amount: 100.99,
    date: new Date('2026-05-08')
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date}) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount ,date }) => {}
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.expenseData};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;

  }
}

function ExpensesContextProvider ({children}) {
  const [expenses,dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData){
    dispatch({type: 'ADD', payload: expenseData});
  }
  
  function deleteExpense(id){
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData){
    dispatch({type: 'UPDATE', payload: {id: id, expenseData: expenseData}});
  }

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;