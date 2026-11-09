const pferd = [];
 
for (let i = 0; i < 6; i++) {
   
 
    const pferd_posx = Math.floor(Math.random() * 100);
    const pferd_posy = Math.floor(Math.random() * 100);
 
    const pferd_richtung = Math.floor(Math.random() * 4); // 0 = oben, 1 = rechts, 2 = unten, 3 = links
 
    const pferd_geschwindigkeit = Math.floor(Math.random() * 5) + 1; // Geschwindigkeit zwischen 1 und 5
 
    function createPferd(index, posx, posy, richtung, geschwindigkeit ) {
 
        const pferd_img_id = "pferd" + index + ".png";
 
        const pferd_img = document.createElement("img");
        pferd_img.src = "png/" + pferd_img_id;
        pferd_img.style.position = "absolute";
        pferd_img.style.left = posx + "px";
        pferd_img.style.top = posy + "px";
        pferd_img.className = "pferd";
        document.body.appendChild(pferd_img);
        return pferd_img_id;
    }
   
    const pferd_img_id = createPferd(i, pferd_posx, pferd_posy, pferd_richtung, pferd_geschwindigkeit);
 
    spawnpferd = [pferd_img_id, pferd_posx, pferd_posy, pferd_richtung, pferd_geschwindigkeit];
 
    Pferd.push(spawnpferd);
}