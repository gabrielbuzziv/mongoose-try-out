import mongoose from 'mongoose';

const HOST = 'localhost:27017';
const DATABASE = 'teste';

mongoose.connect(`mongodb://${HOST}/${DATABASE}`, { useNewUrlParser: true });
