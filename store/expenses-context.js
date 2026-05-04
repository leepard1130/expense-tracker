import { createContext } from 'react';

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

export const ExpensesContext = createContext({
  expense: [],
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
    case 'DELETE':
    default:
      return state;

  }
}

function ExpensesContextProvider ({children}) {
  const [expenses,dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData){
    dispatch({type: 'ADD', payload: {expenseData}});
  }
  
  function deleteExpense(id){
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData){
    dispatch({type: 'UPDATE', payload: {id, expenseData}});
  }
  
  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;