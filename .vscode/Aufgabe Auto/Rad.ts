export class Rad {
    private _durchmesser: number;
    private _position: number;
    private _profilstand: number;

    constructor(durchmesser: number, position: number, profilstand: number) {
        this._durchmesser = durchmesser;
        this._position = position;
        this._profilstand = profilstand;
    }


    get durchmesser(): number {
        return this._durchmesser;   
    }

    set durchmesser(value: number) {
        this._durchmesser = value;
    }

    get position(): number {
        return this._position;
    }   

    set position(value: number) {
        this._position = value;
    }

    get profilstand(): number {
        return this._profilstand;
    }

    set profilstand(value: number) {
        this._profilstand = value;
    }   

    printRadData(): void {
        console.log(
            `Durchmesser: ${this._durchmesser} Zoll, Position: ${this._position}, Profilstand: ${this._profilstand} mm`
        );
    }
}

const raeder: Rad[] = [];

for (let i = 0; i < 0; i++) {
    const durchmesser = Math.floor(Math.random() * 20) + 15; // 15-34 Zoll
    const position = Math.floor(Math.random() * 4) + 1;     // Position 1-4
    const profilstand = Math.floor(Math.random() * 8) + 2;   // Profilstand 2-9 mm

    const rad = new Rad(durchmesser, position, profilstand);
    raeder.push(rad);
}

raeder.forEach((rad) => rad.printRadData());
