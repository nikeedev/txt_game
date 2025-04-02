let player = document.getElementById("player");

window.onkeydown = (e) => { 
    switch (e.key) {
        case "ArrowDown":
            player.style.top = parseInt(getComputedStyle(player).top) + 5 + "px";
            break;

        case "ArrowUp":
            player.style.top = parseInt(getComputedStyle(player).top) - 5 + "px";
            break;
        
        case "ArrowRight":
            player.style.left = parseInt(getComputedStyle(player).left) + 5 + "px";

            player.innerText =
                `
                   O
                 _-|\_
                 '/ \_
                      
                `;

            break;
        
        case "ArrowLeft":
            player.style.left = parseInt(getComputedStyle(player).left) - 5 + "px";
            break;
        
        default:
            break;
    }

    player.innerText = `
 O
/|\
| |         
- -`;
}
