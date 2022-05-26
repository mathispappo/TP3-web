var newCommandForm = document.forms.newTaskF; 


async function ajouter(){

  const tache = tacheSaisie()
  pushTache(tache)

  const table = document.querySelector('.datatable')
  console.log(table)
  mesTaches.forEach((tache) => {
    var bol = true
    console.log(table.childElementCount)
    for( i = 1; i < table.childNodes.length ; i++){
        if(table.childNodes[i].childNodes[0].textContent === tache.nom){
            bol = false
        }
    }


    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value
    
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
    newItem.append(taskTd, dateTd, categorieTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)
  })
}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}

function tacheSaisie() {
  const form = document.forms[0]
  const nomSaisi = form.elements[0].value
  const dateSaisie = form.elements[1].value
  const categorieSaisie = form.elements[2].value
  /*
  return {nomSaisi, dateSaisie, categorieSaisie}
  */

  const nouvelletache = new Tache(nomSaisi,dateSaisie,categorieSaisie);
  console.log(nouvelletache)
  return nouvelletache
}

document.addEventListener("DOMContentLoaded", () => {
  var maNouvelleTache = {
    taskTd: document.newTaskF.tache.value,
    dateTd: document.newTaskF.date.value,
    categorieTd: document.newTaskF.categorie.value,
  
    [Symbol.iterator](){
      console.log(this.taskTd)
      let tableau = Object.values(this);
      let prop = 0;
      
      return{
        next(){
          if (prop < tableau.length) {
            return{
              value: tableau[prop++],
              done: false,
            };
          }else{
            return{
              value: undefined,
              done: true,
            };
          }
  
        }
      };
    }
  }
  
  for (let T of maNouvelleTache){
    console.log(T)
  }
  
})

class Tache {
  constructor(nom, date, categorie) {
      this.nom = nom;
      this.date = date;
      this.categorie = categorie;
  }
}

let mesTaches = []

function pushTache(tache) {
  console.log(mesTaches)
}
