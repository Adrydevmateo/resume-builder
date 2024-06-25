export type User = {
	ID: string,
	username: string,
	password: string,
	email: string
}

export enum EnumUser {
	ADMIN = 'admin',
	FINAL = 'final',
	GUEST = 'guest'
}