import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
  ) {}

  create(dto: CreateCarDto): Promise<Car> {
    const car = this.carsRepository.create(dto);
    return this.carsRepository.save(car);
  }

  findAll(): Promise<Car[]> {
    return this.carsRepository.find({
      order: { id: 'ASC' },
    });
  }
}