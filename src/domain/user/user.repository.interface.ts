import { IUser } from './user.interface';

export interface IUserRepository {
	find(id: IUser['id']): IUser;
	findMany(ids: IUser['id']): IUser[];
	findAll(): IUser[];
	create(name: IUser['name'], email: IUser['email']): Promise<IUser>;
	update(user: IUser): IUser;
}
