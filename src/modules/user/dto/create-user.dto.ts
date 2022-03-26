import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Filed user is of type string' })
  @IsNotEmpty({ message: 'Filed user is required' })
  user: string;

  @IsString({ message: 'Filed name is of type string' })
  @IsNotEmpty({ message: 'Filed name is required' })
  name: string;

  @IsString({ message: 'Filed password is of type string' })
  @IsNotEmpty({ message: 'Filed password is required' })
  password: string;
}
