import { DataSource } from "typeorm";

import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { DATABASE_URL } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL, // Usar la URL completa en lugar de campos separados
  synchronize: true,
  //dropSchema: true,
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});