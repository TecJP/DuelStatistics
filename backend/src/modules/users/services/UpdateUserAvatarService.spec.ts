import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const updateUserAvatar = new UpdateUserAvatarService(fakeUsersRepository);
  });
});
