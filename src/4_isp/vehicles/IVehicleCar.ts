import { IVehicle } from "./IVehicle";

export interface IVehicleCar extends IVehicle {
  configureCar(
    color: string,
    year: number,
    engine: number,
    doors: number,
    seats: number
  ): void;
}
