import 'reflect-metadata';
import 'dotenv/config';
import { join } from 'node:path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Car } from '../cars/car.entity';
import { Customer } from '../customers/customer.entity';
import { Employee } from '../employees/employee.entity';

function requiredEnv(name: string): string {
  const value = process.env[name];

  if (value === undefined || value === '') {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const databaseOptions: DataSourceOptions = {
  type: 'postgres',
  host: requiredEnv('DB_HOST'),
  port: Number(requiredEnv('DB_PORT')),
  username: requiredEnv('DB_USERNAME'),
  password: requiredEnv('DB_PASSWORD'),
  database: requiredEnv('DB_DATABASE'),

  entities: [Car, Customer, Employee],

  migrations: [join(__dirname, '../migrations/*.js')],

  synchronize: false,
  migrationsRun: false,
};

export default new DataSource(databaseOptions);