// see https://github.com/inversify/InversifyJS
import 'module-alias/register';
import 'reflect-metadata';

import { Container } from 'inversify';
import { REPOSITORY_TYPES, DTO_TYPES, USECASE_TYPES } from './types';

// abstractions
import { IUserRepository } from '@src/domain/user/user.repository.interface';
import { IUserDTO } from '@src/domain/user/user.dto.interface';
import { ICreateUser, CreateUser } from '@src/usecase/user/user.usecase';

// implementations
import { UserRepository } from '@src/infrastructure/datastore/orm/repository/index';
import { UserDTO } from '@src/domain/user/user.dto';

const repositoryContainer = new Container();
repositoryContainer
	.bind<IUserRepository>(REPOSITORY_TYPES.UserRepository)
	.to(UserRepository);

const dtoContainer = new Container();
dtoContainer.bind<IUserDTO>(DTO_TYPES.UserDTO).to(UserDTO);

const usecaseContainer = new Container();
usecaseContainer.bind<ICreateUser>(USECASE_TYPES.UserUsecase).to(CreateUser);

export { repositoryContainer, dtoContainer, usecaseContainer };
