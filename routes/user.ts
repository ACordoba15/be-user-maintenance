import { Router } from 'express';
import { DeleteUser, GetUser, GetUsers, PostUser, PutUser } from '../controllers/users';

const router = Router();
// Se definen las rutas y se asocian con el controlador
router.get('/user/all',    GetUsers);
router.get('/user/id',     GetUser);
router.post('/user/',      PostUser);
router.put('/user/id',     PutUser);
router.delete('/user/id',  DeleteUser);

export default router;