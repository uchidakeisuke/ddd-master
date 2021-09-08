import { injectable, inject } from 'inversify';
import { repositoryContainer } from '@src/dependency/inversify.config';
import { REPOSITORY_TYPES } from '@src/dependency/types';
import { IUser, IUserDTO, IUserRepository } from '@src/domain/user/index';

// ユーザ登録
export interface ICreateUser {
	create(name: IUser['name'], email: IUser['email']): Promise<IUserDTO>;
}

@injectable()
export class CreateUser implements ICreateUser {
	private _userRepository: IUserRepository;

	constructor(
		@inject(REPOSITORY_TYPES.UserRepository) userRepository: IUserRepository
	) {
		this._userRepository = userRepository;
	}
	async create(name: string, email: string): Promise<IUserDTO> {
		return this._userRepository.create(name, email);
	}
}

// ユーザ全件取得
export interface IFindAllUser {
	findAll(): IUser[];
}

@injectable()
export class FindAll implements IFindAllUser {
	findAll(): IUser[] {
		throw new Error('Method not implemented.');
	}
}
