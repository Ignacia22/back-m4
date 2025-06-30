import dotenv from "dotenv";
dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3001;
export const DB_NAME: string = process.env.DB_NAME || "proyecto_m4_front";
export const DB_USER: string = process.env.DB_USER || "postgres";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "admin";
export const DB_HOST: string = process.env.DB_HOST || "localhost";
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";


// Añadir la variable DATABASE_URL
export const DATABASE_URL = process.env.DATABASE_URL || 
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
