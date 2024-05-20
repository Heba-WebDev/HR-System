import { Controller, Post, Delete, Get, ValidationPipe } from '@nestjs/common';
import { Employees } from '@prisma/client';
import { Body } from '@nestjs/common';
import { RegisterEmployee } from './create/create.dto';
import { CreateService } from './create/create.service';
import { DeleteEmployee } from './delete/delete.dto';
import { DeleteService } from './delete/delete.service';
import { GetAllService } from './get-all/get-all.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly createService: CreateService,
    private readonly deleteService: DeleteService,
    private readonly getService: GetAllService,
  ) {}
  @Post()
  async create(
    @Body(new ValidationPipe()) employeeData: RegisterEmployee,
  ): Promise<Employees> {
    return this.createService.createUser(employeeData);
  }

  @Delete()
  async delete(@Body() employeId: DeleteEmployee): Promise<Employees> {
    return this.deleteService.deleteUser(employeId);
  }

  @Get()
  async get() {
    return this.getService.getUsers();
  }
}
