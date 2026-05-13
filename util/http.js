import axios from "axios";

export function storeExpenses(expenseData) {
  axios.post('https://react-native-94e8e-default-rtdb.asia-southeast1.firebasedatabase.app//expenses.json',
    expenseData
  );
}