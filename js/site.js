/**
 * MR CONSTRUÇÕES — Script unificado (js/site.js)
 * Sem dependências: i18n PT/EN/DE (4 páginas), navegação, comparador antes/depois,
 * carrossel interativo de projetos (auto + dedo + rato + trackpad), lightbox,
 * mapa interativo da Alemanha e formulários (Orçamento + Emprego).
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     CONFIGURAÇÃO — editar aqui
     ------------------------------------------------------------------ */
  // Cole os IDs dos formulários criados em https://formspree.io (ex.: https://formspree.io/f/abcdwxyz)
  var FORM_ENDPOINT_ORCAMENTO = 'https://formspree.io/f/SEU_ID_AQUI';
  var FORM_ENDPOINT_CANDIDATURA = 'https://formspree.io/f/SEU_ID_AQUI';
  var CONTACT_EMAIL = 'geral@marcoribeiroconstrucoes.pt';
  var WHATSAPP = '351915680947';

  /* ------------------------------------------------------------------
     TRADUÇÕES (EN e DE: REVER POR NATIVO)
     ------------------------------------------------------------------ */
  var T = {
    pt: {
      'meta.home.title': 'MR Construções | Construção e Reabilitação em Portugal · Cofragem na Alemanha',
      'meta.home.desc': 'MR Construções — construção de habitações unifamiliares e reabilitação em Portugal; carpintaria de cofragem na Alemanha. Construir com rigor. Criar com propósito.',
      'meta.germany.title': 'Alemanha | Carpintaria de Cofragem e Estruturas · MR Construções',
      'meta.germany.desc': 'Equipas especializadas em carpintaria de cofragem e estruturas em betão armado na Alemanha: Dortmund, Munique, Berlim, Hamburgo, Brémen e Düsseldorf.',
      'meta.jobs.title': 'Canal de Emprego | Oportunidades em Portugal e na Alemanha · MR Construções',
      'meta.jobs.desc': 'Canal de emprego da MR Construções. Candidate-se para integrar as nossas equipas de construção em Portugal ou de carpintaria de cofragem na Alemanha.',
      'meta.privacy.title': 'Política de Privacidade | MR Construções',
      'meta.privacy.desc': 'Política de Privacidade e tratamento de dados pessoais da MR Construções — Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Empresa', 'n.servicos': 'Serviços', 'n.projetos': 'Projetos', 'n.alemanha': 'Alemanha', 'n.emprego': 'Emprego', 'n.orcamento': 'Orçamento',
      'burger': 'Abrir menu', 'burger.x': 'Fechar menu', 'menu.aria': 'Navegação principal',
      'h.tag': 'Construir com rigor. Criar com propósito.', 'h.scroll': 'Scroll',
      'e.title': 'Construímos mais do que estruturas.', 'e.sub': 'Solidez construtiva e acompanhamento próximo, do primeiro passo à entrega.',
      'e.body': 'Obras executadas com rigor, proximidade e atenção a cada detalhe. Do primeiro passo à entrega das chaves — em Portugal e na Alemanha.',
      'e.id1': 'Desde', 'e.id2': 'Atuação', 'e.id2v': 'Portugal · Alemanha', 'e.id3': 'Alvará IMPIC', 'e.id4': 'Coordenadas',
      'e.de': 'Conhecer atuação na Alemanha',
      'ba.before': 'Antes', 'ba.after': 'Depois', 'ba.aria': 'Comparar antes e depois', 'ba.cap': 'Reabilitação de Moradia · V. N. Famalicão', 'ba.drag': 'Arrastar para comparar',
      'ph.arch': '[Fotografia arquitetónica]', 'ph.detail': '[Detalhe de obra]', 'ph.site': '[Obra em curso]',
      's.title': 'O que fazemos.', 's.sub': 'Da construção de raiz à reabilitação integral, com rigor em cada fase da obra.',
      's1.n': 'Construção de raiz', 's1.d': 'Moradias unifamiliares completas, do primeiro passo à entrega das chaves.',
      's2.n': 'Reabilitação e remodelação', 's2.d': 'Recuperação e renovação de edifícios e habitações existentes.',
      's3.n': 'Estruturas e construção civil', 's3.d': 'Execução estrutural em betão armado e trabalhos gerais de construção civil.',
      's4.n': 'Fachadas e isolamento térmico', 's4.d': 'Sistemas ETICS, revestimentos e proteção da envolvente exterior.',
      's5.n': 'Acabamentos e revestimentos', 's5.d': 'Alvenarias, revestimentos cerâmicos, pinturas e trabalhos complementares.',
      's6.n': 'Espaços exteriores', 's6.d': 'Piscinas, pavimentos cerâmicos ou em pedra e arranjos exteriores.',
      'p.title': 'Trabalho que permanece.', 'p.sub': 'Uma seleção de obras executadas em Portugal e na Alemanha.',
      'p1.n': 'Reabilitação de Fachadas', 'p2.n': 'Aplicação de sistema ETICS', 'p3.n': 'Reabilitação Integral de Moradia', 'p4.n': 'Reabilitação de Instalação Sanitária', 'p5.n': 'Piscina e Pavimentação Exterior', 'p6.n': 'Fachada e Isolamento Térmico', 'p7.n': 'Acabamentos e Revestimentos', 'p8.n': 'Reabilitação Exterior de Moradia', 'p9.n': 'Estruturas e Cofragem em Betão', 'p9.m': 'Alemanha',
      'p.more': 'E muitas outras obras concluídas em Portugal. Fale connosco para conhecer mais referências.', 'p.cta': 'Pedir orçamento', 'p.close': 'Fechar', 'p.lb.aria': 'Fotografia ampliada', 'p.prev': 'Projeto anterior', 'p.next': 'Próximo projeto',
      'c.title': 'Peça o seu orçamento.', 'c.lead': 'Fale connosco sobre o seu projeto de construção ou reabilitação em Portugal. Respondemos com clareza e rigor.',
      'c.tel': 'Telefone', 'c.mail': 'Email', 'c.loc': 'Localização', 'c.soc': 'Redes', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão', 'c.wa': 'WhatsApp',
      'c.fk': 'Pedido de orçamento', 'c.place': 'Localização da obra', 'c.subj': 'Tipo de intervenção',
      'c.s1': 'Construção de raiz', 'c.s2': 'Reabilitação e remodelação', 'c.s3': 'Fachadas e isolamento térmico', 'c.s5': 'Outro',
      'c.msg': 'Descrição do projeto', 'c.send': 'Pedir orçamento', 'c.ok': 'Pedido enviado. Entraremos em contacto brevemente.',
      'de.kicker': 'Alemanha · Carpintaria de Cofragem',
      'd1.title': 'Além-fronteiras.', 'd1.lead': 'Carpintaria de cofragem na Alemanha. Equipas especializadas, integradas em obras de estruturas em betão armado de diferentes dimensões e exigências técnicas.',
      'd1.h': 'Serviços na Alemanha', 'd1.1': 'Carpintaria de cofragem', 'd1.2': 'Execução de cofragem em obra', 'd1.3': 'Estruturas em betão armado', 'd1.4': 'Serviços a empresas e parceiros do setor',
      'd2.title': 'Uma presença que constrói.', 'd2.lead': 'Experiência operacional, coordenação em estaleiro e capacidade de integração em equipas de obra, contribuindo diariamente para a execução rigorosa de estruturas em betão armado.',
      'de.map.kicker': 'Presença geográfica', 'de.map.title': 'Zonas onde atuamos.', 'de.map.desc': 'Equipas mobilizadas em vários polos construtivos da Alemanha, respondendo com flexibilidade às exigências de cada obra.',
      'de.map.aria': 'Mapa da Alemanha com as zonas de atuação da MR Construções: Dortmund, Munique, Berlim, Hamburgo, Brémen e Düsseldorf', 'de.map.legend': 'Alemanha · 6 zonas de atuação',
      'de.gal.kicker': 'Registo em estaleiro', 'de.gal.title': 'Em obra na Alemanha.', 'de.gal.sub': 'Registos reais das nossas equipas em estaleiros de betão armado e cofragem.',
      'de.gal.v0': 'Vista aérea de obra em curso · Alemanha',
      'de.gal.v1': 'Execução de cofragem e lajes em obra', 'de.gal.v2': 'Fundações e armaduras de betão armado',
      'de.gal.p1': 'Cofragem de Muro', 'de.gal.p2': 'Obra de Grande Escala', 'de.gal.p3': 'Estruturas em Betão Armado', 'de.gal.p4': 'Equipa MR em Obra',
      'vid.pause': 'Pausar', 'vid.play': 'Reproduzir',
      'city.dortmund': 'Dortmund', 'city.munich': 'Munique', 'city.berlin': 'Berlim', 'city.hamburg': 'Hamburgo', 'city.bremen': 'Brémen', 'city.dusseldorf': 'Düsseldorf',
      'de.b2b.kicker': 'Para empresas e parceiros', 'd1.b2b': 'Precisa de uma equipa de cofragem?', 'de.b2b.desc': 'Prestamos serviços de carpintaria de cofragem a empresas e parceiros do setor da construção na Alemanha. Fale connosco sobre o seu projeto.',
      'd1.b2bl': 'Contactar para parcerias', 'de.b2b.email': 'Enviar email', 'b2b.subj': 'Parceria — Carpintaria de Cofragem na Alemanha',
      'wa.b2b.text': 'Olá! Represento uma empresa e gostaria de falar sobre serviços de carpintaria de cofragem na Alemanha.',
      'de.jobs.link': 'Canal de emprego', 'de.jobs.prompt': 'Tem experiência em construção ou carpintaria de cofragem e procura trabalhar na Alemanha?', 'de.jobs.cta': 'Aceder ao canal de emprego',
      'j.kicker': 'Canal de emprego · Recrutamento', 'o.title': 'Constrói o teu futuro connosco.', 'j.lead': 'Procuramos profissionais dedicados para integrar as nossas equipas de construção em Portugal e de carpintaria de cofragem na Alemanha.', 'j.de.link': 'Ver atuação na Alemanha',
      'j.p1.t': 'Rigor técnico em obra', 'j.p1.d': 'Trabalhamos em projetos de habitação unifamiliar, reabilitação e estruturas de betão armado com foco na precisão de execução.',
      'j.p2.t': 'Espírito de equipa', 'j.p2.d': 'Valorizamos coordenação, responsabilidade e respeito mútuo em estaleiro — o trabalho faz-se em equipa.',
      'j.p3.t': 'Portugal e Alemanha', 'j.p3.d': 'Oportunidades tanto em obras no Norte de Portugal como em equipas de carpintaria de cofragem na Alemanha.',
      'o.v': 'Vagas abertas', 'j.side.desc': 'Mesmo sem vaga específica aberta, analisamos todas as candidaturas espontâneas para futuras mobilizações.',
      'o.none': 'Sem vagas específicas publicadas neste momento. Envia-nos a tua candidatura espontânea.',
      'a.kicker': 'Candidatura', 'a.title': 'Junta-te à equipa.',
      'a.name': 'Nome', 'a.phone': 'Telefone / WhatsApp', 'a.spec': 'Especialidade', 'a.res': 'Local de residência',
      'a.exp': 'Anos de experiência', 'a.exp.1': 'Menos de 1 ano', 'a.exp.2': '1–3 anos', 'a.exp.3': '3–5 anos', 'a.exp.4': '5–10 anos', 'a.exp.5': '10+ anos',
      'a.av': 'Disponibilidade para início', 'a.av.1': 'Imediata', 'a.av.2': 'Até 1 mês', 'a.av.3': 'Mais de 1 mês',
      'a.mk': 'Mercado de interesse', 'a.mk.1': 'Portugal', 'a.mk.2': 'Alemanha', 'a.mk.3': 'Indiferente', 'a.sel': 'Selecionar',
      'a.deexp': 'Já trabalhou na Alemanha?', 'a.yes': 'Sim', 'a.no': 'Não', 'a.notes': 'Notas / Experiência (opcional)',
      'a.c1': 'Li e aceito a', 'a.c2': '.', 'a.send': 'Enviar candidatura', 'a.sending': 'A enviar…',
      'a.ok': 'Candidatura enviada. Entraremos em contacto brevemente.', 'a.err': 'Não foi possível enviar. Tente por WhatsApp ou geral@marcoribeiroconstrucoes.pt.',
      'a.val': 'Preencha todos os campos obrigatórios.', 'a.cons': 'Aceite a Política de Privacidade para continuar.', 'a.mail': 'Formulário ainda sem endpoint: a abrir o seu cliente de email.',
      'f.nav': 'Navegação', 'f.ct': 'Contactos', 'f.legal': 'Dados legais', 'f.seat': 'Sede: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Política de Privacidade', 'f.compl': 'Livro de Reclamações Eletrónico', 'f.rights': 'Todos os direitos reservados.', 'f.credit': 'Desenvolvido por', 'f.top': 'Voltar ao topo',
      'wa.text': 'Olá! Gostaria de falar com a MR Construções.',
      'priv.back': 'Voltar ao site', 'priv.kicker': 'Proteção de Dados · RGPD', 'priv.title': 'Política de Privacidade',
      'priv.draft': 'RASCUNHO — Documento preparado para revisão jurídica antes da publicação definitiva.',
      'priv.lead': 'Esta Política de Privacidade explica como a Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) recolhe e trata os dados pessoais submetidos através deste website, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).',
      'priv.s1.title': 'Responsável pelo tratamento', 'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., NIF / NIPC 516590022, titular do Alvará IMPIC n.º 113987, com sede na Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Contacto para questões de privacidade: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Finalidades do tratamento', 'priv.s2.body': 'Os dados pessoais recolhidos através dos formulários do website destinam-se exclusivamente a: (a) analisar e responder a pedidos de orçamento e contacto comercial; (b) avaliar e dar seguimento a candidaturas para integração nas nossas equipas em Portugal ou na Alemanha.',
      'priv.s3.title': 'Base legal', 'priv.s3.body': 'O tratamento dos dados assenta na execução de diligências pré-contratuais a pedido do titular (artigo 6.º, n.º 1, alínea b) do RGPD) e no consentimento explícito prestado pelo utilizador mediante a seleção da caixa de validação antes do envio do formulário (artigo 6.º, n.º 1, alínea a) do RGPD).',
      'priv.s4.title': 'Dados pessoais recolhidos', 'priv.s4.body': 'No formulário de pedido de orçamento são recolhidos: nome, email, telefone, localização da obra, tipo de intervenção e descrição do projeto. No canal de emprego são recolhidos: nome, telefone ou WhatsApp, local de residência, especialidade, anos de experiência, disponibilidade, mercado de interesse e notas opcionais.',
      'priv.s5.title': 'Destinatários dos dados', 'priv.s5.body': 'Os dados são tratados internamente pelos responsáveis pela orçamentação e recursos humanos da MR Construções. Para o encaminhamento técnico das mensagens enviadas pelos formulários, o website utiliza o serviço de processamento Formspree na qualidade de subcontratante técnico. Os dados não são vendidos nem cedidos a terceiros para fins publicitários.',
      'priv.s6.title': 'Prazo de conservação', 'priv.s6.body': 'Os dados relativos a pedidos de orçamento são conservados durante o período necessário ao tratamento da solicitação ou até 24 meses caso não resulte na celebração de contrato. Os dados de candidaturas espontâneas são conservados pelo prazo máximo de 12 meses após a receção, salvo retirada prévia do consentimento.',
      'priv.s7.title': 'Direitos dos titulares dos dados', 'priv.s7.body': 'O titular pode exercer a qualquer momento os direitos de acesso, retificação, apagamento, limitação do tratamento, portabilidade, oposição e retirada do consentimento (sem comprometer a licitude do tratamento efetuado até então), enviando pedido para geral@marcoribeiroconstrucoes.pt.',
      'priv.s8.title': 'Autoridade de controlo', 'priv.s8.body': 'Caso considere que o tratamento dos seus dados viola o RGPD, assiste-lhe o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD), através de www.cnpd.pt.',
      'priv.s9.title': 'Cookies e armazenamento local', 'priv.s9.body': 'Este website não utiliza cookies de analítica, estatística, publicidade ou rastreio de terceiros. Apenas é utilizado armazenamento técnico local do navegador (localStorage) para memorizar a preferência de idioma (PT, EN ou DE) escolhida pelo visitante.'
    },
    en: {
      'meta.home.title': 'MR Construções | Construction & Rehabilitation in Portugal · Formwork in Germany',
      'meta.home.desc': 'MR Construções — single-family homes and rehabilitation in Portugal; formwork carpentry in Germany. Build with rigour. Create with purpose.',
      'meta.germany.title': 'Germany | Formwork Carpentry & Concrete Structures · MR Construções',
      'meta.germany.desc': 'Specialised formwork carpentry and reinforced concrete teams across Germany: Dortmund, Munich, Berlin, Hamburg, Bremen and Düsseldorf.',
      'meta.jobs.title': 'Careers | Opportunities in Portugal & Germany · MR Construções',
      'meta.jobs.desc': 'MR Construções careers channel. Apply to join our construction teams in Portugal or formwork carpentry teams in Germany.',
      'meta.privacy.title': 'Privacy Policy | MR Construções',
      'meta.privacy.desc': 'Privacy Policy and personal data processing of MR Construções — Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Company', 'n.servicos': 'Services', 'n.projetos': 'Projects', 'n.alemanha': 'Germany', 'n.emprego': 'Careers', 'n.orcamento': 'Quote',
      'burger': 'Open menu', 'burger.x': 'Close menu', 'menu.aria': 'Main navigation',
      'h.tag': 'Build with rigour. Create with purpose.', 'h.scroll': 'Scroll',
      'e.title': 'We build more than structures.', 'e.sub': 'Structural solidity and close follow-up, from the first step to handover.',
      'e.body': 'Works delivered with rigour, proximity and attention to every detail. From the first step to the handover of the keys — in Portugal and Germany.',
      'e.id1': 'Since', 'e.id2': 'Operating in', 'e.id2v': 'Portugal · Germany', 'e.id3': 'IMPIC licence', 'e.id4': 'Coordinates',
      'e.de': 'Explore our work in Germany',
      'ba.before': 'Before', 'ba.after': 'After', 'ba.aria': 'Compare before and after', 'ba.cap': 'House Rehabilitation · V. N. Famalicão', 'ba.drag': 'Drag to compare',
      'ph.arch': '[Architectural photography]', 'ph.detail': '[Project detail]', 'ph.site': '[Construction site]',
      's.title': 'What we do.', 's.sub': 'From new builds to full rehabilitation, with rigour at every stage of the project.',
      's1.n': 'New build', 's1.d': 'Complete single-family homes, from the first step to the handover of the keys.',
      's2.n': 'Rehabilitation and remodelling', 's2.d': 'Restoration and renovation of existing buildings and homes.',
      's3.n': 'Structures and civil construction', 's3.d': 'Reinforced concrete structures and general civil construction works.',
      's4.n': 'Facades and thermal insulation', 's4.d': 'ETICS systems, claddings and protection of the building envelope.',
      's5.n': 'Finishes and coverings', 's5.d': 'Masonry, ceramic tiling, painting and complementary works.',
      's6.n': 'Outdoor spaces', 's6.d': 'Swimming pools, ceramic or stone paving and exterior landscaping.',
      'p.title': 'Work that remains.', 'p.sub': 'A selection of projects delivered in Portugal and Germany.',
      'p1.n': 'Facade Rehabilitation', 'p2.n': 'ETICS System Application', 'p3.n': 'Full House Rehabilitation', 'p4.n': 'Sanitary Facility Rehabilitation', 'p5.n': 'Swimming Pool and Exterior Paving', 'p6.n': 'Facade and Thermal Insulation', 'p7.n': 'Finishes and Coverings', 'p8.n': 'Exterior House Rehabilitation', 'p9.n': 'Concrete Structures & Formwork', 'p9.m': 'Germany',
      'p.more': 'And many other completed projects in Portugal. Talk to us to see more references.', 'p.cta': 'Request a quote', 'p.close': 'Close', 'p.lb.aria': 'Enlarged photograph', 'p.prev': 'Previous project', 'p.next': 'Next project',
      'c.title': 'Request your quote.', 'c.lead': 'Tell us about your construction or rehabilitation project in Portugal. We respond with clarity and rigour.',
      'c.tel': 'Phone', 'c.mail': 'Email', 'c.loc': 'Location', 'c.soc': 'Social', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal', 'c.wa': 'WhatsApp',
      'c.fk': 'Quote request', 'c.place': 'Project location', 'c.subj': 'Type of work',
      'c.s1': 'New build', 'c.s2': 'Rehabilitation and remodelling', 'c.s3': 'Facades and thermal insulation', 'c.s5': 'Other',
      'c.msg': 'Project description', 'c.send': 'Request a quote', 'c.ok': 'Request sent. We will be in touch shortly.',
      'de.kicker': 'Germany · Formwork Carpentry',
      'd1.title': 'Beyond borders.', 'd1.lead': 'Formwork carpentry in Germany. Specialised teams integrated into reinforced concrete structure projects of different scales and technical demands.',
      'd1.h': 'Services in Germany', 'd1.1': 'Formwork carpentry', 'd1.2': 'On-site formwork execution', 'd1.3': 'Reinforced concrete structures', 'd1.4': 'Services to companies and sector partners',
      'd2.title': 'A presence that builds.', 'd2.lead': 'Operational experience, site coordination and seamless integration into construction teams, contributing daily to rigorous reinforced concrete execution.',
      'de.map.kicker': 'Geographic presence', 'de.map.title': 'Areas where we operate.', 'de.map.desc': 'Teams mobilised across key construction hubs in Germany, responding flexibly to the demands of each site.',
      'de.map.aria': 'Map of Germany showing MR Construções operating areas: Dortmund, Munich, Berlin, Hamburg, Bremen and Düsseldorf', 'de.map.legend': 'Germany · 6 operating hubs',
      'de.gal.kicker': 'On-site documentation', 'de.gal.title': 'On site in Germany.', 'de.gal.sub': 'Real footage and photography of our teams on reinforced concrete and formwork sites.',
      'de.gal.v0': 'Aerial view of active site · Germany',
      'de.gal.v1': 'Slab formwork execution on site', 'de.gal.v2': 'Foundations and reinforced concrete',
      'de.gal.p1': 'Wall Formwork', 'de.gal.p2': 'Large-Scale Structure', 'de.gal.p3': 'Reinforced Concrete Structures', 'de.gal.p4': 'MR Team on Site',
      'vid.pause': 'Pause', 'vid.play': 'Play',
      'city.dortmund': 'Dortmund', 'city.munich': 'Munich', 'city.berlin': 'Berlin', 'city.hamburg': 'Hamburg', 'city.bremen': 'Bremen', 'city.dusseldorf': 'Düsseldorf',
      'de.b2b.kicker': 'For companies & partners', 'd1.b2b': 'Need a formwork team?', 'de.b2b.desc': 'We provide formwork carpentry services to construction companies and partners in Germany. Talk to us about your project.',
      'd1.b2bl': 'Contact us for partnerships', 'de.b2b.email': 'Send email', 'b2b.subj': 'Partnership — Formwork Carpentry in Germany',
      'wa.b2b.text': 'Hello! I represent a company and would like to discuss formwork carpentry services in Germany.',
      'de.jobs.link': 'Careers channel', 'de.jobs.prompt': 'Experienced in construction or formwork carpentry and looking to work in Germany?', 'de.jobs.cta': 'Go to careers channel',
      'j.kicker': 'Careers · Recruitment', 'o.title': 'Build your future with us.', 'j.lead': 'We are looking for dedicated professionals to join our construction teams in Portugal and formwork carpentry teams in Germany.', 'j.de.link': 'See our work in Germany',
      'j.p1.t': 'Technical rigour on site', 'j.p1.d': 'We work on single-family homes, rehabilitations and reinforced concrete structures with a focus on execution precision.',
      'j.p2.t': 'Team spirit', 'j.p2.d': 'We value coordination, responsibility and mutual respect on site — great structures are built together.',
      'j.p3.t': 'Portugal & Germany', 'j.p3.d': 'Opportunities both on projects in Northern Portugal and with our formwork carpentry teams across Germany.',
      'o.v': 'Open positions', 'j.side.desc': 'Even when no specific position is listed, we review every spontaneous application for upcoming mobilisations.',
      'o.none': 'No specific positions published at the moment. Send us your spontaneous application.',
      'a.kicker': 'Application', 'a.title': 'Join the team.',
      'a.name': 'Name', 'a.phone': 'Phone / WhatsApp', 'a.spec': 'Trade / specialty', 'a.res': 'Place of residence',
      'a.exp': 'Years of experience', 'a.exp.1': 'Under 1 year', 'a.exp.2': '1–3 years', 'a.exp.3': '3–5 years', 'a.exp.4': '5–10 years', 'a.exp.5': '10+ years',
      'a.av': 'Availability to start', 'a.av.1': 'Immediate', 'a.av.2': 'Within 1 month', 'a.av.3': 'More than 1 month',
      'a.mk': 'Market of interest', 'a.mk.1': 'Portugal', 'a.mk.2': 'Germany', 'a.mk.3': 'Either', 'a.sel': 'Select',
      'a.deexp': 'Worked in Germany before?', 'a.yes': 'Yes', 'a.no': 'No', 'a.notes': 'Notes / Experience (optional)',
      'a.c1': 'I have read and accept the', 'a.c2': '.', 'a.send': 'Send application', 'a.sending': 'Sending…',
      'a.ok': 'Application sent. We will be in touch shortly.', 'a.err': 'Could not send. Please try WhatsApp or geral@marcoribeiroconstrucoes.pt.',
      'a.val': 'Please fill in all required fields.', 'a.cons': 'Please accept the Privacy Policy to continue.', 'a.mail': 'Form endpoint not configured yet: opening your email client.',
      'f.nav': 'Navigation', 'f.ct': 'Contact', 'f.legal': 'Legal information', 'f.seat': 'Registered office: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Privacy Policy', 'f.compl': 'Electronic Complaints Book', 'f.rights': 'All rights reserved.', 'f.credit': 'Developed by', 'f.top': 'Back to top',
      'wa.text': 'Hello! I would like to talk to MR Construções.',
      'priv.back': 'Back to website', 'priv.kicker': 'Data Protection · GDPR', 'priv.title': 'Privacy Policy',
      'priv.draft': 'DRAFT — Document prepared for legal review prior to final publication.',
      'priv.lead': 'This Privacy Policy explains how Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) collects and processes personal data submitted through this website, in accordance with the General Data Protection Regulation (GDPR).',
      'priv.s1.title': 'Data Controller', 'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Tax ID (NIF/NIPC) 516590022, IMPIC License No. 113987, headquartered at Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Privacy contact: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Purposes of Processing', 'priv.s2.body': 'Personal data collected through website forms are used exclusively to: (a) analyze and respond to quote and business inquiries; (b) evaluate and follow up on applications to join our teams in Portugal or Germany.',
      'priv.s3.title': 'Legal Basis', 'priv.s3.body': 'Data processing is based on pre-contractual steps taken at the request of the data subject (Article 6(1)(b) GDPR) and on explicit consent given by checking the consent box prior to submission (Article 6(1)(a) GDPR).',
      'priv.s4.title': 'Personal Data Collected', 'priv.s4.body': 'The quote form collects: name, email, phone, project location, type of work and description. The careers form collects: name, phone or WhatsApp, place of residence, trade specialty, years of experience, start availability, market of interest and optional notes.',
      'priv.s5.title': 'Data Recipients', 'priv.s5.body': 'Data are processed internally by MR Construções estimating and human resources staff. For technical routing of form submissions, the website uses Formspree as a technical data processor. Personal data are never sold or shared with third parties for marketing.',
      'priv.s6.title': 'Retention Period', 'priv.s6.body': 'Quote inquiry data are kept for the period required to process the request or up to 24 months if no contract is concluded. Unsolicited job application data are retained for up to 12 months from receipt, unless consent is withdrawn earlier.',
      'priv.s7.title': 'Data Subject Rights', 'priv.s7.body': 'You may at any time exercise your rights of access, rectification, erasure, restriction, portability, objection and withdrawal of consent (without affecting the lawfulness of prior processing) by emailing geral@marcoribeiroconstrucoes.pt.',
      'priv.s8.title': 'Supervisory Authority', 'priv.s8.body': 'If you believe the processing of your data infringes the GDPR, you have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) at www.cnpd.pt.',
      'priv.s9.title': 'Cookies and Local Storage', 'priv.s9.body': 'This website does not use third-party analytics, advertising or tracking cookies. Only browser local storage (localStorage) is used technically to remember the visitor’s selected language (PT, EN or DE).'
    },
    de: {
      'meta.home.title': 'MR Construções | Bau & Sanierung in Portugal · Schalungsbau in Deutschland',
      'meta.home.desc': 'MR Construções — Neubau und Sanierung von Wohnhäusern in Portugal; Schalungsbau in Deutschland. Mit Präzision bauen. Mit Haltung gestalten.',
      'meta.germany.title': 'Deutschland | Schalungsbau & Stahlbeton · MR Construções',
      'meta.germany.desc': 'Spezialisierte Schalungsbauteams in Deutschland: Dortmund, München, Berlin, Hamburg, Bremen und Düsseldorf.',
      'meta.jobs.title': 'Karriere | Stellen in Portugal & Deutschland · MR Construções',
      'meta.jobs.desc': 'Karriereportal von MR Construções. Bewerben Sie sich für unsere Bauteams in Portugal oder Schalungsbauteams in Deutschland.',
      'meta.privacy.title': 'Datenschutzerklärung | MR Construções',
      'meta.privacy.desc': 'Datenschutzerklärung und Verarbeitung personenbezogener Daten von MR Construções — Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Unternehmen', 'n.servicos': 'Leistungen', 'n.projetos': 'Projekte', 'n.alemanha': 'Deutschland', 'n.emprego': 'Karriere', 'n.orcamento': 'Angebot',
      'burger': 'Menü öffnen', 'burger.x': 'Menü schließen', 'menu.aria': 'Hauptnavigation',
      'h.tag': 'Mit Präzision bauen. Mit Haltung gestalten.', 'h.scroll': 'Scroll',
      'e.title': 'Wir bauen mehr als Strukturen.', 'e.sub': 'Konstruktive Solidität und persönliche Begleitung vom ersten Schritt bis zur Übergabe.',
      'e.body': 'Bauprojekte, ausgeführt mit Präzision, Nähe und Liebe zum Detail. Vom ersten Schritt bis zur Schlüsselübergabe — in Portugal und in Deutschland.',
      'e.id1': 'Seit', 'e.id2': 'Tätig in', 'e.id2v': 'Portugal · Deutschland', 'e.id3': 'IMPIC-Zulassung', 'e.id4': 'Koordinaten',
      'e.de': 'Unsere Arbeit in Deutschland entdecken',
      'ba.before': 'Vorher', 'ba.after': 'Nachher', 'ba.aria': 'Vorher und Nachher vergleichen', 'ba.cap': 'Haussanierung · V. N. Famalicão', 'ba.drag': 'Zum Vergleichen ziehen',
      'ph.arch': '[Architekturfotografie]', 'ph.detail': '[Projektdetail]', 'ph.site': '[Baustelle]',
      's.title': 'Was wir tun.', 's.sub': 'Vom Neubau bis zur Komplettsanierung — präzise Ausführung in jeder Bauphase.',
      's1.n': 'Neubau', 's1.d': 'Komplette Einfamilienhäuser, vom ersten Schritt bis zur Schlüsselübergabe.',
      's2.n': 'Sanierung und Umbau', 's2.d': 'Instandsetzung und Erneuerung bestehender Gebäude und Wohnhäuser.',
      's3.n': 'Rohbau und Hochbau', 's3.d': 'Stahlbetonbau und allgemeine Hochbauarbeiten.',
      's4.n': 'Fassaden und Wärmedämmung', 's4.d': 'WDVS-Systeme (ETICS), Verkleidungen und Schutz der Gebäudehülle.',
      's5.n': 'Ausbau und Beläge', 's5.d': 'Mauerwerk, Fliesenarbeiten, Malerarbeiten und ergänzende Ausbauarbeiten.',
      's6.n': 'Außenanlagen', 's6.d': 'Pools, Keramik- oder Natursteinbeläge und Gestaltung des Außenbereichs.',
      'p.title': 'Arbeit, die bleibt.', 'p.sub': 'Eine Auswahl realisierter Projekte in Portugal und Deutschland.',
      'p1.n': 'Fassadensanierung', 'p2.n': 'WDVS-Fassadendämmung (ETICS)', 'p3.n': 'Komplettsanierung eines Wohnhauses', 'p4.n': 'Sanierung einer Sanitäranlage', 'p5.n': 'Poolbau und Außenpflasterung', 'p6.n': 'Fassade und Wärmedämmung', 'p7.n': 'Ausbau und Beläge', 'p8.n': 'Außensanierung eines Wohnhauses', 'p9.n': 'Stahlbeton & Schalungsbau', 'p9.m': 'Deutschland',
      'p.more': 'Und viele weitere abgeschlossene Projekte in Portugal. Sprechen Sie mit uns für weitere Referenzen.', 'p.cta': 'Angebot anfragen', 'p.close': 'Schließen', 'p.lb.aria': 'Vergrößerte Aufnahme', 'p.prev': 'Vorheriges Projekt', 'p.next': 'Nächstes Projekt',
      'c.title': 'Fordern Sie Ihr Angebot an.', 'c.lead': 'Sprechen Sie mit uns über Ihr Bau- oder Sanierungsprojekt in Portugal. Wir antworten klar und zuverlässig.',
      'c.tel': 'Telefon', 'c.mail': 'E-Mail', 'c.loc': 'Standort', 'c.soc': 'Soziale Medien', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal', 'c.wa': 'WhatsApp',
      'c.fk': 'Angebotsanfrage', 'c.place': 'Bauort', 'c.subj': 'Art der Maßnahme',
      'c.s1': 'Neubau', 'c.s2': 'Sanierung und Umbau', 'c.s3': 'Fassaden und Wärmedämmung', 'c.s5': 'Sonstiges',
      'c.msg': 'Projektbeschreibung', 'c.send': 'Angebot anfragen', 'c.ok': 'Anfrage gesendet. Wir melden uns in Kürze.',
      'de.kicker': 'Deutschland · Schalungsbau',
      'd1.title': 'Über Grenzen hinweg.', 'd1.lead': 'Schalungsbau in Deutschland. Spezialisierte Teams, eingebunden in Stahlbetonbauprojekte unterschiedlicher Größe und technischer Anforderungen.',
      'd1.h': 'Leistungen in Deutschland', 'd1.1': 'Schalungsbau', 'd1.2': 'Schalungsarbeiten auf der Baustelle', 'd1.3': 'Stahlbetonkonstruktionen', 'd1.4': 'Leistungen für Unternehmen und Partner der Branche',
      'd2.title': 'Eine Präsenz, die baut.', 'd2.lead': 'Operative Erfahrung, Baustellenkoordination und reibungslose Integration in Projektteams für präzise Stahlbetonarbeiten.',
      'de.map.kicker': 'Geografische Präsenz', 'de.map.title': 'Unsere Einsatzgebiete.', 'de.map.desc': 'Flexible Teams im Einsatz in zentralen Bauregionen Deutschlands — angepasst an die Anforderungen jedes Projekts.',
      'de.map.aria': 'Deutschlandkarte mit Einsatzgebieten von MR Construções: Dortmund, München, Berlin, Hamburg, Bremen und Düsseldorf', 'de.map.legend': 'Deutschland · 6 Einsatzregionen',
      'de.gal.kicker': 'Einblicke von der Baustelle', 'de.gal.title': 'Im Einsatz in Deutschland.', 'de.gal.sub': 'Reale Einblicke unserer Teams auf Stahlbeton- und Schalungsbaustellen.',
      'de.gal.v0': 'Luftaufnahme einer Baustelle · Deutschland',
      'de.gal.v1': 'Deckenschalung auf der Baustelle', 'de.gal.v2': 'Fundamente und Stahlbetonarbeiten',
      'de.gal.p1': 'Wandschalung', 'de.gal.p2': 'Großprojekt im Hochbau', 'de.gal.p3': 'Stahlbetonkonstruktionen', 'de.gal.p4': 'MR-Team im Einsatz',
      'vid.pause': 'Pausieren', 'vid.play': 'Abspielen',
      'city.dortmund': 'Dortmund', 'city.munich': 'München', 'city.berlin': 'Berlin', 'city.hamburg': 'Hamburg', 'city.bremen': 'Bremen', 'city.dusseldorf': 'Düsseldorf',
      'de.b2b.kicker': 'Für Unternehmen & Partner', 'd1.b2b': 'Benötigen Sie ein Schalungsteam?', 'de.b2b.desc': 'Wir bieten Schalungsbauleistungen für Bauunternehmen und Partner in Deutschland. Sprechen Sie mit uns über Ihr Projekt.',
      'd1.b2bl': 'Kontakt für Partnerschaften', 'de.b2b.email': 'E-Mail senden', 'b2b.subj': 'Partnerschaft — Schalungsbau in Deutschland',
      'wa.b2b.text': 'Hallo! Ich vertrete ein Unternehmen und möchte über Schalungsbauleistungen in Deutschland sprechen.',
      'de.jobs.link': 'Karriereportal', 'de.jobs.prompt': 'Erfahrung im Bauwesen oder Schalungsbau und Interesse an Arbeit in Deutschland?', 'de.jobs.cta': 'Zum Karriereportal',
      'j.kicker': 'Karriere · Rekrutierung', 'o.title': 'Baue deine Zukunft mit uns.', 'j.lead': 'Wir suchen engagierte Fachkräfte für unsere Bauteams in Portugal sowie für unsere Schalungsbauteams in Deutschland.', 'j.de.link': 'Unsere Arbeit in Deutschland',
      'j.p1.t': 'Technische Präzision', 'j.p1.d': 'Wir arbeiten an Einfamilienhäusern, Sanierungen und Stahlbetonkonstruktionen mit höchstem Qualitätsanspruch.',
      'j.p2.t': 'Teamgeist auf der Baustelle', 'j.p2.d': 'Wir schätzen Koordination, Verlässlichkeit und gegenseitigen Respekt — starke Bauwerke entstehen im Team.',
      'j.p3.t': 'Portugal & Deutschland', 'j.p3.d': 'Einsatzmöglichkeiten sowohl auf Baustellen im Norden Portugals als auch in unseren Schalungsteams in Deutschland.',
      'o.v': 'Offene Stellen', 'j.side.desc': 'Auch ohne ausgeschriebene Stelle prüfen wir jede Initiativbewerbung für kommende Projekte.',
      'o.none': 'Derzeit keine konkreten Stellen ausgeschrieben. Senden Sie uns gerne Ihre Initiativbewerbung.',
      'a.kicker': 'Bewerbung', 'a.title': 'Werde Teil des Teams.',
      'a.name': 'Name', 'a.phone': 'Telefon / WhatsApp', 'a.spec': 'Fachgebiet / Beruf', 'a.res': 'Wohnort',
      'a.exp': 'Jahre Berufserfahrung', 'a.exp.1': 'Unter 1 Jahr', 'a.exp.2': '1–3 Jahre', 'a.exp.3': '3–5 Jahre', 'a.exp.4': '5–10 Jahre', 'a.exp.5': '10+ Jahre',
      'a.av': 'Verfügbar ab', 'a.av.1': 'Sofort', 'a.av.2': 'Innerhalb 1 Monats', 'a.av.3': 'Mehr als 1 Monat',
      'a.mk': 'Gewünschter Markt', 'a.mk.1': 'Portugal', 'a.mk.2': 'Deutschland', 'a.mk.3': 'Egal', 'a.sel': 'Auswählen',
      'a.deexp': 'Bereits in Deutschland gearbeitet?', 'a.yes': 'Ja', 'a.no': 'Nein', 'a.notes': 'Hinweise / Erfahrung (optional)',
      'a.c1': 'Ich habe die', 'a.c2': ' gelesen und akzeptiere sie.', 'a.send': 'Bewerbung senden', 'a.sending': 'Wird gesendet…',
      'a.ok': 'Bewerbung gesendet. Wir melden uns in Kürze.', 'a.err': 'Senden nicht möglich. Bitte WhatsApp oder geral@marcoribeiroconstrucoes.pt nutzen.',
      'a.val': 'Bitte füllen Sie alle Pflichtfelder aus.', 'a.cons': 'Bitte akzeptieren Sie die Datenschutzerklärung.', 'a.mail': 'Formular-Endpunkt noch nicht konfiguriert: Ihr E-Mail-Programm wird geöffnet.',
      'f.nav': 'Navigation', 'f.ct': 'Kontakt', 'f.legal': 'Rechtliche Angaben', 'f.seat': 'Sitz: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Datenschutzerklärung', 'f.compl': 'Elektronisches Beschwerdebuch', 'f.rights': 'Alle Rechte vorbehalten.', 'f.credit': 'Entwickelt von', 'f.top': 'Nach oben',
      'wa.text': 'Hallo! Ich möchte mit MR Construções sprechen.',
      'priv.back': 'Zurück zur Website', 'priv.kicker': 'Datenschutz · DSGVO', 'priv.title': 'Datenschutzerklärung',
      'priv.draft': 'ENTWURF — Dokument zur rechtlichen Prüfung vor der endgültigen Veröffentlichung.',
      'priv.lead': 'Diese Datenschutzerklärung erläutert, wie die Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) personenbezogene Daten über diese Website gemäß der Datenschutz-Grundverordnung (DSGVO) erhebt und verarbeitet.',
      'priv.s1.title': 'Verantwortlicher', 'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Steuernummer (NIF/NIPC) 516590022, IMPIC-Zulassung Nr. 113987, mit Sitz in der Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Kontakt für Datenschutzfragen: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Zwecke der Verarbeitung', 'priv.s2.body': 'Die über die Formulare dieser Website erhobenen personenbezogenen Daten dienen ausschließlich: (a) der Bearbeitung und Beantwortung von Angebots- und Geschäftsanfragen; (b) der Prüfung und Bearbeitung von Bewerbungen für unsere Teams in Portugal oder Deutschland.',
      'priv.s3.title': 'Rechtsgrundlage', 'priv.s3.body': 'Die Datenverarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person (Art. 6 Abs. 1 lit. b DSGVO) sowie auf Grundlage Ihrer ausdrücklichen Einwilligung durch Aktivierung des Kontrollkästchens (Art. 6 Abs. 1 lit. a DSGVO).',
      'priv.s4.title': 'Erhobene personenbezogene Daten', 'priv.s4.body': 'Im Angebotsformular werden erhoben: Name, E-Mail, Telefon, Bauort, Art der Maßnahme und Projektbeschreibung. Im Karriereportal werden erhoben: Name, Telefon/WhatsApp, Wohnort, Fachgebiet, Berufserfahrung, Verfügbarkeit, gewünschter Markt sowie optionale Hinweise.',
      'priv.s5.title': 'Empfänger der Daten', 'priv.s5.body': 'Die Daten werden intern von den zuständigen Mitarbeitern für Kalkulation und Personalwesen bei MR Construções verarbeitet. Für die technische Übermittlung der Formularnachrichten nutzen wir den Dienst Formspree als Auftragsverarbeiter. Eine Weitergabe oder ein Verkauf an Dritte zu Werbezwecken findet nicht statt.',
      'priv.s6.title': 'Speicherdauer', 'priv.s6.body': 'Daten zu Angebotsanfragen werden für den zur Bearbeitung erforderlichen Zeitraum bzw. bis zu 24 Monate aufbewahrt, sofern kein Vertrag zustande kommt. Bewerbungsdaten werden höchstens 12 Monate nach Eingang gespeichert, sofern die Einwilligung nicht zuvor widerrufen wird.',
      'priv.s7.title': 'Rechte der betroffenen Personen', 'priv.s7.body': 'Sie können jederzeit Ihre Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Widerruf der Einwilligung (ohne die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung zu berühren) per E-Mail an geral@marcoribeiroconstrucoes.pt ausüben.',
      'priv.s8.title': 'Aufsichtsbehörde', 'priv.s8.body': 'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt, haben Sie das Recht auf Beschwerde bei der portugiesischen Datenschutzbehörde (CNPD) unter www.cnpd.pt.',
      'priv.s9.title': 'Cookies und lokale Speicherung', 'priv.s9.body': 'Diese Website verwendet keine Analyse-, Statistik-, Werbe- oder Tracking-Cookies von Drittanbietern. Es wird lediglich technisch der lokale Browser-Speicher (localStorage) genutzt, um Ihre Sprachauswahl (PT, EN oder DE) zu speichern.'
    }
  };

  var CITY_COORDS = {
    dortmund: '51.51° N · 7.46° E',
    munich: '48.14° N · 11.58° E',
    berlin: '52.52° N · 13.40° E',
    hamburg: '53.55° N · 9.99° E',
    bremen: '53.08° N · 8.80° E',
    dusseldorf: '51.23° N · 6.78° E'
  };

  var doc = document, root = doc.documentElement, body = doc.body;
  var page = body.getAttribute('data-page') || 'home';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'pt';
  var activeCity = 'dortmund';
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var t = function (k) { return (T[lang] && T[lang][k]) || T.pt[k] || ''; };

  root.classList.remove('no-js'); root.classList.add('js');

  /* ------------------------------ Comparador Antes / Depois ------------------------------ */
  $$('[data-ba]').forEach(function (box) {
    var range = $('.ba-range', box);
    if (!range) return;
    range.addEventListener('input', function () {
      box.style.setProperty('--pos', range.value + '%');
    });
  });

  /* ------------------------------ Carrossel contínuo de projetos (auto + rato + dedo + trackpad) ------------------------------ */
  var wall = $('[data-prj-wall]');
  var wallDragged = false;
  if (wall) {
    var rowStates = [];
    var wallVisible = true;

    function wrapOffset(x, half) {
      if (!half) return 0;
      x = x % half;
      return x < 0 ? x + half : x;
    }

    $$('.prj-row', wall).forEach(function (rowEl) {
      var track = $('.prj-track', rowEl);
      if (!track) return;
      $$('.prj-card', track).forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.classList.add('prj-clone');
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('tabindex', '-1');
        track.appendChild(clone);
      });

      var dir = rowEl.getAttribute('data-dir');
      var speed = dir === 'right' ? -0.42 : (dir === 'left-alt' ? 0.54 : 0.48);
      var st = {
        el: rowEl, track: track, speed: reduce ? 0 : speed,
        x: 0, half: 0, vel: 0, hover: false, dragging: false,
        pointerId: null, startX: 0, startY: 0, lastX: 0, locked: null
      };

      st.measure = function () {
        st.half = track.scrollWidth / 2;
        if (st.half && dir === 'right' && st.x === 0) st.x = st.half * 0.5;
        st.x = wrapOffset(st.x, st.half);
        track.style.transform = 'translate3d(' + (-st.x).toFixed(2) + 'px,0,0)';
      };
      rowStates.push(st);

      rowEl.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') st.hover = true; });
      rowEl.addEventListener('pointerleave', function () { st.hover = false; });

      rowEl.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        st.dragging = true; st.pointerId = e.pointerId;
        st.startX = st.lastX = e.clientX; st.startY = e.clientY;
        st.vel = 0; st.locked = e.pointerType === 'mouse' ? 'x' : null;
        wallDragged = false;
      });

      rowEl.addEventListener('pointermove', function (e) {
        if (!st.dragging || e.pointerId !== st.pointerId) return;
        var dxTotal = e.clientX - st.startX, dyTotal = e.clientY - st.startY;
        if (!st.locked) {
          if (Math.abs(dxTotal) < 5 && Math.abs(dyTotal) < 5) return;
          st.locked = Math.abs(dxTotal) >= Math.abs(dyTotal) ? 'x' : 'y';
        }
        if (st.locked !== 'x') return;
        var dx = e.clientX - st.lastX;
        st.lastX = e.clientX;
        if (Math.abs(dxTotal) > 6 && !wallDragged) {
          wallDragged = true;
          rowEl.classList.add('is-drag');
          try { rowEl.setPointerCapture(e.pointerId); } catch (err) {}
        }
        st.vel = -dx;
        st.x = wrapOffset(st.x - dx, st.half);
        track.style.transform = 'translate3d(' + (-st.x).toFixed(2) + 'px,0,0)';
      });

      function endDrag(e) {
        if (!st.dragging || (e && e.pointerId !== st.pointerId)) return;
        st.dragging = false; st.locked = null;
        rowEl.classList.remove('is-drag');
        try { rowEl.releasePointerCapture(st.pointerId); } catch (err) {}
        st.pointerId = null;
        if (wallDragged) setTimeout(function () { wallDragged = false; }, 80);
      }
      rowEl.addEventListener('pointerup', endDrag);
      rowEl.addEventListener('pointercancel', endDrag);

      rowEl.addEventListener('wheel', function (e) {
        var useX = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        var useShift = e.shiftKey && Math.abs(e.deltaY) > 0;
        if (!useX && !useShift) return;
        e.preventDefault();
        var delta = useX ? e.deltaX : e.deltaY;
        st.vel = 0;
        st.x = wrapOffset(st.x + delta, st.half);
        track.style.transform = 'translate3d(' + (-st.x).toFixed(2) + 'px,0,0)';
      }, { passive: false });
    });

    function measureAll() { rowStates.forEach(function (st) { st.measure(); }); }
    measureAll();
    window.addEventListener('load', measureAll);
    window.addEventListener('resize', measureAll);

    var lastTs = 0;
    function tickWall(ts) {
      if (!lastTs) lastTs = ts;
      var dt = Math.min(36, ts - lastTs) / 16.667;
      lastTs = ts;
      if (wallVisible) {
        rowStates.forEach(function (st) {
          if (!st.half || st.dragging) return;
          var step = 0;
          if (Math.abs(st.vel) > 0.08) {
            step = st.vel * dt;
            st.vel *= Math.pow(0.93, dt);
          } else {
            st.vel = 0;
            if (!st.hover && st.speed) step = st.speed * dt;
          }
          if (step) {
            st.x = wrapOffset(st.x + step, st.half);
            st.track.style.transform = 'translate3d(' + (-st.x).toFixed(2) + 'px,0,0)';
          }
        });
      }
      requestAnimationFrame(tickWall);
    }
    requestAnimationFrame(tickWall);

    if ('IntersectionObserver' in window) {
      var wallIo = new IntersectionObserver(function (es) {
        wallVisible = es[0].isIntersecting;
      }, { rootMargin: '140px 0px' });
      wallIo.observe(wall);
    }
  }

  /* ------------------------------ Mapa 3D interativo da Alemanha ------------------------------ */
  var cityBtns = $$('[data-city]');
  var mapPins = $$('[data-pin]');
  var mapPinBases = $$('[data-pin-base]');
  var activeCityOut = $('#de-active-city');
  var map3dWrap = $('[data-map-3d]');
  var map3dPlane = map3dWrap ? $('.de-map-plane', map3dWrap) : null;
  var CITY_TILT = {
    hamburg: { rx: 38, ry: -2, rz: -5 },
    bremen: { rx: 37, ry: -6, rz: -7 },
    berlin: { rx: 36, ry: 8, rz: -3 },
    dortmund: { rx: 34, ry: -7, rz: -7 },
    dusseldorf: { rx: 33, ry: -9, rz: -8 },
    munich: { rx: 28, ry: 4, rz: -4 }
  };
  var tiltCur = { rx: 34, ry: -7, rz: -7 };
  var tiltDst = { rx: 34, ry: -7, rz: -7 };
  var tiltRaf = 0;

  function applyTilt(rx, ry, rz) {
    if (!map3dPlane) return;
    map3dPlane.style.setProperty('--rx', rx.toFixed(2) + 'deg');
    map3dPlane.style.setProperty('--ry', ry.toFixed(2) + 'deg');
    map3dPlane.style.setProperty('--rz', rz.toFixed(2) + 'deg');
  }
  function tickTilt() {
    tiltRaf = 0;
    tiltCur.rx += (tiltDst.rx - tiltCur.rx) * 0.1;
    tiltCur.ry += (tiltDst.ry - tiltCur.ry) * 0.1;
    tiltCur.rz += (tiltDst.rz - tiltCur.rz) * 0.1;
    var done = Math.abs(tiltDst.rx - tiltCur.rx) < 0.03 &&
      Math.abs(tiltDst.ry - tiltCur.ry) < 0.03 &&
      Math.abs(tiltDst.rz - tiltCur.rz) < 0.03;
    if (done) {
      tiltCur.rx = tiltDst.rx; tiltCur.ry = tiltDst.ry; tiltCur.rz = tiltDst.rz;
    } else {
      tiltRaf = requestAnimationFrame(tickTilt);
    }
    applyTilt(tiltCur.rx, tiltCur.ry, tiltCur.rz);
  }
  function setTiltTarget(rx, ry, rz) {
    if (!map3dPlane || reduce) return;
    tiltDst.rx = rx; tiltDst.ry = ry; tiltDst.rz = rz;
    if (!tiltRaf) tiltRaf = requestAnimationFrame(tickTilt);
  }

  if (map3dWrap && map3dPlane && !reduce) {
    map3dWrap.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      var r = map3dWrap.getBoundingClientRect();
      var nx = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
      var ny = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
      setTiltTarget(34 - ny * 11, nx * 13, -6 + nx * 4);
    });
    map3dWrap.addEventListener('pointerleave', function () {
      var ct = CITY_TILT[activeCity] || CITY_TILT.dortmund;
      setTiltTarget(ct.rx, ct.ry, ct.rz);
    });
  }

  function setCity(id) {
    if (!CITY_COORDS[id]) return;
    activeCity = id;
    cityBtns.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-city') === id); });
    mapPins.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-pin') === id); });
    mapPinBases.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-pin-base') === id); });
    if (activeCityOut) activeCityOut.textContent = t('city.' + id) + ' · ' + CITY_COORDS[id];
    var ct = CITY_TILT[id];
    if (ct && !reduce) setTiltTarget(ct.rx, ct.ry, ct.rz);
  }

  cityBtns.forEach(function (b) {
    var id = b.getAttribute('data-city');
    b.addEventListener('mouseenter', function () { setCity(id); });
    b.addEventListener('focus', function () { setCity(id); });
    b.addEventListener('click', function () { setCity(id); });
  });
  mapPins.forEach(function (p) {
    var id = p.getAttribute('data-pin');
    p.addEventListener('mouseenter', function () { setCity(id); });
    p.addEventListener('focus', function () { setCity(id); });
    p.addEventListener('click', function () { setCity(id); });
    p.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCity(id); } });
  });

  /* ------------------------------ i18n ------------------------------ */
  var metaDesc = $('meta[name="description"]');
  function applyLang(l, persist) {
    lang = T[l] ? l : 'pt';
    if (persist) {
      try { localStorage.setItem('mr_lang', lang); } catch (e) {}
      try {
        var u = new URL(location.href);
        if (lang === 'pt') u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
        history.replaceState(null, '', u.pathname + u.search + u.hash);
      } catch (e) {}
    }
    root.lang = lang === 'pt' ? 'pt-PT' : lang;
    doc.title = t('meta.' + page + '.title') || doc.title;
    if (metaDesc) metaDesc.setAttribute('content', t('meta.' + page + '.desc') || metaDesc.getAttribute('content'));
    $$('[data-i18n]').forEach(function (el) { var v = t(el.getAttribute('data-i18n')); if (v) el.textContent = v; });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    var wa = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(t('wa.text'));
    $$('[data-wa]').forEach(function (a) { a.href = wa; });
    var waB2b = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(t('wa.b2b.text'));
    $$('[data-wa-b2b]').forEach(function (a) { a.href = waB2b; });
    var b2b = $('[data-b2b]');
    if (b2b) b2b.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(t('b2b.subj'));
    if (activeCityOut) setCity(activeCity);
    syncBurger();
  }
  (function initLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    var saved = null; try { saved = localStorage.getItem('mr_lang'); } catch (e) {}
    applyLang(T[q] ? q : (T[saved] ? saved : 'pt'), false);
    $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang'), true); }); });
  })();

  /* ------------------------------ Menu mobile ------------------------------ */
  var burger = $('#burger');
  function syncBurger() { if (burger) burger.setAttribute('aria-label', t(body.classList.contains('menu-open') ? 'burger.x' : 'burger')); }
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    if (burger) burger.setAttribute('aria-expanded', String(open));
    syncBurger();
  }
  if (burger) burger.addEventListener('click', function () { setMenu(!body.classList.contains('menu-open')); });
  $$('.menu a').forEach(function (a, i) { a.style.setProperty('--i', i); a.addEventListener('click', function () { setMenu(false); }); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) setMenu(false); });

  /* ------------------------------ Revelação ------------------------------ */
  var revealEls = $$('.rv, .clip');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else { revealEls.forEach(function (el) { el.classList.add('in'); }); }

  /* ------------------------------ Scroll: nav, parallax, spy ------------------------------ */
  var nav = $('.nav'), heroImg = $('.hero-img');
  var frames = $$('.frame[data-par]');
  var openPano = $('.pano[data-scroll-open]');
  var openTarget = 1, openCur = 1, openRaf = 0;
  var secs = $$('main section[id]');
  var links = $$('[data-sec]');
  var ticking = false;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function stepOpenPano() {
    openRaf = 0;
    if (!openPano) return;
    openCur += (openTarget - openCur) * 0.14;
    if (Math.abs(openTarget - openCur) < 0.001) openCur = openTarget;
    else openRaf = requestAnimationFrame(stepOpenPano);
    openPano.style.setProperty('--open', openCur.toFixed(4));
  }
  function syncOpenPano(immediate) {
    if (!openPano) return;
    if (reduce) { openPano.style.setProperty('--open', '1'); return; }
    var y = window.scrollY || window.pageYOffset, vh = window.innerHeight;
    var r = openPano.getBoundingClientRect();
    var docTop = r.top + y;
    var travel = Math.max(220, Math.min(vh * 0.58, docTop - vh * 0.14));
    var p = clamp(y / travel, 0, 1);
    openTarget = p * p * (3 - 2 * p);
    if (immediate) {
      openCur = openTarget;
      openPano.style.setProperty('--open', openCur.toFixed(4));
    } else if (!openRaf) {
      openRaf = requestAnimationFrame(stepOpenPano);
    }
  }
  if (openPano) syncOpenPano(true);

  function frame() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset, vh = window.innerHeight;
    if (nav) nav.classList.toggle('solid', page !== 'home' || y > 60);

    if (heroImg && !reduce && y < vh * 1.2) {
      heroImg.style.setProperty('--hy', (y * 0.22).toFixed(1) + 'px');
    }
    if (!reduce) {
      syncOpenPano(false);
      frames.forEach(function (f) {
        var r = f.getBoundingClientRect();
        if (r.bottom < -80 || r.top > vh + 80) return;
        var v = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
        f.style.setProperty('--r', clamp(v, -1, 1).toFixed(3));
      });
    }

    if (links.length && secs.length) {
      var cur = secs[0].id;
      secs.forEach(function (s) { if (s.getBoundingClientRect().top <= vh * 0.42) cur = s.id; });
      links.forEach(function (a) {
        if (a.getAttribute('data-sec') === cur) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);
  frame();

  /* Entrada do hero */
  window.addEventListener('load', function () { requestAnimationFrame(function () { root.classList.add('ready'); }); });
  setTimeout(function () { root.classList.add('ready'); }, 1200);

  /* ------------------------------ Vídeos em obra (reprodução inteligente no viewport) ------------------------------ */
  var autoVids = $$('video[data-auto-video]');
  if (autoVids.length && !reduce && 'IntersectionObserver' in window) {
    var vidIo = new IntersectionObserver(function (es) {
      es.forEach(function (entry) {
        var v = entry.target;
        if (v.getAttribute('data-user-paused') === 'true') return;
        if (entry.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.2 });
    autoVids.forEach(function (v) { vidIo.observe(v); });
  }
  $$('[data-vid-toggle]').forEach(function (btn) {
    var box = btn.closest('.pano-vid');
    var v = box ? $('video', box) : null;
    if (!v) return;
    if (reduce) {
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('data-i18n', 'vid.play');
    }
    btn.addEventListener('click', function () {
      var paused = !v.paused;
      if (paused) {
        v.setAttribute('data-user-paused', 'true');
        v.pause();
      } else {
        v.removeAttribute('data-user-paused');
        var p = v.play(); if (p && p.catch) p.catch(function () {});
      }
      btn.setAttribute('aria-pressed', String(paused));
      btn.setAttribute('data-i18n', paused ? 'vid.play' : 'vid.pause');
      btn.textContent = t(paused ? 'vid.play' : 'vid.pause');
    });
  });

  /* ------------------------------ Lightbox de projetos e galeria Alemanha ------------------------------ */
  var lb = $('#lb');
  if (lb && lb.showModal) {
    var lbImg = $('img', lb), lbCap = $('.lb-cap', lb), lbCount = $('.lb-count', lb);
    var seen = {};
    var projects = $$('.prj-card:not(.prj-clone), .de-photo-card').filter(function (el) {
      var id = el.getAttribute('data-idx');
      if (seen[id]) return false;
      seen[id] = true;
      return true;
    }).sort(function (a, b) {
      return Number(a.getAttribute('data-idx')) - Number(b.getAttribute('data-idx'));
    });
    var lbIdx = 0;

    function renderLb(i) {
      if (!projects.length) return;
      lbIdx = (i + projects.length) % projects.length;
      var a = projects[lbIdx];
      var title = $('h3', a) ? $('h3', a).textContent.trim() : '';
      var meta = $('.micro', a) ? $('.micro', a).textContent.trim() : '';
      lbImg.src = a.getAttribute('href');
      lbImg.alt = a.getAttribute('data-alt') || title;
      lbCap.textContent = title && meta ? title + ' — ' + meta : title;
      if (lbCount) lbCount.textContent = String(lbIdx + 1).padStart(2, '0') + ' / ' + String(projects.length).padStart(2, '0');
    }

    function openCard(card) {
      renderLb(Number(card.getAttribute('data-idx')) || 0);
      lb.showModal();
      body.classList.add('dlg-open');
    }

    if (wall) {
      wall.addEventListener('click', function (e) {
        var card = e.target.closest('.prj-card');
        if (!card) return;
        e.preventDefault();
        if (wallDragged) return;
        openCard(card);
      });
    }
    $$('.de-photo-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        e.preventDefault();
        openCard(card);
      });
    });

    var prevBtn = $('[data-lb-prev]', lb), nextBtn = $('[data-lb-next]', lb), closeBtn = $('[data-lb-close]', lb);
    if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); renderLb(lbIdx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); renderLb(lbIdx + 1); });
    if (closeBtn) closeBtn.addEventListener('click', function () { lb.close(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); renderLb(lbIdx - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); renderLb(lbIdx + 1); }
    });
    lb.addEventListener('close', function () { body.classList.remove('dlg-open'); });
  }

  /* ------------------------------ Submissão genérica (Formspree + fallback) ------------------------------ */
  function bindForm(form, statusEl, cfg) {
    if (!form || !statusEl) return;
    var btn = $('button[type=submit]', form);
    var setStatus = function (k, cls) { statusEl.className = 'status ' + (cls || ''); statusEl.textContent = k ? t(k) : ''; };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if ($('[name=_honey]', form).value) return;
      if (!$('[name=consent]', form).checked) { setStatus('a.cons', 'err'); return; }
      if (!form.checkValidity()) { form.reportValidity(); setStatus('a.val', 'err'); return; }

      var fd = new FormData(form), data = {};
      fd.forEach(function (v, k) { if (k !== '_honey' && k !== 'consent') data[k] = String(v).trim(); });
      data.origem = cfg.origin;
      data._subject = cfg.subject(data);
      data.politica_privacidade = 'Aceite';

      if (cfg.endpoint.indexOf('SEU_ID') !== -1) {
        var lines = Object.keys(data).filter(function (k) { return k[0] !== '_'; }).map(function (k) { return k + ': ' + data[k]; });
        setStatus('a.mail', 'ok');
        location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(data._subject) + '&body=' + encodeURIComponent(lines.join('\n'));
        return;
      }

      btn.disabled = true;
      var label = btn.firstElementChild;
      label.textContent = t('a.sending');
      setStatus('');
      fetch(cfg.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json().catch(function () { return {}; }); })
        .then(function () { form.reset(); setStatus(cfg.okKey, 'ok'); })
        .catch(function () { setStatus('a.err', 'err'); })
        .then(function () { btn.disabled = false; label.textContent = t(cfg.sendKey); });
    });
  }

  /* Formulário de orçamento (página principal) */
  bindForm($('#quote-form'), $('#quote-status'), {
    endpoint: FORM_ENDPOINT_ORCAMENTO,
    origin: 'Pedido de orçamento — página principal',
    subject: function (d) { return 'Pedido de orçamento — site: ' + (d.tipo_obra || 'Geral') + ' (' + d.nome + ')'; },
    okKey: 'c.ok',
    sendKey: 'c.send'
  });

  /* Formulário de candidatura (canal de emprego) */
  bindForm($('#apply-form'), $('#apply-status'), {
    endpoint: FORM_ENDPOINT_CANDIDATURA,
    origin: 'Candidatura — canal de emprego',
    subject: function (d) { return 'Candidatura — site: ' + d.especialidade + ' (' + d.nome + ')'; },
    okKey: 'a.ok',
    sendKey: 'a.send'
  });

  var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();
})();
