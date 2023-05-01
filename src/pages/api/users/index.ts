import { NextApiRequest, NextApiResponse } from "next";
import { createUser, deleteUser, getUsers, updateUser } from "@/lib/api/users";
import { HttpMethod } from "@/types/uiTypes";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

// export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
// 	if (req.method === "POST") {
// 		return createUser(req, res);
// 	}
// 	if (req.method === "GET") {
// 		return res.status(200).json("Route is working");
// 	}
// }
// import { createPost, deletePost, getPost, updatePost } from "@/lib/api";
// import { unstable_getServerSession } from "next-auth/next";

// import { authOptions } from "./auth/[...nextauth]";
// import { HttpMethod } from "@/types";

// import type { NextApiRequest, NextApiResponse } from "next";

export default async function post(req: NextApiRequest, res: NextApiResponse) {
	// const session = await unstable_getServerSession(req, res, authOptions);
	// if (!session) return res.status(401).end();

	switch (req.method) {
		case HttpMethod.GET:
			return getUsers(req, res);
		case HttpMethod.POST:
			return createUser(req, res);
		case HttpMethod.DELETE:
			return deleteUser(req, res);
		case HttpMethod.PUT:
			return updateUser(req, res);
		default:
			res.setHeader("Allow", [HttpMethod.GET, HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PUT]);
			return res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
