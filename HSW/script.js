function toggleSection(element) {
    const isActive = element.classList.contains('active');

    // Wyłączanie aktywnych sekcji poza wybraną
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // Przewijanie do sekcji, jeśli wcześniej nie była aktywna
    if (!isActive) {
        element.classList.add('active');
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
