import { Request, Response } from "express";
import Record from "../models/record";

export const GetRecords = async (req: Request, res: Response) => {
  const record = await Record.findAll({order: [ 'id' ]});
  res.json(record);
}

export const GetRecord = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: 'getRecord',
    id
  });
}

export const PostRecord = (req: Request, res: Response) => {
  const { body } = req;
  
  res.json({
    msg: 'postRecord',
    body
  });
}

export const PutRecord = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  
  res.json({
    msg: 'putRecord',
    id
  });
}

export const DeleteRecord = (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.json({
    msg: 'deleteRecord',
    id
  });
}