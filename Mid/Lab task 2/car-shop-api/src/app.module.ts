import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseOptions } from './database/data-source';
import { CarsModule } from './cars/cars.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseOptions),
    CarsModule,
    CustomersModule,
    EmployeesModule,
  ],
})
export class AppModule {}