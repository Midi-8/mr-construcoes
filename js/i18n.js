/**
 * MR CONSTRUÇÕES — Motor de Internacionalização (js/i18n.js)
 * Idiomas suportados: Português (pt), Inglês (en) e Alemão (de)
 */

(function () {
  'use strict';

  const WA_MESSAGES = {
    pt: {
      'quote-pt': 'Olá! Gostaria de apresentar a minha obra e solicitar um orçamento à MR Construções.',
      'rec-pt': 'Olá! Tenho interesse em trabalhar com a MR Construções em Portugal e gostaria de enviar a minha candidatura.',
      'rec-de': 'Olá! Tenho experiência na construção civil (carpintaria de cofragem) e interesse em trabalhar na Alemanha com a MR Construções.',
      'b2b-de': 'Olá! Represento uma empresa e gostaria de falar sobre serviços de carpintaria de cofragem na Alemanha.',
      'general': 'Olá! Gostaria de entrar em contacto com a MR Construções.'
    },
    en: {
      'quote-pt': 'Hello! I would like to present my construction project and request a quote from MR Construções.',
      'rec-pt': 'Hello! I am interested in working with MR Construções in Portugal and would like to submit my application.',
      'rec-de': 'Hello! I have construction experience (formwork carpentry) and am interested in working in Germany with MR Construções.',
      'b2b-de': 'Hello! I represent a company and would like to discuss formwork carpentry services in Germany.', // REVER POR NATIVO
      'general': 'Hello! I would like to get in touch with MR Construções.'
    },
    de: {
      'quote-pt': 'Hallo! Ich möchte mein Bauprojekt vorstellen und ein Angebot bei MR Construções anfragen.',
      'rec-pt': 'Hallo! Ich interessiere mich für eine Mitarbeit bei MR Construções in Portugal und möchte meine Bewerbung senden.',
      'rec-de': 'Hallo! Ich habe Erfahrung im Baugewerbe (Schalungsbau) und Interesse, mit MR Construções in Deutschland zu arbeiten.',
      'b2b-de': 'Hallo! Ich vertrete ein Unternehmen und möchte über Schalungsbau-Leistungen in Deutschland sprechen.', // REVER POR NATIVO
      'general': 'Hallo! Ich möchte mit MR Construções Kontakt aufnehmen.'
    }
  };

  const MAIL_SUBJECTS = {
    pt: {
      'b2b-de': 'Parceria — Carpintaria de Cofragem na Alemanha'
    },
    en: {
      'b2b-de': 'Partnership — Formwork Carpentry in Germany' // REVER POR NATIVO
    },
    de: {
      'b2b-de': 'Partnerschaft — Schalungsbau in Deutschland' // REVER POR NATIVO
    }
  };

  const TRANSLATIONS = {
    pt: {
      // Navegação Global
      'nav.home': 'Início',
      'nav.projects': 'Projetos',
      'nav.process': 'Processo',
      'nav.specialties': 'Especialidades',
      'nav.about': 'Sobre Nós',
      'nav.germany': 'Alemanha',
      'nav.cta': 'Pedir orçamento',
      'de.nav.cta': 'Enviar candidatura',
      'common.phone': 'Telefone',
      'common.wa.title': 'Fale connosco pelo WhatsApp',
      'common.wa.sub': 'O contacto mais direto com a nossa equipa.',

      // Hero Homepage
      'hero.kicker': '— Construção · Reabilitação · Serviços',
      'hero.title': 'Construir é Transformar.',
      'hero.lead': 'Obras executadas com rigor, proximidade e atenção a cada detalhe. Do primeiro passo à entrega das chaves.',
      'hero.cta1': 'Pedir orçamento',
      'hero.cta2': 'Explorar portefólio',

      // Indicadores de Destaque
      'ind.1.title': '+ 5 anos',
      'ind.1.desc': 'experiência no setor da construção civil',
      'ind.2.title': 'Presença Internacional',
      'ind.2.desc': 'Portugal e Alemanha',
      'ind.3.title': '+100',
      'ind.3.desc': 'intervenções concluídas',

      // Posicionamento e Estrutura (Portugal vs Alemanha)
      'pos.kicker': '— Posicionamento e Áreas de Atuação',
      'pos.title': 'Construção com rigor. Qualidade em cada detalhe.',
      'pos.lead': 'Cada projeto é abraçado com uma abordagem assente no rigor, na qualidade e no acompanhamento próximo de cada trabalho.',
      'pos.pt.tag': 'PORTUGAL',
      'pos.pt.title': 'Construção de habitações unifamiliares',
      'pos.pt.summary': 'Damos prioridade à construção de moradias completas (habitação unifamiliar), do início ao fim, com acompanhamento próximo em todas as fases da obra.',
      'pos.pt.listTitle': 'Restantes áreas de intervenção:',
      'pos.pt.i1': 'Reabilitação e remodelação.',
      'pos.pt.i2': 'Estruturas e construção civil.',
      'pos.pt.i3': 'Fachadas e sistemas ETICS.',
      'pos.pt.i4': 'Alvenarias e revestimentos.',
      'pos.pt.i5': 'Acabamentos e trabalhos complementares.',
      'pos.pt.areasLink': 'Ver áreas de intervenção',
      'pos.pt.cta': 'Solicitar orçamento em Portugal',

      'pos.de.tag': 'ALEMANHA',
      'pos.de.title': 'Carpintaria de cofragem',
      'pos.de.summary': 'Desenvolvemos atividade especializada na Alemanha através de equipas próprias preparadas para integrar projetos de construção de diferentes dimensões.',
      'pos.de.listTitle': 'Atividade desenvolvida na Alemanha:',
      'pos.de.i1': 'Equipas especializadas em carpintaria de cofragem.',
      'pos.de.i2': 'Execução de trabalhos de cofragem em obra.',
      'pos.de.i3': 'Prestação de serviços a empresas e parceiros do setor da construção.',
      'pos.de.i4': 'Experiência operacional e capacidade de integração em equipas de obra.',
      'pos.de.cta': 'Ver área da Alemanha e recrutamento',

      // Projetos e Portefólio (OODA)
      'proj.kicker': '— Portefólio',
      'proj.title': 'Projetos',
      'proj.lead': 'Apresentação limpa, minimalista e arquitetónica das nossas intervenções.',
      'proj.filterLabel': 'Categoria',
      'proj.filter.all': 'Todas as categorias',
      'proj.filter.const': 'Construção',
      'proj.filter.reab': 'Reabilitação',
      'proj.filter.fach': 'Fachadas',
      'proj.filter.ext': 'Construção e Espaços Exteriores',
      'proj.more': 'Ver projeto →',
      'proj.moreWorks.text': 'E muitas outras obras concluídas em Portugal.',
      'proj.moreWorks.link': 'Fale connosco para conhecer mais referências.',
      'p.unifamiliar': 'Habitação Unifamiliar',
      'p1.title': 'Reabilitação de Fachadas',
      'p2.title': 'Aplicação de sistema ETICS',
      'p3.title': 'Reabilitação Integral de Moradia',
      'p4.title': 'Reabilitação de Instalação Sanitária',
      'p5.title': 'Construção de Piscina e Pavimentação Exterior',
      'p1.cardTitle': '— “Reabilitação de Fachadas”',
      'p2.cardTitle': '— “Aplicação de sistema ETICS”',
      'p3.cardTitle': '— “Reabilitação Integral de Moradia”',
      'p4.cardTitle': '— “Reabilitação de Instalação Sanitária”',
      'p5.cardTitle': '— “Construção de Piscina e Pavimentação Exterior”',
      'cat.reabilitacao': 'Reabilitação',
      'cat.fachadas': 'Fachadas e isolamento térmico',
      'cat.exteriores': 'Construção e Espaços Exteriores',

      // Antes e Depois
      'comp.kicker': '— Transformação em Obra',
      'comp.title': 'Antes e depois',
      'comp.lead': 'Arraste o controlo para comparar o rigor e a reabilitação executada.',
      'comp.before': 'Antes',
      'comp.after': 'Depois',
      'comp.hint': 'Deslize para comparar a transformação',

      // Processo de Trabalho (5 Etapas)
      'proc.kicker': '— Processo de Trabalho',
      'proc.title': 'Do primeiro contacto ao resultado final.',
      'proc.lead': 'Organização clara e acompanhamento rigoroso em todas as etapas da intervenção.',
      'proc.1.title': 'Contacto inicial',
      'proc.1.desc': 'Compreensão das necessidades do cliente e recolha das primeiras informações sobre a obra.',
      'proc.2.title': 'Análise do projeto',
      'proc.2.desc': 'Avaliação dos elementos disponíveis e definição dos trabalhos a executar.',
      'proc.3.title': 'Planeamento',
      'proc.3.desc': 'Preparação dos trabalhos, definição dos recursos necessários e organização das etapas de execução.',
      'proc.4.title': 'Execução',
      'proc.4.desc': 'Realização dos trabalhos de construção, com atenção ao rigor técnico e à qualidade de execução.',
      'proc.5.title': 'Conclusão',
      'proc.5.desc': 'Finalização dos trabalhos e entrega da obra, de acordo com o âmbito contratado.',

      // Especialidades e Serviços (Pág. 6)
      'spec.kicker': '— Especialidades e Serviços',
      'spec.title': 'Áreas de Intervenção',
      'spec.lead': 'Damos prioridade à construção de habitações unifamiliares completas, complementada por áreas técnicas especializadas.',
      'spec.main.tag': 'Atividade Principal · Portugal',
      'spec.main.title': 'Construção de raiz',
      'spec.main.desc': 'Construção de habitações unifamiliares completas, do início ao fim, com acompanhamento próximo e coordenação integral de todas as fases da obra.',
      'spec.main.cta': 'Pedir orçamento',
      'spec.secondary.title': 'Também executamos',
      'spec.sub1.title': 'Reabilitação e remodelação',
      'spec.sub1.desc': 'Remodelação e recuperação de edifícios e habitações unifamiliares.',
      'spec.sub2.title': 'Estruturas e construção civil',
      'spec.sub2.desc': 'Execução estrutural em betão armado e trabalhos gerais de construção civil.',
      'spec.sub3.title': 'Fachadas e isolamento térmico',
      'spec.sub3.desc': 'ETICS, revestimentos e intervenções exteriores de proteção e reabilitação.',
      'spec.sub4.title': 'Espaços exteriores',
      'spec.sub4.desc': 'Piscinas, pavimentos cerâmicos ou em pedra e arranjos exteriores.',
      'spec.sub5.title': 'Acabamentos e revestimentos',
      'spec.sub5.desc': 'Alvenarias, revestimentos cerâmicos, pinturas e trabalhos complementares.',

      // Contactos e Oportunidades (Portugal - Pág. 7)
      'cont.kicker': '— Portugal — Contactos e Oportunidades',
      'cont.title': 'Vamos construir o seu próximo projeto?',
      'cont.lead': 'Entre em contacto connosco para apresentar a sua obra, esclarecer dúvidas ou solicitar um orçamento.',
      'cont.wa.cta': 'Solicitar orçamento ↗',
      'cont.form.heading': 'Prefere enviar os detalhes da sua obra?',
      'cont.form.sub': 'Preencha o formulário abaixo com as principais informações do projeto, para que possamos analisar o seu pedido.',
      'cont.form.boxTitle': 'FORMULÁRIO DE PEDIDO DE ORÇAMENTO',
      'form.name': 'Nome',
      'form.reply': 'Telefone / E-mail',
      'form.location': 'Localização da obra',
      'form.type': 'Tipo de intervenção',
      'form.submit': 'Enviar pedido',
      'cont.rec.title': 'Interessado em trabalhar connosco?',
      'cont.rec.desc': 'Estamos disponíveis para conhecer profissionais interessados em integrar as nossas equipas em Portugal.',
      'cont.rec.btn': 'Enviar candidatura via WhatsApp',

      // Vista Detalhada do Projeto
      'pp.back': 'Voltar aos projetos',
      'pp.about': 'Sobre a obra',
      'pp.zoom': 'Ampliar',
      'pp.execution': 'Intervenção / Execução',
      'pp.specs': 'Ficha técnica',
      'pp.prev': '← Projeto anterior',
      'pp.next': 'Próximo projeto →',

      // Página Sobre Nós (sobre.html - Págs. 6 e 7)
      'about.kicker': '— Sobre Nós',
      'about.title': 'O que está por detrás de cada construção?',
      'about.lead': 'Rigor técnico, organização em obra e equipas preparadas para responder a projetos em Portugal e na Alemanha.',
      'about.s1.title': 'O conhecimento como ponto de partida.',
      'about.s1.p1': 'Fundada em 2021, a experiência adquirida diretamente em obra está na origem da MR Construções. É desse contacto que nasce uma abordagem orientada para compreender cada trabalho.',
      'about.s1.p2': 'A vontade de criar uma estrutura própria deu origem a uma empresa que estabeleceu bases na sua forma de trabalhar: compreender cada intervenção, organizar os recursos e valorizar a qualidade da execução.',
      'about.s2.title': 'Capacidade de ir mais longe.',
      'about.s2.p1': 'Da reabilitação à construção de raiz, a MR Construções tem alargado as suas competências e áreas de intervenção.',
      'about.s2.p2': 'Hoje, reunimos duas áreas de atuação distintas, ligadas por uma mesma exigência de organização, responsabilidade e qualidade de execução.',
      'about.s2.p3': 'O crescimento traduziu-se na diversificação e na expansão para mercados internacionais, onde desenvolvemos trabalhos especializados de carpintaria de cofragem.',
      'about.s3.title': 'A experiência faz-se em equipa.',
      'about.s3.p1': 'Por detrás de cada intervenção estão profissionais com experiência no setor e um conhecimento desenvolvido ao longo de anos de trabalho conjunto. A continuidade das equipas e a experiência dos seus responsáveis constituem uma parte essencial da forma como a MR Construções trabalha.',
      'about.s3.p2': 'Portugal e Alemanha permitem-nos ter um alcance internacional, mas com precisão local. 50+ profissionais. 10+ nacionalidades. Uma só equipa.',
      'about.stat1': 'Ano de fundação',
      'about.stat2': 'Profissionais',
      'about.stat3': 'Nacionalidades',
      'about.stat4': 'Uma só equipa',
      'about.closing.kicker': '— Evolução Contínua',
      'about.closing.sub': 'A construção faz parte do que somos. A evolução, também.',
      'about.closing.p1': 'Continuamos a desenvolver competências, a consolidar equipas e a assumir novos desafios. Porque construir não se resume às obras que concluímos, mas também à capacidade de evoluir para aquilo que vem a seguir.',
      'about.ongoing.title': 'Obras em andamento',
      'about.ongoing.sub': 'Intervenções e frentes de trabalho atualmente em execução pelas nossas equipas.',
      'about.ongoing.status': 'Em execução',
      'about.ongoing.c1.title': 'Reabilitação de Habitação Unifamiliar',
      'about.ongoing.c1.desc': 'Execução de alvenarias, rebocos exteriores, muros envolventes e acabamentos técnicos.',
      'about.ongoing.c2.title': 'Execução de Moradia e Envolvente Exterior',
      'about.ongoing.c2.desc': 'Trabalhos de fachada, caixilharias, sistema ETICS e pavimentação exterior em cubo de granito.',
      'about.ongoing.c3.loc': 'Alemanha · Mercado Internacional',
      'about.ongoing.c3.title': 'Frentes de Obra de Carpintaria de Cofragem',
      'about.ongoing.c3.desc': 'Equipas especializadas integradas na execução de estruturas em betão armado.',
      'about.cta.title': 'Vamos construir o seu próximo projeto?',
      'about.cta.desc': 'Entre em contacto connosco para apresentar a sua obra ou solicitar um orçamento.',
      'about.cta.btn1': 'Pedir orçamento',
      'about.cta.btn2': 'Falar pelo WhatsApp',

      // Página da Alemanha (alemanha.html - Pág. 8)
      'de.kicker': '— Alemanha · Carpintaria de Cofragem',
      'de.title': 'Construímos além-fronteiras.',
      'de.lead': 'Na Alemanha, a MR Construções desenvolve a sua atividade na área da carpintaria de cofragem, através de equipas especializadas que integram projetos de construção de diferentes dimensões e exigências técnicas.',
      'de.hero.cta': 'Integrar as nossas equipas',
      'de.p1': 'Equipas especializadas em carpintaria de cofragem.',
      'de.p2': 'Execução de trabalhos de cofragem em obra.',
      'de.p3': 'Prestação de serviços a empresas e parceiros do setor da construção.',
      'de.p4': 'Experiência operacional e capacidade de integração em equipas de obra.',
      'de.team.kicker': '— Execução Técnica · Estruturas em Betão Armado',
      'de.team.title': 'O trabalho faz-se em equipa.',
      'de.team.p1': 'A execução de trabalhos de cofragem exige conhecimento técnico, coordenação e capacidade de adaptação às diferentes fases de uma obra. É neste contexto que as nossas equipas desenvolvem diariamente a sua atividade, contribuindo para a execução de estruturas em betão armado.',
      'de.b2b.kicker': '— Para empresas e parceiros',
      'de.b2b.title': 'Precisa de uma equipa de cofragem?',
      'de.b2b.desc': 'Prestamos serviços de carpintaria de cofragem a empresas e parceiros do setor da construção na Alemanha. Fale connosco sobre o seu projeto.',
      'de.b2b.email': 'Enviar e-mail',
      'de.b2b.wa': 'Falar pelo WhatsApp',
      'de.rec.kicker': '— Alemanha — Página e Recrutamento',
      'de.rec.title': 'O seu próximo desafio pode começar aqui.',
      'de.rec.desc': 'Tem experiência na construção e interesse em trabalhar na Alemanha? Conheça a MR Construções e entre em contacto connosco para saber mais sobre as oportunidades de integrar as nossas equipas.',
      'de.wa.btn': 'Contactar agora ↗',
      'de.form.heading': 'Prefere enviar a sua candidatura?',
      'de.form.sub': 'Preencha o formulário com os seus dados e experiência profissional. Entraremos em contacto após a análise.',
      'de.form.boxTitle': 'FORMULÁRIO DE CANDIDATURA',
      'de.form.phone': 'Telefone / WhatsApp',
      'de.form.specialty': 'Especialidade',
      'de.form.residence': 'Local de Residência',
      'de.form.exp.label': 'Anos de experiência',
      'de.form.exp.placeholder': 'Anos de experiência',
      'de.form.exp.lt1': 'Menos de 1 ano',
      'de.form.exp.1_3': '1–3 anos',
      'de.form.exp.3_5': '3–5 anos',
      'de.form.exp.5_10': '5–10 anos',
      'de.form.exp.10plus': '10+ anos',
      'de.form.avail.label': 'Disponibilidade para início',
      'de.form.avail.placeholder': 'Disponibilidade para início',
      'de.form.avail.immediate': 'Imediata',
      'de.form.avail.1month': 'Até 1 mês',
      'de.form.avail.gt1month': 'Mais de 1 mês',
      'de.form.deExp.label': 'Já trabalhou na Alemanha?',
      'de.form.deExp.placeholder': 'Já trabalhou na Alemanha? (opcional)',
      'de.form.deExp.no': 'Não',
      'de.form.deExp.yes': 'Sim',
      'de.form.submit': 'Enviar candidatura',
      'de.form.msg.success': 'Candidatura enviada com sucesso. Entraremos em contacto brevemente.',

      // Consentimento e Estados de Formulário
      'form.consent.prefix': 'Li e aceito a',
      'form.consent.link': 'Política de Privacidade',
      'form.consent.suffix': '.',
      'form.sending': 'A enviar…',
      'form.msg.validation': 'Por favor, preencha todos os campos obrigatórios.',
      'form.msg.consent': 'Por favor, aceite a Política de Privacidade para enviar.',
      'form.msg.success': 'Pedido enviado com sucesso. Responderemos com a maior brevidade.',
      'form.msg.error': 'Não foi possível enviar no momento. Utilize o botão de WhatsApp acima ou contacte geral@marcoribeiroconstrucoes.pt.',
      'form.msg.notConfigured': 'Endpoint Formspree por configurar em js/script.js. Utilize o WhatsApp acima ou geral@marcoribeiroconstrucoes.pt.',

      // Política de Privacidade (privacidade.html)
      'priv.kicker': '— Proteção de Dados · RGPD',
      'priv.title': 'Política de Privacidade',
      'priv.draft': 'RASCUNHO — Documento preparado para revisão jurídica antes da publicação definitiva.',
      'priv.lead': 'Esta Política de Privacidade explica como a Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) recolhe e trata os dados pessoais submetidos através deste website, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).',
      'priv.s1.title': '1. Responsável pelo tratamento',
      'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., NIF / NIPC 516590022, titular do Alvará IMPIC n.º 113987, com sede na Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Contacto para questões de privacidade: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': '2. Finalidades do tratamento',
      'priv.s2.body': 'Os dados pessoais recolhidos através dos formulários do website destinam-se exclusivamente a: (a) analisar e responder a pedidos de orçamento e contacto comercial; (b) avaliar e dar seguimento a candidaturas para integração nas nossas equipas em Portugal ou na Alemanha.',
      'priv.s3.title': '3. Base legal',
      'priv.s3.body': 'O tratamento dos dados assenta na execução de diligências pré-contratuais a pedido do titular (artigo 6.º, n.º 1, alínea b) do RGPD) e no consentimento explícito prestado pelo utilizador mediante a seleção da caixa de validação antes do envio do formulário (artigo 6.º, n.º 1, alínea a) do RGPD).',
      'priv.s4.title': '4. Dados pessoais recolhidos',
      'priv.s4.body': 'No formulário de pedido de orçamento são recolhidos: nome, telefone ou endereço de correio eletrónico, localização da obra e tipo de intervenção. No formulário de candidatura (Alemanha) são recolhidos: nome, telefone ou WhatsApp, especialidade profissional, local de residência, anos de experiência, disponibilidade para início e indicação opcional de experiência prévia na Alemanha.',
      'priv.s5.title': '5. Destinatários dos dados',
      'priv.s5.body': 'Os dados são tratados internamente pelos responsáveis pela orçamentação e recursos humanos da MR Construções. Para o encaminhamento técnico das mensagens enviadas pelos formulários, o website utiliza o serviço de processamento Formspree na qualidade de subcontratante técnico. Os dados não são vendidos nem cedidos a terceiros para fins publicitários.',
      'priv.s6.title': '6. Prazo de conservação',
      'priv.s6.body': 'Os dados relativos a pedidos de orçamento são conservados durante o período necessário ao tratamento da solicitação ou até 24 meses caso não resulte na celebração de contrato. Os dados de candidaturas espontâneas são conservados pelo prazo máximo de 12 meses após a receção, salvo retirada prévia do consentimento.',
      'priv.s7.title': '7. Direitos dos titulares dos dados',
      'priv.s7.body': 'O titular pode exercer a qualquer momento os direitos de acesso, retificação, apagamento, limitação do tratamento, portabilidade, oposição e retirada do consentimento (sem comprometer a licitude do tratamento efetuado até então), enviando pedido para geral@marcoribeiroconstrucoes.pt.',
      'priv.s8.title': '8. Autoridade de controlo',
      'priv.s8.body': 'Caso considere que o tratamento dos seus dados viola o RGPD, assiste-lhe o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD), através de www.cnpd.pt.',
      'priv.s9.title': '9. Cookies e armazenamento local',
      'priv.s9.body': 'Este website não utiliza cookies de analítica, estatística, publicidade ou rastreio de terceiros. Apenas é utilizado armazenamento técnico local do navegador (localStorage) para memorizar a preferência de idioma (PT, EN ou DE) escolhida pelo visitante.',

      // Rodapé & Toast
      'footer.desc': 'Construção de habitações unifamiliares em Portugal.\nCarpintaria de cofragem na Alemanha.',
      'footer.legal': 'Dados Legais',
      'footer.contacts': 'Contactos & Legal',
      'footer.privacy': 'Política de Privacidade',
      'footer.complaints': 'Livro de Reclamações Eletrónico ↗',
      'footer.rights': 'Todos os direitos reservados.',
      'footer.credit': 'Desenvolvido por',
      'footer.top': 'Voltar ao início ↑',
      'toast.title': 'Mensagem Enviada',
      'toast.desc': 'Agradecemos o seu contacto. Responderemos com a maior brevidade.',
      'wa.float.quote': 'Pedir orçamento via WhatsApp',
      'wa.float.general': 'Contactar via WhatsApp',
      'wa.float.de': 'Contactar via WhatsApp sobre oportunidades na Alemanha',
      'mobile.bar.aria': 'Contacto rápido',
      'mobile.bar.call': 'Ligar',
      'comp.sliderAria': 'Comparar fotografias antes e depois da reabilitação'
    },

    en: {
      // Global Navigation
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.process': 'Process',
      'nav.specialties': 'Specialties',
      'nav.about': 'About Us',
      'nav.germany': 'Germany',
      'nav.cta': 'Request a quote',
      'de.nav.cta': 'Apply now',
      'common.phone': 'Phone',
      'common.wa.title': 'Talk to us on WhatsApp',
      'common.wa.sub': 'The most direct contact with our team.',

      // Hero Homepage
      'hero.kicker': '— Construction · Rehabilitation · Services', // REVER POR NATIVO
      'hero.title': 'To Build is to Transform.',
      'hero.lead': 'Projects executed with rigor, close follow-up and attention to every detail. From the first step to turning over the keys.',
      'hero.cta1': 'Request a quote',
      'hero.cta2': 'Explore portfolio',

      // Highlight Indicators
      'ind.1.title': '+ 5 years',
      'ind.1.desc': 'experience in the construction sector',
      'ind.2.title': 'International Presence',
      'ind.2.desc': 'Portugal and Germany',
      'ind.3.title': '+100',
      'ind.3.desc': 'completed interventions',

      // Positioning & Structure
      'pos.kicker': '— Positioning & Areas of Operation',
      'pos.title': 'Construction with rigor. Quality in every detail.',
      'pos.lead': 'Every project is embraced with an approach grounded in rigor, quality and close supervision of each work.',
      'pos.pt.tag': 'PORTUGAL',
      'pos.pt.title': 'Single-family home construction',
      'pos.pt.summary': 'We prioritize the construction of complete single-family homes, from start to finish, with close supervision at every stage of the project.',
      'pos.pt.listTitle': 'Other areas of intervention:',
      'pos.pt.i1': 'Rehabilitation and remodeling.',
      'pos.pt.i2': 'Structures and civil construction.',
      'pos.pt.i3': 'Facades and ETICS thermal systems.',
      'pos.pt.i4': 'Masonry and wall/floor coverings.',
      'pos.pt.i5': 'Finishes and complementary works.',
      'pos.pt.areasLink': 'View areas of intervention', // REVER POR NATIVO
      'pos.pt.cta': 'Request a quote in Portugal',

      'pos.de.tag': 'GERMANY',
      'pos.de.title': 'Formwork carpentry',
      'pos.de.summary': 'We carry out specialized activity in Germany through dedicated teams prepared to integrate construction projects of varying scales.',
      'pos.de.listTitle': 'Activity developed in Germany:',
      'pos.de.i1': 'Specialized teams in formwork carpentry.',
      'pos.de.i2': 'On-site execution of formwork operations.',
      'pos.de.i3': 'Services provided to construction companies and partners.',
      'pos.de.i4': 'Operational experience and seamless integration into site teams.',
      'pos.de.cta': 'View Germany operations & recruitment',

      // Projects & Portfolio
      'proj.kicker': '— Portfolio',
      'proj.title': 'Projects',
      'proj.lead': 'Clean, minimalist and architectural presentation of our interventions.',
      'proj.filterLabel': 'Category',
      'proj.filter.all': 'All categories',
      'proj.filter.const': 'Construction',
      'proj.filter.reab': 'Rehabilitation',
      'proj.filter.fach': 'Facades',
      'proj.filter.ext': 'Construction & Outdoor Spaces',
      'proj.more': 'View project →',
      'proj.moreWorks.text': 'And many other projects completed in Portugal.', // REVER POR NATIVO
      'proj.moreWorks.link': 'Talk to us to see more references.', // REVER POR NATIVO
      'p.unifamiliar': 'Single-Family House',
      'p1.title': 'Facade Rehabilitation',
      'p2.title': 'ETICS System Application',
      'p3.title': 'Full House Rehabilitation',
      'p4.title': 'Sanitary Facility Rehabilitation',
      'p5.title': 'Swimming Pool Construction & Exterior Paving',
      'p1.cardTitle': '— “Facade Rehabilitation”',
      'p2.cardTitle': '— “ETICS System Application”',
      'p3.cardTitle': '— “Full House Rehabilitation”',
      'p4.cardTitle': '— “Sanitary Facility Rehabilitation”',
      'p5.cardTitle': '— “Swimming Pool Construction & Exterior Paving”',
      'cat.reabilitacao': 'Rehabilitation',
      'cat.fachadas': 'Facades & Thermal Insulation',
      'cat.exteriores': 'Construction & Outdoor Spaces',

      // Before & After
      'comp.kicker': '— On-Site Transformation',
      'comp.title': 'Before and after',
      'comp.lead': 'Drag the slider to compare the precision and rehabilitation work carried out.',
      'comp.before': 'Before',
      'comp.after': 'After',
      'comp.hint': 'Slide to compare the transformation',

      // Work Process (5 Steps)
      'proc.kicker': '— Work Process',
      'proc.title': 'From initial contact to final result.',
      'proc.lead': 'Clear organization and rigorous supervision throughout every stage of the project.',
      'proc.1.title': 'Initial contact',
      'proc.1.desc': 'Understanding the client needs and gathering initial information about the project.',
      'proc.2.title': 'Project analysis',
      'proc.2.desc': 'Evaluating available documentation and defining the scope of works to be executed.',
      'proc.3.title': 'Planning',
      'proc.3.desc': 'Work preparation, resource definition and scheduling of execution phases.',
      'proc.4.title': 'Execution',
      'proc.4.desc': 'Carrying out construction works with strict attention to technical rigor and build quality.',
      'proc.5.title': 'Completion',
      'proc.5.desc': 'Finalizing the works and handing over the project in accordance with the contracted scope.',

      // Specialties & Services
      'spec.kicker': '— Specialties & Services',
      'spec.title': 'Areas of Intervention',
      'spec.lead': 'We prioritize complete single-family home construction, complemented by specialized technical areas.',
      'spec.main.tag': 'Core Activity · Portugal',
      'spec.main.title': 'Ground-up construction', // REVER POR NATIVO
      'spec.main.desc': 'Complete single-family home construction from start to finish, with close supervision and full coordination of all site phases.', // REVER POR NATIVO
      'spec.main.cta': 'Request a quote',
      'spec.secondary.title': 'We also execute', // REVER POR NATIVO
      'spec.sub1.title': 'Rehabilitation and remodeling',
      'spec.sub1.desc': 'Remodeling and restoration of residential buildings and single-family homes.',
      'spec.sub2.title': 'Structures and civil construction',
      'spec.sub2.desc': 'Reinforced concrete structural execution and general civil construction works.',
      'spec.sub3.title': 'Facades and thermal insulation',
      'spec.sub3.desc': 'ETICS systems, claddings and exterior protection and rehabilitation works.',
      'spec.sub4.title': 'Outdoor spaces',
      'spec.sub4.desc': 'Swimming pools, ceramic or natural stone paving and exterior landscaping.',
      'spec.sub5.title': 'Finishes and coverings',
      'spec.sub5.desc': 'Masonry, ceramic tiling, painting and complementary finishing works.',

      // Contacts & Opportunities (Portugal)
      'cont.kicker': '— Portugal — Contacts & Opportunities',
      'cont.title': 'Shall we build your next project?',
      'cont.lead': 'Get in touch with us to present your project, clarify questions or request a quote.',
      'cont.wa.cta': 'Request a quote ↗',
      'cont.form.heading': 'Prefer to send the details of your project?',
      'cont.form.sub': 'Fill in the form below with the key project information so we can review your request.',
      'cont.form.boxTitle': 'QUOTE REQUEST FORM',
      'form.name': 'Name',
      'form.reply': 'Phone / E-mail',
      'form.location': 'Project location',
      'form.type': 'Type of intervention',
      'form.submit': 'Send request',
      'cont.rec.title': 'Interested in working with us?',
      'cont.rec.desc': 'We are available to meet professionals interested in joining our teams in Portugal.',
      'cont.rec.btn': 'Send application via WhatsApp',

      // Project Detail View
      'pp.back': 'Back to projects',
      'pp.about': 'About the project',
      'pp.zoom': 'Enlarge',
      'pp.execution': 'Intervention / Execution',
      'pp.specs': 'Technical sheet',
      'pp.prev': '← Previous project',
      'pp.next': 'Next project →',

      // About Us Page (sobre.html)
      'about.kicker': '— About Us',
      'about.title': 'What stands behind every construction?',
      'about.lead': 'Technical rigor, on-site organization and teams prepared to deliver projects in Portugal and Germany.',
      'about.s1.title': 'Knowledge as a starting point.',
      'about.s1.p1': 'Founded in 2021, hands-on site experience is at the origin of MR Construções. From this direct contact comes an approach focused on understanding every job.',
      'about.s1.p2': 'The drive to build an independent structure gave rise to a company founded on clear principles: understanding each intervention, organizing resources and valuing execution quality.',
      'about.s2.title': 'Capacity to go further.',
      'about.s2.p1': 'From rehabilitation to ground-up construction, MR Construções has expanded its competencies and areas of intervention.',
      'about.s2.p2': 'Today, we bring together two distinct areas of operation, united by the same demand for organization, responsibility and quality of execution.',
      'about.s2.p3': 'Growth has translated into diversification and expansion into international markets, where we carry out specialized formwork carpentry works.',
      'about.s3.title': 'Experience is built as a team.',
      'about.s3.p1': 'Behind every intervention are seasoned industry professionals and knowledge developed over years of working together. Team continuity and experienced site leaders are a core part of how MR Construções operates.',
      'about.s3.p2': 'Portugal and Germany give us international reach with local precision. 50+ professionals. 10+ nationalities. One team.',
      'about.stat1': 'Founded in',
      'about.stat2': 'Professionals',
      'about.stat3': 'Nationalities',
      'about.stat4': 'One team',
      'about.closing.kicker': '— Continuous Evolution',
      'about.closing.sub': 'Construction is part of who we are. Evolution is too.',
      'about.closing.p1': 'We continue to develop skills, consolidate teams and take on new challenges. Because building is not only about the projects we complete, but also the capacity to evolve for what comes next.',
      'about.ongoing.title': 'Works in progress',
      'about.ongoing.sub': 'Interventions and active work fronts currently being executed by our teams.',
      'about.ongoing.status': 'In progress',
      'about.ongoing.c1.title': 'Single-Family Home Rehabilitation',
      'about.ongoing.c1.desc': 'Masonry works, exterior plastering, perimeter walls and technical finishes.',
      'about.ongoing.c2.title': 'House Execution & Exterior Surroundings',
      'about.ongoing.c2.desc': 'Facade works, window frames, ETICS system and granite cube exterior paving.',
      'about.ongoing.c3.loc': 'Germany · International Market',
      'about.ongoing.c3.title': 'Formwork Carpentry Work Fronts',
      'about.ongoing.c3.desc': 'Specialized teams integrated in the execution of reinforced concrete structures.',
      'about.cta.title': 'Shall we build your next project?', // REVER POR NATIVO
      'about.cta.desc': 'Contact us to present your project or request a quote.', // REVER POR NATIVO
      'about.cta.btn1': 'Request a quote', // REVER POR NATIVO
      'about.cta.btn2': 'Talk on WhatsApp', // REVER POR NATIVO

      // Germany Page (alemanha.html)
      'de.kicker': '— Germany · Formwork Carpentry',
      'de.title': 'We build across borders.',
      'de.lead': 'In Germany, MR Construções operates in the field of formwork carpentry through specialized teams integrated into construction projects of varying scales and technical demands.',
      'de.hero.cta': 'Join our teams',
      'de.p1': 'Specialized teams in formwork carpentry.',
      'de.p2': 'On-site execution of formwork works.',
      'de.p3': 'Services provided to companies and partners in the construction sector.',
      'de.p4': 'Operational experience and capacity to integrate into site teams.',
      'de.team.kicker': '— Technical Execution · Reinforced Concrete Structures',
      'de.team.title': 'Work is done as a team.',
      'de.team.p1': 'Executing formwork requires technical knowledge, coordination and adaptability across the different phases of a project. In this context, our teams carry out their daily work, contributing to the execution of reinforced concrete structures.',
      'de.b2b.kicker': '— For companies and partners', // REVER POR NATIVO
      'de.b2b.title': 'Need a formwork team?', // REVER POR NATIVO
      'de.b2b.desc': 'We provide formwork carpentry services to construction companies and partners in Germany. Talk to us about your project.', // REVER POR NATIVO
      'de.b2b.email': 'Send email', // REVER POR NATIVO
      'de.b2b.wa': 'Chat on WhatsApp', // REVER POR NATIVO
      'de.rec.kicker': '— Germany — Page & Recruitment',
      'de.rec.title': 'Your next challenge can start here.',
      'de.rec.desc': 'Do you have construction experience and an interest in working in Germany? Get to know MR Construções and contact us to learn more about opportunities to join our teams.',
      'de.wa.btn': 'Contact now ↗',
      'de.form.heading': 'Prefer to send your application?',
      'de.form.sub': 'Fill out the form with your details and professional experience. We will contact you after review.',
      'de.form.boxTitle': 'APPLICATION FORM',
      'de.form.phone': 'Phone / WhatsApp',
      'de.form.specialty': 'Specialty',
      'de.form.residence': 'Place of Residence',
      'de.form.exp.label': 'Years of experience', // REVER POR NATIVO
      'de.form.exp.placeholder': 'Years of experience', // REVER POR NATIVO
      'de.form.exp.lt1': 'Under 1 year', // REVER POR NATIVO
      'de.form.exp.1_3': '1–3 years', // REVER POR NATIVO
      'de.form.exp.3_5': '3–5 years', // REVER POR NATIVO
      'de.form.exp.5_10': '5–10 years', // REVER POR NATIVO
      'de.form.exp.10plus': '10+ years', // REVER POR NATIVO
      'de.form.avail.label': 'Availability to start', // REVER POR NATIVO
      'de.form.avail.placeholder': 'Availability to start', // REVER POR NATIVO
      'de.form.avail.immediate': 'Immediate', // REVER POR NATIVO
      'de.form.avail.1month': 'Within 1 month', // REVER POR NATIVO
      'de.form.avail.gt1month': 'More than 1 month', // REVER POR NATIVO
      'de.form.deExp.label': 'Have you worked in Germany before?', // REVER POR NATIVO
      'de.form.deExp.placeholder': 'Worked in Germany before? (optional)', // REVER POR NATIVO
      'de.form.deExp.no': 'No', // REVER POR NATIVO
      'de.form.deExp.yes': 'Yes', // REVER POR NATIVO
      'de.form.submit': 'Send application',
      'de.form.msg.success': 'Application sent successfully. We will contact you shortly.', // REVER POR NATIVO

      // Consent & Form Status
      'form.consent.prefix': 'I have read and accept the', // REVER POR NATIVO
      'form.consent.link': 'Privacy Policy', // REVER POR NATIVO
      'form.consent.suffix': '.', // REVER POR NATIVO
      'form.sending': 'Sending…', // REVER POR NATIVO
      'form.msg.validation': 'Please fill in all required fields.', // REVER POR NATIVO
      'form.msg.consent': 'Please accept the Privacy Policy before submitting.', // REVER POR NATIVO
      'form.msg.success': 'Request sent successfully. We will reply shortly.', // REVER POR NATIVO
      'form.msg.error': 'Could not send at the moment. Please use the WhatsApp button above or contact geral@marcoribeiroconstrucoes.pt.', // REVER POR NATIVO
      'form.msg.notConfigured': 'Formspree endpoint pending configuration in js/script.js. Please use WhatsApp or geral@marcoribeiroconstrucoes.pt.', // REVER POR NATIVO

      // Privacy Policy (privacidade.html)
      'priv.kicker': '— Data Protection · GDPR', // REVER POR NATIVO
      'priv.title': 'Privacy Policy', // REVER POR NATIVO
      'priv.draft': 'DRAFT — Document prepared for legal review prior to final publication.', // REVER POR NATIVO
      'priv.lead': 'This Privacy Policy explains how Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) collects and processes personal data submitted through this website, in accordance with the General Data Protection Regulation (GDPR).', // REVER POR NATIVO
      'priv.s1.title': '1. Data Controller', // REVER POR NATIVO
      'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Tax ID (NIF/NIPC) 516590022, IMPIC License No. 113987, headquartered at Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Privacy contact: geral@marcoribeiroconstrucoes.pt.', // REVER POR NATIVO
      'priv.s2.title': '2. Purposes of Processing', // REVER POR NATIVO
      'priv.s2.body': 'Personal data collected through website forms are used exclusively to: (a) analyze and respond to quote and business inquiries; (b) evaluate and follow up on applications to join our teams in Portugal or Germany.', // REVER POR NATIVO
      'priv.s3.title': '3. Legal Basis', // REVER POR NATIVO
      'priv.s3.body': 'Data processing is based on pre-contractual steps taken at the request of the data subject (Article 6(1)(b) GDPR) and on explicit consent given by checking the consent box prior to submission (Article 6(1)(a) GDPR).', // REVER POR NATIVO
      'priv.s4.title': '4. Personal Data Collected', // REVER POR NATIVO
      'priv.s4.body': 'The quote request form collects: name, phone number or email address, project location and type of intervention. The application form (Germany) collects: name, phone/WhatsApp, trade specialty, place of residence, years of experience, start availability and optional prior experience in Germany.', // REVER POR NATIVO
      'priv.s5.title': '5. Data Recipients', // REVER POR NATIVO
      'priv.s5.body': 'Data are processed internally by MR Construções estimating and human resources staff. For technical routing of form submissions, the website uses Formspree as a technical data processor. Personal data are never sold or shared with third parties for marketing.', // REVER POR NATIVO
      'priv.s6.title': '6. Retention Period', // REVER POR NATIVO
      'priv.s6.body': 'Quote inquiry data are kept for the period required to process the request or up to 24 months if no contract is concluded. Unsolicited job application data are retained for up to 12 months from receipt, unless consent is withdrawn earlier.', // REVER POR NATIVO
      'priv.s7.title': '7. Data Subject Rights', // REVER POR NATIVO
      'priv.s7.body': 'You may at any time exercise your rights of access, rectification, erasure, restriction, portability, objection and withdrawal of consent (without affecting the lawfulness of prior processing) by emailing geral@marcoribeiroconstrucoes.pt.', // REVER POR NATIVO
      'priv.s8.title': '8. Supervisory Authority', // REVER POR NATIVO
      'priv.s8.body': 'If you believe the processing of your data infringes the GDPR, you have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) at www.cnpd.pt.', // REVER POR NATIVO
      'priv.s9.title': '9. Cookies and Local Storage', // REVER POR NATIVO
      'priv.s9.body': 'This website does not use third-party analytics, advertising or tracking cookies. Only browser local storage (localStorage) is used technically to remember the visitor’s selected language (PT, EN or DE).', // REVER POR NATIVO

      // Footer & Toast
      'footer.desc': 'Single-family home construction in Portugal.\nFormwork carpentry in Germany.',
      'footer.legal': 'Legal Information',
      'footer.contacts': 'Contacts & Legal',
      'footer.privacy': 'Privacy Policy', // REVER POR NATIVO
      'footer.complaints': 'Electronic Complaints Book ↗',
      'footer.rights': 'All rights reserved.',
      'footer.credit': 'Developed by',
      'footer.top': 'Back to top ↑',
      'toast.title': 'Message Sent',
      'toast.desc': 'Thank you for contacting us. We will reply shortly.',
      'wa.float.quote': 'Request a quote via WhatsApp', // REVER POR NATIVO
      'wa.float.general': 'Contact us via WhatsApp', // REVER POR NATIVO
      'wa.float.de': 'Contact via WhatsApp about opportunities in Germany', // REVER POR NATIVO
      'mobile.bar.aria': 'Quick contact', // REVER POR NATIVO
      'mobile.bar.call': 'Call', // REVER POR NATIVO
      'comp.sliderAria': 'Compare before and after rehabilitation photographs' // REVER POR NATIVO
    },

    de: {
      // Globale Navigation
      'nav.home': 'Startseite',
      'nav.projects': 'Projekte',
      'nav.process': 'Ablauf',
      'nav.specialties': 'Leistungen',
      'nav.about': 'Über Uns',
      'nav.germany': 'Deutschland',
      'nav.cta': 'Angebot anfordern',
      'de.nav.cta': 'Jetzt bewerben',
      'common.phone': 'Telefon',
      'common.wa.title': 'Kontaktieren Sie uns über WhatsApp',
      'common.wa.sub': 'Der direkteste Kontakt zu unserem Team.',

      // Hero Homepage
      'hero.kicker': '— Hochbau · Sanierung · Bauleistungen', // REVER POR NATIVO
      'hero.title': 'Bauen heißt Verwandeln.',
      'hero.lead': 'Bauprojekte ausgeführt mit Präzision, Nähe und Liebe zum Detail. Vom ersten Schritt bis zur Schlüsselübergabe.',
      'hero.cta1': 'Angebot anfordern',
      'hero.cta2': 'Portfolio entdecken',

      // Kennzahlen
      'ind.1.title': '+ 5 Jahre',
      'ind.1.desc': 'Erfahrung im Baugewerbe',
      'ind.2.title': 'Internationale Präsenz',
      'ind.2.desc': 'Portugal und Deutschland',
      'ind.3.title': '+100',
      'ind.3.desc': 'abgeschlossene Bauprojekte',

      // Positionierung & Struktur
      'pos.kicker': '— Positionierung & Tätigkeitsbereiche',
      'pos.title': 'Bauen mit Präzision. Qualität in jedem Detail.',
      'pos.lead': 'Jedes Projekt wird mit einem Ansatz umgesetzt, der auf Sorgfalt, Qualität und enger Begleitung jeder Bauphase beruht.',
      'pos.pt.tag': 'PORTUGAL',
      'pos.pt.title': 'Bau von Einfamilienhäusern',
      'pos.pt.summary': 'Schwerpunkt auf dem schlüsselfertigen Neubau kompletter Einfamilienhäuser von Anfang bis Ende, mit enger Begleitung in allen Bauphasen.',
      'pos.pt.listTitle': 'Weitere Leistungsbereiche:',
      'pos.pt.i1': 'Sanierung und Umbau.',
      'pos.pt.i2': 'Rohbau und Hochbau.',
      'pos.pt.i3': 'Fassaden und WDVS-Systeme (ETICS).',
      'pos.pt.i4': 'Mauerwerk und Belagsarbeiten.',
      'pos.pt.i5': 'Innenausbau und ergänzende Bauarbeiten.',
      'pos.pt.areasLink': 'Tätigkeitsbereiche ansehen', // REVER POR NATIVO
      'pos.pt.cta': 'Angebot in Portugal anfordern',

      'pos.de.tag': 'DEUTSCHLAND',
      'pos.de.title': 'Schalungsbau',
      'pos.de.summary': 'Spezialisierte Tätigkeit in Deutschland durch eigene Fachteams, die in Bauprojekte unterschiedlicher Größenordnungen integriert werden.',
      'pos.de.listTitle': 'Tätigkeit in Deutschland:',
      'pos.de.i1': 'Spezialisierte Fachteams für Schalungsbau.',
      'pos.de.i2': 'Ausführung von Schalungsarbeiten auf der Baustelle.',
      'pos.de.i3': 'Dienstleistungen für Bauunternehmen und Partner der Baubranche.',
      'pos.de.i4': 'Operative Erfahrung und nahtlose Integration in Baustellenteams.',
      'pos.de.cta': 'Deutschland-Bereich & Bewerbung ansehen',

      // Projekte & Portfolio
      'proj.kicker': '— Portfolio',
      'proj.title': 'Projekte',
      'proj.lead': 'Klare, minimalistische und architektonische Präsentation unserer Bauprojekte.',
      'proj.filterLabel': 'Kategorie',
      'proj.filter.all': 'Alle Kategorien',
      'proj.filter.const': 'Neubau',
      'proj.filter.reab': 'Sanierung',
      'proj.filter.fach': 'Fassaden',
      'proj.filter.ext': 'Bau & Außenanlagen',
      'proj.more': 'Projekt ansehen →',
      'proj.moreWorks.text': 'Und viele weitere abgeschlossene Bauprojekte in Portugal.', // REVER POR NATIVO
      'proj.moreWorks.link': 'Sprechen Sie mit uns für weitere Referenzen.', // REVER POR NATIVO
      'p.unifamiliar': 'Einfamilienhaus',
      'p1.title': 'Fassadensanierung',
      'p2.title': 'WDVS-Fassadendämmung (ETICS)',
      'p3.title': 'Komplettsanierung eines Wohnhauses',
      'p4.title': 'Sanierung einer Sanitäranlage',
      'p5.title': 'Poolbau und Außenpflasterung',
      'p1.cardTitle': '— „Fassadensanierung“',
      'p2.cardTitle': '— „WDVS-Fassadendämmung (ETICS)“',
      'p3.cardTitle': '— „Komplettsanierung eines Wohnhauses“',
      'p4.cardTitle': '— „Sanierung einer Sanitäranlage“',
      'p5.cardTitle': '— „Poolbau und Außenpflasterung“',
      'cat.reabilitacao': 'Sanierung',
      'cat.fachadas': 'Fassaden und Wärmedämmung',
      'cat.exteriores': 'Bau & Außenanlagen',

      // Vorher & Nachher
      'comp.kicker': '— Verwandlung auf der Baustelle',
      'comp.title': 'Vorher und nachher',
      'comp.lead': 'Bewegen Sie den Regler, um die ausgeführte Sanierung im Detail zu vergleichen.',
      'comp.before': 'Vorher',
      'comp.after': 'Nachher',
      'comp.hint': 'Ziehen, um die Verwandlung zu vergleichen',

      // Arbeitsablauf (5 Schritte)
      'proc.kicker': '— Arbeitsablauf',
      'proc.title': 'Vom Erstkontakt bis zum Endergebnis.',
      'proc.lead': 'Klare Organisation und sorgfältige Begleitung in allen Phasen des Bauprojekts.',
      'proc.1.title': 'Erstkontakt',
      'proc.1.desc': 'Verständnis der Kundenbedürfnisse und Erfassung der ersten Projektinformationen.',
      'proc.2.title': 'Projektanalyse',
      'proc.2.desc': 'Bewertung der vorhandenen Unterlagen und Definition der auszuführenden Arbeiten.',
      'proc.3.title': 'Planung',
      'proc.3.desc': 'Arbeitsvorbereitung, Ressourcenplanung und Organisation der Ausführungsphasen.',
      'proc.4.title': 'Ausführung',
      'proc.4.desc': 'Durchführung der Bauarbeiten mit höchster technischer Sorgfalt und Ausführungsqualität.',
      'proc.5.title': 'Abschluss',
      'proc.5.desc': 'Fertigstellung der Arbeiten und Übergabe des Bauwerks gemäß dem vereinbarten Leistungsumfang.',

      // Leistungen & Fachgebiete
      'spec.kicker': '— Leistungen & Fachgebiete',
      'spec.title': 'Einsatzbereiche',
      'spec.lead': 'Unser Schwerpunkt liegt auf dem Bau kompletter Einfamilienhäuser, ergänzt durch spezialisierte Fachbereiche.',
      'spec.main.tag': 'Haupttätigkeit · Portugal',
      'spec.main.title': 'Schlüsselfertiger Neubau', // REVER POR NATIVO
      'spec.main.desc': 'Kompletter Neubau von Einfamilienhäusern von Anfang bis Ende mit enger Begleitung und integraler Koordination aller Bauphasen.', // REVER POR NATIVO
      'spec.main.cta': 'Angebot anfordern',
      'spec.secondary.title': 'Außerdem führen wir aus', // REVER POR NATIVO
      'spec.sub1.title': 'Sanierung und Umbau',
      'spec.sub1.desc': 'Umbau und Instandsetzung von Wohngebäuden und Einfamilienhäusern.',
      'spec.sub2.title': 'Rohbau und Hochbau',
      'spec.sub2.desc': 'Stahlbetonbau und allgemeine Hochbauarbeiten.',
      'spec.sub3.title': 'Fassaden und Wärmedämmung',
      'spec.sub3.desc': 'WDVS-Systeme (ETICS), Fassadenverkleidungen sowie Schutz- und Sanierungsarbeiten.',
      'spec.sub4.title': 'Außenanlagen',
      'spec.sub4.desc': 'Poolbau, Keramik- oder Natursteinpflasterung und Gestaltung des Außenbereichs.',
      'spec.sub5.title': 'Innenausbau und Beläge',
      'spec.sub5.desc': 'Mauerwerk, Fliesenarbeiten, Malerarbeiten und ergänzende Ausbauarbeiten.',

      // Kontakt & Karriere (Portugal)
      'cont.kicker': '— Portugal — Kontakt & Möglichkeiten',
      'cont.title': 'Bauen wir gemeinsam Ihr nächstes Projekt?',
      'cont.lead': 'Kontaktieren Sie uns, um Ihr Bauvorhaben vorzustellen, Fragen zu klären oder ein Angebot anzufordern.',
      'cont.wa.cta': 'Angebot anfordern ↗',
      'cont.form.heading': 'Möchten Sie uns lieber die Details Ihres Projekts senden?',
      'cont.form.sub': 'Füllen Sie das untenstehende Formular mit den wichtigsten Projektinformationen aus, damit wir Ihre Anfrage prüfen können.',
      'cont.form.boxTitle': 'ANGEBOTSANFRAGE-FORMULAR',
      'form.name': 'Name',
      'form.reply': 'Telefon / E-Mail',
      'form.location': 'Standort des Bauvorhabens',
      'form.type': 'Art der Maßnahme',
      'form.submit': 'Anfrage senden',
      'cont.rec.title': 'Interessiert an einer Zusammenarbeit?',
      'cont.rec.desc': 'Wir freuen uns darauf, Fachkräfte kennenzulernen, die unsere Teams in Portugal verstärken möchten.',
      'cont.rec.btn': 'Bewerbung per WhatsApp senden',

      // Projektdetailansicht
      'pp.back': 'Zurück zu den Projekten',
      'pp.about': 'Über das Bauvorhaben',
      'pp.zoom': 'Vergrößern',
      'pp.execution': 'Maßnahme / Ausführung',
      'pp.specs': 'Technische Daten',
      'pp.prev': '← Vorheriges Projekt',
      'pp.next': 'Nächstes Projekt →',

      // Über Uns (sobre.html)
      'about.kicker': '— Über Uns',
      'about.title': 'Was steckt hinter jedem Bauwerk?',
      'about.lead': 'Technische Präzision, strukturierte Baustellenorganisation und eingespielte Teams für Projekte in Portugal und Deutschland.',
      'about.s1.title': 'Fachwissen als Ausgangspunkt.',
      'about.s1.p1': 'Gegründet im Jahr 2021, bildet die direkt auf der Baustelle erworbene Erfahrung das Fundament von MR Construções. Aus diesem direkten Kontakt entsteht unser Anspruch, jedes Bauvorhaben im Detail zu verstehen.',
      'about.s1.p2': 'Der Wunsch, eine eigene Struktur aufzubauen, führte zu einem Unternehmen mit klaren Grundsätzen: jede Maßnahme verstehen, Ressourcen gezielt organisieren und höchste Ausführungsqualität sichern.',
      'about.s2.title': 'Die Fähigkeit, weiter zu gehen.',
      'about.s2.p1': 'Von der Sanierung bis zum Neubau hat MR Construções seine Kompetenzen und Tätigkeitsbereiche kontinuierlich erweitert.',
      'about.s2.p2': 'Heute vereinen wir zwei unterschiedliche Geschäftsbereiche, verbunden durch denselben Anspruch an Organisation, Verantwortung und Qualität.',
      'about.s2.p3': 'Das Wachstum führte zur Diversifizierung und Expansion in internationale Märkte, in denen wir spezialisierte Schalungsarbeiten ausführen.',
      'about.s3.title': 'Erfahrung entsteht im Team.',
      'about.s3.p1': 'Hinter jedem Projekt stehen erfahrene Fachkräfte und ein über Jahre gewachsenes Zusammenspiel. Die Kontinuität unserer Teams und die Erfahrung der Bauleiter sind ein wesentlicher Bestandteil der Arbeitsweise von MR Construções.',
      'about.s3.p2': 'Portugal und Deutschland ermöglichen uns internationale Reichweite mit lokaler Präzision. 50+ Fachkräfte. 10+ Nationalitäten. Ein Team.',
      'about.stat1': 'Gründungsjahr',
      'about.stat2': 'Fachkräfte',
      'about.stat3': 'Nationalitäten',
      'about.stat4': 'Ein Team',
      'about.closing.kicker': '— Kontinuierliche Weiterentwicklung',
      'about.closing.sub': 'Das Bauen ist Teil dessen, was wir sind. Die Weiterentwicklung auch.',
      'about.closing.p1': 'Wir entwickeln unsere Kompetenzen stetig weiter, festigen unsere Teams und nehmen neue Herausforderungen an. Denn Bauen beschränkt sich nicht auf abgeschlossene Werke, sondern umfasst auch die Fähigkeit, sich für das Kommende weiterzuentwickeln.',
      'about.ongoing.title': 'Laufende Bauprojekte',
      'about.ongoing.sub': 'Bauvorhaben und Arbeitsfronten, die derzeit von unseren Teams ausgeführt werden.',
      'about.ongoing.status': 'In Ausführung',
      'about.ongoing.c1.title': 'Sanierung eines Einfamilienhauses',
      'about.ongoing.c1.desc': 'Mauerwerksarbeiten, Außenputz, Einfassungsmauern und technischer Ausbau.',
      'about.ongoing.c2.title': 'Neubau & Gestaltung der Außenanlagen',
      'about.ongoing.c2.desc': 'Fassadenarbeiten, Fensterbau, WDVS-Dämmung und Granitpflasterung im Außenbereich.',
      'about.ongoing.c3.loc': 'Deutschland · Internationaler Markt',
      'about.ongoing.c3.title': 'Baustellen im Bereich Schalungsbau',
      'about.ongoing.c3.desc': 'Spezialisierte Teams im Einsatz bei der Ausführung von Stahlbetonkonstruktionen.',
      'about.cta.title': 'Bauen wir gemeinsam Ihr nächstes Projekt?', // REVER POR NATIVO
      'about.cta.desc': 'Kontaktieren Sie uns, um Ihr Bauvorhaben vorzustellen oder ein Angebot anzufordern.', // REVER POR NATIVO
      'about.cta.btn1': 'Angebot anfordern', // REVER POR NATIVO
      'about.cta.btn2': 'Über WhatsApp sprechen', // REVER POR NATIVO

      // Deutschland-Seite (alemanha.html)
      'de.kicker': '— Deutschland · Schalungsbau',
      'de.title': 'Wir bauen über Grenzen hinweg.',
      'de.lead': 'In Deutschland ist MR Construções im Bereich des Schalungsbaus tätig – mit spezialisierten Teams, die in Bauprojekte unterschiedlicher Größe und technischer Anforderungen integriert sind.',
      'de.hero.cta': 'Teil unseres Teams werden',
      'de.p1': 'Spezialisierte Teams im Bereich Schalungsbau.',
      'de.p2': 'Ausführung von Schalungsarbeiten direkt auf der Baustelle.',
      'de.p3': 'Dienstleistungen für Unternehmen und Partner der Baubranche.',
      'de.p4': 'Operative Erfahrung und nahtlose Integration in bestehende Baustellenteams.',
      'de.team.kicker': '— Technische Ausführung · Stahlbetonbau',
      'de.team.title': 'Gute Arbeit entsteht im Team.',
      'de.team.p1': 'Die Ausführung von Schalungsarbeiten erfordert technisches Fachwissen, Koordination und Anpassungsfähigkeit an die verschiedenen Phasen eines Bauprojekts. In diesem Umfeld leisten unsere Teams täglich ihren Beitrag zur Errichtung von Stahlbetonbauwerken.',
      'de.b2b.kicker': '— Für Unternehmen und Partner', // REVER POR NATIVO
      'de.b2b.title': 'Benötigen Sie ein Schalungsteam?', // REVER POR NATIVO
      'de.b2b.desc': 'Wir erbringen Leistungen im Bereich Schalungsbau für Bauunternehmen und Partner in Deutschland. Sprechen Sie mit uns über Ihr Projekt.', // REVER POR NATIVO
      'de.b2b.email': 'E-Mail senden', // REVER POR NATIVO
      'de.b2b.wa': 'Über WhatsApp schreiben', // REVER POR NATIVO
      'de.rec.kicker': '— Deutschland — Seite & Karriere',
      'de.rec.title': 'Ihre nächste Herausforderung kann hier beginnen.',
      'de.rec.desc': 'Haben Sie Erfahrung im Baugewerbe und Interesse an einer Tätigkeit in Deutschland? Lernen Sie MR Construções kennen und kontaktieren Sie uns, um mehr über Ihre Einstiegsmöglichkeiten zu erfahren.',
      'de.wa.btn': 'Jetzt kontaktieren ↗',
      'de.form.heading': 'Möchten Sie lieber Ihre Bewerbung senden?',
      'de.form.sub': 'Füllen Sie das Formular mit Ihren Daten und Ihrer Berufserfahrung aus. Wir melden uns nach Prüfung Ihrer Angaben.',
      'de.form.boxTitle': 'BEWERBUNGSFORMULAR',
      'de.form.phone': 'Telefon / WhatsApp',
      'de.form.specialty': 'Fachgebiet / Beruf',
      'de.form.residence': 'Wohnort',
      'de.form.exp.label': 'Jahre Berufserfahrung', // REVER POR NATIVO
      'de.form.exp.placeholder': 'Jahre Berufserfahrung', // REVER POR NATIVO
      'de.form.exp.lt1': 'Unter 1 Jahr', // REVER POR NATIVO
      'de.form.exp.1_3': '1–3 Jahre', // REVER POR NATIVO
      'de.form.exp.3_5': '3–5 Jahre', // REVER POR NATIVO
      'de.form.exp.5_10': '5–10 Jahre', // REVER POR NATIVO
      'de.form.exp.10plus': '10+ Jahre', // REVER POR NATIVO
      'de.form.avail.label': 'Verfügbarkeit ab', // REVER POR NATIVO
      'de.form.avail.placeholder': 'Verfügbarkeit ab', // REVER POR NATIVO
      'de.form.avail.immediate': 'Sofort', // REVER POR NATIVO
      'de.form.avail.1month': 'Innerhalb 1 Monats', // REVER POR NATIVO
      'de.form.avail.gt1month': 'Mehr als 1 Monat', // REVER POR NATIVO
      'de.form.deExp.label': 'Haben Sie bereits in Deutschland gearbeitet?', // REVER POR NATIVO
      'de.form.deExp.placeholder': 'Bereits in Deutschland gearbeitet? (optional)', // REVER POR NATIVO
      'de.form.deExp.no': 'Nein', // REVER POR NATIVO
      'de.form.deExp.yes': 'Ja', // REVER POR NATIVO
      'de.form.submit': 'Bewerbung senden',
      'de.form.msg.success': 'Bewerbung erfolgreich gesendet. Wir melden uns in Kürze.', // REVER POR NATIVO

      // Einwilligung & Formularstatus
      'form.consent.prefix': 'Ich habe die', // REVER POR NATIVO
      'form.consent.link': 'Datenschutzerklärung', // REVER POR NATIVO
      'form.consent.suffix': ' gelesen und akzeptiere sie.', // REVER POR NATIVO
      'form.sending': 'Wird gesendet…', // REVER POR NATIVO
      'form.msg.validation': 'Bitte füllen Sie alle Pflichtfelder aus.', // REVER POR NATIVO
      'form.msg.consent': 'Bitte akzeptieren Sie die Datenschutzerklärung vor dem Absenden.', // REVER POR NATIVO
      'form.msg.success': 'Anfrage erfolgreich gesendet. Wir melden uns schnellstmöglich.', // REVER POR NATIVO
      'form.msg.error': 'Derzeit konnte Ihre Nachricht nicht gesendet werden. Nutzen Sie bitte WhatsApp oben oder schreiben Sie an geral@marcoribeiroconstrucoes.pt.', // REVER POR NATIVO
      'form.msg.notConfigured': 'Formspree-Endpunkt in js/script.js noch nicht konfiguriert. Nutzen Sie bitte WhatsApp oder geral@marcoribeiroconstrucoes.pt.', // REVER POR NATIVO

      // Datenschutzerklärung (privacidade.html)
      'priv.kicker': '— Datenschutz · DSGVO', // REVER POR NATIVO
      'priv.title': 'Datenschutzerklärung', // REVER POR NATIVO
      'priv.draft': 'ENTWURF — Dokument zur rechtlichen Prüfung vor der endgültigen Veröffentlichung.', // REVER POR NATIVO
      'priv.lead': 'Diese Datenschutzerklärung erläutert, wie die Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) personenbezogene Daten über diese Website gemäß der Datenschutz-Grundverordnung (DSGVO) erhebt und verarbeitet.', // REVER POR NATIVO
      'priv.s1.title': '1. Verantwortlicher', // REVER POR NATIVO
      'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Steuernummer (NIF/NIPC) 516590022, IMPIC-Zulassung Nr. 113987, mit Sitz in der Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Kontakt für Datenschutzfragen: geral@marcoribeiroconstrucoes.pt.', // REVER POR NATIVO
      'priv.s2.title': '2. Zwecke der Verarbeitung', // REVER POR NATIVO
      'priv.s2.body': 'Die über die Formulare dieser Website erhobenen personenbezogenen Daten dienen ausschließlich: (a) der Bearbeitung und Beantwortung von Angebots- und Geschäftsanfragen; (b) der Prüfung und Bearbeitung von Bewerbungen für unsere Teams in Portugal oder Deutschland.', // REVER POR NATIVO
      'priv.s3.title': '3. Rechtsgrundlage', // REVER POR NATIVO
      'priv.s3.body': 'Die Datenverarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person (Art. 6 Abs. 1 lit. b DSGVO) sowie auf Grundlage Ihrer ausdrücklichen Einwilligung durch Aktivierung des Kontrollkästchens (Art. 6 Abs. 1 lit. a DSGVO).', // REVER POR NATIVO
      'priv.s4.title': '4. Erhobene personenbezogene Daten', // REVER POR NATIVO
      'priv.s4.body': 'Im Angebotsformular werden erhoben: Name, Telefonnummer oder E-Mail-Adresse, Standort des Bauvorhabens und Art der Maßnahme. Im Bewerbungsformular (Deutschland) werden erhoben: Name, Telefon/WhatsApp, Fachgebiet, Wohnort, Jahre Berufserfahrung, Verfügbarkeit sowie optional frühere Berufserfahrung in Deutschland.', // REVER POR NATIVO
      'priv.s5.title': '5. Empfänger der Daten', // REVER POR NATIVO
      'priv.s5.body': 'Die Daten werden intern von den zuständigen Mitarbeitern für Kalkulation und Personalwesen bei MR Construções verarbeitet. Für die technische Übermittlung der Formularnachrichten nutzen wir den Dienst Formspree als Auftragsverarbeiter. Eine Weitergabe oder ein Verkauf an Dritte zu Werbezwecken findet nicht statt.', // REVER POR NATIVO
      'priv.s6.title': '6. Speicherdauer', // REVER POR NATIVO
      'priv.s6.body': 'Daten zu Angebotsanfragen werden für den zur Bearbeitung erforderlichen Zeitraum bzw. bis zu 24 Monate aufbewahrt, sofern kein Vertrag zustande kommt. Bewerbungsdaten werden höchstens 12 Monate nach Eingang gespeichert, sofern die Einwilligung nicht zuvor widerrufen wird.', // REVER POR NATIVO
      'priv.s7.title': '7. Rechte der betroffenen Personen', // REVER POR NATIVO
      'priv.s7.body': 'Sie können jederzeit Ihre Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Widerruf der Einwilligung (ohne die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung zu berühren) per E-Mail an geral@marcoribeiroconstrucoes.pt ausüben.', // REVER POR NATIVO
      'priv.s8.title': '8. Aufsichtsbehörde', // REVER POR NATIVO
      'priv.s8.body': 'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt, haben Sie das Recht auf Beschwerde bei der portugiesischen Datenschutzbehörde (CNPD) unter www.cnpd.pt.', // REVER POR NATIVO
      'priv.s9.title': '9. Cookies und lokale Speicherung', // REVER POR NATIVO
      'priv.s9.body': 'Diese Website verwendet keine Analyse-, Statistik-, Werbe- oder Tracking-Cookies von Drittanbietern. Es wird lediglich technisch der lokale Browser-Speicher (localStorage) genutzt, um Ihre Sprachauswahl (PT, EN oder DE) zu speichern.', // REVER POR NATIVO

      // Fußzeile & Toast
      'footer.desc': 'Bau von Einfamilienhäusern in Portugal.\nSchalungsbau in Deutschland.',
      'footer.legal': 'Rechtliche Angaben',
      'footer.contacts': 'Kontakt & Rechtliches',
      'footer.privacy': 'Datenschutzerklärung', // REVER POR NATIVO
      'footer.complaints': 'Elektronisches Beschwerdebuch ↗',
      'footer.rights': 'Alle Rechte vorbehalten.',
      'footer.credit': 'Entwickelt von',
      'footer.top': 'Nach oben ↑',
      'toast.title': 'Nachricht gesendet',
      'toast.desc': 'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns in Kürze.',
      'wa.float.quote': 'Angebot über WhatsApp anfragen', // REVER POR NATIVO
      'wa.float.general': 'Über WhatsApp kontaktieren', // REVER POR NATIVO
      'wa.float.de': 'Über WhatsApp zu Stellenangeboten in Deutschland kontaktieren', // REVER POR NATIVO
      'mobile.bar.aria': 'Schnellkontakt', // REVER POR NATIVO
      'mobile.bar.call': 'Anrufen', // REVER POR NATIVO
      'comp.sliderAria': 'Vorher- und Nachher-Fotos der Sanierung vergleichen' // REVER POR NATIVO
    }
  };

  function applyLanguage(lang, isUserSwitch) {
    const validLang = TRANSLATIONS[lang] ? lang : 'pt';
    const dict = TRANSLATIONS[validLang];
    const waDict = WA_MESSAGES[validLang] || WA_MESSAGES.pt;

    window.mrCurrentLang = validLang;
    try {
      localStorage.setItem('mr_lang', validLang);
    } catch (_) {
      // Ignora restrições de armazenamento privado
    }

    document.documentElement.setAttribute('lang', validLang === 'pt' ? 'pt-PT' : validLang);

    // 1. Atualiza elementos de texto com [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        const val = dict[key];

        if (el.classList.contains('typewriter-target')) {
          el.setAttribute('data-tw-full', val);
          // Se o utilizador trocou de idioma manualmente ou se a animação já terminou, mostra o texto traduzido
          if (isUserSwitch || el.dataset.twDone === 'true') {
            el.textContent = val;
            el.dataset.twDone = 'true';
            el.classList.remove('tw-pending', 'is-typing');
          } else if (!el.classList.contains('tw-pending')) {
            el.textContent = val;
          }
          return;
        }

        if (val.includes('\n')) {
          el.innerHTML = val.split('\n').map((part) => part.replace(/</g, '&lt;')).join('<br>');
        } else {
          el.textContent = val;
        }
      }
    });

    // 2. Atualiza placeholders de inputs com [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // 2b. Atualiza atributos aria-label traduzidos com [data-i18n-aria]
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // 3. Atualiza mensagens pré-prontas de WhatsApp e assuntos de e-mail consoante o idioma
    document.querySelectorAll('[data-wa-topic]').forEach((link) => {
      const topic = link.getAttribute('data-wa-topic');
      if (topic && waDict[topic]) {
        link.href = `https://wa.me/351915680947?text=${encodeURIComponent(waDict[topic])}`;
      }
    });

    const mailDict = MAIL_SUBJECTS[validLang] || MAIL_SUBJECTS.pt;
    document.querySelectorAll('[data-mail-topic]').forEach((link) => {
      const topic = link.getAttribute('data-mail-topic');
      if (topic && mailDict[topic]) {
        link.href = `mailto:geral@marcoribeiroconstrucoes.pt?subject=${encodeURIComponent(mailDict[topic])}`;
      }
    });

    // 4. Atualiza estado ativo dos botões PT / EN / DE
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isMatch = btn.getAttribute('data-lang') === validLang;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', String(isMatch));
    });

    window.dispatchEvent(new CustomEvent('mr:langchange', { detail: { lang: validLang } }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    let savedLang = 'pt';
    try {
      const paramLang = new URLSearchParams(window.location.search).get('lang');
      if (paramLang && TRANSLATIONS[paramLang]) {
        savedLang = paramLang;
      } else {
        savedLang = localStorage.getItem('mr_lang') || 'pt';
      }
    } catch (_) {
      savedLang = 'pt';
    }

    applyLanguage(savedLang, false);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang) {
          applyLanguage(targetLang, true);
        }
      });
    });
  });

  window.mrTranslations = TRANSLATIONS;
  window.mrSetLanguage = (lang) => applyLanguage(lang, true);
})();
