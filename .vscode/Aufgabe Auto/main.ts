import { Auto } from "./Auto.ts";
import { Motor } from "./Motor.ts";
import { Rad } from "./Rad.ts";

const motor = new Motor(150, 2000, 7);

const raeder: Rad[] = [
    new Rad(18, 1, 6),
    new Rad(18, 2, 6),
    new Rad(18, 3, 6),
    new Rad(18, 4, 6)
];

const auto = new Auto(
    "Audi",
    2020,
    50000
);

const autoWithMotorAndWheels = {
    auto: auto,
    motor: motor,
    raeder: raeder
};

for (const rad of autoWithMotorAndWheels.raeder) {
    rad.printRadData();
}   

for (const key in autoWithMotorAndWheels) {
    if (autoWithMotorAndWheels.hasOwnProperty(key)) {
        const value = autoWithMotorAndWheels[key];
        if (value instanceof Auto) {
            value.printData();
        } else if (value instanceof Motor) {
            value.printMotorData();
        }
    }   



}