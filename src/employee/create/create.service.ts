import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Employees } from '@prisma/client';
import { RegisterEmployee } from './create.dto';

@Injectable()
export class CreateService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: RegisterEmployee): Promise<Employees> {
    const email = await this.prisma.employees.findFirst({
      where: {
        email: data.email,
      },
    });
    const phone = await this.prisma.employees.findFirst({
      where: {
        phone_number: data.phone_number,
      },
    });
    if (email) {
      throw new HttpException('Email already exists', HttpStatus.NOT_FOUND);
    }
    if (phone) {
      throw new HttpException(
        'Phone number already exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.prisma.employees.create({
      data,
    });
  }
}
