import mongoose, { Schema } from 'mongoose';

const ProfessionSchema = new Schema({
  title: String,
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
  timestamps: true,
});

export default mongoose.model('Profession', ProfessionSchema);
