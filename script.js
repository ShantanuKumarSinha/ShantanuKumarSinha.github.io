(function () {
  var THEMES = ['theme-light', 'theme-dark', 'theme-sepia', 'theme-forest', 'theme-ocean'];
  var DAY_START_HOUR = 6;   // 06:00 – start of daytime (light theme)
  var DAY_END_HOUR   = 18;  // 18:00 – start of nighttime (dark theme)
  var select = document.getElementById('theme-select');

  function getTimeBasedTheme() {
    var hour = new Date().getHours();
    return (hour >= DAY_START_HOUR && hour < DAY_END_HOUR) ? 'theme-light' : 'theme-dark';
  }

  function applyTheme(theme) {
    var resolved = (theme === 'auto') ? getTimeBasedTheme() : theme;
    THEMES.forEach(function (t) { document.body.classList.remove(t); });
    if (resolved !== 'theme-light') {
      document.body.classList.add(resolved);
    }
    if (theme === 'auto') {
      try { localStorage.removeItem('theme'); } catch (e) {}
    } else {
      try { localStorage.setItem('theme', theme); } catch (e) {}
    }
    if (select.value !== theme) { select.value = theme; }
  }

  var saved = 'auto';
  try { saved = localStorage.getItem('theme') || 'auto'; } catch (e) {}
  if (saved !== 'auto' && !THEMES.includes(saved)) { saved = 'auto'; }
  applyTheme(saved);

  select.addEventListener('change', function () {
    applyTheme(select.value);
  });
})();
