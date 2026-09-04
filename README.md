# Coalizão IA para Impacto — Site

Páginas do site da **Coalizão IA para Impacto**, construídas com a identidade visual oficial da Coalizão (sistema desenvolvido pela Com Limão para a Jornada, com o logo novo da Coalizão). Estrutura pensada para futura integração com o site da [Jornada IA para Impacto](https://jornadadeimpacto.ia.br/).

## Estrutura

```
index.html          → Home da Coalizão (organizações + financiadores)
css/coalizao.css    → Design system compartilhado (usar em todas as novas páginas)
assets/             → Logos oficiais (copiados de 07-identidade-visual/logo-coalizao/)
```

## Identidade visual (fonte: `07-identidade-visual/` da pasta compartilhada)

| Token | Valor | Uso |
|---|---|---|
| Navy | `#0A314C` | Primária — fundos escuros, títulos, texto |
| Lavanda | `#9E93C7` | Secundária — bordas, chips, kickers |
| Coral | `#F0625E` | Destaque — CTAs, números, tags |

Tipografia: **Calibri** — na web usamos **Carlito** (Google Fonts, metricamente compatível), com Calibri como fallback local.

Logo: 7 variações de cor em `07-identidade-visual/logo-coalizao/PNG/`. No site: versão branca sobre navy (header, footer, hero) e versão azul sobre fundo claro.

## Fontes de conteúdo (pasta compartilhada `Coalizão IA para o Impacto`)

- O que é / vocabulário (Raiz, Tronco, Copa): `CLAUDE.md` e `00-comece-aqui/glossario.md`
- Barreiras, alavancas, recomendações: `03-prototipos-e-recomendacoes/recomendacoes.md`
- Raiz + 4 pilares, protótipos, estágios: `03-prototipos-e-recomendacoes/arquitetura-tronco-e-pilares.md`
- Comunidade de prática / engajamento: `05-comunicacao-e-narrativas/plano-de-engajamento.md`
- O que já foi decidido (nunca publicar o que não está lá): `06-reunioes-e-decisoes/registro-de-decisoes.md`

**Cuidados editoriais** (do `CLAUDE.md` da pasta): não apresentar como posição da Coalizão o que não foi decidido coletivamente; governança está em construção; a contagem de recomendações é contestada (10/16/17 — o site usa "10 recomendações priorizadas", que é o número documentado); valores de captação não estão publicados no site.

## Pendências (TODOs no código)

- Links reais dos CTAs "Manifestar interesse" e "Falar com a equipe" (formulários/e-mail) — hoje `href="#"`.
- Seção de parceiros/apoiadores: deliberadamente ausente até definição de quem pode ser nomeado publicamente.

## Como criar uma nova página

1. Duplique o `index.html`, mantenha `<header>`, `<footer>` e o link para `css/coalizao.css`.
2. Componentes prontos: `.hero`, `.stats-band`, `.section` (variações `.alt` e `.dark`), `.section-head`, `.card-grid`/`.card` (com `.tag`), `.chip-grid`/`.chip`, `.timeline`, `.quote-block`, `.cta-banner`, `.btn` (`-primary`, `-ghost`, `-navy`).
3. Atualize o `aria-current="page"` no menu.

## Visualizar localmente

```bash
python -m http.server 8321
```

E abra http://localhost:8321 (ou use o preview configurado em `.claude/launch.json`).
