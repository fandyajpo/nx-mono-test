import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {
  findAll() {
    return { name: 'fandy' };
  }
}
