import React, {useState} from "react";

//Monkey Recurring expenditures page made by Michael Carroll mcarr52@lsu.edu

function Contact () { //Ran out of time so I just mirrored the Monthly Income code. Was planning to store multiple values in an array and add
					  //together in a for loop.

	const [monthlyExpense, setMonthlyExpense] = useState(0); 
	return (

		<form className="expensesForm" onSubmit={() => {}}>

		<h3>Enter your Monthly Monkey Expenses: </h3>
		<input type = "number" value={monthlyExpense} onChange = {e => setMonthlyExpense(e.target.value)} placeholder = "such as 419.00. #s only"></input>
		<button type="submit">Submit Expenses</button>
		<p>Your current monthly expenses are: {monthlyExpense}</p>

		</form>

	)

}

export default Contact;
