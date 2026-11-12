// Fora do site oficial (stage, prévias no onrender.com e localhost), sinaliza que é uma versão de
// teste e marca as mensagens do formulário, que chegam na mesma caixa do site oficial.
(function () {
  var host = location.hostname;
  var isTest = (/\.onrender\.com$/.test(host) && host !== 'coalizao-ia-para-impacto.onrender.com') ||
    host === 'localhost' || host === '127.0.0.1';
  if (!isTest) return;

  var robots = document.createElement('meta');
  robots.name = 'robots';
  robots.content = 'noindex, nofollow';
  document.head.appendChild(robots);

  // Opções de foto do topo em avaliação; ?topo=<chave> na URL troca a imagem.
  var TOPOS = [
    ['', 'Terra (atual)'],
    ['agrofloresta', 'Agrofloresta'],
    ['plantio', 'Plantio'],
    ['maos', 'Mãos'],
    ['roda', 'Roda'],
    ['canoa', 'Canoa (Niterói)'],
    ['pescadores', 'Pescadores'],
    ['jangadas', 'Jangadas (Trairi)'],
    ['jangada', 'Jangada (Jeri)'],
    ['praia', 'Praia (Jeri)'],
    ['por-do-sol', 'Pôr do sol (Salvador)'],
    ['rio-manaus', 'Rio (Manaus)'],
    ['paraty', 'Paraty'],
    ['fim-de-tarde', 'Fim de tarde'],
    ['roda-grama', 'Roda na grama'],
    ['projecao', 'Projeção'],
    ['codigo', 'Código'],
    ['solar', 'Painel solar (Pulsar)'],
    ['solar-inteira', 'Painel solar, foto inteira']
  ];
  var escolhido = new URLSearchParams(location.search).get('topo') || '';

  document.addEventListener('DOMContentLoaded', function () {
    var banner = document.createElement('div');
    banner.className = 'stage-banner';
    banner.innerHTML = 'Versão alternativa em teste — o site oficial é ' +
      '<a href="https://iaparaimpacto.org.br">iaparaimpacto.org.br</a>';

    var hero = document.querySelector('.hero-photo');
    if (hero) {
      if (escolhido) hero.classList.add('topo-' + escolhido);
      var picker = document.createElement('span');
      picker.className = 'stage-picker';
      picker.appendChild(document.createTextNode('· Foto do topo:'));
      TOPOS.forEach(function (t) {
        var a = document.createElement('a');
        a.href = t[0] ? '?topo=' + t[0] : location.pathname;
        a.textContent = t[1];
        if (t[0] === escolhido) a.setAttribute('aria-current', 'true');
        picker.appendChild(a);
      });
      banner.appendChild(picker);
    }
    document.body.insertBefore(banner, document.body.firstChild);

    var subject = document.querySelector('input[name="subject"]');
    if (subject) subject.value = '[STAGE] ' + subject.value;
  });
})();
