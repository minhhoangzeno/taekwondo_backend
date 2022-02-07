import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./schemas/user.schemas").User[]>;
    register(createUserDto: CreateUserDto): Promise<import("./schemas/user.schemas").User>;
    verifyUser(confirmationCode: string): Promise<void>;
    changePassword(req: any, body: any): Promise<void>;
    forgotPassword(body: any): Promise<void>;
    verifyPassword(confirmationCode: string, body: any): Promise<void>;
}
