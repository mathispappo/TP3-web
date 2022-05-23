var newCommandForm = document.forms.newTaskF; 


function ajouter(){

  const tache = tacheSaisie()
  pushTache(tache)

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

}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}

function tacheSaisie() {
  const tache = document.getElementsByTagName("tache")
  const date = document.getElementsByTagName("date")
  const categorie = document.getElementsByTagName("categorie")

  return new Tache(tache.value, date.value, categorie.value)

  /**return {
    choix : choix.value,
    tache : tache.value,
    date : date.value,
    detail : detail.value
  }*/

}

document.addEventListener("DOMContentLoaded", () => {
  var maNouvelleTache = {
    taskTd: document.newTaskF.tache.value,
    dateTd: document.newTaskF.date.value,
    categorieTd: document.newTaskF.categorie.value,
  
    [Symbol.iterator](){
      let tableau=Object.values(this);
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

  nom;
  date;
  categorie;

  constructor(nom, date, categorie) {
      this.nom = nom;
      this.date = date;
      this.categorie = categorie;
  }
}

let mesTaches = []

function pushTache(tache) {
  mesTaches.push(tache)
}

// Il manque la 7)b et 7)c