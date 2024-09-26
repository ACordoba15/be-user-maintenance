import { Request, Response } from "express";
import User from "../models/user";

export const GetUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
}

export const GetUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el registro' });
    }
}

export const PostUser = async(req: Request, res: Response) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el registro' });
    }
}

export const PutUser = async(req: Request, res: Response) => {
    try {
        const [updatedRows] = await User.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRows > 0) {
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el registro' });
    }
}

export const DeleteUser = async(req: Request, res: Response) => {
    try {
        const deletedRows = await User.destroy({ where: { id: req.params.id } });
        if (deletedRows > 0) {
            res.status(200).json({ message: 'Registro eliminado' });
        } else {
            res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el registro' });
    }
}