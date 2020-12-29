import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/fakeStorageProvider';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('should be able to update avatar of an user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '12345678',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it(
    'should not be able to update avatar of an user does not exists',
    async () => {
      const fakeUsersRepository = new FakeUsersRepository();
      const fakeStorageProvider = new FakeStorageProvider();

      const updateUserAvatar = new UpdateUserAvatarService(
        fakeUsersRepository,
        fakeStorageProvider,
      );

      expect(updateUserAvatar.execute({
        user_id: 'user-non.existing-id',
        avatarFilename: 'avatar.jpg',
      })).rejects.toBeInstanceOf(AppError);
    }
  );

  it('should delete old avatar when updating a new one', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '12345678',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar1.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');

    expect(user.avatar).toBe('avatar1.jpg');
  });
});
