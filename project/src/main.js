const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const helloButton = document.getElementById('helloBtn');
if (helloButton) {
  helloButton.addEventListener('click', () => {
    alert('Szia! Projekted mostantól működik.');
  });
}
