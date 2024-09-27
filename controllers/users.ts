import { Request, Response } from "express";
import User from "../models/user";

export const GetUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los registros' });
    }
}

export const GetUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el registro' });
    }
}

export const PostUser = async(req: Request, res: Response) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({where: {username: username}})
        if (user) {
            return res.status(409).json({ error: 'El nombre de usuario ya se encuentra en uso.' });
        }

        const data = {
            username: username,
            password: password,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        const newUser = await User.create(data);
        
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el registro' });
    }
}

export const PostLogin = async(req: Request, res: Response) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({ where: { username } });
        
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Aquí deberías comparar las contraseñas de manera segura (por ejemplo, con bcrypt)
        const isPasswordValid = password === user?.dataValues.password;  // Comparación simplificada (mejor usar bcrypt)

        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        return res.status(200).json({
            id: user?.dataValues.id,
            username: user?.dataValues.username
        });
    } catch (error) {
        return res.status(500).json({ error: 'Error al validar las credenciales' });
    }
}

export const PutUser = async(req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        const data = {
            username: user.dataValues.username,
            password: password,
            createdAt: user.dataValues.createdAt,
            updatedAt: new Date().toISOString()
        }
        const [updatedRows] = await User.update(data, {
            where: { username: username }
        });
        if (updatedRows > 0) {
            // const updatedUser = await User.findByPk(req.params.id);
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el registro' });
    }
}

export const DeleteUser = async(req: Request, res: Response) => {
    try {
        const deletedRows = await User.destroy({ where: { id: req.params.id } });
        if (deletedRows > 0) {
            return res.status(200).json({ message: 'Registro eliminado' });
        } else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el registro' });
    }
}