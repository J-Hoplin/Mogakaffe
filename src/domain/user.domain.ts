import { $Enums, User } from "@prisma/client";

export class UserDomain implements User{
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    loginType: $Enums.LoginType;
}