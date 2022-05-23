   
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
    let bender = document.createElement('img');
    document.getElementsById('img');  
    bender.style.left = "100px";
}    

function move_bot_left(){
    let bender = document.createElement('img');
    document.getElementsById('img'); 
    bender.style.right = "100px";
}

function move_bot_down(){
    let bender = document.createElement('img');
    document.getElementsById('img'); 
    bender.style.up = "100px";
}

function move_bot_up(){
    let bender = document.createElement('img');
    document.getElementsById('img'); 
    bender.style.down = "100px";
}

function activate_bot(){
    "alert('BOT GO !)";
}
