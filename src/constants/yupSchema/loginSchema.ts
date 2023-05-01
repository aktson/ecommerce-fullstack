import * as yup from "yup";
import { emailRegex } from "./regex";

export const loginSchema = yup.object().shape({
	email: yup.string().required("Please enter email").email("Please enter valid email"),
	// .matches(emailRegex, "Must end with (stud.noroff.no) or (noroff.no)"),
	password: yup.string().required("Please enter password").min(6, "must be at least 8 characters"),
});
