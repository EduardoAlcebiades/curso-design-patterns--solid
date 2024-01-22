import { IDbProduct } from "./IDbProduct";

export class MySQLProduct implements IDbProduct {
  findById(id: number): string {
    return `MySQL: Exibindo dados do produto ${id}`;
  }
}
