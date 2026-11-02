-- Run this in DBeaver (database: awt_lab_1) before starting the app.
-- The boilerplate uses synchronize:false and snake_case column names,
-- so the table must be created manually.
CREATE TABLE IF NOT EXISTS public.users (
    id            SERIAL PRIMARY KEY,
    full_name     VARCHAR NOT NULL,
    email         VARCHAR NOT NULL UNIQUE,
    password      VARCHAR NOT NULL,
    age           INTEGER NOT NULL,
    phone         VARCHAR NOT NULL,
    account_type  VARCHAR NOT NULL,
    address       VARCHAR NULL
);
