import { useEffect, useReducer } from "react";
import axios from "axios";
// import DisplayAccounts from "./components/DisplayAccounts";
import DisplayIncome from "./components/DisplayIncome";
import AddTransaction from "./components/AddTransaction";
import DisplayExpense from "./components/DisplayExpense";
import DisplayAllTransactions from "./components/DisplayAllTransactions";


function App() {
  const initialState = {
    accounts: [],
    budgets: [],
    income: [],
    expense: [],
    trigger: [],
  };


  const reducer = (state, action) => {
    switch (action.type) {
      case "LOAD_ACCOUNTS":
        return {
          ...state,
          accounts: action.payload,
        };

      case "LOAD_BUDGETS":
        return {
          ...state,
          budgets: action.payload,
        };

      case "LOAD_ALL_INCOME":
        return {
          ...state,
          income: action.payload,
        };

      case "LOAD_ALL_EXPENSE":
        return {
          ...state,
          expense: action.payload,
        };

      case "ADD_TRANSACTION_INCOME":
        axios
          .post("http://localhost:8080/api/v1/income", action.payload)
          .then((response) => {});
        return { ...state, income: [...state.income, action.payload] };

      case "ADD_TRANSACTION_EXPENSE":
        axios
          .post("http://localhost:8080/api/v1/expense", action.payload)
          .then((response) => {});
        return { ...state, expense: [...state.expense, action.payload] };

      default: {
        return alert("sumting wong");
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/accounts").then((response) => {
      dispatch({
        type: "LOAD_ACCOUNTS",
        payload: response.data,
      });
    });
    axios.get("http://localhost:8080/api/v1/budgets").then((response) => {
      dispatch({
        type: "LOAD_BUDGETS",
        payload: response.data,
      });
    });
    axios.get("http://localhost:8080/api/v1/income").then((response) => {
      dispatch({
        type: "LOAD_ALL_INCOME",
        payload: response.data,
      });
    });
    axios.get("http://localhost:8080/api/v1/expense").then((response) => {
      dispatch({
        type: "LOAD_ALL_EXPENSE",
        payload: response.data,
      });
    });
  }, []);

  // console.log(state)
  // const displayIncome = state.income.map((income) => (
  //   <DisplayIncome key={income._id} income={income} />
  // ));

  // const date =new Date().toISOString()
  // console.log( new Date(date).toUTCString())

  //coll

  return (
    <div>

      <DisplayIncome income={state?.income} />
      <AddTransaction dispatch={dispatch} />
      <br></br>
      <DisplayExpense expense = {state?.expense}/>
      <br></br>
      <DisplayAllTransactions income={state?.income} expense={state?.expense}/>

    </div>
  );
}

export default App;
