var newCommandForm = document.forms.newTaskF;
const mesTaches = []

async function fetchJson() {
    const json =  await fetch('../js/task.json').then(response => j = response.json())
    console.log(json, typeof  json)
    return json;
}

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

function incrementerDuree() {
    let durees = document.getElementsByClassName("duree")
    if (durees.length !== 0) {
        -Array.prototype.forEach.call(durees, function (dureeElement) {
            let valeur = parseInt(dureeElement.textContent)
            dureeElement.textContent = valeur + 1
        });
    }
}

function loadTasks(tasks) {
    tasks.forEach(task => {
        const tr = document.createElement("tr")
        const tacheEl = document.createElement("td")
        const dateEl = document.createElement("td")
        const choixEl = document.createElement("td")
        const detailEl = document.createElement("td")

        tr.append(tacheEl, detailEl, dateEl, choixEl)
        tacheEl.innerText = task.task
        dateEl.innerText = task.date
        choixEl.innerText = task.category
        //detailEl.innerText = task.detail
        const table = document.querySelector('.datatable tbody')
        table.append(tr)
    })
}


function tacheSaisie() {
    const choix = document.forms.newTaskF.categorie.value
    const tache = document.forms.newTaskF.tache.value
    const date = document.forms.newTaskF.date.value

    return new Tache(tache, date, choix)

    /**return {
        choix : choix.value,
        tache : tache.value,
        date : date.value,
    }*/
}

function debut_fin_tache() {
    const locale = 'fr-Fr';
    let d = new Date()
    const jour = d.getDate();
    const mois = d.toLocaleString(locale, {month: 'long'});
    const annee = d.getFullYear();
    const heure = d.toLocaleString(locale, {hour12: false, hour: 'numeric', minute: 'numeric'});

    return `${jour} ${mois} ${annee}  ${heure}`;
}


function ajouter() {

    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);


    const tache = tacheSaisie()
    pushTache(tache)

    console.log(tache)

    get_bot_action(tache.nom)

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    const debutTD = document.createElement("td")
    const endTd = document.createElement("td")
    const dureeTD = document.createElement("td")
    dureeTD.classList.add("duree")

    const btn = document.createElement("button")
    btn.innerText = "Terminer la tâche"

    btn.addEventListener("click", () => {
        dureeTD.classList.remove("duree")
        endTd.innerText = debut_fin_tache()
        btn.innerText = "terminé"
    })

    taskTd.innerText = tache.nom
    dateTd.innerText = tache.date
    categorieTd.innerText = tache.categorie
    debutTD.innerText = debut_fin_tache()
    dureeTD.innerText = 0


    console.log(taskTd.textContent)
    console.log(dateTd.textContent)
    console.log(categorieTd.textContent)

    if (!document.newTaskF.tache.checkValidity() ||
        !document.newTaskF.date.checkValidity() ||
        !document.newTaskF.categorie.checkValidity()
    ) {
        return
    }

    newItem.append(taskTd, dateTd, categorieTd, debutTD, dureeTD, endTd, btn)

    /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    table.appendChild(newItem)

}

//supprimer toutes les lignes du tableau
function supprimer() {
    const tbody = document.querySelector('.datatable tbody')
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }

}

setInterval(incrementerDuree, 1000)
fetchJson().then(r => loadTasks(r))
