import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Employees } from '@prisma/client';
import { RegisterEmployee } from './create.dto';

@Injectable()
export class CreateService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: RegisterEmployee): Promise<Employees> {
    return this.prisma.employees.create({
      data,
    });
  }
}
