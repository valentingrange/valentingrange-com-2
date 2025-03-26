document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu");
    const contentContainer = document.getElementById("content");

    // Charger le menu
    fetch("templates/menu.html")
        .then(response => response.text())
        .then(data => menuContainer.innerHTML = data)
        .catch(error => console.error("Erreur chargement menu:", error));

    // Définition des routes pour les pages
    const routes = {
        "": "jeux-videos/mario-odyssey/index.html",
        "jeux-videos/mario-odyssey": "jeux-videos/mario-odyssey/index.html",
        "jeux-videos/mario-odyssey/astuce": "jeux-videos/mario-odyssey/astuce.html",
        "jeux-videos/mario-odyssey/lunes": "jeux-videos/mario-odyssey/lunes/lunes.html",
        "jeux-videos/zelda-breath-of-the-wild": "jeux-videos/zelda-breath-of-the-wild/index.html",
        "jeux-videos/zelda-breath-of-the-wild/astuce": "jeux-videos/zelda-breath-of-the-wild/astuce.html",
        "jeux-videos/zelda-breath-of-the-wild/solution": "jeux-videos/zelda-breath-of-the-wild/solution.html",
        "jeux-videos/zelda-tears-of-the-kingdom": "jeux-videos/zelda-tears-of-the-kingdom/index.html",
        "jeux-videos/zelda-tears-of-the-kingdom/astuce": "jeux-videos/zelda-tears-of-the-kingdom/astuce.html",
        "jeux-videos/zelda-tears-of-the-kingdom/solution": "jeux-videos/zelda-tears-of-the-kingdom/solution.html",
        "jeux-videos/minecraft": "jeux-videos/minecraft/index.html",
        "jeux-videos/minecraft/astuce": "jeux-videos/minecraft/astuce.html",
        "jeux-videos/minecraft/solution": "jeux-videos/minecraft/solution.html",
    };

    // Fonction pour charger le contenu en fonction de l'URL
    function loadContent() {
        let path = location.hash.substring(1); // Supprimer le #
        let page = routes[path] || "404.html"; // Page par défaut ou erreur

        fetch(`templates/${page}`)
            .then(response => response.ok ? response.text() : "<h1>Page non trouvée</h1>")
            .then(data => contentContainer.innerHTML = data)
            .catch(error => contentContainer.innerHTML = "<h1>Erreur de chargement</h1>");
    }

    // Détecter les changements d'URL
    window.addEventListener("hashchange", loadContent);

    // Charger la page initiale
    loadContent();
});
