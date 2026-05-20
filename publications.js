function formatPublicationLinks() {
  document.querySelectorAll('#bibtex_display a.publication-url, #bibtex_display a.publication-doi').forEach(function (link) {
    if (link.dataset.formatted === 'true') return;
    var path = (link.getAttribute('href') || '').split(/[?#]/)[0];
    link.textContent = /\.pdf$/i.test(path) ? 'pdf' : 'paper';
    link.dataset.formatted = 'true';
  });
}

function initPublicationDisplay() {
  var display = document.getElementById('bibtex_display');
  if (!display) return;

  formatPublicationLinks();
  new MutationObserver(formatPublicationLinks).observe(display, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPublicationDisplay);
} else {
  initPublicationDisplay();
}

window.addEventListener('load', formatPublicationLinks);
