export class Auto {
    constructor(
        public marke: string,
        public baujahr: number,
        public kmstand: number
    ) {}

    printData(): void {
        console.log(
            `Marke: ${this.marke}, Baujahr: ${this.baujahr}, Kilometerstand: ${this.kmstand}`
        );
    }
}

const autos: Auto[] = [];

const markenA = [
    "Audi",
    "BMW",
    "Mercedes",
    "VW",
    "Porsche",
    "Opel",
    "Ford",
    "Toyota",
    "Honda",
    "Nissan"
];

const baujahrA = [1990, 1995, 2000, 2005, 2010, 2015, 2020];

for (let i = 0; i < 0; i++) {
    autos.push(
        new Auto(
            markenA[Math.floor(Math.random() * markenA.length)],
            baujahrA[Math.floor(Math.random() * baujahrA.length)],
            Math.floor(Math.random() * 200000)
        )
    );
}

autos.forEach(auto => auto.printData());