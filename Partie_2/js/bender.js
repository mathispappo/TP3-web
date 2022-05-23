function create_robot(){
    let bender = document.createElement('img'); 
    bender.src = "../img/Bender.png"; 
    bender.style.height = "100px"; 
    bender.style.position = "absolute";
    bender.style.top = "0px"; 
    bender.style.left = "0px"; 
    bender.style.transition = "all 2s"; 
    bender.id = "bender"; 
    document.body.append(bender);
    }

function move_bot_right() {
    document.getElementById("bender") = parseInt(document.getElementById("bender").style.left) + 100 + "px";
}

function move_bot_left() {
    document.getElementById("bender") = parseInt(document.getElementById("bender").style.left) - 100 + "px";

}

function move_bot_down() {
    document.getElementById("bender") = parseInt(document.getElementById("bender").style.top) + 100 + "px";
}

function move_bot_up() {
    document.getElementById("bender") = parseInt(document.getElementById("bender").style.top) - 100 + "px";
}

function activate_bot(query) {
    console.log("BOT GO !")
    move_bot_right()
    move_bot_left()
    move_bot_down()
    move_bot_up()

    
    
}


/*

function get_bot_action(query) {
    switch (query) {
        case "BOT_CREATE" :
            create_robot()
            break
        case "BOT_RIGHT" :
            move_bot_right()
            break
        case "BOT_LEFT" :
            move_bot_left()
            break
        case "BOT_UP " :
            move_bot_up()
            break
        case "BOT_DOWN" :
            move_bot_down()
            break
        case "BOT_RUN" :
            activate_bot()
            break;
        default :
            break
    }
}

*/