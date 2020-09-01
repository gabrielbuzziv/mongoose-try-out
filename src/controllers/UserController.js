import mongoose from 'mongoose';

const UserModel = mongoose.model('User');
const ProfessionModel = mongoose.model('Profession');

class UserController {
  async index(request, response) {
    const users = await UserModel.find().populate('profession', '-__v -users');

    return response.send({ users });
  }

  async store(request, response) {
    const user = await UserModel.create(request.body);
    await user.save();

    const profession = await ProfessionModel.findById(request.body.profession);
    await profession.users.push(user);
    await profession.save();

    return response.send(user);
  }
}

export default new UserController();
