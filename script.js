let player = document.getElementById("player");

let keys = {};

window.addEventListener("keydown", e => {
    keys[e.key] = true;
})

window.addEventListener("keyup", e => {
    keys[e.key] = false;
})

const isKeyDown = (name) => {
    return keys[name];
}


const update = () => {
    player.innerText = `   O\n  /|\\ \n  / \\`;

    if (isKeyDown("ArrowDown")) {
            player.style.top = parseInt(getComputedStyle(player).top) + 4 + "px";
            player.innerText = `   O\n  /|/ \n  ) (`;
    }
    if (isKeyDown("ArrowUp")) {
        player.style.top = parseInt(getComputedStyle(player).top) - 4 + "px";
        player.innerText = `   O\n  \\|\\ \n  ) (`;
    }
    if (isKeyDown("ArrowRight")) {
        player.style.left = parseInt(getComputedStyle(player).left) + 4 + "px";
        player.innerText = `   O\n  /|-\n  / \\`; 
    }        
    if (isKeyDown("ArrowLeft")) {
        player.style.left = parseInt(getComputedStyle(player).left) - 4 + "px";
        player.innerText = `   O\n  -|\\\n  / \\`; 

    }

    if (isKeyDown(" ")) {
        player.innerText = `   O\n  \\|/ \n  / \\`;
    }

    requestAnimationFrame(update);
}
requestAnimationFrame(update);
