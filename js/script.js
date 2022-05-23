var newCommandForm = document.forms.newTaskF; 


function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    const ajoutéeleTd = document.createElement('td')
    const dureeEl = document.createElement('td')
    const terminerEl = document.createElement('td')
    const btn = document.createElement("button")

    dureeEl.classList.add("duree")
    btn.innerText = "Terminer la tâche"

    btn.addEventListener("click", () => {
      dureeEl.classList.remove("duree")
      terminerEl.innerText = debut_fin_tache()
      btn.innerText = "Terminé !"
    })


    taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value
    ajoutéeleTd.textContent = debut_fin_tache()
    dureeEl.innerText = 0

    
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
    //Vérification de la récupération
    console.log(taskTd.textContent)
    console.log(dateTd.textContent)
    console.log(categorieTd.textContent)

    if (!document.newTaskF.tache.checkValidity() ||
          !document.newTaskF.date.checkValidity() ||
          !document.newTaskF.categorie.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(taskTd, dateTd, categorieTd, ajoutéeleTd, dureeEl, terminerEl, btn)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)


    const tache = tacheSaisie()
    pushTache(tache)

    get_bot_action(tache.nom)

}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}

function debut_fin_tache(){
  var d = new Date();
  var date;

  date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " à " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  
  return date;

}

function incrementerDuree() {
  let durees = document.getElementsByClassName("duree")
  if (durees.length != 0) {
    Array.prototype.forEach.call(durees, function(dureeElement) {
      let valeur = parseInt(dureeElement.textContent) 
      dureeElement.textContent = valeur + 1
    });
  }
}

setInterval(incrementerDuree, 1000)




//collection taches
let mesTaches = []

const btn = document.getElementById("submit")
const table = document.querySelector("table")
let tbody = table.querySelector("tbody")
class Tache {

  nom;
  date;
  categorie;

  constructor(nom, date, categorie) {
      this.nom = nom;
      this.date = date;
      this.categorie = categorie;
  }
}

function pushTache(tache) {
  mesTaches.push(tache)
}

function tacheSaisie() {
  const choix = document.getElementsByName("tache")
  const tache = document.getElementsByName("date")
  const date = document.getElementsByName("categorie")

  return new Tache(tache.value, date.value, choix.value)

  /**return {
      choix : choix.value,
      tache : tache.value,
      date : date.value
  }*/
}


fetchJson().then(r => loadTasks(r))

async function fetchJson() {
  const json =  await fetch('../js/task.json').then(response => j = response.json())
  console.log(json, typeof  json)
  return json;
}
