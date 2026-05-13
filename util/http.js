import axios from "axios";

const BACKEND_URL = 'https://react-native-94e8e-default-rtdb.asia-southeast1.firebasedatabase.app/';  

export function storeExpenses(expenseData) {
  axios.post(BACKEND_URL + 'expenses.json', expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + 'expenses.json');

  const expenses =[];
  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    };

    expenses.push(expenseObject);
  }
  
  return expenses;
}