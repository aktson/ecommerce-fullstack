/***** IMPORTS *****/
import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

/***** TYPES *****/
interface LayoutProps {
	children: React.ReactNode;
}

/***** COMPONENT-FUNCTION *****/
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	/*** Return statement ***/
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
