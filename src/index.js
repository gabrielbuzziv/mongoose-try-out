import express, { Router } from 'express';
import './database';
import './schemas/UserSchema';
import './schemas/ProfessionSchema';

import UserController from './controllers/UserController';
import ProfessionController from './controllers/ProfessionController';

const app = express();
const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/professions', ProfessionController.index);
routes.post('/profession', ProfessionController.store);

app.use(express.json());
app.use(routes);

app.listen(3334);
