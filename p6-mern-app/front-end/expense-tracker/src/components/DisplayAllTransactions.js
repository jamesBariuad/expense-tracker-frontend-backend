import React, { useState } from "react";
import EditTransaction from "./EditTransaction";

const DisplayAllTransactions = ({ income, expense }) => {
  const addTypeToIncome = income.map((incomeObject) => ({
    ...incomeObject,
    type: "income",
  }));
  const addTypeToExpense = expense.map((expenseObject) => ({
    ...expenseObject,
    type: "expense",
  }));
  const allTransactions = addTypeToIncome.concat(addTypeToExpense);

  const sortedNewestFirst = allTransactions.sort(
    (a, b) => -a.date.localeCompare(b.date)
  );

  const [toggleEdit, setToggleEdit] = useState(false);

  const handleEdit = (e) => {
    setToggleEdit(true);
    setClickedId(e.target.id);
  };
  const closeEdit = () => {
    setToggleEdit(false);
  };

  const handleDelete = (e) => {
    console.log(e.target.id);
  };

  const [clickedId, setClickedId] = useState("");

  const display = sortedNewestFirst.map((item) => {
    return (
      <div key={item._id}>
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
        <button onClick={handleEdit} id={item._id}>
          edit
        </button>
        <button onClick={handleDelete} id={item._id}>
          delete
        </button>
      </div>
    );
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {display}
      </div>
      <div>
        <div>
          {toggleEdit ? (
            <EditTransaction
              id={clickedId}
              transactions={sortedNewestFirst}
              closeEdit={closeEdit}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayAllTransactions;
