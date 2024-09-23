import { Router } from 'express';
import { DeleteUser, GetUser, GetUsers, PostUser, PutUser } from '../controllers/users';

const router = Router();
// Se definen las rutas y se asocian con el controlador
router.get('/all',    GetUsers);
router.get('/id',     GetUser);
router.post('/',      PostUser);
router.put('/id',     PutUser);
router.delete('/id',  DeleteUser);

export default router;