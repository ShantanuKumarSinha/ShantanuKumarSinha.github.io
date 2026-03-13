(function () {
  var THEMES = ['theme-light', 'theme-dark', 'theme-sepia', 'theme-forest', 'theme-ocean'];
  var select = document.getElementById('theme-select');

  function applyTheme(theme) {
    THEMES.forEach(function (t) { document.body.classList.remove(t); });
    if (theme !== 'theme-light') {
      document.body.classList.add(theme);
    }
    try { localStorage.setItem('theme', theme); } catch (e) {}
    if (select.value !== theme) { select.value = theme; }
  }

  var saved = 'theme-light';
  try { saved = localStorage.getItem('theme') || 'theme-light'; } catch (e) {}
  if (!THEMES.includes(saved)) { saved = 'theme-light'; }
  applyTheme(saved);

  select.addEventListener('change', function () {
    applyTheme(select.value);
  });
})();
