import React from "react";

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

  const sortedNewestFirst = allTransactions.sort((a, b) => -a.date.localeCompare(b.date))

  const display = sortedNewestFirst.map(item=>{
    return(
        <div>
            description: {item.description}
            <br></br>
            category: {item.category}
            <br></br>
            Php {item.value}
            <br></br>
            {new Date(item?.date).toDateString()}
        </div>
    )
  }

  )

  return <div>{display}</div>;
};

export default DisplayAllTransactions;
