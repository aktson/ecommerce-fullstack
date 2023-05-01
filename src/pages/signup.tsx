"use client";
/***** IMPORTS *****/
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import SecondaryBtn from "@/components/common/buttons/SecondaryBtn";
import LinkElement from "@/components/common/LinkElement";
import Layout from "@/components/Layout/Layout";
import { signUpSchema } from "@/constants/yupSchema/signupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Divider, Group, Paper, PasswordInput, Stack, TextInput, Text, createStyles } from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpFormValues } from "@/types/uiTypes";
import { signIn } from "next-auth/react";
import { signUp } from "@/constants/actions/actions";

/***** TYPES *****/
interface SignUpProps { }

const useStyles = createStyles((theme) => ({
	link: {
		color: theme.colors.blue[5],
		marginLeft: "0.2em",
	},
}));

/***** COMPONENT-FUNCTION *****/
const SignUp: FC<SignUpProps> = (): JSX.Element => {
	const { classes } = useStyles();
	/*** states***/
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormValues>({ resolver: yupResolver(signUpSchema) });

	/***functions ***/
	const handleFormSubmit = async (data: SignUpFormValues) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("http://localhost:3000/api/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			console.log(result);

		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	/*** Return statement ***/
	return (
		<Layout>
			<Container size="30rem">
				<Paper radius="md" p="lg" withBorder>
					<h1 style={{ marginBottom: "1em" }}>Sign Up</h1>

					<form onSubmit={handleSubmit(handleFormSubmit)}>
						<Stack spacing="sm">
							<TextInput {...register("name")} label="Full name" placeholder="Full name" error={errors?.name?.message} radius="md" />
							<TextInput {...register("email")} label="Email" placeholder="Email" error={errors?.email?.message} radius="md" />
							<PasswordInput
								{...register("password")}
								label="Password"
								placeholder="Your password"
								error={errors?.password?.message}
								radius="md"
								visibilityToggleIcon={({ reveal, size }) => (reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />)}
							/>
						</Stack>

						<Group my="xl" spacing={16} position="right">
							<PrimaryBtn type="submit" fullWidth={true} loading={isSubmitting}>
								{isSubmitting ? "Signin up" : "sign up"}
							</PrimaryBtn>

							<Text size="xs">
								Already have an account?
								<LinkElement href="/signin" className={classes.link}>
									Sign In
								</LinkElement>
							</Text>
						</Group>
					</form>

					<Divider label="Or continue with" labelPosition="center" my="lg" />

					<Group grow mb="md" mt="md">
						<SecondaryBtn>Google</SecondaryBtn>
						<SecondaryBtn>Twitter</SecondaryBtn>
					</Group>
				</Paper>
			</Container>
		</Layout>
	);
};

export default SignUp;
