   
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

function move_bot_right(){
    const bender = document.getElementById('bender');  
    bender.style.left = "100px";
}    

function move_bot_left(){
    const bender = document.getElementById('bender'); 
    bender.style.left = "-100px";
}

function move_bot_down(){
    const bender = document.getElementById('bender'); 
    bender.style.top = "100px";
}

function move_bot_up(){
    const bender = document.getElementById('bender'); 
    bender.style.top = "-100px";
}

function activate_bot(){
    move_bot_down()
    move_bot_up()
    move_bot_left()
    move_bot_right()
    window.alert("fbbd")
}

function get_bot_action(query) {
    switch (query.substring(4)) {
        case "CREATE" :
            create_robot()
            break
        case "RIGHT" :
            move_bot_right()
            break
        case "LEFT" :
            move_bot_left()
            break
        case "UP" :
            move_bot_up()
            break
        case "DOWN" :
            move_bot_down()
            break
        case "RUN" :
            activate_bot()
            break;
        default :
            break
    }
}
