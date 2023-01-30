import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
import { useState } from "react";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    console.log(filteredExpenses);

    const allExpenses = filteredExpenses.length ? (
        filteredExpenses.map((item) => {
            return (
                <ExpenseItem expense={item} key={item.id}/>
            )
        })
    ) : (
        <p className="expenses-list__fallback">You don't have any expenses</p>
    )
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                {allExpenses}
            </Card>
        </div>

     );
}

export default Expenses;