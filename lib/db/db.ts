import mongoose from "mongoose";

async function connect() {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI!);

		console.log(`Mongodb connected: ${connect.connection.host}`);
	} catch (error: any) {
		console.log(`Error: ${error.message as string} `);
		process.exit(1);
	}
}
const db = { connect };
export default db;
