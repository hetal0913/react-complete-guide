import './NewExpense.css'
import ExpenseForm
 from './ExpenseForm';
const NewExpense = (props) => {

  const saveExpenseDataHandler = (expenseData) => {
    const finalData = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(finalData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>

   );
}

export default NewExpense;