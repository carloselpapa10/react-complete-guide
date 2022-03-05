import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let expenseBody = (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );
  if (isEditing === true) {
    expenseBody = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{expenseBody}</div>;
};

export default NewExpense;
