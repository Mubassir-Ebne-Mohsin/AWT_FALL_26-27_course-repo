# Lab Task 2: Car Shop REST API

## Student details

| SL | Name | Student ID | Section |
|---|---|---|---|
| 6 | MUBASSIR EBNE MOHSIN | 22-49838-3 | D |

## Overview

NestJS REST API using PostgreSQL and TypeORM. Entities: Car (id, brand, model, price), Customer (id, name, email, phone), Employee (id, name, position, salary). Each has a generated primary key. Tables are created through the included migration; synchronization is disabled.

## Setup

Use Node.js 24 LTS and pnpm 10.34.9 (specified in package.json).

1. Create an empty PostgreSQL database named `car_shop_lab2` in pgAdmin or DBeaver. Do not manually create the application tables.
2. Copy `.env.example` to `.env` and enter your local database credentials.
3. Run from this project folder:

```powershell
pnpm install --frozen-lockfile
pnpm migration:run
pnpm migration:show
pnpm start:dev
```

The migration scripts compile TypeScript before using the compiled DataSource. To generate a migration after editing entities, run `pnpm migration:generate`, then `pnpm migration:run`.

## Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /cars | Create a car |
| GET | /cars | List cars |
| POST | /customers | Create a customer |
| GET | /customers | List customers |
| POST | /employees | Create an employee |
| GET | /employees | List employees |

POST uses JSON and returns 201; GET returns 200.

Car body:
```json
{"brand":"Toyota","model":"Corolla","price":2500000}
```

Customer body:
```json
{"name":"Rahim Ahmed","email":"rahim@example.com","phone":"01712345678"}
```

Employee body:
```json
{"name":"Ayesha Rahman","position":"Sales Executive","salary":35000}
```

## Validation and evidence

Required fields use `@IsNotEmpty()` and a global ValidationPipe. An empty car brand or customer/employee name returns 400 Bad Request. Numeric fields must be JSON numbers.

The screenshots folder contains POST and GET evidence for each entity, validation evidence, and database tables with migration history.

Verify records in pgAdmin or DBeaver:
```sql
SELECT * FROM public.cars;
SELECT * FROM public.customers;
SELECT * FROM public.employees;
SELECT * FROM public.migrations;
```

Real .env credentials, node_modules, build outputs, and local caches are excluded from version control. Sample settings are provided in .env.example.
