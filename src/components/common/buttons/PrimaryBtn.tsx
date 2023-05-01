"use client";
/***** IMPORTS *****/
import React, { FC, ReactNode } from "react";
import { Button } from "@mantine/core";

/***** INTERFACES *****/
interface PrimaryBtnProps {
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
const PrimaryBtn: FC<PrimaryBtnProps> = ({ className, type, disabled, loading, onClick, children, fullWidth, leftIcon }): JSX.Element => {
	/** return statement */
	return (
		<Button
			variant="filled"
			fullWidth={fullWidth}
			radius="md"
			type={type}
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
export default PrimaryBtn;
