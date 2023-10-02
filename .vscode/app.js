// Étape 11: Ajout de l'interaction pour le bouton "Favoris"
const favoriteButtons = document.querySelectorAll(".favorite-button");

favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("favorited");
        const server = button.parentElement;
        if (button.classList.contains("favorited")) {
            server.style.backgroundColor = $secondary-color;
            // Étape 12: Afficher une notification lorsque le serveur est marqué comme favori
            const notification = document.createElement("div");
            notification.textContent = "Serveur ajouté aux favoris !";
            notification.classList.add("notification");
            server.appendChild(notification);
            setTimeout(() => {
                server.removeChild(notification);
            }, 2000);
        } else {
            server.style.backgroundColor = #f0f0f0;
        }
    });
});
