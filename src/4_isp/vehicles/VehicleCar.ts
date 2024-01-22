import { IVehicleCar } from "./IVehicleCar";

export class VehicleCar implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    doors: number,
    seats: number
  ) {
    this.configureCar(color, year, engine, doors, seats);
  }

  startVehicle(): void {
    console.log("Ligando o motor.");
  }

  configureCar(
    color: string,
    year: number,
    engine: number,
    doors: number,
    seats: number
  ): void {
    console.log(
      `Criando um carro: ${color}, ${year}, ${engine} potência, ${doors} portas com ${seats} assentos`
    );
  }
}
