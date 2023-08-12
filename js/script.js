const load = () => {
  const toggleModeElement = document.getElementById('toggle-mode');
  const useDark = window.matchMedia('(prefers-color-scheme: dark)');

  const toggleDarkMode = (isDarkMode) => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  };

  toggleDarkMode(useDark.matches);

  useDark.addEventListener('change', (e) => toggleDarkMode(e.matches));
  toggleModeElement.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-mode');
  });
};

window.addEventListener('DOMContentLoaded', load);
