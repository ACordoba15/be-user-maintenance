import { Router } from 'express';
import { DeleteRecord, GetRecord, GetRecords, AddRecord, UpdateRecord } from '../controllers/records';

const router = Router();
// Se definen las rutas y se asocian con el controlador
router.get('/all',    GetRecords);
router.get('/:id',     GetRecord);
router.post('/',      AddRecord);
router.put('/:id',     UpdateRecord);
router.delete('/:id',  DeleteRecord);

export default router;