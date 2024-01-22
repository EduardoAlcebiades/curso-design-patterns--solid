import { IPaymentInstrument } from "./IPaymentInstrument";

export abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("Validação efetuada!");
  }

  collectPayment(): void {
    console.log("Pagamento realizado!");
  }
}
