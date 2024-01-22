import { IVehicle } from "./IVehicle";
import { IVehicleMotorcycle } from "./IVehicleMotorcycle";

export class VehicleMotorcycle implements IVehicle, IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log("Ligando o motor.");
  }

  configureMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine} cilindradas.`);
  }
}
