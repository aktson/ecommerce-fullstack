export interface SignUpFormValues {
	name: string;
	email: string;
	password?: string;
	image?: string;
}
export enum HttpMethod {
	GET = "GET",
	POST = "POST",
	DELETE = "DELETE",
	PUT = "PUT",
}
