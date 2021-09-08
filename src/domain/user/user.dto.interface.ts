// DTOオブジェクトを使うのはusecase。repositoryで使うと、そもそも更新時にrepositoryに対してuserオブジェクトを渡せなくなる。
import { IUser } from './user.interface';

export interface IUserDTO {
	id: IUser['id'];
	name: IUser['name'];
	email: IUser['email'];
	createdAt: IUser['createdAt'];
}
