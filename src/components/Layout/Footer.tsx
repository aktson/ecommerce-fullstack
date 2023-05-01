/***** IMPORTS *****/
import React, { FC } from "react";
import { createStyles, Container, Group, ActionIcon, rem } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";

/***** INTERFACES *****/
interface FooterProps { }

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: rem(120),
		borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: theme.spacing.sm,
		paddingBottom: theme.spacing.sm,

		[theme.fn.smallerThan("xs")]: {
			flexDirection: "column",
		},
	},

	links: {
		[theme.fn.smallerThan("xs")]: {
			marginTop: theme.spacing.md,
		},
	},
}));

/***** COMPONENT-FUNCTION *****/
const Footer: FC<FooterProps> = (): JSX.Element => {
	const { classes } = useStyles();

	/** return statement */
	return (
		<footer className={classes.footer}>
			<Container className={classes.inner} size="xl">
				<h4>LOGO</h4>
				<Group spacing={0} className={classes.links} position="right" noWrap>
					<ActionIcon size="lg">
						<IconBrandTwitter size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandYoutube size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandInstagram size="1.05rem" stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
};

/***** EXPORTS *****/
export default Footer;
