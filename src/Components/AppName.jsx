import styles from "./AppName.module.css";
const AppName = () => {
  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className={styles.mainHeading}>
        <h1 className={styles.heading}>Expense Tracker</h1>
        <p className={styles.tagLine}>Take Control of Your Finances Today</p>

        <h2>Welcome {userName.username}</h2>
      </div>
    </>
  );
};

export default AppName;
