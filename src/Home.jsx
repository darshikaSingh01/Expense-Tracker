import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./Components/AppName";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import Logout from "./Components/Logout";

function Home() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    const newExpenses = expenses.filter((item) => item.id != id);
    setExpenses(newExpenses);
  };

  return (
    <center className="main-container">
      <Logout />
      <AppName></AppName>
      <ExpenseForm onAddExpense={handleAddExpense}></ExpenseForm>
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
      ></ExpenseList>
    </center>
  );
}

export default Home;
