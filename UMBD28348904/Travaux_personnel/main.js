const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
}).addTo(map);

// Exemple de données (à remplacer par un chargement JSON ou GeoJSON)
const ecoles = [
    { nom: "École A", lat: 48.85, lon: 2.35, programme: "Grande École" },
    { nom: "École B", lat: 45.75, lon: 4.85, programme: "Bachelor" },
    { nom: "École C", lat: 51.5, lon: -0.12, programme: "Les deux" },
    // Ajouter d'autres écoles ici
];

// Couleur selon programme
function getColor(programme) {
    if (programme === "Grande École") return "green";
    if (programme === "Bachelor") return "deepskyblue";
    if (programme === "Les deux") return "crimson";
    return "gray";
}

// Stocker les marqueurs pour filtre ultérieur
let markers = [];

function afficherEcoles(filtreProgramme = "") {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    ecoles.forEach(ecole => {
        if (filtreProgramme && ecole.programme !== filtreProgramme && filtreProgramme !== "Les deux") return;
        if (filtreProgramme === "Les deux" && ecole.programme !== "Les deux") return;

        const marker = L.circleMarker([ecole.lat, ecole.lon], {
            radius: 8,
            color: getColor(ecole.programme),
            fillOpacity: 0.8
        }).bindPopup(`<strong>${ecole.nom}</strong><br>${ecole.programme}`);
        marker.addTo(map);
        markers.push(marker);
    });
}

// Application du filtre
document.getElementById("apply").addEventListener("click", () => {
    const filtreProgramme = document.getElementById("programme").value;
    afficherEcoles(filtreProgramme);
});

// Initialisation
afficherEcoles();
