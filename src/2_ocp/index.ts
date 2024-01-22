// Open/Closed Principle (OCP)

import { VehicleCar } from "./vehicles/VehicleCar";
import { VehicleMotorcycle } from "./vehicles/VehicleMotorcycle";

const car = new VehicleCar("Azul", 2020, 1.6, 4, 5);
car.startVehicle();

const motorcycle = new VehicleMotorcycle("Branca", 2022, 250);
motorcycle.startVehicle();
