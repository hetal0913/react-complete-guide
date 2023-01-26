import './NewExpense.css'
import ExpenseForm
 from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    const finalData = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(finalData);
  };

  const editingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button> }
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={editingHandler}/> }
    </div>

   );
}

export default NewExpense;