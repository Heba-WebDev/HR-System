import { IsEmail, Length, IsNotEmpty } from 'class-validator';

export class RegisterEmployee {
  @IsNotEmpty()
  @Length(3, 25)
  readonly name: string;
  @IsNotEmpty()
  @Length(6, 25)
  readonly phone_number: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly born_date: string;
  @IsNotEmpty()
  readonly nationality: string;
  @IsNotEmpty()
  readonly national_id: string;
  @IsNotEmpty()
  readonly department: string;
  @IsNotEmpty()
  readonly job_title: string;
  @IsNotEmpty()
  readonly contract_type: string;
}
