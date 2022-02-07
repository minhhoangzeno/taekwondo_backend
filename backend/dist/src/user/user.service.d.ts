import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schemas';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[] | undefined>;
    findOne(username: string): Promise<User | undefined>;
    register(createUserDto: CreateUserDto): Promise<User>;
    sendEmailRegister(name: string, email: string, confirmationCode: string): Promise<void>;
    verifyUser(confirmationCode: string): Promise<void>;
    changePassword(newPassword: string, username: string): Promise<void>;
    forgotPassword(email: string): Promise<void>;
    sendEmailForgotPassword(name: string, email: string, confirmationCode: string): Promise<void>;
    verifyPassword(confirmationCode: string, newPassword: string): Promise<void>;
}
