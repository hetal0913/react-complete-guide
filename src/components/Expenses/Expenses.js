import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import { useState } from "react";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
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
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {allExpenses}
            </Card>
        </div>

     );
}

export default Expenses;