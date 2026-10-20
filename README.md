# MR Construções — Website Institucional

Website oficial da **MR Construções** (Marco Paulo Ribeiro Unipessoal, Lda.), empresa especializada em construção civil, remodelação e reparações com sede em Vila Nova de Famalicão.

---

##  Sobre o Projeto

Website institucional desenvolvido para divulgar os serviços, processos de trabalho, projetos e meios de contacto da empresa. 
Desenvolvido com foco em:
- **Performance e Leveza**: Código nativo sem dependências pesadas ou frameworks externas.
- **Identidade Visual Contemporânea**: Tipografia cuidada, paleta de cores equilibrada e acabamentos estéticos refinados.
- **Organização Modular**: Separação clara entre estrutura (HTML5), estilização (CSS3) e interatividade (JavaScript Vanilla).
- **Acessibilidade & Responsividade**: Totalmente adaptado a dispositivos móveis, tablets e desktops, com suporte a preferências de movimento reduzido (`prefers-reduced-motion`).
- **Otimizações Core Web Vitals**: Atributos explícitos de dimensão para eliminação de CLS (*Cumulative Layout Shift*) e alinhamento fluído de menus de navegação.

---

##  Estrutura do Repositório

```text
mr-construcoes/
├── index.html        # Estrutura HTML semântica
├── style.css         # Folha de estilos principal (design tokens, layout e media queries)
├── script.js         # Interatividade, acessibilidade e validações
├── imagens/          # Recursos visuais (fotografias e logótipos)
└── README.md         # Documentação do projeto
```

---

##  Tecnologias e Recursos

- **HTML5**: Estrutura semântica (`header`, `main`, `section`, `article`, `details`, `footer`).
- **CSS3**: Layouts flexíveis com CSS Grid e Flexbox, tipografia fluida com `clamp()`, tokens CSS via `:root` e media queries responsivas.
- **JavaScript (Vanilla)**: Manipulação nativa da DOM, `IntersectionObserver` para animações em scroll e controlo interativo do comparador antes/depois.
- **Google Fonts**: Famílias tipográficas [Archivo](https://fonts.google.com/specimen/Archivo) e [Inter](https://fonts.google.com/specimen/Inter).

---

##  Secções do Website

| Secção | Descrição |
|---|---|
| **Início / Hero** | Apresentação visual da marca e chamada de impacto com fotografia de fundo |
| **Manifesto** | Valores e princípios de atuação (Rigor, Proximidade e Qualidade) |
| **Projetos** | Seleção de trabalhos em destaque nas áreas de remodelação, construção e acabamentos |
| **Antes e Depois** | Comparador interativo com slider deslizante para avaliação visual das intervenções |
| **Processo** | Fluxo de trabalho em 4 passos: Ouvir, Planear, Executar e Entregar |
| **Especialidades** | Acordeão interativo com as 9 áreas de intervenção técnica da empresa |
| **Quem Somos** | Informações institucionais, história e dados da sede da empresa |
| **Contactos** | Formulário funcional para pedidos de orçamento (via `mailto`) e ligações diretas |

---

##  Como Executar Localmente

Não requer instalação de gestores de pacotes ou compilação. Pode ser executado diretamente:

### Opção 1: Abrir no navegador
Abra diretamente o ficheiro `index.html` em qualquer navegador web moderno.

### Opção 2: Servidor HTTP local (Python)
```bash
# Executar a partir da pasta raiz do projeto:
python3 -m http.server 8000
```
Depois, abra o endereço no browser: `http://localhost:8000`

---

## Contactos da Empresa

- **Telefone:** [+351 915 680 947](tel:+351915680947)
- **Email:** [mrconstrucoes@sapo.pt](mailto:mrconstrucoes@sapo.pt)
- **Sede:** Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão
- **Redes Sociais:** [Facebook](https://www.facebook.com/p/MR-Constru%C3%A7%C3%B5es-100077550159685/) | [Instagram](https://www.instagram.com/mr_construcoes/)

---

*© MR Construções — Marco Paulo Ribeiro Unipessoal, Lda. Todos os direitos reservados.*
