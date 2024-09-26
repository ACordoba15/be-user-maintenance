import { Router } from 'express';
import { DeleteRecord, GetRecord, GetRecords, PostRecord, PutRecord } from '../controllers/records';

const router = Router();
// Se definen las rutas y se asocian con el controlador
router.get('/all',    GetRecords);
router.get('/:id',     GetRecord);
router.post('/',      PostRecord);
router.put('/:id',     PutRecord);
router.delete('/:id',  DeleteRecord);

export default router;