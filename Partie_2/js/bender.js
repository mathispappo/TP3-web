function create_robot() {
    let bender = document.createElement('img');
    bender.src = "../img/bender.jpg";
    bender.style.height = "100px";
    bender.style.position = "absolute";
    bender.style.top = "0px";
    bender.style.left = "0px";
    bender.style.transition = "all 2s";
    bender.id = "bender";
    document.body.append(bender);
}
/*
function move_bot_right() {
    const bender = document.getElementById("bender")
    bender.style.left = "100px";
}

function move_bot_left() {
    const bender = document.getElementById("bender")
    bender.style.left = "-100px";
}

function move_bot_down() {
    const bender = document.getElementById("bender")
    bender.style.top = "100px";
}

function move_bot_up() {
    const bender = document.getElementById("bender")
    bender.style.bottom = "100px";
}

function activate_bot() {
    move_bot_right()
    move_bot_left()
    move_bot_up()
    move_bot_down()
}

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