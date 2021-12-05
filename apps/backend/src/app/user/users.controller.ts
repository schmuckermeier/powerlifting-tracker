import {Controller, Get, Param} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UserDto} from "@getstrong/dtos";

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  getData(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.findOne(id);
  }
}
