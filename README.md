# MR Construções — Website Institucional

Website oficial da **MR Construções** (**Marco Paulo Ribeiro Unipessoal, Lda.**), empresa especializada em construção civil, remodelação e reparações com sede em Vila Nova de Famalicão, Portugal.

[![Status](https://img.shields.io/badge/Status-Produ%C3%A7%C3%A3o-success.svg)](#)
[![Stack](https://img.shields.io/badge/Stack-Vanilla%20HTML5%20%7C%20CSS3%20%7C%20JS-blue.svg)](#)
[![Alvará IMPIC](https://img.shields.io/badge/Alvar%C3%A1%20IMPIC-113987-orange.svg)](https://www.impic.pt)
[![NIF](https://img.shields.io/badge/NIF-516590022-lightgrey.svg)](#)

---

## 🏗️ Sobre o Projeto

O website institucional da MR Construções foi concebido e otimizado com foco na excelência visual, performance e conformidade técnica e legal. Funciona como a montra digital dos serviços, projetos, processos e canais de atendimento da empresa.

### Principais Pilares

* **Performance & Core Web Vitals**:
  * Imagens otimizadas no formato WebP de alta densidade e baixo peso (redução de até 83% em assets chave).
  * Dimensões intrínsecas e `loading="lazy"` para mitigar *Cumulative Layout Shift* (CLS).
  * Arquitetura 100% nativa (Vanilla HTML5/CSS3/JavaScript), sem dependências externas ou frameworks pesadas.
* **Experiência Visual & UX**:
  * Galeria de projetos reais com **Lightbox Modal** imersivo, suporte para navegação por teclado (tecla <kbd>Esc</kbd>, <kbd>Enter</kbd>) e bloqueio inteligente de scroll.
  * Comparador interativo de intervenções "Antes e Depois" com controlo tátil deslizante.
  * Animações suaves de revelação com scroll através de `IntersectionObserver`, respeitando as preferências do sistema (`prefers-reduced-motion`).
* **Conversão & CRO**:
  * Botão de contacto flutuante permanente do **WhatsApp** com mensagem contextual pré-configurada para pedido de orçamento.
  * Formulário de contacto assíncrono com feedback visual em tempo real (notificações Toast acessíveis).
* **Segurança & Anti-Spam**:
  * Proteção nativa por **Honeypot** (`_honey`) invisível a humanos, abortando automaticamente submissões automatizadas de bots.
* **Conformidade Legal (Portugal)**:
  * Rodapé corporativo completo em conformidade com o Decreto-Lei n.º 7/2004, Lei n.º 41/2015 e Decreto-Lei n.º 156/2005.
  * Identificação fiscal (NIF/NIPC 516590022), Título/Alvará de Construção IMPIC N.º 113987 e ligação obrigatória ao **Livro de Reclamações Eletrónico**.

---

## 📁 Estrutura do Repositório

```text
mr-construcoes/
├── index.html        # Estrutura HTML5 semântica e acessível (ARIA, microdados)
├── style.css         # Design system, tokens CSS, componentes e layouts responsivos
├── script.js         # Lógica Vanilla JS (lightbox, formulário, honeypot, toast, navegação)
├── imagens/          # Assets visuais otimizados (WebP e JPG de alta resolução)
│   ├── hero.webp
│   ├── logo-mr-construcoes.webp
│   ├── casa-banho-porto.jpg
│   ├── piscina-famalicao.jpg
│   ├── casa-famalicao-depois.jpg
│   └── casa-famalicao-antes.jpg
└── README.md         # Documentação técnica e institucional
```

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico**: Tags nativas (`header`, `main`, `section`, `article`, `details`, `dialog`, `footer`), atributos de acessibilidade (ARIA) e metadados OpenGraph / Twitter Cards.
* **CSS3 Moderno**: CSS Grid, Flexbox, tipografia fluida com `clamp()`, variáveis nativas (`:root`), transições aceleradas por hardware e media queries adaptáveis.
* **JavaScript (ES6+)**:
  * Manipulação nativa da DOM.
  * Tratamento do comparador Antes/Depois via CSS custom properties (`--split`).
  * Modal Lightbox com foco gerido.
  * `fetch` assíncrono via FormSubmit com fallback e sanitização de campos.
* **Google Fonts**: [Archivo](https://fonts.google.com/specimen/Archivo) e [Inter](https://fonts.google.com/specimen/Inter).

---

## 📑 Secções do Website

| Secção | Descrição |
|---|---|
| **Início / Hero** | Apresentação institucional com imagem de fundo comprimida e proposta de valor clara |
| **Manifesto** | Valores de atuação fundamentais: Rigor, Proximidade e Qualidade |
| **Projetos** | Galeria de obras realizadas com visualizador em ecrã completo (Lightbox) |
| **Antes e Depois** | Slider comparador dinâmico demonstrando a evolução de espaços intervencionados |
| **Processo** | Guia em 4 etapas: Ouvir, Planear, Executar e Entregar |
| **Especialidades** | Acordeão interativo com as 9 valências técnicas de construção e acabamento |
| **Quem Somos** | Identificação institucional, história e dados da sede da empresa |
| **Contactos** | Formulário funcional com proteção anti-spam e ligações telefónicas diretas |
| **Rodapé Corporativo** | Dados jurídicos (NIF, Alvará IMPIC), link para Livro de Reclamações e copyright |

---

## 🚀 Como Executar Localmente

O projeto não requer transpiladores, Node.js ou instalação de pacotes:

### Opção 1: Abrir no navegador
Abra diretamente o ficheiro `index.html` em qualquer navegador web moderno.

### Opção 2: Servidor HTTP local (Python)
```bash
# Executar a partir da pasta raiz do projeto:
python3 -m http.server 8000
```
Aceda no navegador em: `http://localhost:8000`

---

## 🏢 Dados Institucionais & Legais

* **Denominação Social:** Marco Paulo Ribeiro Unipessoal, Lda.
* **Marca Comercial:** MR Construções
* **NIF / NIPC:** 516590022
* **Alvará IMPIC N.º:** 113987
* **Sede:** Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal
* **Telefone:** [+351 915 680 947](tel:+351915680947)
* **Email:** [mrconstrucoes@sapo.pt](mailto:mrconstrucoes@sapo.pt)
* **WhatsApp:** [+351 915 680 947](https://wa.me/351915680947?text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20uma%20obra.)
* **Livro de Reclamações:** [livroreclamacoes.pt](https://www.livroreclamacoes.pt)

---

*© MR Construções — Marco Paulo Ribeiro Unipessoal, Lda. Todos os direitos reservados.*
