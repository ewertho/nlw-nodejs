import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UserRpository extends Repository<User> {}

export { UserRpository };
