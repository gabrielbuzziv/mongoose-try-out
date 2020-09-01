import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  age: Number,
  profession: {
    type: Schema.Types.ObjectId,
    ref: 'Profession',
  },
  phones: [{ number: Number }],
}, {
  timestamps: true,
});

export default mongoose.model('User', UserSchema);
