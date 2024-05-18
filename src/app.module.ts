import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
