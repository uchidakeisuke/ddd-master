import { IUser } from './user.interface';

export class User implements IUser {
	readonly id: string;
	name: string;
	email: string;
	createdAt: string;
}
