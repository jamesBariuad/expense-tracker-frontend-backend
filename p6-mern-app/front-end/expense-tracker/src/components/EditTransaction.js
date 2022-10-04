import React, { useState } from "react";

const EditTransaction = ({ id, dispatch, transactions, closeEdit }) => {
  // console.log(transactions)
  const selected = transactions.filter((transaction) => transaction._id === id);


  const [addItem, setAddItem] = useState({
    description: selected[0].description,
    category: selected[0].category,
    value: selected[0].value,
  });

  const onChange = (e) => {
    const inputName = e.target.name;

    switch (inputName) {
      case "description":
        setAddItem({
          ...addItem,
          description: e.target.value,
        });
        break;
      case "category":
        setAddItem({
          ...addItem,
          category: e.target.value,
        });
        break;
      case "value":
        setAddItem({
          ...addItem,
          value: e.target.value,
        });
        break;
      case "date":
        setAddItem({
          ...addItem,
          date: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const incomeCategories = ["Allowance", "Salary", "Cash", "Bonus", "Other"];
  const expenseCategories = [
    "Food",
    "Social Life",
    "Self-Development",
    "Transportation",
    "HouseHold",
    "Health",
    "Apparel",
    "Other",
  ];

  const incomeOptions = incomeCategories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  const expenseOptions = expenseCategories.map((category) => (
    <option name="category" value={category} key={category}>
      {category}
    </option>
  ));

  const handleCategoryChange = (e) => {
    setAddItem({
      ...addItem,
      category: e.target.value,
    });
  };

  const handleSubmit = () =>{

  }

  return (
    <div>
      <label>Description:</label>
      <input
        type="text"
        value={addItem.description}
        name="description"
        onChange={onChange}
      ></input>
      <br></br>

      <label>Value:</label>
      <input
        type="number"
        value={addItem.value}
        name="value"
        onChange={onChange}
      ></input>
      <br />

      <label>Category: </label>
      {selected.type === "income" ? (
        <select onChange={handleCategoryChange}>{incomeOptions}</select>
      ) : (
        <select onChange={handleCategoryChange}>{expenseOptions}</select>
      )}




      <br></br>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={closeEdit}>cancel</button>
    </div>
  );
};

export default EditTransaction;
