import { injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { IUser, IUserRepository } from '@src/domain/user/index';

@injectable()
export class UserRepository implements IUserRepository {
	prisma = new PrismaClient();

	find(id: string): IUser {
		throw new Error('Method not implemented.');
	}
	findMany(ids: string): IUser[] {
		throw new Error('Method not implemented.');
	}
	findAll(): IUser[] {
		throw new Error('Method not implemented.');
	}
	async create(name: string, email: string): Promise<IUser> {
		const newUser = await this.prisma.user.create({
			data: {
				id: 'aaaaaa',
				name: name,
				email: email,
				createdAt: 'aaaaaaaaa',
			},
		});
		return newUser;
	}
	update(user: IUser): IUser {
		throw new Error('Method not implemented.');
	}
}
