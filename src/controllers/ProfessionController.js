import mongoose from 'mongoose';

const ProfessionModel = mongoose.model('Profession');

class ProfessionController {
  async index(request, response) {
    const professions = await ProfessionModel.find().populate('users');

    return response.send({ professions });
  }

  async store(request, response) {
    const user = await ProfessionModel.create(request.body);

    return response.send(user);
  }
}

export default new ProfessionController();
