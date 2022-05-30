//https://jsonplaceholder.typicode.com/photos

function createTask(item) {
    const tbody = document.querySelector("tbody")

    const tr = document.createElement("tr")
    const numero = document.createElement("td")
    const tache = document.createElement("td")
    const status = document.createElement("td")

    numero.innerText = item.id
    tache.innerText = item.title
    status.innerText = item.completed


    if(item.completed) {
        tr.style.backgroundColor = "green"
    }

    tr.append(numero, tache, status)
    tbody.appendChild(tr)
}

let page = 0;
const tasksCount = 200; // Nombre total de tâches const itemsPerPage = 10; // Nombre de lignes par page
const itemsPerPage = 10;
const limit = 10

// Fonction de récupération des tâches
function getTasks(page) {
// On récupère les données depuis le serveur externe // Premier élément de la page courante
    const start = page * itemsPerPage; // Nombre d'éléments par page const limit = itemsPerPage;
    /*
    On se sert des paramètres (Query parameters) _start et _limit pour obtenir un résultat paginé
    _start : définit l'indice du premier élément à récupérer dans le tableau de résultat
    _limit : définit le nombre d'éléments à récupérer */
    fetch("http://jsonplaceholder.typicode.com/todos?_start=" +
        start +
        "&_limit=" +
        limit
    )
        .then((response) => response.json()).then(function (data) {
// Un tableau (Array) de 200 objets javascript représentant des tâches s affiche dans la console du navigateur
        console.log(data);
// On stocke le nombre total de tâches récupérées pour la pagination
//tasksCount = data.length;
// On parcourt le tableau de tâches récupéré et on ajoute une ligne au tableau de tâche pour chaque élément du tableau
        for (let i = 0; i < data.length; i++) {
            createTask(data[i]);
        }
    });
}

// Appel de getTasks au chargement de la page (On récupère la première page de résultat (indice 0))
getTasks(0);