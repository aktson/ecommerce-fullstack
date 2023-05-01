import { NextApiRequest, NextApiResponse } from "next/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

const JWT_SECRET = "nextprismasexret";
/**
 * Get users
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session
 */
export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
	try {
		const users = await User.find();
		return { users };
	} catch (error) {
		return { error };
	}
}

/**
 * Create new user
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session
 */
export async function createUser(req: NextApiRequest, res: NextApiResponse) {
	const { name, email, password } = req.body;

	// validate all fields
	if (!name || !email || !password) {
		return res.status(400).json({ status: "Bad request", statusCode: res.statusCode, message: "Missing required fields" });
	}

	try {
		//check if user exist
		const existingUser = await User.findOne({
			email: email,
		});
		if (existingUser) {
			return res.status(400).json({ status: "Bad request", statusCode: res.statusCode, message: "User already exist" });
		}

		// hash password
		const salt = await bcrypt.genSalt(10);
		const hasdedPassword = await bcrypt.hash(password, salt);

		// create user
		const user = await User.create({
			name: name,
			email: email,
			password: hasdedPassword,
		});

		if (user) {
			return res.status(201).json({
				id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).end({ error });
	}
}

/**
 * Login new user
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session
 */
// export const loginUser = async (res: NextApiResponse, req: NextApiRequest) => {
// 	const { email, password } = req.body;
// 	if (!email || !password) {
// 		return new Error("Please enter all fields");
// 	}

// 	try {
// 		const user = await prisma.user.findFirst({
// 			where: { email },
// 		});
// 		if (user && (await bcrypt.compare(password, user.password))) {
// 			res.status(200).json({
// 				id: user.id,
// 				name: user.name,
// 				email: user.email,
// 				token: generateToken(user.id),
// 			});
// 		} else {
// 			return new Error("Invalid credentials");
// 		}
// 	} catch (error) {
// 		res.status(401);
// 		return { error };
// 	}
// };

/** Generate jwt token
 * @param {string} user id
 * @return {string} jwt token
 */
const generateToken = (id: string) => {
	return jwt.sign({ id }, JWT_SECRET, {
		expiresIn: "30d",
	});
};
/**
 * Get users
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session
 */
export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
	return res.json("Delete route is working");
}
/**
 * Get users
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 * TODO IMPLEMENT NEXT AUTH @param session - NextAuth.js session
 */
export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
	return res.json("Update route is working");
}
