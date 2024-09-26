import { Request, Response } from "express";
import Record from "../models/record";

export const GetRecords = async (req: Request, res: Response) => {
    try {
        const records = await Record.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
}

export const GetRecord = async(req: Request, res: Response) => {
    try {
        const record = await Record.findByPk(req.params.id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el registro' });
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
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el registro' });
    }
}

export const PutRecord = async (req: Request, res: Response) => {
    try {
        const [updatedRows] = await Record.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRows > 0) {
            const updatedRecord = await Record.findByPk(req.params.id);
            res.status(200).json(updatedRecord);
        } else {
            res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el registro' });
    }
}

export const DeleteRecord = async(req: Request, res: Response) => {
    try {
        const deletedRows = await Record.destroy({ where: { id: req.params.id } });
        if (deletedRows > 0) {
            res.status(200).json({ message: 'Registro eliminado' });
        } else {
            res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el registro' });
    }
}