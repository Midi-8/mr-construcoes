# MR Construções - Website Institucional

Website institucional da **MR Construções** (*Marco Paulo Ribeiro Unipessoal, Lda.*), empresa de construção e reabilitação de habitações em Portugal com equipas especializadas em carpintaria de cofragem e estruturas em betão armado na Alemanha.

Projeto estático de elevada performance, multilingue (**PT / EN / DE**), sem cookies de rastreio e com tipografia alojada localmente em conformidade com o RGPD.

---

## Arquitetura e Estrutura

```text
mr-construcoes/
├── index.html                  Página principal (Hero responsivo, Empresa, Serviços, Mural de Projetos, Orçamento)
├── alemanha.html               Atuação na Alemanha (Serviços, Mapa 2D interativo, Mural contínuo de obra, B2B)
├── recrutamento.html           Canal de recrutamento (Hero + competências valorizadas + formulário de candidatura)
├── privacidade.html            Política de Privacidade (RGPD)
├── termos.html                 Termos e Condições, Aviso Legal e Resolução Alternativa de Litígios (RAL)
├── css/
│   ├── site.css                Sistema visual principal (tokens, layout, animações, responsivo, @font-face local)
│   └── germany-map.css         Estilos compilados do componente de mapa da Alemanha
├── js/
│   ├── site.js                 Motor unificado (i18n PT/EN/DE, comparador antes/depois, murais, lightbox, formulários)
│   └── germany-map.js          Bundle compilado do mapa interativo 2D da Alemanha
├── src/
│   └── germany-map/            Código-fonte React + TypeScript + d3-geo + Framer Motion do mapa da Alemanha
├── fonts/
│   ├── inter-latin.woff2       Tipografia variável Inter (300-600, alojamento local)
│   └── inter-latin-ext.woff2   Extensão latina da tipografia Inter
├── imagens/                    Fotografias otimizadas em WebP, ícones PWA e miniaturas Open Graph (JPEG 1200x630)
├── videos/                     Registos reais em obra na Alemanha (MP4 H.264 otimizados com fast-start)
├── robots.txt                  Diretivas de indexação para motores de busca
├── sitemap.xml                 Mapa XML das páginas ativas
└── site.webmanifest            Manifesto PWA e metadados móveis
```

---

## Principais Características

### Experiência e Design
- **Hero Responsivo Dedicado**: Fotografia arquitetónica em formato panorâmico para desktop (`moradia-minimalista.webp`) e versão vertical `9:16` dedicada a mobile (`moradia-minimalista-mobile.webp`) via `<picture>`.
- **Comparador Antes / Depois**: Controlo direto por toque, rato e teclado com inércia suave e revelação progressiva sincronizada com o scroll.
- **Murais Contínuos Infinitos**: Carrosséis horizontais multi-linha em loop contínuo (Portugal na página inicial; 2 linhas de fotos e vídeos reais na página Alemanha), com suporte para arrasto, trackpad, scroll e ampliação em Lightbox acessível (`<dialog>`).
- **Mapa Interativo 2D da Alemanha**: Desenvolvido em React, TypeScript, `d3-geo` (`geoMercator`) e Framer Motion, com as 6 zonas reais de atuação (Hamburgo, Berlim, Munique, Düsseldorf, Dortmund e Brémen), arcos animados, coordenadas precisas e sincronização bidirecional com a lista lateral e o seletor de idioma.
- **Internacionalização (PT / EN / DE)**: Tradução integral de conteúdos, atributos ARIA, metadados e links contextuais de WhatsApp/email, com persistência técnica via `localStorage` e parâmetro `?lang=`.

### Performance, Segurança e Conformidade
- **Tipografia Local (Zero Pedidos Externos)**: Fonte `Inter` servida localmente em `.woff2`, eliminando chamadas a servidores externos de fontes (maior velocidade LCP e conformidade estrita com o RGPD em Portugal e na Alemanha).
- **Política de Segurança (CSP)**: `Content-Security-Policy` restritiva (`script-src 'self'`, `font-src 'self'`, `object-src 'none'`, `base-uri 'self'`), `referrer="strict-origin-when-cross-origin"` e `rel="noopener noreferrer"` em todas as ligações externas.
- **Privacidade e Enquadramento Legal**: Zero cookies de analítica ou publicidade; páginas dedicadas de [Política de Privacidade](privacidade.html) (RGPD) e [Termos e Condições](termos.html) com divulgação obrigatória das entidades RAL (Lei n.º 144/2015) e ligação ao Livro de Reclamações Eletrónico.
- **SEO Técnico**: Metadados completos (`canonical`, `hreflang` PT/EN/DE, Open Graph com imagens `1200x630` em JPEG, Twitter Cards), dados estruturados JSON-LD (`GeneralContractor`, `Service`, `BreadcrumbList`), `robots.txt` e `sitemap.xml`.

---

## Desenvolvimento e Compilação

### Visualização Local
O website publicado é 100% estático e pode ser servido diretamente a partir da raiz do repositório:

```bash
python3 -m http.server 8000
```

Aceder em `http://localhost:8000`.

### Recompilar o Mapa da Alemanha
O componente do mapa em `src/germany-map/` é compilado com Vite e TypeScript para `js/germany-map.js` e `css/germany-map.css`:

```bash
npm install
npm run build:map
```

---

## Configuração Antes de Produção

1. **Endpoints dos Formulários (Formspree)**: Em `js/site.js`, substituir os identificadores provisórios em `FORM_ENDPOINT_ORCAMENTO` e `FORM_ENDPOINT_CANDIDATURA` pelos endpoints reais criados no Formspree. Enquanto não estiverem configurados, os formulários utilizam fallback seguro via `mailto:`.
2. **Ativação do Domínio Próprio (`marcoribeiroconstrucoes.pt`)**: Substituir todas as ocorrências marcadas com `SEO_BASE_URL` (`https://midi-8.github.io/mr-construcoes` -> `https://marcoribeiroconstrucoes.pt`) nos ficheiros HTML, `robots.txt` e `sitemap.xml`.
3. **Cabeçalhos HTTP de Segurança**: Ao associar o domínio próprio (recomendado via Cloudflare), configurar cabeçalhos HTTP `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` e `Permissions-Policy`.

---

## Dados Legais

- **Denominação Social**: Marco Paulo Ribeiro Unipessoal, Lda.
- **Marca Comercial**: MR Construções
- **NIF / NIPC**: 516590022
- **Alvará IMPIC**: n.º 113987
- **Sede**: Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal
- **Contactos**: +351 915 680 947 · `geral@marcoribeiroconstrucoes.pt` · `mr@marcoribeiroconstrucoes.pt`
- **Livro de Reclamações Eletrónico**: https://www.livroreclamacoes.pt
