/***** IMPORTS *****/
import { useSession } from "next-auth/react";
import React, { FC } from "react";
import Layout from "../components/Layout/Layout";

/***** TYPES *****/
interface HomeProps {}

/***** COMPONENT-FUNCTION *****/

const Home: FC<HomeProps> = (): JSX.Element => {
	const { data: session, status } = useSession();

	/*** Return statement ***/
	return (
		<Layout>
			<h2>Home </h2>
			<div>
				{JSON.stringify(session)}
				<h4>{session ? "LOGGED IN" : "NOT LOGGED IN"}</h4>
			</div>
		</Layout>
	);
};

export default Home;
