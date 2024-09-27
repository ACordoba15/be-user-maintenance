import { Request, Response } from "express";
import Record from "../models/record";

export const GetRecords = async (req: Request, res: Response) => {
    try {
        const records = await Record.findAll();
        return res.status(200).json(records);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los registros' });
    }
}

export const GetRecord = async(req: Request, res: Response) => {
    try {
        const record = await Record.findByPk(req.params.id);
        if (record) {
            return res.status(200).json(record);
        } else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el registro' });
    }
}

export const PostRecord = async (req: Request, res: Response) => {
    try {
        const {username, action} = req.body;
        const data = {
            username: username,
            action: action,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
        const newRecord = await Record.create(data);
        return res.status(201).json(newRecord);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el registro' });
    }
}

export const PutRecord = async (req: Request, res: Response) => {
    try {
        const [updatedRows] = await Record.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRows > 0) {
            const updatedRecord = await Record.findByPk(req.params.id);
            return res.status(200).json(updatedRecord);
        } else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el registro' });
    }
}

export const DeleteRecord = async(req: Request, res: Response) => {
    try {
        const deletedRows = await Record.destroy({ where: { id: req.params.id } });
        if (deletedRows > 0) {
            return res.status(200).json({ message: 'Registro eliminado' });
        } else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el registro' });
    }
}