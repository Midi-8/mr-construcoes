/**
 * MR CONSTRUÇÕES — Landing page (js/site.js)
 * Sem dependências: i18n PT/EN/DE, navegação, parallax, expansão de imagem,
 * lightbox de projetos e formulário de candidatura (Formspree).
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     CONFIGURAÇÃO — editar aqui
     ------------------------------------------------------------------ */
  // Cole os IDs dos formulários criados em https://formspree.io (ex.: https://formspree.io/f/abcdwxyz)
  var FORM_ENDPOINT_CONTACTO = 'https://formspree.io/f/SEU_ID_AQUI';
  var FORM_ENDPOINT_CANDIDATURA = 'https://formspree.io/f/SEU_ID_AQUI';
  var CONTACT_EMAIL = 'geral@marcoribeiroconstrucoes.pt';
  var WHATSAPP = '351915680947';

  /* ------------------------------------------------------------------
     TRADUÇÕES (EN e DE: REVER POR NATIVO)
     ------------------------------------------------------------------ */
  var T = {
    pt: {
      'meta.title': 'MR Construções | Construção e Reabilitação em Portugal · Cofragem na Alemanha',
      'meta.desc': 'MR Construções — construção de habitações unifamiliares e reabilitação em Portugal; carpintaria de cofragem na Alemanha. Construir com rigor. Criar com propósito.',
      'priv.meta.title': 'Política de Privacidade | MR Construções',
      'priv.meta.desc': 'Política de Privacidade e tratamento de dados pessoais da MR Construções — Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Empresa', 'n.servicos': 'Serviços', 'n.projetos': 'Projetos', 'n.alemanha': 'Alemanha',
      'n.sub.s': 'Serviços', 'n.sub.a': 'Atuação', 'n.oport': 'Oportunidades', 'n.contactos': 'Contactos',
      'burger': 'Abrir menu', 'burger.x': 'Fechar menu', 'menu.aria': 'Navegação principal',
      'h.tag': 'Construir com rigor. Criar com propósito.', 'h.scroll': 'Scroll',
      'e.title': 'Construímos mais do que estruturas.',
      'e.body': 'Obras executadas com rigor, proximidade e atenção a cada detalhe. Do primeiro passo à entrega das chaves — em Portugal e na Alemanha.',
      'e.id1': 'Desde', 'e.id2': 'Atuação', 'e.id2v': 'Portugal · Alemanha', 'e.id3': 'Alvará IMPIC',
      'ph.arch': '[Fotografia arquitetónica]', 'ph.detail': '[Detalhe de obra]', 'ph.proj': '[Projeto]', 'ph.site': '[Obra em curso]', 'ph.de': '[Projeto na Alemanha]',
      's.title': 'O que fazemos.', 's.intro': 'Da construção de raiz à reabilitação integral — execução rigorosa em cada fase da obra.',
      's1.n': 'Construção de raiz', 's1.d': 'Moradias unifamiliares completas, do primeiro passo à entrega das chaves.',
      's2.n': 'Reabilitação e remodelação', 's2.d': 'Recuperação e renovação de edifícios e habitações existentes.',
      's3.n': 'Estruturas e construção civil', 's3.d': 'Execução estrutural em betão armado e trabalhos gerais de construção civil.',
      's4.n': 'Fachadas e isolamento térmico', 's4.d': 'Sistemas ETICS, revestimentos e proteção da envolvente exterior.',
      's5.n': 'Acabamentos e revestimentos', 's5.d': 'Alvenarias, revestimentos cerâmicos, pinturas e trabalhos complementares.',
      's6.n': 'Espaços exteriores', 's6.d': 'Piscinas, pavimentos cerâmicos ou em pedra e arranjos exteriores.',
      'p.title': 'Trabalho que permanece.', 'p.hint': 'Arquivo de obras · Clicar para ampliar', 'p.pause': 'Pausar', 'p.play': 'Continuar',
      'p1.n': 'Reabilitação de Fachadas', 'p2.n': 'Aplicação de sistema ETICS', 'p3.n': 'Reabilitação Integral de Moradia', 'p4.n': 'Reabilitação de Instalação Sanitária', 'p5.n': 'Piscina e Pavimentação Exterior', 'p6.n': 'Fachada e Isolamento Térmico', 'p7.n': 'Acabamentos e Revestimentos', 'p8.n': 'Reabilitação Exterior de Moradia',
      'p.more': 'E muitas outras obras concluídas em Portugal. Fale connosco para conhecer mais referências.', 'p.cta': 'Falar connosco', 'p.close': 'Fechar', 'p.lb.aria': 'Fotografia ampliada', 'p.prev': 'Projeto anterior', 'p.next': 'Próximo projeto',
      'd1.title': 'Além-fronteiras.',
      'd1.lead': 'Carpintaria de cofragem na Alemanha. Equipas especializadas, integradas em obras de estruturas em betão armado de diferentes dimensões.',
      'd1.h': 'Serviços na Alemanha', 'd1.1': 'Carpintaria de cofragem', 'd1.2': 'Execução de cofragem em obra', 'd1.3': 'Estruturas em betão armado', 'd1.4': 'Serviços a empresas e parceiros do setor',
      'd1.a': 'Áreas de atuação', 'd1.tbc': 'A confirmar', 'd1.b2b': 'Precisa de uma equipa de cofragem?', 'd1.b2bl': 'Contactar para parcerias', 'b2b.subj': 'Parceria — Carpintaria de Cofragem na Alemanha',
      'd2.title': 'Uma presença que constrói.',
      'd2.lead': 'Experiência operacional e capacidade de integração em equipas de obra, em projetos de diferentes dimensões e exigências técnicas.',
      'd2.refs': 'Referências', 'd2.ref': 'Projeto — a confirmar',
      'o.title': 'Constrói o teu futuro connosco.', 'o.lead': 'Equipas em Portugal e na Alemanha.', 'o.cta': 'Junta-te à equipa', 'o.v': 'Vagas abertas', 'o.none': 'Sem vagas publicadas neste momento. Envia-nos a tua candidatura.', 'o.slot': 'Vaga — a publicar',
      'c.title': 'Vamos construir algo?', 'c.lead': 'Fale connosco sobre o seu projeto em Portugal ou sobre equipas de cofragem na Alemanha.',
      'c.tel': 'Telefone', 'c.mail': 'Email', 'c.loc': 'Localização', 'c.soc': 'Redes', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão', 'c.wa': 'WhatsApp',
      'c.fk': 'Pedido de contacto', 'c.subj': 'Tipo de pedido', 'c.s1': 'Construção de raiz', 'c.s2': 'Reabilitação e remodelação', 'c.s3': 'Fachadas e isolamento térmico', 'c.s4': 'Parceria — Alemanha', 'c.s5': 'Outro',
      'c.msg': 'Mensagem', 'c.send': 'Enviar mensagem', 'c.ok': 'Mensagem enviada. Entraremos em contacto brevemente.',
      'f.nav': 'Navegação', 'f.de1': 'Alemanha — Serviços', 'f.de2': 'Alemanha — Atuação',
      'f.legal': 'Dados legais', 'f.seat': 'Sede: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Política de Privacidade', 'f.compl': 'Livro de Reclamações Eletrónico', 'f.rights': 'Todos os direitos reservados.', 'f.credit': 'Desenvolvido por', 'f.top': 'Voltar ao topo',
      'a.kicker': 'Candidatura', 'a.title': 'Junta-te à equipa.', 'a.close': 'Fechar',
      'a.name': 'Nome', 'a.phone': 'Telefone / WhatsApp', 'a.spec': 'Especialidade', 'a.res': 'Local de residência',
      'a.exp': 'Anos de experiência', 'a.exp.1': 'Menos de 1 ano', 'a.exp.2': '1–3 anos', 'a.exp.3': '3–5 anos', 'a.exp.4': '5–10 anos', 'a.exp.5': '10+ anos',
      'a.av': 'Disponibilidade para início', 'a.av.1': 'Imediata', 'a.av.2': 'Até 1 mês', 'a.av.3': 'Mais de 1 mês',
      'a.mk': 'Mercado de interesse', 'a.mk.1': 'Portugal', 'a.mk.2': 'Alemanha', 'a.mk.3': 'Indiferente', 'a.sel': 'Selecionar',
      'a.c1': 'Li e aceito a', 'a.c2': '.', 'a.send': 'Enviar candidatura', 'a.sending': 'A enviar…',
      'a.ok': 'Candidatura enviada. Entraremos em contacto brevemente.', 'a.err': 'Não foi possível enviar. Tente por WhatsApp ou geral@marcoribeiroconstrucoes.pt.',
      'a.val': 'Preencha todos os campos obrigatórios.', 'a.cons': 'Aceite a Política de Privacidade para continuar.', 'a.mail': 'Formulário ainda sem endpoint: a abrir o seu cliente de email.',
      'wa.text': 'Olá! Gostaria de falar com a MR Construções.', 'wa.aria': 'Falar com a MR Construções via WhatsApp',
      'priv.back': 'Voltar ao site', 'priv.kicker': 'Proteção de Dados · RGPD', 'priv.title': 'Política de Privacidade',
      'priv.draft': 'RASCUNHO — Documento preparado para revisão jurídica antes da publicação definitiva.',
      'priv.lead': 'Esta Política de Privacidade explica como a Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) recolhe e trata os dados pessoais submetidos através deste website, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).',
      'priv.s1.title': 'Responsável pelo tratamento',
      'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., NIF / NIPC 516590022, titular do Alvará IMPIC n.º 113987, com sede na Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Contacto para questões de privacidade: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Finalidades do tratamento',
      'priv.s2.body': 'Os dados pessoais recolhidos através dos formulários do website destinam-se exclusivamente a: (a) analisar e responder a pedidos de orçamento e contacto comercial; (b) avaliar e dar seguimento a candidaturas para integração nas nossas equipas em Portugal ou na Alemanha.',
      'priv.s3.title': 'Base legal',
      'priv.s3.body': 'O tratamento dos dados assenta na execução de diligências pré-contratuais a pedido do titular (artigo 6.º, n.º 1, alínea b) do RGPD) e no consentimento explícito prestado pelo utilizador mediante a seleção da caixa de validação antes do envio do formulário (artigo 6.º, n.º 1, alínea a) do RGPD).',
      'priv.s4.title': 'Dados pessoais recolhidos',
      'priv.s4.body': 'No formulário de contacto são recolhidos: nome, endereço de correio eletrónico, telefone (opcional), tipo de pedido e mensagem. No formulário de candidatura são recolhidos: nome, telefone ou WhatsApp, local de residência, especialidade profissional, anos de experiência, disponibilidade para início e mercado de interesse.',
      'priv.s5.title': 'Destinatários dos dados',
      'priv.s5.body': 'Os dados são tratados internamente pelos responsáveis pela orçamentação e recursos humanos da MR Construções. Para o encaminhamento técnico das mensagens enviadas pelos formulários, o website utiliza o serviço de processamento Formspree na qualidade de subcontratante técnico. Os dados não são vendidos nem cedidos a terceiros para fins publicitários.',
      'priv.s6.title': 'Prazo de conservação',
      'priv.s6.body': 'Os dados relativos a pedidos de orçamento são conservados durante o período necessário ao tratamento da solicitação ou até 24 meses caso não resulte na celebração de contrato. Os dados de candidaturas espontâneas são conservados pelo prazo máximo de 12 meses após a receção, salvo retirada prévia do consentimento.',
      'priv.s7.title': 'Direitos dos titulares dos dados',
      'priv.s7.body': 'O titular pode exercer a qualquer momento os direitos de acesso, retificação, apagamento, limitação do tratamento, portabilidade, oposição e retirada do consentimento (sem comprometer a licitude do tratamento efetuado até então), enviando pedido para geral@marcoribeiroconstrucoes.pt.',
      'priv.s8.title': 'Autoridade de controlo',
      'priv.s8.body': 'Caso considere que o tratamento dos seus dados viola o RGPD, assiste-lhe o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD), através de www.cnpd.pt.',
      'priv.s9.title': 'Cookies e armazenamento local',
      'priv.s9.body': 'Este website não utiliza cookies de analítica, estatística, publicidade ou rastreio de terceiros. Apenas é utilizado armazenamento técnico local do navegador (localStorage) para memorizar a preferência de idioma (PT, EN ou DE) escolhida pelo visitante.'
    },
    en: {
      'meta.title': 'MR Construções | Construction & Rehabilitation in Portugal · Formwork in Germany',
      'meta.desc': 'MR Construções — single-family homes and rehabilitation in Portugal; formwork carpentry in Germany. Build with rigour. Create with purpose.',
      'priv.meta.title': 'Privacy Policy | MR Construções',
      'priv.meta.desc': 'Privacy Policy and personal data processing of MR Construções — Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Company', 'n.servicos': 'Services', 'n.projetos': 'Projects', 'n.alemanha': 'Germany',
      'n.sub.s': 'Services', 'n.sub.a': 'Presence', 'n.oport': 'Careers', 'n.contactos': 'Contact',
      'burger': 'Open menu', 'burger.x': 'Close menu', 'menu.aria': 'Main navigation',
      'h.tag': 'Build with rigour. Create with purpose.', 'h.scroll': 'Scroll',
      'e.title': 'We build more than structures.',
      'e.body': 'Works delivered with rigour, proximity and attention to every detail. From the first step to the handover of the keys — in Portugal and Germany.',
      'e.id1': 'Since', 'e.id2': 'Operating in', 'e.id2v': 'Portugal · Germany', 'e.id3': 'IMPIC licence',
      'ph.arch': '[Architectural photography]', 'ph.detail': '[Project detail]', 'ph.proj': '[Project]', 'ph.site': '[Construction site]', 'ph.de': '[Germany project]',
      's.title': 'What we do.', 's.intro': 'From new builds to full rehabilitation — rigorous execution at every stage of the project.',
      's1.n': 'New build', 's1.d': 'Complete single-family homes, from the first step to the handover of the keys.',
      's2.n': 'Rehabilitation and remodelling', 's2.d': 'Restoration and renovation of existing buildings and homes.',
      's3.n': 'Structures and civil construction', 's3.d': 'Reinforced concrete structures and general civil construction works.',
      's4.n': 'Facades and thermal insulation', 's4.d': 'ETICS systems, claddings and protection of the building envelope.',
      's5.n': 'Finishes and coverings', 's5.d': 'Masonry, ceramic tiling, painting and complementary works.',
      's6.n': 'Outdoor spaces', 's6.d': 'Swimming pools, ceramic or stone paving and exterior landscaping.',
      'p.title': 'Work that remains.', 'p.hint': 'Project archive · Click to enlarge', 'p.pause': 'Pause', 'p.play': 'Resume',
      'p1.n': 'Facade Rehabilitation', 'p2.n': 'ETICS System Application', 'p3.n': 'Full House Rehabilitation', 'p4.n': 'Sanitary Facility Rehabilitation', 'p5.n': 'Swimming Pool and Exterior Paving', 'p6.n': 'Facade and Thermal Insulation', 'p7.n': 'Finishes and Coverings', 'p8.n': 'Exterior House Rehabilitation',
      'p.more': 'And many other completed projects in Portugal. Talk to us to see more references.', 'p.cta': 'Talk to us', 'p.close': 'Close', 'p.lb.aria': 'Enlarged photograph', 'p.prev': 'Previous project', 'p.next': 'Next project',
      'd1.title': 'Beyond borders.',
      'd1.lead': 'Formwork carpentry in Germany. Specialised teams integrated into reinforced concrete structure projects of different scales.',
      'd1.h': 'Services in Germany', 'd1.1': 'Formwork carpentry', 'd1.2': 'On-site formwork execution', 'd1.3': 'Reinforced concrete structures', 'd1.4': 'Services to companies and sector partners',
      'd1.a': 'Areas of operation', 'd1.tbc': 'To be confirmed', 'd1.b2b': 'Need a formwork team?', 'd1.b2bl': 'Contact us for partnerships', 'b2b.subj': 'Partnership — Formwork Carpentry in Germany',
      'd2.title': 'A presence that builds.',
      'd2.lead': 'Operational experience and the ability to integrate into site teams, on projects of different scales and technical demands.',
      'd2.refs': 'References', 'd2.ref': 'Project — to be confirmed',
      'o.title': 'Build your future with us.', 'o.lead': 'Teams in Portugal and Germany.', 'o.cta': 'Join the team', 'o.v': 'Open positions', 'o.none': 'No positions published at the moment. Send us your application.', 'o.slot': 'Position — to be published',
      'c.title': 'Shall we build something?', 'c.lead': 'Talk to us about your project in Portugal or formwork teams in Germany.',
      'c.tel': 'Phone', 'c.mail': 'Email', 'c.loc': 'Location', 'c.soc': 'Social', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal', 'c.wa': 'WhatsApp',
      'c.fk': 'Contact request', 'c.subj': 'Type of enquiry', 'c.s1': 'New build', 'c.s2': 'Rehabilitation and remodelling', 'c.s3': 'Facades and thermal insulation', 'c.s4': 'Partnership — Germany', 'c.s5': 'Other',
      'c.msg': 'Message', 'c.send': 'Send message', 'c.ok': 'Message sent. We will be in touch shortly.',
      'f.nav': 'Navigation', 'f.de1': 'Germany — Services', 'f.de2': 'Germany — Presence',
      'f.legal': 'Legal information', 'f.seat': 'Registered office: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Privacy Policy', 'f.compl': 'Electronic Complaints Book', 'f.rights': 'All rights reserved.', 'f.credit': 'Developed by', 'f.top': 'Back to top',
      'a.kicker': 'Application', 'a.title': 'Join the team.', 'a.close': 'Close',
      'a.name': 'Name', 'a.phone': 'Phone / WhatsApp', 'a.spec': 'Trade / specialty', 'a.res': 'Place of residence',
      'a.exp': 'Years of experience', 'a.exp.1': 'Under 1 year', 'a.exp.2': '1–3 years', 'a.exp.3': '3–5 years', 'a.exp.4': '5–10 years', 'a.exp.5': '10+ years',
      'a.av': 'Availability to start', 'a.av.1': 'Immediate', 'a.av.2': 'Within 1 month', 'a.av.3': 'More than 1 month',
      'a.mk': 'Market of interest', 'a.mk.1': 'Portugal', 'a.mk.2': 'Germany', 'a.mk.3': 'Either', 'a.sel': 'Select',
      'a.c1': 'I have read and accept the', 'a.c2': '.', 'a.send': 'Send application', 'a.sending': 'Sending…',
      'a.ok': 'Application sent. We will be in touch shortly.', 'a.err': 'Could not send. Please try WhatsApp or geral@marcoribeiroconstrucoes.pt.',
      'a.val': 'Please fill in all required fields.', 'a.cons': 'Please accept the Privacy Policy to continue.', 'a.mail': 'Form endpoint not configured yet: opening your email client.',
      'wa.text': 'Hello! I would like to talk to MR Construções.', 'wa.aria': 'Talk to MR Construções on WhatsApp',
      'priv.back': 'Back to website', 'priv.kicker': 'Data Protection · GDPR', 'priv.title': 'Privacy Policy',
      'priv.draft': 'DRAFT — Document prepared for legal review prior to final publication.',
      'priv.lead': 'This Privacy Policy explains how Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) collects and processes personal data submitted through this website, in accordance with the General Data Protection Regulation (GDPR).',
      'priv.s1.title': 'Data Controller',
      'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Tax ID (NIF/NIPC) 516590022, IMPIC License No. 113987, headquartered at Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Privacy contact: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Purposes of Processing',
      'priv.s2.body': 'Personal data collected through website forms are used exclusively to: (a) analyze and respond to quote and business inquiries; (b) evaluate and follow up on applications to join our teams in Portugal or Germany.',
      'priv.s3.title': 'Legal Basis',
      'priv.s3.body': 'Data processing is based on pre-contractual steps taken at the request of the data subject (Article 6(1)(b) GDPR) and on explicit consent given by checking the consent box prior to submission (Article 6(1)(a) GDPR).',
      'priv.s4.title': 'Personal Data Collected',
      'priv.s4.body': 'The contact form collects: name, email address, phone number (optional), type of enquiry and message. The application form collects: name, phone or WhatsApp, place of residence, trade specialty, years of experience, start availability and market of interest.',
      'priv.s5.title': 'Data Recipients',
      'priv.s5.body': 'Data are processed internally by MR Construções estimating and human resources staff. For technical routing of form submissions, the website uses Formspree as a technical data processor. Personal data are never sold or shared with third parties for marketing.',
      'priv.s6.title': 'Retention Period',
      'priv.s6.body': 'Quote inquiry data are kept for the period required to process the request or up to 24 months if no contract is concluded. Unsolicited job application data are retained for up to 12 months from receipt, unless consent is withdrawn earlier.',
      'priv.s7.title': 'Data Subject Rights',
      'priv.s7.body': 'You may at any time exercise your rights of access, rectification, erasure, restriction, portability, objection and withdrawal of consent (without affecting the lawfulness of prior processing) by emailing geral@marcoribeiroconstrucoes.pt.',
      'priv.s8.title': 'Supervisory Authority',
      'priv.s8.body': 'If you believe the processing of your data infringes the GDPR, you have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) at www.cnpd.pt.',
      'priv.s9.title': 'Cookies and Local Storage',
      'priv.s9.body': 'This website does not use third-party analytics, advertising or tracking cookies. Only browser local storage (localStorage) is used technically to remember the visitor’s selected language (PT, EN or DE).'
    },
    de: {
      'meta.title': 'MR Construções | Bau & Sanierung in Portugal · Schalungsbau in Deutschland',
      'meta.desc': 'MR Construções — Neubau und Sanierung von Wohnhäusern in Portugal; Schalungsbau in Deutschland. Mit Präzision bauen. Mit Haltung gestalten.',
      'priv.meta.title': 'Datenschutzerklärung | MR Construções',
      'priv.meta.desc': 'Datenschutzerklärung und Verarbeitung personenbezogener Daten von MR Construções — Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Unternehmen', 'n.servicos': 'Leistungen', 'n.projetos': 'Projekte', 'n.alemanha': 'Deutschland',
      'n.sub.s': 'Leistungen', 'n.sub.a': 'Präsenz', 'n.oport': 'Karriere', 'n.contactos': 'Kontakt',
      'burger': 'Menü öffnen', 'burger.x': 'Menü schließen', 'menu.aria': 'Hauptnavigation',
      'h.tag': 'Mit Präzision bauen. Mit Haltung gestalten.', 'h.scroll': 'Scroll',
      'e.title': 'Wir bauen mehr als Strukturen.',
      'e.body': 'Bauprojekte, ausgeführt mit Präzision, Nähe und Liebe zum Detail. Vom ersten Schritt bis zur Schlüsselübergabe — in Portugal und in Deutschland.',
      'e.id1': 'Seit', 'e.id2': 'Tätig in', 'e.id2v': 'Portugal · Deutschland', 'e.id3': 'IMPIC-Zulassung',
      'ph.arch': '[Architekturfotografie]', 'ph.detail': '[Projektdetail]', 'ph.proj': '[Projekt]', 'ph.site': '[Baustelle]', 'ph.de': '[Projekt in Deutschland]',
      's.title': 'Was wir tun.', 's.intro': 'Vom Neubau bis zur Komplettsanierung — präzise Ausführung in jeder Bauphase.',
      's1.n': 'Neubau', 's1.d': 'Komplette Einfamilienhäuser, vom ersten Schritt bis zur Schlüsselübergabe.',
      's2.n': 'Sanierung und Umbau', 's2.d': 'Instandsetzung und Erneuerung bestehender Gebäude und Wohnhäuser.',
      's3.n': 'Rohbau und Hochbau', 's3.d': 'Stahlbetonbau und allgemeine Hochbauarbeiten.',
      's4.n': 'Fassaden und Wärmedämmung', 's4.d': 'WDVS-Systeme (ETICS), Verkleidungen und Schutz der Gebäudehülle.',
      's5.n': 'Ausbau und Beläge', 's5.d': 'Mauerwerk, Fliesenarbeiten, Malerarbeiten und ergänzende Ausbauarbeiten.',
      's6.n': 'Außenanlagen', 's6.d': 'Pools, Keramik- oder Natursteinbeläge und Gestaltung des Außenbereichs.',
      'p.title': 'Arbeit, die bleibt.', 'p.hint': 'Projektarchiv · Zum Vergrößern klicken', 'p.pause': 'Pausieren', 'p.play': 'Fortsetzen',
      'p1.n': 'Fassadensanierung', 'p2.n': 'WDVS-Fassadendämmung (ETICS)', 'p3.n': 'Komplettsanierung eines Wohnhauses', 'p4.n': 'Sanierung einer Sanitäranlage', 'p5.n': 'Poolbau und Außenpflasterung', 'p6.n': 'Fassade und Wärmedämmung', 'p7.n': 'Ausbau und Beläge', 'p8.n': 'Außensanierung eines Wohnhauses',
      'p.more': 'Und viele weitere abgeschlossene Projekte in Portugal. Sprechen Sie mit uns für weitere Referenzen.', 'p.cta': 'Kontakt aufnehmen', 'p.close': 'Schließen', 'p.lb.aria': 'Vergrößerte Aufnahme', 'p.prev': 'Vorheriges Projekt', 'p.next': 'Nächstes Projekt',
      'd1.title': 'Über Grenzen hinweg.',
      'd1.lead': 'Schalungsbau in Deutschland. Spezialisierte Teams, eingebunden in Stahlbetonbauprojekte unterschiedlicher Größe.',
      'd1.h': 'Leistungen in Deutschland', 'd1.1': 'Schalungsbau', 'd1.2': 'Schalungsarbeiten auf der Baustelle', 'd1.3': 'Stahlbetonkonstruktionen', 'd1.4': 'Leistungen für Unternehmen und Partner der Branche',
      'd1.a': 'Einsatzgebiete', 'd1.tbc': 'Wird bestätigt', 'd1.b2b': 'Benötigen Sie ein Schalungsteam?', 'd1.b2bl': 'Kontakt für Partnerschaften', 'b2b.subj': 'Partnerschaft — Schalungsbau in Deutschland',
      'd2.title': 'Eine Präsenz, die baut.',
      'd2.lead': 'Operative Erfahrung und die Fähigkeit, sich in Baustellenteams zu integrieren — bei Projekten unterschiedlicher Größe und technischer Anforderungen.',
      'd2.refs': 'Referenzen', 'd2.ref': 'Projekt — wird bestätigt',
      'o.title': 'Baue deine Zukunft mit uns.', 'o.lead': 'Teams in Portugal und Deutschland.', 'o.cta': 'Werde Teil des Teams', 'o.v': 'Offene Stellen', 'o.none': 'Derzeit keine Stellen ausgeschrieben. Senden Sie uns Ihre Bewerbung.', 'o.slot': 'Stelle — wird veröffentlicht',
      'c.title': 'Bauen wir etwas?', 'c.lead': 'Sprechen Sie mit uns über Ihr Bauprojekt in Portugal oder Schalungsteams in Deutschland.',
      'c.tel': 'Telefon', 'c.mail': 'E-Mail', 'c.loc': 'Standort', 'c.soc': 'Soziale Medien', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal', 'c.wa': 'WhatsApp',
      'c.fk': 'Kontaktanfrage', 'c.subj': 'Art der Anfrage', 'c.s1': 'Neubau', 'c.s2': 'Sanierung und Umbau', 'c.s3': 'Fassaden und Wärmedämmung', 'c.s4': 'Partnerschaft — Deutschland', 'c.s5': 'Sonstiges',
      'c.msg': 'Nachricht', 'c.send': 'Nachricht senden', 'c.ok': 'Nachricht gesendet. Wir melden uns in Kürze.',
      'f.nav': 'Navigation', 'f.de1': 'Deutschland — Leistungen', 'f.de2': 'Deutschland — Präsenz',
      'f.legal': 'Rechtliche Angaben', 'f.seat': 'Sitz: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Datenschutzerklärung', 'f.compl': 'Elektronisches Beschwerdebuch', 'f.rights': 'Alle Rechte vorbehalten.', 'f.credit': 'Entwickelt von', 'f.top': 'Nach oben',
      'a.kicker': 'Bewerbung', 'a.title': 'Werde Teil des Teams.', 'a.close': 'Schließen',
      'a.name': 'Name', 'a.phone': 'Telefon / WhatsApp', 'a.spec': 'Fachgebiet / Beruf', 'a.res': 'Wohnort',
      'a.exp': 'Jahre Berufserfahrung', 'a.exp.1': 'Unter 1 Jahr', 'a.exp.2': '1–3 Jahre', 'a.exp.3': '3–5 Jahre', 'a.exp.4': '5–10 Jahre', 'a.exp.5': '10+ Jahre',
      'a.av': 'Verfügbar ab', 'a.av.1': 'Sofort', 'a.av.2': 'Innerhalb 1 Monats', 'a.av.3': 'Mehr als 1 Monat',
      'a.mk': 'Gewünschter Markt', 'a.mk.1': 'Portugal', 'a.mk.2': 'Deutschland', 'a.mk.3': 'Egal', 'a.sel': 'Auswählen',
      'a.c1': 'Ich habe die', 'a.c2': ' gelesen und akzeptiere sie.', 'a.send': 'Bewerbung senden', 'a.sending': 'Wird gesendet…',
      'a.ok': 'Bewerbung gesendet. Wir melden uns in Kürze.', 'a.err': 'Senden nicht möglich. Bitte WhatsApp oder geral@marcoribeiroconstrucoes.pt nutzen.',
      'a.val': 'Bitte füllen Sie alle Pflichtfelder aus.', 'a.cons': 'Bitte akzeptieren Sie die Datenschutzerklärung.', 'a.mail': 'Formular-Endpunkt noch nicht konfiguriert: Ihr E-Mail-Programm wird geöffnet.',
      'wa.text': 'Hallo! Ich möchte mit MR Construções sprechen.', 'wa.aria': 'MR Construções über WhatsApp kontaktieren',
      'priv.back': 'Zurück zur Website', 'priv.kicker': 'Datenschutz · DSGVO', 'priv.title': 'Datenschutzerklärung',
      'priv.draft': 'ENTWURF — Dokument zur rechtlichen Prüfung vor der endgültigen Veröffentlichung.',
      'priv.lead': 'Diese Datenschutzerklärung erläutert, wie die Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) personenbezogene Daten über diese Website gemäß der Datenschutz-Grundverordnung (DSGVO) erhebt und verarbeitet.',
      'priv.s1.title': 'Verantwortlicher',
      'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Steuernummer (NIF/NIPC) 516590022, IMPIC-Zulassung Nr. 113987, mit Sitz in der Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Kontakt für Datenschutzfragen: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Zwecke der Verarbeitung',
      'priv.s2.body': 'Die über die Formulare dieser Website erhobenen personenbezogenen Daten dienen ausschließlich: (a) der Bearbeitung und Beantwortung von Angebots- und Geschäftsanfragen; (b) der Prüfung und Bearbeitung von Bewerbungen für unsere Teams in Portugal oder Deutschland.',
      'priv.s3.title': 'Rechtsgrundlage',
      'priv.s3.body': 'Die Datenverarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person (Art. 6 Abs. 1 lit. b DSGVO) sowie auf Grundlage Ihrer ausdrücklichen Einwilligung durch Aktivierung des Kontrollkästchens (Art. 6 Abs. 1 lit. a DSGVO).',
      'priv.s4.title': 'Erhobene personenbezogene Daten',
      'priv.s4.body': 'Im Kontaktformular werden erhoben: Name, E-Mail-Adresse, Telefonnummer (optional), Art der Anfrage und Nachricht. Im Bewerbungsformular werden erhoben: Name, Telefon/WhatsApp, Wohnort, Fachgebiet, Jahre Berufserfahrung, Verfügbarkeit und gewünschter Markt.',
      'priv.s5.title': 'Empfänger der Daten',
      'priv.s5.body': 'Die Daten werden intern von den zuständigen Mitarbeitern für Kalkulation und Personalwesen bei MR Construções verarbeitet. Für die technische Übermittlung der Formularnachrichten nutzen wir den Dienst Formspree als Auftragsverarbeiter. Eine Weitergabe oder ein Verkauf an Dritte zu Werbezwecken findet nicht statt.',
      'priv.s6.title': 'Speicherdauer',
      'priv.s6.body': 'Daten zu Angebotsanfragen werden für den zur Bearbeitung erforderlichen Zeitraum bzw. bis zu 24 Monate aufbewahrt, sofern kein Vertrag zustande kommt. Bewerbungsdaten werden höchstens 12 Monate nach Eingang gespeichert, sofern die Einwilligung nicht zuvor widerrufen wird.',
      'priv.s7.title': 'Rechte der betroffenen Personen',
      'priv.s7.body': 'Sie können jederzeit Ihre Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Widerruf der Einwilligung (ohne die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung zu berühren) per E-Mail an geral@marcoribeiroconstrucoes.pt ausüben.',
      'priv.s8.title': 'Aufsichtsbehörde',
      'priv.s8.body': 'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt, haben Sie das Recht auf Beschwerde bei der portugiesischen Datenschutzbehörde (CNPD) unter www.cnpd.pt.',
      'priv.s9.title': 'Cookies und lokale Speicherung',
      'priv.s9.body': 'Diese Website verwendet keine Analyse-, Statistik-, Werbe- oder Tracking-Cookies von Drittanbietern. Es wird lediglich technisch der lokale Browser-Speicher (localStorage) genutzt, um Ihre Sprachauswahl (PT, EN oder DE) zu speichern.'
    }
  };

  var doc = document, root = doc.documentElement, body = doc.body;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'pt';
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var t = function (k) { return (T[lang] && T[lang][k]) || T.pt[k] || ''; };

  root.classList.remove('no-js'); root.classList.add('js');

  /* ------------------------------ Grelha contínua de projetos ------------------------------ */
  var wall = $('[data-prj-wall]');
  var prjToggle = $('[data-prj-toggle]');
  if (wall) {
    $$('.prj-track', wall).forEach(function (track) {
      $$('.prj-card', track).forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.classList.add('prj-clone');
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('tabindex', '-1');
        track.appendChild(clone);
      });
    });
    if (prjToggle) {
      prjToggle.addEventListener('click', function () {
        var paused = wall.classList.toggle('paused');
        prjToggle.setAttribute('aria-pressed', String(paused));
        prjToggle.setAttribute('data-i18n', paused ? 'p.play' : 'p.pause');
        prjToggle.textContent = t(paused ? 'p.play' : 'p.pause');
      });
    }
    if ('IntersectionObserver' in window && !reduce) {
      var wallIo = new IntersectionObserver(function (es) {
        wall.classList.toggle('offscreen', !es[0].isIntersecting);
      }, { rootMargin: '140px 0px' });
      wallIo.observe(wall);
    }
  }

  /* ------------------------------ i18n ------------------------------ */
  var isPrivacy = body.getAttribute('data-page') === 'privacy';
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
    doc.title = t(isPrivacy ? 'priv.meta.title' : 'meta.title') || doc.title;
    if (metaDesc) metaDesc.setAttribute('content', t(isPrivacy ? 'priv.meta.desc' : 'meta.desc') || metaDesc.getAttribute('content'));
    $$('[data-i18n]').forEach(function (el) { var v = t(el.getAttribute('data-i18n')); if (v) el.textContent = v; });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $$('[data-i18n-label]').forEach(function (el) { el.setAttribute('data-label', t(el.getAttribute('data-i18n-label'))); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    var wa = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(t('wa.text'));
    $$('[data-wa]').forEach(function (a) { a.href = wa; });
    var b2b = $('[data-b2b]');
    if (b2b) b2b.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(t('b2b.subj'));
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

  /* ------------------------------ Scroll: nav, parallax, expansão ------------------------------ */
  var nav = $('.nav'), heroImg = $('.hero-img'), hero = $('.hero');
  var frames = $$('.frame[data-par]'), expands = $$('[data-expand]');
  var secs = $$('main section[id]');
  var links = $$('[data-sec]');
  var ticking = false;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function frame() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset, vh = window.innerHeight;
    if (nav) nav.classList.toggle('solid', isPrivacy || y > 60);

    if (heroImg && !reduce && y < vh * 1.2) {
      heroImg.style.setProperty('--hy', (y * 0.22).toFixed(1) + 'px');
    }
    if (!reduce) {
      frames.forEach(function (f) {
        var r = f.getBoundingClientRect();
        if (r.bottom < -80 || r.top > vh + 80) return;
        var v = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
        f.style.setProperty('--r', clamp(v, -1, 1).toFixed(3));
      });
      expands.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var p = clamp((vh * 0.92 - r.top) / (vh * 0.62), 0, 1);
        el.style.setProperty('--p', p.toFixed(3));
      });
    } else { expands.forEach(function (el) { el.style.setProperty('--p', 1); }); }

    var cur = secs[0] ? secs[0].id : '';
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= vh * 0.42) cur = s.id; });
    links.forEach(function (a) {
      var grp = a.getAttribute('data-sec-group');
      var on = a.getAttribute('data-sec') === cur || (grp && cur.indexOf(grp + '-') === 0);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);
  frame();

  /* Entrada do hero */
  window.addEventListener('load', function () { requestAnimationFrame(function () { root.classList.add('ready'); }); });
  setTimeout(function () { root.classList.add('ready'); }, 1400);

  /* ------------------------------ Lightbox de projetos ------------------------------ */
  var lb = $('#lb');
  if (lb && lb.showModal) {
    var lbImg = $('img', lb), lbCap = $('.lb-cap', lb), lbCount = $('.lb-count', lb);
    var projects = $$('.prj-card:not(.prj-clone)').sort(function (a, b) {
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

    if (wall) {
      wall.addEventListener('click', function (e) {
        var card = e.target.closest('.prj-card');
        if (!card) return;
        e.preventDefault();
        renderLb(Number(card.getAttribute('data-idx')) || 0);
        lb.showModal();
        body.classList.add('dlg-open');
      });
    }

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

  /* ------------------------------ Formulário de contacto ------------------------------ */
  bindForm($('#contact-form'), $('#contact-status'), {
    endpoint: FORM_ENDPOINT_CONTACTO,
    origin: 'Pedido de contacto — landing page',
    subject: function (d) { return 'Contacto — site: ' + (d.assunto || 'Geral') + ' (' + d.nome + ')'; },
    okKey: 'c.ok',
    sendKey: 'c.send'
  });

  /* ------------------------------ Candidatura ------------------------------ */
  var dlg = $('#apply');
  if (dlg && dlg.showModal) {
    var form = $('#apply-form'), status = $('#apply-status');
    var opener = null;
    $$('[data-open-apply]').forEach(function (b) {
      b.addEventListener('click', function () {
        opener = b;
        status.textContent = '';
        status.className = 'status';
        dlg.showModal();
        body.classList.add('dlg-open');
      });
    });
    $$('[data-close-apply]').forEach(function (b) { b.addEventListener('click', function () { dlg.close(); }); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () { body.classList.remove('dlg-open'); if (opener) opener.focus(); });

    bindForm(form, status, {
      endpoint: FORM_ENDPOINT_CANDIDATURA,
      origin: 'Candidatura — landing page',
      subject: function (d) { return 'Candidatura — site: ' + d.especialidade + ' (' + d.nome + ')'; },
      okKey: 'a.ok',
      sendKey: 'a.send'
    });
  }

  var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();
})();
