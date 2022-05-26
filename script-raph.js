console.log("hello world")
const form = document.forms[0]
const btn = document.getElementById("submit")
const table = document.querySelector("table")
let tbody = table.querySelector("tbody")

//collection taches
let mesTaches = []

form.addEventListener("submit", ajouter)

async function fetchJson() {
    const json =  await fetch('../js/task.json').then(response => j = response.json())
    console.log(json, typeof  json)
    return json;
}

class Tache {

    nom;
    date;
    categorie;
    detail;

    constructor(nom, date, categorie, detail) {
        this.nom = nom;
        this.date = date;
        this.categorie = categorie;
        this.detail = detail;
    }
}

function bienvenu() {
    alert("une alerte")
}

function supprimer() {
    table.removeChild(tbody)
    tbody = document.createElement("tbody")
    table.appendChild(tbody)
}

function pushTache(tache) {
    mesTaches.push(tache)
}

function tacheSaisie() {
    const choix = document.getElementById("choix_tache")
    const tache = document.getElementById("tacheinput")
    const date = document.getElementById("datetache")
    const detail = document.getElementById("detailtache")

    return new Tache(tache.value, date.value, choix.value, detail.value)

    /**return {
        choix : choix.value,
        tache : tache.value,
        date : date.value,
        detail : detail.value
    }*/
}

function ajouter(e) {
    e.preventDefault()

    const tache = tacheSaisie()
    pushTache(tache)

    get_bot_action(tache.nom)

    console.log(tache.categorie, tache.nom)

    const tr = document.createElement("tr")
    const tacheEl = document.createElement("td")
    const dateEl = document.createElement("td")
    const choixEl = document.createElement("td")
    const detailEl = document.createElement("td")
    const debutEl = document.createElement("td")
    const terminerEl = document.createElement("td")

    const dureeEl = document.createElement("td")
    dureeEl.classList.add("duree")

    const btn = document.createElement("button")
    btn.innerText = "Terminer la tâche"

    btn.addEventListener("click", () => {
        dureeEl.classList.remove("duree")
        terminerEl.innerText = debut_fin_tache()
        btn.innerText = "terminé"
    })


    tacheEl.innerText = tache.nom
    dateEl.innerText = tache.date
    choixEl.innerText = tache.categorie
    detailEl.innerText = tache.detail
    debutEl.innerText = debut_fin_tache()
    dureeEl.innerText = 0

    tr.append(tacheEl, detailEl, dateEl, choixEl, debutEl, dureeEl, terminerEl, btn)
    tbody.append(tr)

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
      tbody.append(tr)
  })
}


setInterval(incrementerDuree, 1000)
fetchJson().then(r => loadTasks(r))




