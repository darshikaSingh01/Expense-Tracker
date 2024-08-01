import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ExpenseForm.module.css";
const ExpenseForm = ({ onAddExpense }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !category || !description || !amount) {
      alert("Please fill in all fields");
      return;
    }

    const expense = {
      id: uuidv4(),
      date: date,
      category: category,
      description: description,
      amount: parseFloat(amount),
    };

    onAddExpense(expense);
    setDate("");
    setCategory("");
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <h3 className={styles.heading}>Add new Expense</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            rows={1}
            cols={50}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className={`btn btn-success ${styles.addBtn}`}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
