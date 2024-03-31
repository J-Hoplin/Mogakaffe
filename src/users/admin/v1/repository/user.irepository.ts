import { Prisma } from "@prisma/client";
import { UserDomain } from "src/domain";


// For furthur database migration
export interface IUserRepository{
    findAllUser(skip:number,limit:number,filter:Prisma.UserWhereInput):UserDomain[]
}