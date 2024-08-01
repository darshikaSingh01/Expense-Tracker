import ExpenseListItem from "./ExpenseListItem";
import styles from "./ExpenseList.module.css";
function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div>
      <h2 className={styles.listTitle}>Expenses</h2>

      <div class={`container text-center ${styles.expenseTable}`}>
        <div className={`row ${styles.listHeadings}`}>
          <div class="col">Category</div>
          <div class="col-6">Description</div>
          <div class="col">Date</div>
          <div class="col">Amount</div>
          <div class="col"></div>
        </div>

        {expenses.map((item) => (
          <ExpenseListItem
            key={item.id}
            expense={item}
            onDeleteExpense={onDeleteExpense}
          ></ExpenseListItem>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
