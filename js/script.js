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
    const duree = document.createElement('td')
    const terminele = document.createElement("button")
    var t = "Terminer la tâche"
    taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value
    ajoutéeleTd.textContent = debut_fin_tache()
    duree.classList.add("duree")
    duree.textContent = setInterval("incrementerDuree()", 1000)
    //duree.textContent = setTimeout("incrementerDuree()", 1000)
    
    terminele.textContent = t
    //terminele.addEventListener("click", t = "Terminé !")
    

    //terminele.textContent = document.newTaskF.appendChild(terminele)
    
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
    newItem.append(taskTd, dateTd, categorieTd, ajoutéeleTd, duree, terminele)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)

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

