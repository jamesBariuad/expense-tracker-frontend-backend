import React from "react";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

const DisplayExpense = ({ expense }) => {
  const sortedHiToLow = expense.sort((a, b) => b.value - a.value);

  // const [expenseData, setExpenseData] = useState({
  //   labels: sortedHiToLow.map((expense) => expense.category),
  //   datasets: [
  //     {
  //       label: "expense chart",
  //       data: sortedHiToLow.map((expense) => expense.value),
  //       backgroundColor: [
  //         "#fbb34c",
  //         "#fcc46c",
  //         "#063852",
  //         "#984756",
  //         "#c4bc8c",
  //         " #4b2c44",
  //       ],
  //     },
  //   ],
  // });
let sum=[];
const addSum=(cat)=>{let itemSum=0;
  sortedHiToLow.map(item=> {if(item.category===cat){
    
    itemSum+=item.value
    return itemSum
  }sum.push(itemSum+cat)})
}
  const uniqueCategories = [...new Set(sortedHiToLow.map(income=>(income.category)))]
  // uniqueCategories.map(category1=>sortedHiToLow.map(category2=> console.log(category2)))
  uniqueCategories.forEach(addSum)
  console.log(sum)
  
  console.log(uniqueCategories)
  const expenseData= {
      labels: sortedHiToLow.map((expense) => expense.category),
      datasets: [
        {
          label: "expense chart",
          data: sortedHiToLow.map((expense) => expense.value),
          backgroundColor: [
            "#fbb34c",
            "#fcc46c",
            "#063852",
            "#984756",
            "#c4bc8c",
            " #4b2c44",
          ],
        },
      ],
    }

  const display = expense?.map((expense) => {
    return (
      <div key={expense._id}>
        description: {expense.description}
        <br></br>
        category: {expense.category}
        <br></br>
        Php {expense.value}
        <br></br>
        {new Date(expense?.date).toDateString()}
      </div>
    );
  });

  return (
    <div>
      <div style={{ width: 300 }}>
        <ExpenseChart expense={expenseData} />
      </div>
      {display}
    </div>
  );
};

export default DisplayExpense;
