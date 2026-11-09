const Zombie = [];

for (let i = 0; i < 5; i++) {

    // RANDOM SPAWN ÜBER DEN GANZEN SCREEN
    const zombieWidth = 100; // gleiche Größe wie in CSS

    const zombie_posx = Math.floor(Math.random() * (window.innerWidth - zombieWidth));
    const zombie_posy = Math.floor(Math.random() * (window.innerHeight - zombieWidth));

    const zombie_richtung = Math.floor(Math.random() * 4);
    const zombie_geschwindigkeit = Math.floor(Math.random() * 5) + 1;

    function createZombie(index, posx, posy, richtung, geschwindigkeit) {

        const zombie_img_id = "zombie" + index + ".png";

        const zombie_img = document.createElement("img");
        zombie_img.src = "img/" + zombie_img_id;
        zombie_img.style.position = "absolute";
        zombie_img.style.left = posx + "px";
        zombie_img.style.top = posy + "px";
        zombie_img.className = "zombie";

        document.body.appendChild(zombie_img);

        return zombie_img_id;
    }

    const zombie_img_id = createZombie(
        i,
        zombie_posx,
        zombie_posy,
        zombie_richtung,
        zombie_geschwindigkeit
    );

    const spawnzombie = [
        zombie_img_id,
        zombie_posx,
        zombie_posy,
        zombie_richtung,
        zombie_geschwindigkeit
    ];

    Zombie.push(spawnzombie);
}

function update() {

    const zombieWidth = 100;

    Zombie.forEach(z => {

        // Bewegung
        if (z[3] === 0) z[2] -= z[4]; // oben
        if (z[3] === 1) z[1] += z[4]; // rechts
        if (z[3] === 2) z[2] += z[4]; // unten
        if (z[3] === 3) z[1] -= z[4]; // links

        // Linke Wand
        if (z[1] < 0) {
            z[1] = 0;
            z[3] = 1;
        }

        // Rechte Wand
        if (z[1] > window.innerWidth - zombieWidth) {
            z[1] = window.innerWidth - zombieWidth;
            z[3] = 3;
        }

        // Obere Wand
        if (z[2] < 0) {
            z[2] = 0;
            z[3] = 2;
        }

        // Untere Wand
        if (z[2] > window.innerHeight - zombieWidth) {
            z[2] = window.innerHeight - zombieWidth;
            z[3] = 0;
        }
    });

    // ===========================
    // KOLLISIONEN ZWISCHEN ZOMBIES
    // ===========================

    for (let i = 0; i < Zombie.length; i++) {

        for (let j = i + 1; j < Zombie.length; j++) {

            const z1 = Zombie[i];
            const z2 = Zombie[j];

            if (
                z1[1] < z2[1] + zombieWidth &&
                z1[1] + zombieWidth > z2[1] &&
                z1[2] < z2[2] + zombieWidth &&
                z1[2] + zombieWidth > z2[2]
            ) {

                // Richtungen tauschen
                const temp = z1[3];
                z1[3] = z2[3];
                z2[3] = temp;
            }
        }
    }

    // Bilder aktualisieren
    Zombie.forEach(z => {

        const img = document.querySelector(
            `img[src="img/${z[0]}"]`
        );

        img.style.left = z[1] + "px";
        img.style.top = z[2] + "px";
    });

    requestAnimationFrame(update);
}

update();
