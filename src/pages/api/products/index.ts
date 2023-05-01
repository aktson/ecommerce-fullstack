// import { createProduct, getProducts } from "@/lib/api/products";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method === "POST") {
		return res.status(200).json("Post is working");
	}
	if (req.method === "GET") {
		return res.status(200).json("Get is working");
	}
}
// import { createPost, deletePost, getPost, updatePost } from "@/lib/api";
