// Dodanie funkcji rozwijania sekcji po kliknięciu
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
      // Przełączenie klasy "active" dla sekcji
      section.classList.toggle('active');
    });
  });
  