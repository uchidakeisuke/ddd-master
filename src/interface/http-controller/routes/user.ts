import express from 'express';
import { usecaseContainer } from '@src/dependency/inversify.config';
import { USECASE_TYPES } from '@src/dependency/types';
import { ICreateUser } from '@src/usecase/user/user.usecase';

const userRouter = express.Router();

userRouter.get('/', (request: express.Request, response: express.Response) => {
	try {
		response.status(200).json({ message: 'hello world' });
	} catch (error) {
		response.status(400).json({ message: error.message });
	}
});

userRouter.post('/', (request: express.Request, response: express.Response) => {
	const createUser = usecaseContainer.get<ICreateUser>(
		USECASE_TYPES.UserUsecase
	);
	const body = request.body;
	console.log(body);
	console.log('creaeuser', createUser);

	// createUser.create();
	try {
		response.status(200).json({});
	} catch (error) {
		response.status(400).json({ message: error.message });
	}
});

export { userRouter };
