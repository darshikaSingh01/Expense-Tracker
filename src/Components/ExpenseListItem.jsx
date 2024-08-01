import { useState } from "react";
import styles from "./ExpenseListItem.module.css";
const ExpenseListItem = ({ expense, onDeleteExpense }) => {
  return (
    <>
      <div className={`row ${styles.rows}`}>
        <div className="col">{expense.category}</div>
        <div className="col-6">{expense.description}</div>
        <div className="col">{expense.date}</div>
        <div className="col">{expense.amount}</div>
        <button
          className="col btn btn-danger"
          onClick={() => onDeleteExpense(expense.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ExpenseListItem;
