import React, { useState } from "react";
import DeleteTransaction from "./DeleteTransaction";
import EditTransaction from "./EditTransaction";
import styles from "./DisplayAllTransactions.module.css";

const DisplayAllTransactions = ({ income, expense, dispatch }) => {
  const addTypeToIncome = income?.map((incomeObject) => ({
    ...incomeObject,
    type: "income",
  }));
  const addTypeToExpense = expense?.map((expenseObject) => ({
    ...expenseObject,
    type: "expense",
  }));
  const allTransactions = addTypeToIncome?.concat(addTypeToExpense);

  const sortedNewestFirst = allTransactions?.sort(
    (a, b) => -a.date.localeCompare(b.date)
  );

  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleEdit = (e) => {
    setToggleEdit(true);
    setClickedId(e.target.id);
  };
  const closeEdit = () => {
    setToggleEdit(false);
  };

  const handleDelete = (e) => {
    setToggleDelete(true);
    setClickedId(e.target.id);
  };

  const closeDelete = () => {
    setToggleDelete(false);
  };

  const deleteConfirmed = (transaction) => {
    // console.log(clickedId,transaction[0].type.toUpperCase())
    // const type =
    // console.log(transaction[0].type.toUpperCase())

    dispatch({
      type: `DELETE_${transaction[0].type.toUpperCase()}`,
      payload: {
        id: clickedId,
      },
    });
  };

  const display = sortedNewestFirst?.map((item) => {
    return (
      <div key={item._id} className={styles.displayitem}>
        {item.type}
        <br></br>
        description: {item.description}
        <br></br>
        category: {item.category}
        <br></br>
        Php {item.value}
        <br></br>
        {new Date(item?.date).toDateString()}
        <br></br>
        <div>
          <button onClick={handleEdit} id={item._id}>
            edit
          </button>
          <button onClick={handleDelete} id={item._id}>
            delete
          </button>
        </div>
      </div>
    );
  });

  const totalIncome = () => {
    let sum = 0;
    income.map((income) => (sum += income.value));
    return sum;
  };

  const totalExpense = () => {
    let sum = 0;
    expense.map((expense) => (sum += expense.value));
    return sum;
  };

  return (
    <div className={styles.transactions}>
      <div className={styles.calccontainer}>
        <div className={styles.calculations}>
          <div className={styles.toppart}>
            <h3>All Transactions</h3>
            <hr></hr>
          </div>
          <br></br>
          <div className={styles.lowpart}>
            <b>income {`: +${totalIncome()}`}</b> <br></br>
            <br />
            <b>expense {`: -${totalExpense()}`}</b>
            <br></br>
            ----------------------
            <br />
            <h4>
              <i>total: {totalIncome() - totalExpense()}</i>
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.display}>
        <h3 className={styles.head}>Transaction History</h3>

        <div className={styles.data}>{display}</div>
      </div>
      <div>
        <div>
          {toggleEdit ? (
            <EditTransaction
              id={clickedId}
              transactions={sortedNewestFirst}
              closeEdit={closeEdit}
              dispatch={dispatch}
            />
          ) : (
            false
          )}
        </div>
        <div>
          {toggleDelete ? (
            <DeleteTransaction
              id={clickedId}
              closeDelete={closeDelete}
              deleteConfirmed={deleteConfirmed}
              transactions={sortedNewestFirst}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayAllTransactions;
