import { Request, Response } from "express";
import User from "../models/user";

export const GetUsers = async (req: Request, res: Response) => {
  const user = await User.findAll({order: [ 'id' ]});
  res.json(user);
}

export const GetUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: 'getUser',
    id
  });
}

export const PostUser = (req: Request, res: Response) => {
  const { body } = req;
  
  res.json({
    msg: 'postUser',
    body
  });
}

export const PutUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  
  res.json({
    msg: 'putUser',
    id
  });
}

export const DeleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.json({
    msg: 'deleteUser',
    id
  });
}