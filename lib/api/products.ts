import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/prisma/prisma";
import { unstable_getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next/types";
import { Product } from "../dbTypes/dbTypes";

/**
 * Get products
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 */
export const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
	const result = await prisma.product.findMany();
	const session = await unstable_getServerSession(req, res, authOptions);
	console.log(session);
	try {
		if (result.length === 0) {
			return res.status(400).json({ status: "Not found", error: "No products found" });
		}

		return res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.status(500).end({ error });
	}
};

/**
 * create product
 * @param req - Next.js API Request
 * @param res - Next.js API Response
 */
export const createProduct = async (req: NextApiRequest, res: NextApiResponse) => {
	const { title, description, image, price } = req.body;
	const session = await unstable_getServerSession(req, res, authOptions);

	if (!session) return res.status(401).end();
	console.log(session);
	if (!title || !description || !image || !price) {
		return res.status(400).json({ status: "Bad request", error: "Missing required fields" });
	}

	try {
		const result = await prisma.product.create({
			data: {
				title,
				description,
				image,
				price,
				user: {
					id: session.id,
				},
			},
		});
		if (result) {
			return res.status(201).json(result);
		}
	} catch (error) {
		console.log(error);
		res.status(500).end({ error });
	}
};
