function create_robot() {
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
    const bender = document.getElementById("bender")
    bender.style.left = parseInt(bender.style.left.replace("px", ''), 10) + 100 + "px";
}

function move_bot_left() {
    const bender = document.getElementById("bender")
    bender.style.left = parseInt(bender.style.left.replace("px", ''), 10) - 100 + "px";
}

function move_bot_down() {
    const bender = document.getElementById("bender")
    bender.style.top = parseInt(bender.style.top.replace("px", ''), 10) + 100 + "px";
}

function move_bot_up() {
    const bender = document.getElementById("bender")
    bender.style.bottom = parseInt(bender.style.bottom.replace("px", ''), 10) + 100 + "px";
}

function activate_bot() {
    const tbody = document.querySelector('.datatable tbody')
    for (let i = 0; i < tbody.childNodes.length; i++) {
        switch (tbody.childNodes[i].childNodes[0]?.textContent) {
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
            default :
                break
        }
    }
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

