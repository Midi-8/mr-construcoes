# MR Construções — Website Institucional

Website institucional da MR Construções (Marco Paulo Ribeiro Unipessoal, Lda.), empresa de construção civil, remodelação e reparações com sede em Vila Nova de Famalicão, Portugal.

Desenvolvido em Vanilla HTML5, CSS3 e JavaScript moderno, sem dependências externas nem frameworks pesadas, otimizado para carregamento rápido, SEO local e utilização em dispositivos móveis e desktop.

---

## Estrutura do Projeto

```text
mr-construcoes/
├── index.html          Estrutura HTML5 semântica (página principal e template do projeto)
├── style.css           Folha de estilos principal, variáveis de design e regras responsivas
├── script.js           Lógica da página principal (menu mobile, scroll, formulário, toast)
├── project-data.js     Base de dados em JavaScript com as informações e galerias dos projetos
├── project-view.js     Gestor de rotas por hash (#projeto/id) e preenchimento da vista do projeto
├── lightbox.js         Visualizador de imagens em ecrã inteiro (acessível, com teclado e gestos de swipe)
├── imagens/            Fotografias, logotipo oficial e recursos gráficos
└── README.md           Documentação técnica e instruções de manutenção
```

---

## Funcionalidades Principais

### Navegação e Apresentação de Projetos
- **Filtros Interativos por Categoria**: Filtragem em tempo real na grelha de portfólio (Todos, Construção, Remodelação, Acabamentos) com contadores automáticos.
- **Cartões de Projeto no Portfólio**: Cada cartão da página inicial liga diretamente à página detalhada da respetiva obra via hash da URL (`#projeto/moradia-pedra-famalicao`, `#projeto/moradia-minimalista`, `#projeto/interiores-sala-ripado`, `#projeto/casa-de-banho-porto`, `#projeto/piscina-famalicao`, `#projeto/casa-famalicao`).
- **Vista Detalhada Dinâmica**: Layout moderno em duas colunas — texto, descrição e botão de pedido de orçamento à esquerda; galeria com fotografia principal e miniaturas verticais à direita; blocos estruturados de "Rigor e Execução" e "Ficha Técnica" lado a lado.
- **Título de Separador e Histórico**: Ao entrar num projeto, o título da aba do navegador é atualizado dinamicamente e restaurado ao regressar à página principal.
- **WhatsApp Contextual**: O botão flutuante de contacto adapta automaticamente a mensagem com o nome do projeto que o visitante está a consultar.

### Galeria e Lightbox
- Ampliação de fotografias em ecrã inteiro.
- Navegação entre fotos através de botões, setas do teclado (esquerda/direita), tecla Escape para fechar ou gestos táteis de deslize (swipe) em telemóveis.
- Contador de imagens e legenda descritiva integrada.

### Identidade Visual e Outras Ferramentas
- **Tipografia Técnica (Inter)**: Tipografia minimalista, técnica e industrial inspirada na arquitetura contemporânea (Inter 400, 500 e 600), com espaçamentos condensados em títulos e caixa alta aberta em botões e etiquetas técnicas.
- **Comparador Antes / Depois**: Controlo tátil deslizante em proporção 4:3 (`1440/1085`) sem cortes nas imagens, com alinhamento milimétrico referenciado ao muro frontal da moradia.
- **Formulário de Contacto Seguro**: Envio assíncrono via FormSubmit com proteção anti-spam por campo honeypot oculto e notificação visual Toast.
- **ScrollSpy**: Indicador visual na barra de navegação superior que acompanha a secção visível no ecrã.
- **Otimização Mobile**: Hero estático à prova de saltos no scroll táctil, filtros de projetos com espaçamento ergonómico e botões com acabamento técnico unificado.

---

## Como Adicionar ou Atualizar Projetos e Fotografias

Toda a informação dos projetos e galerias está centralizada no ficheiro `project-data.js`. Não é necessário alterar a estrutura do HTML para adicionar ou editar imagens de obras.

### 1. Adicionar uma nova fotografia a um projeto existente
1. Copie o ficheiro de imagem para a pasta `imagens/` (formato JPG ou WebP, resolução recomendada ~1200x900px).
2. Abra `project-data.js` e localize o projeto correspondente pelo seu `id`.
3. Adicione um novo objeto na lista `gallery`:

```javascript
{
  url: "imagens/nome-da-sua-foto.jpg",
  caption: "Descrição breve da fotografia",
  type: "horizontal"
}
```

### 2. Adicionar um novo projeto
1. Adicione um novo bloco no array `window.PROJECTS_DATA` em `project-data.js` com os campos: `id`, `title`, `tagline`, `category`, `categoryLabel`, `location`, `year`, `duration`, `area`, `description`, `highlights`, `heroImage` e `gallery`.
2. Em `index.html`, adicione o cartão correspondente dentro da secção `<section class="projects">` com o link a apontar para `#projeto/seu-id`.

---

## Execução Local

O projeto é estático e não requer instalação de dependências ou Node.js.

### Opção 1: Abertura direta
Abra o ficheiro `index.html` em qualquer navegador web.

### Opção 2: Servidor HTTP local (Python)
No terminal, dentro da pasta do projeto:
```bash
python3 -m http.server 8000
```
Aceda no navegador ao endereço: `http://localhost:8000`

---

## Conformidade e Dados Legais

- **Denominação Social**: Marco Paulo Ribeiro Unipessoal, Lda.
- **Marca Comercial**: MR Construções
- **NIF / NIPC**: 516590022
- **Alvará IMPIC N.º**: 113987
- **Sede**: Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal
- **Telefone**: +351 915 680 947
- **Email**: mrconstrucoes@sapo.pt
- **Livro de Reclamações Eletrónico**: https://www.livroreclamacoes.pt
