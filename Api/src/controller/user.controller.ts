import { Request, Response } from "express";
const userSchema = require("../schemas/userSchema.ts");

export const addUser = async (req: Request, res: Response) => {
    const { name, email, number } = req.body;
    
    var user = await new userSchema();
  
    try {
  
      if (!name.length && !email.length) {
        res.send("error");
        return;
      }
  
      user.name = name
      user.email = email
      user.number = number
  
      await user.save();
  
      res.status(200).send("Saved");
  
    } catch (e) {
      res.status(400).send(e);
    }
  };

  export const getUsers = async (_req: Request, res: Response) => {
    try {
      const user = await userSchema.find({});
      res.send(user);
    } catch (err) {
      res.status(400).send('Aún no hay registros.' + err);
    }
  };