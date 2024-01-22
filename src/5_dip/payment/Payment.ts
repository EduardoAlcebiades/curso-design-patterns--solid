import { DbProductFactory } from "../factory/DbProductFactory";

export class Payment {
  constructor() {}

  pay(productId: number): void {
    const dbProduct = DbProductFactory.create();
    const product = dbProduct.findById(productId);

    console.log(product);
  }
}
