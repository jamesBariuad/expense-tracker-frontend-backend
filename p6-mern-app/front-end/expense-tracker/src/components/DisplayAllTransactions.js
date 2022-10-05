import React, { useState } from "react";
import DeleteTransaction from "./DeleteTransaction";
import EditTransaction from "./EditTransaction";

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
    </>
  );
};

export default DisplayAllTransactions;
