/**
 * MR CONSTRUÇÕES — Base de Dados dos Projetos
 * 
 * Este ficheiro contém os dados dos projetos apresentados no website.
 * Para adicionar fotografias ou novos projetos, basta editar este ficheiro:
 * - 'heroImage': caminho da imagem principal de capa (ex.: 'imagens/meu-projeto.jpg')
 * - 'gallery': lista de fotografias que aparecem na página do projeto e abrem na galeria/lightbox
 */

window.PROJECTS_DATA = [
  {
    id: "casa-de-banho-porto",
    title: "Casa de banho no Porto",
    tagline: "Remodelação completa de interiores e modernização",
    category: "remodelacao",
    categoryLabel: "Remodelação",
    location: "Porto",
    year: "2023",
    duration: "3 Semanas",
    area: "9 m²",
    description: "Renovação completa de casa de banho com substituição integral das redes de canalização de águas e esgotos, aplicação de novos revestimentos cerâmicos de grande formato, instalação de louças suspensas, base de duche à medida com resguardo em vidro temperado e iluminação embutida. Execução focada no rigor técnico, no conforto e na durabilidade dos acabamentos.",
    highlights: [
      "Substituição total das redes de água e saneamento",
      "Aplicação de impermeabilização técnica nas zonas húmidas",
      "Revestimento e pavimento cerâmico retificado",
      "Base de duche encastrada com resguardo em vidro temperado",
      "Móvel à medida com lavatório e torneiras de embutir",
      "Iluminação embutida com proteção contra humidade"
    ],
    // Imagem principal de capa (dimensões recomendadas ~1200×900px)
    heroImage: "imagens/casa-banho-porto.jpg",
    // Galeria de fotografias do projeto (adicione aqui as fotografias adicionais)
    gallery: [
      {
        url: "imagens/casa-banho-porto.jpg",
        caption: "Vista geral da casa de banho após intervenção e montagem final",
        type: "horizontal"
      }
      /* Para adicionar mais fotos a este projeto, descomente e preencha:
      ,{
        url: "imagens/casa-banho-porto-detalhe-1.jpg",
        caption: "Detalhe dos acabamentos e torneiras de embutir",
        type: "horizontal"
      }
      */
    ]
  },
  {
    id: "piscina-famalicao",
    title: "Piscina exterior em Famalicão",
    tagline: "Construção de estrutura em betão e espaço exterior envolvente",
    category: "construcao",
    categoryLabel: "Construção",
    location: "Vila Nova de Famalicão",
    year: "2024",
    duration: "6 Semanas",
    area: "32 m²",
    description: "Construção de raiz de piscina exterior em betão armado com impermeabilização contínua e sistema integrado de circulação e filtração de água. A intervenção contemplou ainda a execução da envolvente exterior com pavimento antiderrapante em deck cerâmico, assegurando perfeita transição entre a habitação e o jardim.",
    highlights: [
      "Estrutura em betão armado com armadura dupla e reforço estrutural",
      "Sistema de impermeabilização bicomponente de alta elasticidade",
      "Instalação de circuito hidráulico, skimmers e ralo de fundo",
      "Equipamento de filtração e casa das máquinas técnica",
      "Iluminação subaquática LED de baixo consumo",
      "Pavimento exterior envolvente antiderrapante e resistente a intempéries"
    ],
    // Imagem principal de capa (dimensões recomendadas ~1200×900px)
    heroImage: "imagens/piscina-famalicao.jpg",
    gallery: [
      {
        url: "imagens/piscina-famalicao.jpg",
        caption: "Piscina exterior concluída com envolvente e jardim",
        type: "horizontal"
      }
      /* Adicione aqui mais fotografias do projeto:
      ,{
        url: "imagens/piscina-famalicao-2.jpg",
        caption: "Pormenor da iluminação noturna e deck envolvente",
        type: "horizontal"
      }
      */
    ]
  },
  {
    id: "casa-famalicao",
    title: "Renovação e acabamentos em Famalicão",
    tagline: "Recuperação de moradia residencial e acabamentos de detalhe",
    category: "acabamentos",
    categoryLabel: "Acabamentos",
    location: "Vila Nova de Famalicão",
    year: "2023",
    duration: "2 Meses",
    area: "180 m²",
    description: "Obra de reabilitação e acabamentos de moradia unifamiliar. A intervenção incluiu a recuperação total de fachadas exteriores com tratamento de fissuras e pintura técnica, substituição de elementos degradados, isolamento e renovação de espaços interiores. Uma intervenção que devolveu a integridade construtiva e o conforto visual ao imóvel.",
    highlights: [
      "Tratamento e recuperação estrutural de alvenarias e rebocos",
      "Esquema de pintura exterior de elevada durabilidade e proteção contra humidades",
      "Renovação e tratamento de pavimentos e carpintarias",
      "Trabalhos de gesso cartonado e sanca de iluminação indireta",
      "Acabamentos interiores executados com precisão e materiais laváveis"
    ],
    // Imagem principal de capa (dimensões recomendadas ~1200×900px)
    heroImage: "imagens/casa-famalicao-depois.jpg",
    gallery: [
      {
        url: "imagens/casa-famalicao-depois.jpg",
        caption: "Resultado final após obras de recuperação e pintura",
        type: "horizontal"
      },
      {
        url: "imagens/casa-famalicao-antes.jpg",
        caption: "Estado inicial do edifício antes do início da intervenção",
        type: "horizontal"
      }
      /* Adicione aqui mais fotografias do projeto:
      ,{
        url: "imagens/casa-famalicao-detalhe.jpg",
        caption: "Detalhe da pintura e acabamentos da fachada",
        type: "horizontal"
      }
      */
    ]
  }
];
