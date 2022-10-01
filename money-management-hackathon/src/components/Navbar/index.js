import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			Monthly-Income
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Monthly Expenses
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Money Tips
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign-In
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
