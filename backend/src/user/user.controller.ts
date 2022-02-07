import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Role } from 'src/role/role.enum';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles(Role.Admin)
    @Get()
    async findAll() {
        return this.userService.findAll()
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.userService.register(createUserDto)
    }

    @Get('confirm/:confirmationCode')
    async verifyUser(@Param('confirmationCode') confirmationCode: string) {
        return this.userService.verifyUser(confirmationCode)
    }

    @UseGuards(JwtAuthGuard)
    @Post('change-password')
    async changePassword(@Request() req, @Body() body) {
        return this.userService.changePassword(body.newPassword, req.user._doc.username)
    }

    @Post('forgot-password')
    async forgotPassword(@Body() body) {
        return this.userService.forgotPassword(body.email)
    }

    @Post('verify-password/:confirmationCode')
    async verifyPassword(@Param('confirmationCode') confirmationCode: string, @Body() body) {
        return this.userService.verifyPassword(confirmationCode, body.newPassword)
    }
}
