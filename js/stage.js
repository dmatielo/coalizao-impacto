// Fora do site oficial (stage e prévias no onrender.com), sinaliza que é uma versão de teste
// e marca as mensagens do formulário, que chegam na mesma caixa do site oficial.
(function () {
  var host = location.hostname;
  var isTest = /\.onrender\.com$/.test(host) && host !== 'coalizao-ia-para-impacto.onrender.com';
  if (!isTest) return;

  var robots = document.createElement('meta');
  robots.name = 'robots';
  robots.content = 'noindex, nofollow';
  document.head.appendChild(robots);

  document.addEventListener('DOMContentLoaded', function () {
    var banner = document.createElement('div');
    banner.className = 'stage-banner';
    banner.innerHTML = 'Versão alternativa em teste — o site oficial é ' +
      '<a href="https://iaparaimpacto.org.br">iaparaimpacto.org.br</a>';
    document.body.insertBefore(banner, document.body.firstChild);

    var subject = document.querySelector('input[name="subject"]');
    if (subject) subject.value = '[STAGE] ' + subject.value;
  });
})();
