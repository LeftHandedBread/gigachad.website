(function () {
  var STORAGE_KEY = 'gigachad-theme';
  var RETRO_STORAGE_KEY = 'gigachad-retro';
  var THEMES = ['dark', 'light', 'oled'];
  var RETROS = ['off', 'win95'];
  var THEME_LABELS = {
    dark: 'Dark',
    light: 'Light',
    oled: 'OLED'
  };
  var RETRO_LABELS = {
    off: 'Off',
    win95: 'Win95'
  };

  function getSavedTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (THEMES.indexOf(saved) !== -1) {
      return saved;
    }
    return null;
  }

  function getSavedRetro() {
    var saved = localStorage.getItem(RETRO_STORAGE_KEY);
    if (RETROS.indexOf(saved) !== -1) {
      return saved;
    }
    return null;
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  function getInitialTheme() {
    return getSavedTheme() || getSystemTheme();
  }

  function getInitialRetro() {
    return getSavedRetro() || 'off';
  }

  function getNextTheme(theme) {
    var currentIndex = THEMES.indexOf(theme);
    var nextIndex = (currentIndex + 1) % THEMES.length;
    return THEMES[nextIndex];
  }

  function getNextRetro(retro) {
    var currentIndex = RETROS.indexOf(retro);
    var nextIndex = (currentIndex + 1) % RETROS.length;
    return RETROS[nextIndex];
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggle(theme);
  }

  function applyRetro(retro) {
    if (retro === 'off') {
      document.documentElement.removeAttribute('data-retro');
    } else {
      document.documentElement.setAttribute('data-retro', retro);
    }
    updateRetroToggle(retro);
  }

  function updateThemeToggle(theme) {
    var toggles = document.querySelectorAll('.theme-toggle');
    if (!toggles.length) {
      return;
    }

    toggles.forEach(function (toggle) {
      var nextTheme = getNextTheme(theme);
      var currentLabel = THEME_LABELS[theme] || 'Dark';
      var nextLabel = THEME_LABELS[nextTheme] || 'Light';

      toggle.textContent = currentLabel;
      toggle.setAttribute('aria-label', 'Current theme ' + currentLabel + '. Activate to switch to ' + nextLabel + '.');
      toggle.setAttribute('title', 'Switch to ' + nextLabel + ' mode');
    });
  }

  function updateRetroToggle(retro) {
    var toggles = document.querySelectorAll('.retro-toggle');
    if (!toggles.length) {
      return;
    }

    toggles.forEach(function (toggle) {
      var nextRetro = getNextRetro(retro);
      var currentLabel = RETRO_LABELS[retro] || 'Off';
      var nextLabel = RETRO_LABELS[nextRetro] || 'Win95';

      toggle.textContent = 'Retro: ' + currentLabel;
      toggle.setAttribute('aria-label', 'Retro skin ' + currentLabel + '. Activate to switch to ' + nextLabel + '.');
      toggle.setAttribute('title', 'Switch retro skin to ' + nextLabel);
      toggle.setAttribute('aria-pressed', retro !== 'off' ? 'true' : 'false');
    });
  }

  function handleThemeToggle(event) {
    event.preventDefault();

    var currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    var nextTheme = getNextTheme(currentTheme);

    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  function handleRetroToggle(event) {
    event.preventDefault();

    var currentRetro = document.documentElement.getAttribute('data-retro') || 'off';
    var nextRetro = getNextRetro(currentRetro);

    localStorage.setItem(RETRO_STORAGE_KEY, nextRetro);
    applyRetro(nextRetro);
  }

  function bindThemeToggle() {
    var toggles = document.querySelectorAll('.theme-toggle');
    if (!toggles.length) {
      return;
    }

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', handleThemeToggle);
    });
  }

  function bindRetroToggle() {
    var toggles = document.querySelectorAll('.retro-toggle');
    if (!toggles.length) {
      return;
    }

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', handleRetroToggle);
    });
  }

  var initialTheme = getInitialTheme();
  var initialRetro = getInitialRetro();
  applyTheme(initialTheme);
  applyRetro(initialRetro);

  document.addEventListener('DOMContentLoaded', function () {
    bindThemeToggle();
    bindRetroToggle();
    updateThemeToggle(document.documentElement.getAttribute('data-theme') || initialTheme);
    updateRetroToggle(document.documentElement.getAttribute('data-retro') || 'off');

    if (window.matchMedia) {
      var mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
      mediaQuery.addEventListener('change', function () {
        if (!getSavedTheme()) {
          applyTheme(getSystemTheme());
        }
      });
    }
  });
})();
