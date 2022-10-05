import React from "react";

const DisplayIncome = ({ income }) => {
  // console.log(income);
  //converts isodate to readable date

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

  return <div>{display}</div>;
};

export default DisplayIncome;
