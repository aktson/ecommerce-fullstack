import { SignUpFormValues } from "@/types/uiTypes";

export const signUp = async (data: SignUpFormValues) => {
	try {
		const response = await fetch("http://localhost:3000/api/users", {
			method: "POST",
			body: JSON.stringify(data),
		});
		const result = response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};
