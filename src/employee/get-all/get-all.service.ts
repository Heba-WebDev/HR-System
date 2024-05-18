import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Employees } from '@prisma/client';

@Injectable()
export class GetAllService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<Employees[]> {
    return this.prisma.employees.findMany();
  }
}
