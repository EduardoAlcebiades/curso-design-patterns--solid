import { IDbProduct } from "./IDbProduct";

export class MongoDBProduct implements IDbProduct {
  findById(id: number): string {
    return `MongoDB: Exibindo dados do produto ${id}`;
  }
}
