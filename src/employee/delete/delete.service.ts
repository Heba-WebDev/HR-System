import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Employees } from '@prisma/client';
import { DeleteEmployee } from './delete.dto';

@Injectable()
export class DeleteService {
  constructor(private prisma: PrismaService) {}

  async deleteUser(data: DeleteEmployee): Promise<Employees> {
    return this.prisma.employees.delete({
      where: {
        id: data.id,
      },
    });
  }
}
