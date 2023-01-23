import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = ({expenses}) => {
    const allExpenses = expenses.length ? (
        expenses.map((item) => {
            return (
                <ExpenseItem expense={item} key={item.id}/>
            )
        })
    ) : (
        <p>You don't have any expenses</p>
    )
    return ( 
        <Card className="expenses">
           {allExpenses}
        </Card>
     );
}
 
export default Expenses;