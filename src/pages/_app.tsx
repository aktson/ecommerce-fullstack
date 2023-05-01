import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import "./styles/globals.css";
import { myTheme } from "./styles/theme";
import { NextComponentType } from "next/types";

/*** interface ***/
interface MyAppProps {
	Component: NextComponentType<any, any, any>;
	pageProps: {
		session: Session | null | undefined;
		pageProps: any;
	};
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
	return (
		<SessionProvider session={session}>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
				<Component {...pageProps} />
			</MantineProvider>
		</SessionProvider>
	);
}

export default MyApp;
