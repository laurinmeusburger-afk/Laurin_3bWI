let namen = [
    "Hugo",
    "Hubert",
    "Max",
    "Luna",
    "Berta",
    "Leo",
    "Mia",
    "Paul",
    "Emil",
    "Fritz"
];

let farben = [
    "grau",
    "rosa",
    "blau",
    "grün",
    "lila",
    "gelb"
];

let geschlechter = ["m", "w"];

let hoehen = [250, 270, 280, 300, 320, 350];

let gewichte = [700, 750, 800, 850, 890, 950, 1000];

let alter = [10, 20, 30, 40, 50, 60];

let fluegellaengen = [300, 350, 400, 450, 500];

let breiten = [150, 170, 187, 200, 220];

let geschwindigkeiten = [100, 150, 200, 250, 300, 350];

let anzahlFluegel = [2, 4, 6];


function zufall(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function erstellePegaphant() {

    let p = {
        name: zufall(namen),
        farbe: zufall(farben),
        geschlecht: zufall(geschlechter),
        hoehe: zufall(hoehen),
        gewicht: zufall(gewichte),
        alter: zufall(alter),
        fluegellaenge: zufall(fluegellaengen),
        breite: zufall(breiten),
        geschwindigkeit: zufall(geschwindigkeiten),
        anzahlFluegel: zufall(anzahlFluegel),

        x: Math.random() * 80,
        y: 10 + Math.random() * 50,

        richtung: Math.random() < 0.5 ? -1 : 1,
        t: Math.random() * 100
    };

    // Geschwindigkeit berechnen

    p.speed = Math.max(
        0.1,
        (p.geschwindigkeit / 1000) *
        (p.anzahlFluegel / 2) *
        (1000 / p.gewicht) *
        (1 - p.alter / 120)
    );


    let b = document.createElement("img");

    b.src = "hubert.png";
    b.className = "pegaphant";
    b.alt = p.name;

    b.style.width = p.breite + "px";
    b.style.height = p.hoehe + "px";

    b.style.left = p.x + "%";
    b.style.top = p.y + "%";


    b.style.border =
        "4px solid " +
        (p.geschlecht === "w"
            ? "hotpink"
            : "dodgerblue");

    b.style.borderRadius = "15px";


    const farbenMap = {
        grau: "grayscale(100%)",
        rosa: "hue-rotate(300deg)",
        blau: "hue-rotate(180deg)",
        grün: "hue-rotate(90deg)",
        gelb: "hue-rotate(40deg)",
        lila: "hue-rotate(240deg)"
    };

    b.style.filter = farbenMap[p.farbe];

    document
        .getElementById("pegaphanten")
        .appendChild(b);

    console.log(p);

    // Animation

    function anim() {

        p.x += p.richtung * p.speed;
        p.t += 0.03;

        if (p.x <= 0) {
            p.richtung = 1;
            b.style.transform = "scaleX(1)";
        }

        if (p.x >= 85) {
            p.richtung = -1;
            b.style.transform = "scaleX(-1)";
        }

        b.style.left = p.x + "%";

        b.style.top =
            p.y +
            Math.sin(p.t) *
            (p.fluegellaenge / 120) +
            "%";

        requestAnimationFrame(anim);
    }

    anim();
}

for (let i = 0; i < 10; i++) {
    erstellePegaphant();
}