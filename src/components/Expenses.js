import ExpenseItem from "./ExpenseItem";
import './EXpenses.css'

const Expenses = ({expenses}) => {
    const allExpenses = expenses.length ? (
        expenses.map((item) => {
            return (
                <ExpenseItem expense={item} />
            )
        })
    ) : (
        <p>You don't have any expenses</p>
    )
    return ( 
        <div className="expenses">
           {allExpenses}
        </div>
     );
}
 
export default Expenses;