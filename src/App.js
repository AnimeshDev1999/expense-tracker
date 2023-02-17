import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Grocery",
    amount: 2000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 11000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Pool Table",
    amount: 9500,
    date: new Date(2022, 2, 14),
  },
  {
    id: "e6",
    title: "Eletric Stove",
    amount: 5000,
    date: new Date(2022, 8, 10),
  },
  {
    id: "e7",
    title: "Sewing Machine",
    amount: 12500,
    date: new Date(2020, 4, 3),
  },
  {
    id: "e8",
    title: "Keyboard",
    amount: 500,
    date: new Date(2020, 10, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
