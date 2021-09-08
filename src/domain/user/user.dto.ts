// DTOオブジェクトを使うのはusecase。repositoryで使うと、そもそも更新時にrepositoryに対してuserオブジェクトを渡せなくなる。
import { injectable } from 'inversify';
import { IUserDTO } from './user.dto.interface';
import { IUser } from './user.interface';

@injectable()
export class UserDTO implements IUserDTO {
	readonly id: string;
	readonly name: string;
	readonly email: string;
	readonly createdAt: string;

	constructor(user: IUser) {
		this.id = user.id;
		this.name = user.name;
		this.email = user.email;
		this.createdAt = user.createdAt;
	}
}
