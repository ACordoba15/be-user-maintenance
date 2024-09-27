import { Router } from 'express';
import { DeleteUser, GetUser, GetUsers, AddUser, UpdateUser, Login } from '../controllers/users';

const router = Router();
// Se definen las rutas y se asocian con el controlador
router.get('/all',    GetUsers);
router.get('/:id',     GetUser);
router.post('/login',  Login);
router.post('/',      AddUser);
router.put('/',     UpdateUser);
router.delete('/:id',  DeleteUser);

export default router;