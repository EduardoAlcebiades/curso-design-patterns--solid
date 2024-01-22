import { IVehicle } from "./IVehicle";

export class Vehicle implements IVehicle {
  constructor() {}

  startVehicle(): void {
    console.log("Ligando o motor.");
  }
}
