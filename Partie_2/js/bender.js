function activate_bot(){
    const tasks = document.querySelector('.datatable tbody')
    const tab = []
    console.log("ChildNodes",tasks.childElementCount)

    for (let i = 1; i < tasks.childNodes.length; i++) {
        tab.push(tasks.childNodes[i].childNodes[0].textContent);
    }
    console.log("tab" ,tab)
    // for each command in tab, setTimeout and execute the command
    const execute = () => {
        if (tab.length > 0) {
            const action = get_bot_action(tab.shift())
            action()
            setTimeout(execute,1000)
        }
    }
    execute()
}


function get_bot_action(query){
    switch(query.substring(4)){
        case "CREATE":
            return () => {
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
        case "RIGHT":
            return () => {
                document.getElementById("bender").style.left = (parseInt(document.getElementById("bender").style.left.replace('px',''), 10) + 100) + "px";
            };
        case "LEFT":
            return () => {
                document.getElementById("bender").style.left = (parseInt(document.getElementById("bender").style.left.replace('px',''), 10) - 100) + "px";
            };
        case "DOWN":
            return () => {
                document.getElementById("bender").style.top = (parseInt(document.getElementById("bender").style.top.replace('px',''), 10) + 100) + "px";
        }; 
        case "UP":
            return () => {
                document.getElementById("bender").style.top = (parseInt(document.getElementById("bender").style.top.replace('px',''), 10) - 100) + "px";
        }; 
        case "DIAGONAL":
            return () => {
                document.getElementById("bender").style.left = (parseInt(document.getElementById("bender").style.left.replace('px',''), 10) + 100) + "px";
                document.getElementById("bender").style.top = (parseInt(document.getElementById("bender").style.top.replace('px',''), 10) + 100) + "px";
            }
        default:
            return () => {};
    }
}