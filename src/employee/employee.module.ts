import { Module } from '@nestjs/common';
import { CreateService } from './create/create.service';
import { UpdateService } from './update/update.service';
import { DeleteService } from './delete/delete.service';
import { EmployeeController } from './employee.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllService } from './get-all/get-all.service';

@Module({
  providers: [
    PrismaService,
    CreateService,
    UpdateService,
    DeleteService,
    GetAllService,
  ],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
