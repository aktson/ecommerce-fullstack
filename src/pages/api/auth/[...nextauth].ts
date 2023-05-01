import { UserLoginFields } from "@/lib/dbTypes/dbTypes";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/lib/models/User";
import db from "@/lib/db/db";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	pages: {
		signIn: "/signin/",
	},

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user._id;
				token.isAdmin = user.isAdmin;
				token.name = user.name;
				token.email = user.email;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token._id as string;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.isAdmin = token.isAdmin;
			}
			return session;
		},
	},
	secret: "test",
	jwt: {
		secret: "test",
		// encryption: true,
	},

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "email" },
				password: { label: "Password", type: "password", placeholder: "password" },
			},

			async authorize(credentials, req) {
				const { email, password } = credentials as UserLoginFields;
				if (!email || !password) {
					throw new Error("Please fill up all fields");
				}

				//connect to database
				await db.connect();
				const user = await User.findOne({
					email: email,
				});
				//disconnect to database
				await db.disconnect();

				if (!user) {
					throw new Error("No user found");
				}
				if (!user.password) {
					throw new Error("Username or password missing");
				}
				const isPasswordValid = await compare(password, user.password);

				if (!isPasswordValid) {
					throw new Error("Invalid credentials");
				}

				return {
					id: user._id,
					email: user.email,
					name: user.name,
					image: user.image,
					isAdmin: user.isAdmin,
				};
			},
		}),
	],
};
export default NextAuth(authOptions);
