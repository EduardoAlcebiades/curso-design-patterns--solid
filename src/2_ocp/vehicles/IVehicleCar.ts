import { IVehicle } from "./IVehicle";

export interface IVehicleCar extends IVehicle {
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void;
}
