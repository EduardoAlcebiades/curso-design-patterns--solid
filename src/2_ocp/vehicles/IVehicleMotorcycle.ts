import { IVehicle } from "./IVehicle";

export interface IVehicleMotorcycle extends IVehicle {
  configure(color: string, year: number, engine: number): void;
}
