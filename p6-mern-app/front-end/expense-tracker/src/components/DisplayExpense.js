import React from 'react'

const DisplayExpense = ({expense}) => {
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
    
      return <div>{display}</div>;
}

export default DisplayExpense