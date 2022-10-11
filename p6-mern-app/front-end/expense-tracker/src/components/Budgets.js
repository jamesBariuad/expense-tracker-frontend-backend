import axios from "axios";
import React, { useEffect } from "react";
import styles from "./Budgets.module.css";
import { useState } from "react";

const Budgets = ({ expense, budgets }) => {
  const [budgetData, setBudgetData] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/expense/date/datenow")
      .then((response) => sumMonthly(response.data));
    axios
      .get("http://localhost:8080/api/v1/budgets")
      .then((response) => setBudgetData(response.data));
  }, []);

  const sumMonthly = (monthlyData) => {
    let sum = 0;
    monthlyData.map((data) => (sum += data.value));
    return setTotalExpense(sum);
  };

  const getPercentage = () => {
    const percent = (totalExpense / budgetData[0]?.amount) * 100;
    return percent;
  };



  // console.log(All)

  const display = () => (
    <div className={styles.budgetstats}>
      <div className={styles.category}>
        <p>Monthly</p>
        <p>Category: All</p>
        <p>Total budget: {budgetData[0]?.amount}</p>
      </div>

      <div className={styles.percentage}>
        {/* <div className={styles.progress}>{getPercentage()}%</div> */}
        {getPercentage()>=100?<><progress value={getPercentage()} max="100" className={styles.progressred}>{getPercentage()}</progress>100%</> :
       <> <progress value={getPercentage()} max="100" className={styles.progress}>{getPercentage()}</progress>{getPercentage().toFixed(2)}%  </>
         }
        
       
      </div>
      <div className={styles.currspend}>current spend: {totalExpense}</div>
      <div className={styles.remspend}>
        remaining spend: {budgetData[0]?.amount - totalExpense}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.center}>Budgets</h2>
        <div></div>
        <div className={styles.button}>
          <button>Create a budget</button>
        </div>
      </div>
      <div className={styles.data}>{display()}</div>
    </div>
  );
};

export default Budgets;