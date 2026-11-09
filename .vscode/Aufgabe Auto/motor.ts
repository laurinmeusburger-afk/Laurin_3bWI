export class Motor {
    private _leistung: number;
    private _hubraum: number;
    private _verbrauch: number;

    constructor(leistung: number, hubraum: number, verbrauch: number) {
        this._leistung = leistung;
        this._hubraum = hubraum;
        this._verbrauch = verbrauch;
    }

    get leistung(): number {
        return this._leistung;
    }

    set leistung(value: number) {
        this._leistung = value;
    }

    get hubraum(): number {
        return this._hubraum;
    }

    set hubraum(value: number) {
        this._hubraum = value;
    }

    get verbrauch(): number {
        return this._verbrauch;
    }

    set verbrauch(value: number) {
        this._verbrauch = value;
    }

    printMotorData(): void {
        console.log(
            `Leistung: ${this._leistung} PS, Hubraum: ${this._hubraum} ccm, Verbrauch: ${this._verbrauch} l/100km`
        );
    }
}


const motoren: Motor[] = [];


motoren.forEach(motor => motor.printMotorData());
