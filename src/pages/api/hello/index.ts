import db from "@/lib/db/db";
import { NextApiRequest, NextApiResponse } from "next";

// export async function GET(req: NextApiRequest, res: NextApiResponse<any>) {

// 	return res.status(200).json("Hello, next js!");
// }
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method === "POST") {
		return res.status(200).json("Post is working");
	}
	if (req.method === "GET") {
		return res.status(200).json("Get is working");
	}
}
