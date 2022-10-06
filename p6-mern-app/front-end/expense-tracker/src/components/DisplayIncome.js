import React from "react";
import IncomeChart from "./IncomeChart";
import { useState } from "react";


const DisplayIncome = ({ income }) => {
  
  const sortedHiToLow = income?.sort((a, b) => b.value - a.value);
  const incomeData = {
      labels: sortedHiToLow.map((income) => income.category),
      datasets: [
        {
          label: "income chart",
          data: sortedHiToLow.map((income) => income.value),
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


  const display = income?.map((income) => (
    <div key={income?._id}>
      description: {income.description}
      <br></br>
      category: {income.category}
      <br></br>
      Php {income.value}
      <br></br>
      {new Date(income?.date).toDateString()}
    </div>
  ));

  return (
    <>
      <div style={{ width: 300, backgroundColor: "black"}}>
        <IncomeChart income={incomeData} />
      </div>
      <div>
        {display}
        
      </div>
    </>
  );
};

export default DisplayIncome;
