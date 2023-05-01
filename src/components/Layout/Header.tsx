/***** IMPORTS *****/
import Nav from "@/components/Layout/Nav";
import { Container } from "@mantine/core";
import React, { FC, useState } from "react";

/***** INTERFACES *****/
interface HeaderProps { }

/***** COMPONENT-FUNCTION *****/
const Header: FC<HeaderProps> = (): JSX.Element => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	/** return statement */
	return (
		<header className="">
			{/* <Nav setMobileMenuOpen={setMobileMenuOpen} /> */}
			<Container size="xl">
				<Nav />
			</Container>
		</header>
	);
};

/***** EXPORTS *****/
export default Header;
