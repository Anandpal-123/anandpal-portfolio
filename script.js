// Simple theme toggle & year
const btn = document.getElementById('themeToggle');
const root = document.documentElement;
btn?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Load theme on start
(() => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.add('light');
})();

// Set year
document.getElementById('year').textContent = new Date().getFullYear();