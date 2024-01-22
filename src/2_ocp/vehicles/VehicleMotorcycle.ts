import { IVehicleMotorcycle } from "./IVehicleMotorcycle";
import { Vehicle } from "./Vehicle";

export class VehicleMotorcycle extends Vehicle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    super();

    this.configure(color, year, engine);
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine} cilindradas.`);
  }
}
