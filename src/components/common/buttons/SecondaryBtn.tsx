"use client";
/***** IMPORTS *****/
import React, { FC, ReactNode } from "react";
import { Button } from "@mantine/core";

/***** INTERFACES *****/
interface SecondaryBtnProps {
	children?: ReactNode;
	disabled?: boolean;
	className?: string | string[];
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	fullWidth?: boolean;
	type?: "button" | "reset" | "submit";
	leftIcon?: JSX.Element;
}

/***** COMPONENT-FUNCTION *****/
const SecondaryBtn: FC<SecondaryBtnProps> = ({ className, disabled, loading, onClick, children, fullWidth, leftIcon }): JSX.Element => {
	/** return statement */
	return (
		<Button
			radius="md"
			variant="outline"
			fullWidth={fullWidth}
			onClick={onClick}
			loading={loading}
			loaderPosition="right"
			uppercase={true}
			leftIcon={leftIcon}
			disabled={disabled}>
			{children}
		</Button>
	);
};

/***** EXPORTS *****/
export default SecondaryBtn;
