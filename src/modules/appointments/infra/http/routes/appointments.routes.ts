import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();

const appointmentsControllers = new AppointmentsController()

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsControllers.create);

export default appointmentsRouter;
