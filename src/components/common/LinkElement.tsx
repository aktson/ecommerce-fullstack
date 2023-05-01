/***** IMPORTS *****/
import { createStyles } from "@mantine/core";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

/***** INTERFACES *****/
interface LinkElementProps {
	children: ReactNode;
	href: string;
	className?: string | undefined;
}

const useSTayle = createStyles((theme) => ({
	link: {
		padding: `0.5em`,
		borderRadius: theme.radius.md,
		color: theme.colors.gray[7],
		...theme.fn.hover({
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
		}),

		"&:active": theme.activeStyles,
	},
}));

/***** COMPONENT-FUNCTION *****/
const LinkElement: FC<LinkElementProps> = ({ children, href, className }): JSX.Element => {
	const { classes, theme } = useSTayle();
	/** return statement */
	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	);
};

/***** EXPORTS *****/
export default LinkElement;
