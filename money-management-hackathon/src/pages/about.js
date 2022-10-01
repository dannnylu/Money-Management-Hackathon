
import React, {useState} from "react";

// const About = () => {
// return (
// 	<div>
// 	<h1>
// 		GeeksforGeeks is a Computer
// 		Science portal for geeks.
// 	</h1>
// 	</div>
// );
// };

//MONTHLY INCOME PAGE CREATED BY MICHAEL CARROLL mcarr52@lsu.edu

function About () { /*This is the Monthly Income page that takes a monthly income */

	const [monthlyIncome, setMonthlyIncome] = useState(0);
	// const displayedIncome = e => {
	// 	setMonthlyIncome(e.target.value);
	// 	console.log('current income is: ', e.target.value)
	// }
	return ( //Contains a form to store the monthly income, and puts it into a function for calculating expendable income with other components.
	<form classname="incomeForm" onSubmit={() => {}}>
	
		<h3>Enter your Monthly Income: </h3>
		<input type = "number" value={monthlyIncome} onChange = {e => setMonthlyIncome(e.target.value)} placeholder = "such as 500.00. #s only"></input> 
		<button type="submit">Submit Income</button>
		<p>Your current income is: {monthlyIncome}</p>

	
	</form>
	)
	}

export default About;
