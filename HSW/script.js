// Funkcja przełączająca widoczność sekcji
function toggleSection(element) {
    // Wyłączanie aktywnych sekcji poza wybraną
    document.querySelectorAll('.card').forEach(card => {
        if (card !== element) {
            card.classList.remove('active');
        }
    });

    // Animacja gładkiego przewijania do klikniętej karty
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Przełączenie klasy active
    element.classList.toggle('active');
}
