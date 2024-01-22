import { DbEnum } from "../model/DbEnum";
import { IDbProduct } from "../model/IDbProduct";
import { MongoDBProduct } from "../model/MongoDBProduct";
import { MySQLProduct } from "../model/MySQLProduct";

export class DbProductFactory {
  private static type: DbEnum = DbEnum.MYSQL;

  public static create(): IDbProduct {
    switch (DbProductFactory.type) {
      case DbEnum.MONGODB:
        return new MongoDBProduct();
      case DbEnum.MYSQL:
      default:
        return new MySQLProduct();
    }
  }
}
