function activate_bot(){
  const tasks = document.querySelector(".datatable")
  const tab = []
  for (let i = 5; i < tasks.childNodes.length; i++){
    console.log(tasks.childNodes)
    tab.push(tasks.childNodes[i].childNodes[0].textContent)
  }
  console.log("tab" ,tab)

  const execute = () =>{
    if(tab.length > 0){
      const action = get_bot_action(tab.shift())
      action()
      setTimeout(execute, 1000)
    }
  }
  execute()
}


function get_bot_action(query){
  switch(query){
    case "BOT_CREATE":
      return () => {
        console.log("sdfsfsdfds")
        let bender = document.createElement('img');
        bender.src = "../img/bender.png";
        bender.style.height = "100px";
        bender.style.position = "absolute";
        bender.style.top = "0px";
        bender.style.left = "0px";
        bender.style.width = "57.5px";
        bender.style.height = "62.5px";
        bender.style.transition = "all 2s";
        bender.id = "bender";
        document.body.append(bender);
      };

    case "BOT_LEFT":
      return () => {
        bender.style.left += parseInt(bender.style.left) +10 +'px';
      };

    case "BOT_RIGHT":
      return () => {
        bender.style.right += "100px";
      };

    case "BOT_UP":
      return () => {
        bender.style.top += "100px";
      };

    case "BOT_DOWN":
      return () => {
        bender.style.bottom += "100px";
      };

    default :
      return function(){};

  }

}

