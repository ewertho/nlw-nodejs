import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRpository } from "../repositories/UserRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getCustomRepository(UserRpository);

    const userAlredyExists = await usersRepository.findOne({
      email,
    });
    if (userAlredyExists) {
      return response.status(400).json({
        error: "User alredy exists",
      });
    }
    const user = usersRepository.create({
      name,
      email,
    });
    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}
export { UserController };
