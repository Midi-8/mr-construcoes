/**
 * MR CONSTRUÇÕES - Script unificado (js/site.js)
 * Sem dependências: i18n PT/EN/DE (4 páginas), navegação, comparador antes/depois,
 * carrossel interativo de projetos (auto + dedo + rato + trackpad), lightbox,
 * mapa interativo da Alemanha e formulários (Orçamento + Emprego).
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     CONFIGURAÇÃO - editar aqui
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
      'meta.home.title': 'MR Construções',
      'meta.home.desc': 'MR Construções - construção de habitações unifamiliares e reabilitação em Portugal; carpintaria de cofragem na Alemanha. Construir com rigor. Criar com propósito.',
      'meta.germany.title': 'MR Construções',
      'meta.germany.desc': 'Equipas especializadas em carpintaria de cofragem e estruturas em betão armado na Alemanha: Dortmund, Munique, Berlim, Hamburgo, Brémen e Düsseldorf.',
      'meta.jobs.title': 'MR Construções',
      'meta.jobs.desc': 'Recrutamento MR Construções. Candidate-se para integrar as nossas equipas de construção em Portugal ou de carpintaria de cofragem na Alemanha.',
      'meta.privacy.title': 'MR Construções',
      'meta.privacy.desc': 'Política de Privacidade e tratamento de dados pessoais da MR Construções - Marco Paulo Ribeiro Unipessoal, Lda.',
      'meta.terms.title': 'MR Construções',
      'meta.terms.desc': 'Termos e Condições de utilização, aviso legal e Resolução Alternativa de Litígios (RAL) da MR Construções - Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Empresa', 'n.servicos': 'Serviços', 'n.projetos': 'Projetos', 'n.alemanha': 'Alemanha', 'n.emprego': 'Recrutamento', 'n.orcamento': 'Orçamento',
      'burger': 'Abrir menu', 'burger.x': 'Fechar menu', 'menu.aria': 'Navegação principal',
      'h.tag': 'Construir com rigor. Criar com propósito.', 'h.scroll': 'Scroll',
      'e.title': 'Construímos mais do que estruturas.', 'e.sub': 'Solidez construtiva e acompanhamento próximo, do primeiro passo à entrega.',
      'e.body': 'Obras executadas com rigor, proximidade e atenção a cada detalhe. Do primeiro passo à entrega das chaves - em Portugal e na Alemanha.',
      'e.id1': 'Desde', 'e.id2': 'Atuação', 'e.id2v': 'Portugal · Alemanha', 'e.id3': 'Alvará IMPIC', 'e.id4': 'Coordenadas',
      'e.de': 'Conhecer atuação na Alemanha',
      'ba.aria': 'Comparar antes e depois', 'ba.cap': 'Reabilitação de Moradia · V. N. Famalicão',
      's.title': 'O que fazemos.', 's.sub': 'Da construção de raiz à reabilitação integral, com rigor em cada fase da obra.',
      's1.n': 'Construção de raiz', 's1.d': 'Moradias unifamiliares completas, do primeiro passo à entrega das chaves.',
      's2.n': 'Reabilitação e remodelação', 's2.d': 'Recuperação e renovação de edifícios e habitações existentes.',
      's3.n': 'Estruturas e construção civil', 's3.d': 'Execução estrutural em betão armado e trabalhos gerais de construção civil.',
      's4.n': 'Fachadas e isolamento térmico', 's4.d': 'Sistemas ETICS, revestimentos e proteção da envolvente exterior.',
      's5.n': 'Acabamentos e revestimentos', 's5.d': 'Alvenarias, revestimentos cerâmicos, pinturas e trabalhos complementares.',
      's6.n': 'Espaços exteriores', 's6.d': 'Piscinas, pavimentos cerâmicos ou em pedra e arranjos exteriores.',
      'p.title': 'Trabalho que permanece.', 'p.sub': 'Uma seleção de obras executadas em Portugal e na Alemanha.',
      'p1.n': 'Reabilitação de Fachadas', 'p2.n': 'Aplicação de sistema ETICS', 'p3.n': 'Reabilitação Integral de Moradia', 'p4.n': 'Reabilitação de Instalação Sanitária', 'p5.n': 'Piscina e Pavimentação Exterior', 'p6.n': 'Fachada e Isolamento Térmico', 'p7.n': 'Acabamentos e Revestimentos', 'p8.n': 'Reabilitação Exterior de Moradia', 'p9.n': 'Estruturas e Cofragem em Betão', 'p9.m': 'Alemanha',
      'p.more': 'Cada obra reflete o mesmo compromisso com o rigor construtivo e o detalhe, em Portugal e na Alemanha.', 'p.close': 'Fechar', 'p.lb.aria': 'Fotografia ampliada', 'p.prev': 'Projeto anterior', 'p.next': 'Próximo projeto',
      'c.title': 'Peça o seu orçamento.', 'c.lead': 'Fale connosco sobre o seu projeto de construção ou reabilitação em Portugal.',
      'c.tel': 'Telefone', 'c.mail': 'Email', 'c.loc': 'Localização', 'c.soc': 'Redes', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão', 'c.wa': 'WhatsApp',
      'c.fk': 'Pedido de orçamento', 'c.place': 'Localização da obra', 'c.subj': 'Tipo de intervenção',
      'c.s1': 'Construção de raiz', 'c.s2': 'Reabilitação e remodelação', 'c.s3': 'Fachadas e isolamento térmico', 'c.s5': 'Outro',
      'c.msg': 'Descrição do projeto', 'c.send': 'Pedir orçamento', 'c.ok': 'Pedido enviado. Entraremos em contacto brevemente.',
      'de.kicker': 'Alemanha · Carpintaria de Cofragem',
      'd1.title': 'Além-fronteiras.', 'd1.lead': 'Carpintaria de cofragem na Alemanha. Equipas especializadas, integradas em obras de estruturas em betão armado de diferentes dimensões e exigências técnicas.',
      'd1.1': 'Carpintaria de cofragem', 'd1.2': 'Execução de cofragem em obra', 'd1.3': 'Estruturas em betão armado', 'd1.4': 'Serviços a empresas e parceiros do setor',
      'd2.title': 'Uma presença que constrói.', 'd2.lead': 'Experiência operacional, coordenação em estaleiro e capacidade de integração em equipas de obra, contribuindo diariamente para a execução rigorosa de estruturas em betão armado.',
      'de.map.title': 'Zonas onde atuamos.', 'de.map.desc': 'Equipas mobilizadas em vários polos construtivos da Alemanha, respondendo com flexibilidade às exigências de cada obra.',
      'de.gal.title': 'Em obra na Alemanha.', 'de.gal.sub': 'Registos reais das nossas equipas em estaleiros de betão armado e cofragem.',
      'de.gal.p1': 'Cofragem de Muro', 'de.gal.p2': 'Obra de Grande Escala', 'de.gal.p3': 'Estruturas em Betão Armado', 'de.gal.p4': 'Equipa MR em Obra', 'de.gal.p5': 'Estaleiro em Betão Armado', 'de.gal.more': 'Equipas preparadas para integrar projetos em qualquer ponto da Alemanha.',
      'city.dortmund': 'Dortmund', 'city.munich': 'Munique', 'city.berlin': 'Berlim', 'city.hamburg': 'Hamburgo', 'city.bremen': 'Brémen', 'city.dusseldorf': 'Düsseldorf',
      'reg.nrw': 'Renânia do Norte-Vestfália', 'reg.bavaria': 'Baviera', 'reg.berlin': 'Berlim', 'reg.hamburg': 'Hamburgo', 'reg.bremen': 'Brémen',
      'de.b2b.kicker': 'Para empresas e parceiros', 'd1.b2b': 'Precisa de uma equipa de cofragem?', 'de.b2b.desc': 'Prestamos serviços de carpintaria de cofragem a empresas e parceiros do setor da construção na Alemanha. Fale connosco sobre o seu projeto.',
      'd1.b2bl': 'Contactar para parcerias', 'de.b2b.email': 'Enviar email', 'b2b.subj': 'Parceria - Carpintaria de Cofragem na Alemanha',
      'wa.b2b.text': 'Olá! Represento uma empresa e gostaria de falar sobre serviços de carpintaria de cofragem na Alemanha.',
      'de.jobs.link': 'Recrutamento',
      'j.kicker': 'Recrutamento · Portugal & Alemanha', 'o.title': 'Constrói o teu futuro connosco.', 'j.lead': 'Procuramos profissionais dedicados para integrar as nossas equipas de construção em Portugal e de carpintaria de cofragem na Alemanha.',
      'j.sk.aria': 'Competências humanas valorizadas em obra', 'j.sk.kicker': 'O que valorizamos', 'j.sk.list': 'Soft skills valorizadas', 'j.scroll.aria': 'Ir para o formulário de candidatura',
      'j.sk1.t': 'Rigor no detalhe', 'j.sk1.d': 'Atenção a cada medida, alinhamento e acabamento - o padrão que define cada obra.',
      'j.sk2.t': 'Espírito de equipa', 'j.sk2.d': 'Coordenação, entreajuda e respeito diário em estaleiro - nenhuma estrutura se levanta sozinha.',
      'j.sk3.t': 'Compromisso e pontualidade', 'j.sk3.d': 'Seriedade, presença assídua e responsabilidade total pelo trabalho que se assume.',
      'j.sk4.t': 'Segurança e método', 'j.sk4.d': 'Organização em obra, disciplina técnica e cuidado constante com toda a equipa.',
      'j.sk5.t': 'Autonomia e iniciativa', 'j.sk5.d': 'Proatividade no terreno e capacidade prática para antecipar e resolver imprevistos.',
      'j.sk6.t': 'Vontade de evoluir', 'j.sk6.d': 'Abertura para aprender novas técnicas e crescer connosco em Portugal e na Alemanha.',
      'j.side.desc': 'Mesmo sem vaga específica aberta, analisamos todas as candidaturas espontâneas para futuras mobilizações.',
      'a.kicker': 'Candidatura', 'a.title': 'Junta-te à equipa.',
      'a.name': 'Nome', 'a.phone': 'Telefone / WhatsApp', 'a.spec': 'Especialidade', 'a.res': 'Local de residência',
      'a.exp': 'Anos de experiência', 'a.exp.1': 'Menos de 1 ano', 'a.exp.2': '1-3 anos', 'a.exp.3': '3-5 anos', 'a.exp.4': '5-10 anos', 'a.exp.5': '10+ anos',
      'a.av': 'Disponibilidade para início', 'a.av.1': 'Imediata', 'a.av.2': 'Até 1 mês', 'a.av.3': 'Mais de 1 mês',
      'a.mk': 'Mercado de interesse', 'a.mk.1': 'Portugal', 'a.mk.2': 'Alemanha', 'a.mk.3': 'Indiferente', 'a.sel': 'Selecionar',
      'a.deexp': 'Já trabalhou na Alemanha?', 'a.yes': 'Sim', 'a.no': 'Não', 'a.notes': 'Notas / Experiência (opcional)',
      'a.c1': 'Usamos os seus dados apenas para responder a este pedido, nos termos da', 'a.c2': '.', 'a.send': 'Enviar candidatura', 'a.sending': 'A enviar…',
      'a.ok': 'Candidatura enviada. Entraremos em contacto brevemente.', 'a.err': 'Não foi possível enviar. Tente por WhatsApp ou geral@marcoribeiroconstrucoes.pt.',
      'a.val': 'Preencha todos os campos obrigatórios.', 'a.mail': 'Formulário ainda sem endpoint: a abrir o seu cliente de email.',
      'f.nav': 'Navegação', 'f.ct': 'Contactos', 'f.legal': 'Dados legais', 'f.seat': 'Sede: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Política de Privacidade', 'f.terms': 'Termos e Condições', 'f.compl': 'Livro de Reclamações Eletrónico', 'f.rights': 'Todos os direitos reservados.', 'f.credit': 'Desenvolvido por', 'f.top': 'Topo',
      'wa.text': 'Olá! Gostaria de falar com a MR Construções.', 'wa.float.aria': 'Contactar via WhatsApp',
      'priv.back': 'Voltar ao site', 'priv.kicker': 'Proteção de Dados · RGPD', 'priv.title': 'Política de Privacidade',
      'priv.lead': 'Esta Política de Privacidade explica como a Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) recolhe e trata os dados pessoais submetidos através deste website, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).',
      'priv.s1.title': 'Responsável pelo tratamento', 'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., NIF / NIPC 516590022, titular do Alvará IMPIC n.º 113987, com sede na Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Contacto para questões de privacidade: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Finalidades do tratamento', 'priv.s2.body': 'Os dados pessoais recolhidos através dos formulários do website destinam-se exclusivamente a: (a) analisar e responder a pedidos de orçamento e contacto comercial; (b) avaliar e dar seguimento a candidaturas para integração nas nossas equipas em Portugal ou na Alemanha.',
      'priv.s3.title': 'Base legal', 'priv.s3.body': 'O tratamento dos dados assenta na execução de diligências pré-contratuais a pedido do titular (artigo 6.º, n.º 1, alínea b) do RGPD), no interesse legítimo de resposta a pedidos de contacto e no consentimento livremente prestado ao submeter voluntariamente os formulários (artigo 6.º, n.º 1, alínea a) do RGPD).',
      'priv.s4.title': 'Dados pessoais recolhidos', 'priv.s4.body': 'No formulário de pedido de orçamento são recolhidos: nome, email, telefone, localização da obra, tipo de intervenção e descrição do projeto. No formulário de recrutamento são recolhidos: nome, telefone ou WhatsApp, local de residência, especialidade, anos de experiência, disponibilidade, mercado de interesse e notas opcionais.',
      'priv.s5.title': 'Destinatários dos dados', 'priv.s5.body': 'Os dados são tratados internamente pelos responsáveis pela orçamentação e recursos humanos da MR Construções. Para o encaminhamento técnico das mensagens enviadas pelos formulários, o website utiliza o serviço de processamento Formspree na qualidade de subcontratante técnico, com salvaguardas adequadas ao abrigo do RGPD. Os dados não são vendidos nem cedidos a terceiros para fins publicitários.',
      'priv.s6.title': 'Prazo de conservação', 'priv.s6.body': 'Os dados relativos a pedidos de orçamento são conservados durante o período necessário ao tratamento da solicitação ou até 24 meses caso não resulte na celebração de contrato. Os dados de candidaturas espontâneas são conservados pelo prazo máximo de 12 meses após a receção, salvo retirada prévia do consentimento.',
      'priv.s7.title': 'Direitos dos titulares dos dados', 'priv.s7.body': 'O titular pode exercer a qualquer momento os direitos de acesso, retificação, apagamento, limitação do tratamento, portabilidade, oposição e retirada do consentimento (sem comprometer a licitude do tratamento efetuado até então), enviando pedido para geral@marcoribeiroconstrucoes.pt.',
      'priv.s8.title': 'Autoridade de controlo', 'priv.s8.body': 'Caso considere que o tratamento dos seus dados viola o RGPD, assiste-lhe o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD), através de www.cnpd.pt.',
      'priv.s9.title': 'Cookies e armazenamento local', 'priv.s9.body': 'Este website não utiliza cookies de analítica, estatística, publicidade ou rastreio de terceiros, e aloja localmente a sua tipografia sem ligações a servidores externos de fontes. Apenas é utilizado armazenamento técnico local do navegador (localStorage) para memorizar a preferência de idioma (PT, EN ou DE) escolhida pelo visitante.',
      'terms.kicker': 'Aviso Legal · Utilização', 'terms.title': 'Termos e Condições',
      'terms.lead': 'Estes Termos e Condições regulam o acesso e a utilização do website institucional da Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções), bem como a informação legal obrigatória aplicável.',
      'terms.s1.title': 'Identificação da entidade', 'terms.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., com a marca comercial MR Construções, NIF / NIPC 516590022, titular do Alvará de Empreiteiro de Obras Particulares IMPIC n.º 113987, com sede na Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Contactos: +351 915 680 947 e geral@marcoribeiroconstrucoes.pt.',
      'terms.s2.title': 'Conteúdos e pedidos de orçamento', 'terms.s2.body': 'A informação, fotografias e vídeos apresentados neste website têm carácter estritamente informativo e demonstrativo da atividade da MR Construções. O envio de pedidos de orçamento ou contactos não constitui proposta vinculativa nem celebração de contrato, ficando qualquer execução de obra sujeita a análise técnica, medição e acordo escrito entre as partes.',
      'terms.s3.title': 'Propriedade intelectual', 'terms.s3.body': 'Todos os textos, fotografias de obras, vídeos, elementos gráficos, marcas e logótipos presentes neste website são propriedade da MR Construções ou utilizados com a devida autorização, sendo proibida a sua reprodução, cópia ou utilização comercial sem consentimento prévio por escrito.',
      'terms.s4.title': 'Responsabilidade e ligações externas', 'terms.s4.body': 'A MR Construções procura manter a informação do website atualizada e acessível, mas não garante a ausência absoluta de interrupções técnicas. As ligações para serviços externos (como WhatsApp, Instagram, Facebook ou Livro de Reclamações Eletrónico) regem-se pelos termos e políticas de privacidade das respetivas entidades.',
      'terms.s5.title': 'Resolução Alternativa de Litígios (RAL)', 'terms.s5.body': 'Nos termos da Lei n.º 144/2015, em caso de litígio de consumo em Portugal, o consumidor pode recorrer ao TRIAVE - Centro de Arbitragem de Conflitos de Consumo do Ave, Tâmega e Sousa (www.triave.pt) ou ao CNIACC - Centro Nacional de Informação e Arbitragem de Conflitos de Consumo (www.cniacc.pt). Mais informações no Portal do Consumidor em www.consumidor.gov.pt.',
      'terms.s6.title': 'Livro de Reclamações Eletrónico', 'terms.s6.body': 'A MR Construções disponibiliza acesso direto ao Livro de Reclamações Eletrónico através da plataforma oficial em www.livroreclamacoes.pt.',
      'terms.s7.title': 'Lei aplicável e atualizações', 'terms.s7.body': 'Estes Termos e Condições regem-se pela legislação portuguesa. A MR Construções reserva-se o direito de atualizar o presente documento sempre que necessário, produzindo efeitos a partir da respetiva publicação nesta página.'
    },
    en: {
      'meta.home.title': 'MR Construções',
      'meta.home.desc': 'MR Construções - single-family homes and rehabilitation in Portugal; formwork carpentry in Germany. Build with rigour. Create with purpose.',
      'meta.germany.title': 'MR Construções',
      'meta.germany.desc': 'Specialised formwork carpentry and reinforced concrete teams across Germany: Dortmund, Munich, Berlin, Hamburg, Bremen and Düsseldorf.',
      'meta.jobs.title': 'MR Construções',
      'meta.jobs.desc': 'MR Construções careers channel. Apply to join our construction teams in Portugal or formwork carpentry teams in Germany.',
      'meta.privacy.title': 'MR Construções',
      'meta.privacy.desc': 'Privacy Policy and personal data processing of MR Construções - Marco Paulo Ribeiro Unipessoal, Lda.',
      'meta.terms.title': 'MR Construções',
      'meta.terms.desc': 'Terms and Conditions of use, legal notice and Alternative Dispute Resolution (ADR) of MR Construções - Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Company', 'n.servicos': 'Services', 'n.projetos': 'Projects', 'n.alemanha': 'Germany', 'n.emprego': 'Careers', 'n.orcamento': 'Quote',
      'burger': 'Open menu', 'burger.x': 'Close menu', 'menu.aria': 'Main navigation',
      'h.tag': 'Build with rigour. Create with purpose.', 'h.scroll': 'Scroll',
      'e.title': 'We build more than structures.', 'e.sub': 'Structural solidity and close follow-up, from the first step to handover.',
      'e.body': 'Works delivered with rigour, proximity and attention to every detail. From the first step to the handover of the keys - in Portugal and Germany.',
      'e.id1': 'Since', 'e.id2': 'Operating in', 'e.id2v': 'Portugal · Germany', 'e.id3': 'IMPIC licence', 'e.id4': 'Coordinates',
      'e.de': 'Explore our work in Germany',
      'ba.aria': 'Compare before and after', 'ba.cap': 'House Rehabilitation · V. N. Famalicão',
      's.title': 'What we do.', 's.sub': 'From new builds to full rehabilitation, with rigour at every stage of the project.',
      's1.n': 'New build', 's1.d': 'Complete single-family homes, from the first step to the handover of the keys.',
      's2.n': 'Rehabilitation and remodelling', 's2.d': 'Restoration and renovation of existing buildings and homes.',
      's3.n': 'Structures and civil construction', 's3.d': 'Reinforced concrete structures and general civil construction works.',
      's4.n': 'Facades and thermal insulation', 's4.d': 'ETICS systems, claddings and protection of the building envelope.',
      's5.n': 'Finishes and coverings', 's5.d': 'Masonry, ceramic tiling, painting and complementary works.',
      's6.n': 'Outdoor spaces', 's6.d': 'Swimming pools, ceramic or stone paving and exterior landscaping.',
      'p.title': 'Work that remains.', 'p.sub': 'A selection of projects delivered in Portugal and Germany.',
      'p1.n': 'Facade Rehabilitation', 'p2.n': 'ETICS System Application', 'p3.n': 'Full House Rehabilitation', 'p4.n': 'Sanitary Facility Rehabilitation', 'p5.n': 'Swimming Pool and Exterior Paving', 'p6.n': 'Facade and Thermal Insulation', 'p7.n': 'Finishes and Coverings', 'p8.n': 'Exterior House Rehabilitation', 'p9.n': 'Concrete Structures & Formwork', 'p9.m': 'Germany',
      'p.more': 'Every project reflects the same commitment to structural rigour and detail, in Portugal and Germany.', 'p.close': 'Close', 'p.lb.aria': 'Enlarged photograph', 'p.prev': 'Previous project', 'p.next': 'Next project',
      'c.title': 'Request your quote.', 'c.lead': 'Tell us about your construction or rehabilitation project in Portugal.',
      'c.tel': 'Phone', 'c.mail': 'Email', 'c.loc': 'Location', 'c.soc': 'Social', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal', 'c.wa': 'WhatsApp',
      'c.fk': 'Quote request', 'c.place': 'Project location', 'c.subj': 'Type of work',
      'c.s1': 'New build', 'c.s2': 'Rehabilitation and remodelling', 'c.s3': 'Facades and thermal insulation', 'c.s5': 'Other',
      'c.msg': 'Project description', 'c.send': 'Request a quote', 'c.ok': 'Request sent. We will be in touch shortly.',
      'de.kicker': 'Germany · Formwork Carpentry',
      'd1.title': 'Beyond borders.', 'd1.lead': 'Formwork carpentry in Germany. Specialised teams integrated into reinforced concrete structure projects of different scales and technical demands.',
      'd1.1': 'Formwork carpentry', 'd1.2': 'On-site formwork execution', 'd1.3': 'Reinforced concrete structures', 'd1.4': 'Services to companies and sector partners',
      'd2.title': 'A presence that builds.', 'd2.lead': 'Operational experience, site coordination and seamless integration into construction teams, contributing daily to rigorous reinforced concrete execution.',
      'de.map.title': 'Areas where we operate.', 'de.map.desc': 'Teams mobilised across key construction hubs in Germany, responding flexibly to the demands of each site.',
      'de.gal.title': 'On site in Germany.', 'de.gal.sub': 'Real footage and photography of our teams on reinforced concrete and formwork sites.',
      'de.gal.p1': 'Wall Formwork', 'de.gal.p2': 'Large-Scale Structure', 'de.gal.p3': 'Reinforced Concrete Structures', 'de.gal.p4': 'MR Team on Site', 'de.gal.p5': 'Reinforced Concrete Site', 'de.gal.more': 'Teams ready to integrate into projects across Germany.',
      'city.dortmund': 'Dortmund', 'city.munich': 'Munich', 'city.berlin': 'Berlin', 'city.hamburg': 'Hamburg', 'city.bremen': 'Bremen', 'city.dusseldorf': 'Düsseldorf',
      'reg.nrw': 'North Rhine-Westphalia', 'reg.bavaria': 'Bavaria', 'reg.berlin': 'Berlin', 'reg.hamburg': 'Hamburg', 'reg.bremen': 'Bremen',
      'de.b2b.kicker': 'For companies & partners', 'd1.b2b': 'Need a formwork team?', 'de.b2b.desc': 'We provide formwork carpentry services to construction companies and partners in Germany. Talk to us about your project.',
      'd1.b2bl': 'Contact us for partnerships', 'de.b2b.email': 'Send email', 'b2b.subj': 'Partnership - Formwork Carpentry in Germany',
      'wa.b2b.text': 'Hello! I represent a company and would like to discuss formwork carpentry services in Germany.',
      'de.jobs.link': 'Recruitment',
      'j.kicker': 'Recruitment · Portugal & Germany', 'o.title': 'Build your future with us.', 'j.lead': 'We are looking for dedicated professionals to join our construction teams in Portugal and formwork carpentry teams in Germany.',
      'j.sk.aria': 'Valued soft skills on site', 'j.sk.kicker': 'What we value', 'j.sk.list': 'Valued soft skills', 'j.scroll.aria': 'Scroll to application form',
      'j.sk1.t': 'Attention to detail', 'j.sk1.d': 'Precision in every measurement, alignment and finish - the standard behind every build.',
      'j.sk2.t': 'Team spirit', 'j.sk2.d': 'Coordination, mutual support and daily respect on site - no structure is built alone.',
      'j.sk3.t': 'Commitment & punctuality', 'j.sk3.d': 'Reliability, consistent presence and full ownership of every task undertaken.',
      'j.sk4.t': 'Safety & method', 'j.sk4.d': 'Site organisation, technical discipline and constant care for everyone around you.',
      'j.sk5.t': 'Autonomy & initiative', 'j.sk5.d': 'Proactive mindset on site with the practical judgement to solve challenges early.',
      'j.sk6.t': 'Drive to grow', 'j.sk6.d': 'Openness to learn new techniques and grow with our teams in Portugal and Germany.',
      'j.side.desc': 'Even when no specific position is listed, we review every spontaneous application for upcoming mobilisations.',
      'a.kicker': 'Application', 'a.title': 'Join the team.',
      'a.name': 'Name', 'a.phone': 'Phone / WhatsApp', 'a.spec': 'Trade / specialty', 'a.res': 'Place of residence',
      'a.exp': 'Years of experience', 'a.exp.1': 'Under 1 year', 'a.exp.2': '1-3 years', 'a.exp.3': '3-5 years', 'a.exp.4': '5-10 years', 'a.exp.5': '10+ years',
      'a.av': 'Availability to start', 'a.av.1': 'Immediate', 'a.av.2': 'Within 1 month', 'a.av.3': 'More than 1 month',
      'a.mk': 'Market of interest', 'a.mk.1': 'Portugal', 'a.mk.2': 'Germany', 'a.mk.3': 'Either', 'a.sel': 'Select',
      'a.deexp': 'Worked in Germany before?', 'a.yes': 'Yes', 'a.no': 'No', 'a.notes': 'Notes / Experience (optional)',
      'a.c1': 'We use your details only to respond to this inquiry, under our', 'a.c2': '.', 'a.send': 'Send application', 'a.sending': 'Sending…',
      'a.ok': 'Application sent. We will be in touch shortly.', 'a.err': 'Could not send. Please try WhatsApp or geral@marcoribeiroconstrucoes.pt.',
      'a.val': 'Please fill in all required fields.', 'a.mail': 'Form endpoint not configured yet: opening your email client.',
      'f.nav': 'Navigation', 'f.ct': 'Contact', 'f.legal': 'Legal information', 'f.seat': 'Registered office: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Privacy Policy', 'f.terms': 'Terms & Conditions', 'f.compl': 'Electronic Complaints Book', 'f.rights': 'All rights reserved.', 'f.credit': 'Developed by', 'f.top': 'Top',
      'wa.text': 'Hello! I would like to talk to MR Construções.', 'wa.float.aria': 'Contact via WhatsApp',
      'priv.back': 'Back to website', 'priv.kicker': 'Data Protection · GDPR', 'priv.title': 'Privacy Policy',
      'priv.lead': 'This Privacy Policy explains how Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) collects and processes personal data submitted through this website, in accordance with the General Data Protection Regulation (GDPR).',
      'priv.s1.title': 'Data Controller', 'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Tax ID (NIF/NIPC) 516590022, IMPIC License No. 113987, headquartered at Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Privacy contact: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Purposes of Processing', 'priv.s2.body': 'Personal data collected through website forms are used exclusively to: (a) analyze and respond to quote and business inquiries; (b) evaluate and follow up on applications to join our teams in Portugal or Germany.',
      'priv.s3.title': 'Legal Basis', 'priv.s3.body': 'Data processing is based on pre-contractual steps taken at the request of the data subject (Article 6(1)(b) GDPR), our legitimate interest in answering inquiries, and freely given consent upon voluntarily submitting our forms (Article 6(1)(a) GDPR).',
      'priv.s4.title': 'Personal Data Collected', 'priv.s4.body': 'The quote form collects: name, email, phone, project location, type of work and description. The careers form collects: name, phone or WhatsApp, place of residence, trade specialty, years of experience, start availability, market of interest and optional notes.',
      'priv.s5.title': 'Data Recipients', 'priv.s5.body': 'Data are processed internally by MR Construções estimating and human resources staff. For technical routing of form submissions, the website uses Formspree as a technical data processor under appropriate GDPR safeguards. Personal data are never sold or shared with third parties for marketing.',
      'priv.s6.title': 'Retention Period', 'priv.s6.body': 'Quote inquiry data are kept for the period required to process the request or up to 24 months if no contract is concluded. Unsolicited job application data are retained for up to 12 months from receipt, unless consent is withdrawn earlier.',
      'priv.s7.title': 'Data Subject Rights', 'priv.s7.body': 'You may at any time exercise your rights of access, rectification, erasure, restriction, portability, objection and withdrawal of consent (without affecting the lawfulness of prior processing) by emailing geral@marcoribeiroconstrucoes.pt.',
      'priv.s8.title': 'Supervisory Authority', 'priv.s8.body': 'If you believe the processing of your data infringes the GDPR, you have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) at www.cnpd.pt.',
      'priv.s9.title': 'Cookies and Local Storage', 'priv.s9.body': 'This website does not use third-party analytics, advertising or tracking cookies, and self-hosts its typography locally with zero requests to external font servers. Only browser local storage (localStorage) is used technically to remember the visitor’s selected language (PT, EN or DE).',
      'terms.kicker': 'Legal Notice · Usage', 'terms.title': 'Terms & Conditions',
      'terms.lead': 'These Terms and Conditions govern access to and use of the institutional website of Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções), along with mandatory legal disclosures.',
      'terms.s1.title': 'Company identification', 'terms.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., trading as MR Construções, Tax ID (NIF/NIPC) 516590022, IMPIC Construction License No. 113987, registered office at Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Contact: +351 915 680 947 and geral@marcoribeiroconstrucoes.pt.',
      'terms.s2.title': 'Content and quote requests', 'terms.s2.body': 'All information, photography and video shown on this website are strictly informative and showcase MR Construções’ work. Submitting a quote inquiry does not constitute a binding offer or contract; all works are subject to technical evaluation, site inspection and written agreement.',
      'terms.s3.title': 'Intellectual property', 'terms.s3.body': 'All texts, project photographs, videos, graphic assets, trademarks and logos on this website belong to MR Construções or are used with authorization. Reproduction, copying or commercial use without prior written consent is prohibited.',
      'terms.s4.title': 'Liability and external links', 'terms.s4.body': 'MR Construções strives to keep website information accurate and available, without guaranteeing uninterrupted operation. Links to third-party services (such as WhatsApp, Instagram, Facebook or the Electronic Complaints Book) are governed by their respective terms and privacy policies.',
      'terms.s5.title': 'Alternative Dispute Resolution (ADR)', 'terms.s5.body': 'Under Portuguese Law No. 144/2015, in the event of a consumer dispute in Portugal, consumers may resort to TRIAVE - Centro de Arbitragem de Conflitos de Consumo do Ave, Tâmega e Sousa (www.triave.pt) or CNIACC (www.cniacc.pt). Further information is available at www.consumidor.gov.pt.',
      'terms.s6.title': 'Electronic Complaints Book', 'terms.s6.body': 'MR Construções provides direct access to the Portuguese Electronic Complaints Book via the official platform at www.livroreclamacoes.pt.',
      'terms.s7.title': 'Governing law and updates', 'terms.s7.body': 'These Terms and Conditions are governed by Portuguese law. MR Construções reserves the right to update this document whenever necessary, taking effect upon publication on this page.'
    },
    de: {
      'meta.home.title': 'MR Construções',
      'meta.home.desc': 'MR Construções - Neubau und Sanierung von Wohnhäusern in Portugal; Schalungsbau in Deutschland. Mit Präzision bauen. Mit Haltung gestalten.',
      'meta.germany.title': 'MR Construções',
      'meta.germany.desc': 'Spezialisierte Schalungsbauteams in Deutschland: Dortmund, München, Berlin, Hamburg, Bremen und Düsseldorf.',
      'meta.jobs.title': 'MR Construções',
      'meta.jobs.desc': 'Karriereportal von MR Construções. Bewerben Sie sich für unsere Bauteams in Portugal oder Schalungsbauteams in Deutschland.',
      'meta.privacy.title': 'MR Construções',
      'meta.privacy.desc': 'Datenschutzerklärung und Verarbeitung personenbezogener Daten von MR Construções - Marco Paulo Ribeiro Unipessoal, Lda.',
      'meta.terms.title': 'MR Construções',
      'meta.terms.desc': 'Nutzungsbedingungen, rechtliche Hinweise und Streitbeilegung von MR Construções - Marco Paulo Ribeiro Unipessoal, Lda.',
      'n.empresa': 'Unternehmen', 'n.servicos': 'Leistungen', 'n.projetos': 'Projekte', 'n.alemanha': 'Deutschland', 'n.emprego': 'Karriere', 'n.orcamento': 'Angebot',
      'burger': 'Menü öffnen', 'burger.x': 'Menü schließen', 'menu.aria': 'Hauptnavigation',
      'h.tag': 'Mit Präzision bauen. Mit Haltung gestalten.', 'h.scroll': 'Scroll',
      'e.title': 'Wir bauen mehr als Strukturen.', 'e.sub': 'Konstruktive Solidität und persönliche Begleitung vom ersten Schritt bis zur Übergabe.',
      'e.body': 'Bauprojekte, ausgeführt mit Präzision, Nähe und Liebe zum Detail. Vom ersten Schritt bis zur Schlüsselübergabe - in Portugal und in Deutschland.',
      'e.id1': 'Seit', 'e.id2': 'Tätig in', 'e.id2v': 'Portugal · Deutschland', 'e.id3': 'IMPIC-Zulassung', 'e.id4': 'Koordinaten',
      'e.de': 'Unsere Arbeit in Deutschland entdecken',
      'ba.aria': 'Vorher und Nachher vergleichen', 'ba.cap': 'Haussanierung · V. N. Famalicão',
      's.title': 'Was wir tun.', 's.sub': 'Vom Neubau bis zur Komplettsanierung - präzise Ausführung in jeder Bauphase.',
      's1.n': 'Neubau', 's1.d': 'Komplette Einfamilienhäuser, vom ersten Schritt bis zur Schlüsselübergabe.',
      's2.n': 'Sanierung und Umbau', 's2.d': 'Instandsetzung und Erneuerung bestehender Gebäude und Wohnhäuser.',
      's3.n': 'Rohbau und Hochbau', 's3.d': 'Stahlbetonbau und allgemeine Hochbauarbeiten.',
      's4.n': 'Fassaden und Wärmedämmung', 's4.d': 'WDVS-Systeme (ETICS), Verkleidungen und Schutz der Gebäudehülle.',
      's5.n': 'Ausbau und Beläge', 's5.d': 'Mauerwerk, Fliesenarbeiten, Malerarbeiten und ergänzende Ausbauarbeiten.',
      's6.n': 'Außenanlagen', 's6.d': 'Pools, Keramik- oder Natursteinbeläge und Gestaltung des Außenbereichs.',
      'p.title': 'Arbeit, die bleibt.', 'p.sub': 'Eine Auswahl realisierter Projekte in Portugal und Deutschland.',
      'p1.n': 'Fassadensanierung', 'p2.n': 'WDVS-Fassadendämmung (ETICS)', 'p3.n': 'Komplettsanierung eines Wohnhauses', 'p4.n': 'Sanierung einer Sanitäranlage', 'p5.n': 'Poolbau und Außenpflasterung', 'p6.n': 'Fassade und Wärmedämmung', 'p7.n': 'Ausbau und Beläge', 'p8.n': 'Außensanierung eines Wohnhauses', 'p9.n': 'Stahlbeton & Schalungsbau', 'p9.m': 'Deutschland',
      'p.more': 'Jedes Projekt spiegelt denselben Anspruch an bauliche Präzision und Detailtreue wider - in Portugal und in Deutschland.', 'p.close': 'Schließen', 'p.lb.aria': 'Vergrößerte Aufnahme', 'p.prev': 'Vorheriges Projekt', 'p.next': 'Nächstes Projekt',
      'c.title': 'Fordern Sie Ihr Angebot an.', 'c.lead': 'Sprechen Sie mit uns über Ihr Bau- oder Sanierungsprojekt in Portugal.',
      'c.tel': 'Telefon', 'c.mail': 'E-Mail', 'c.loc': 'Standort', 'c.soc': 'Soziale Medien', 'c.addr': 'Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal', 'c.wa': 'WhatsApp',
      'c.fk': 'Angebotsanfrage', 'c.place': 'Bauort', 'c.subj': 'Art der Maßnahme',
      'c.s1': 'Neubau', 'c.s2': 'Sanierung und Umbau', 'c.s3': 'Fassaden und Wärmedämmung', 'c.s5': 'Sonstiges',
      'c.msg': 'Projektbeschreibung', 'c.send': 'Angebot anfragen', 'c.ok': 'Anfrage gesendet. Wir melden uns in Kürze.',
      'de.kicker': 'Deutschland · Schalungsbau',
      'd1.title': 'Über Grenzen hinweg.', 'd1.lead': 'Schalungsbau in Deutschland. Spezialisierte Teams, eingebunden in Stahlbetonbauprojekte unterschiedlicher Größe und technischer Anforderungen.',
      'd1.1': 'Schalungsbau', 'd1.2': 'Schalungsarbeiten auf der Baustelle', 'd1.3': 'Stahlbetonkonstruktionen', 'd1.4': 'Leistungen für Unternehmen und Partner der Branche',
      'd2.title': 'Eine Präsenz, die baut.', 'd2.lead': 'Operative Erfahrung, Baustellenkoordination und reibungslose Integration in Projektteams für präzise Stahlbetonarbeiten.',
      'de.map.title': 'Unsere Einsatzgebiete.', 'de.map.desc': 'Flexible Teams im Einsatz in zentralen Bauregionen Deutschlands - angepasst an die Anforderungen jedes Projekts.',
      'de.gal.title': 'Im Einsatz in Deutschland.', 'de.gal.sub': 'Reale Einblicke unserer Teams auf Stahlbeton- und Schalungsbaustellen.',
      'de.gal.p1': 'Wandschalung', 'de.gal.p2': 'Großprojekt im Hochbau', 'de.gal.p3': 'Stahlbetonkonstruktionen', 'de.gal.p4': 'MR-Team im Einsatz', 'de.gal.p5': 'Stahlbeton-Baustelle', 'de.gal.more': 'Teams bereit für den Einsatz in Projekten in ganz Deutschland.',
      'city.dortmund': 'Dortmund', 'city.munich': 'München', 'city.berlin': 'Berlin', 'city.hamburg': 'Hamburg', 'city.bremen': 'Bremen', 'city.dusseldorf': 'Düsseldorf',
      'reg.nrw': 'Nordrhein-Westfalen', 'reg.bavaria': 'Bayern', 'reg.berlin': 'Berlin', 'reg.hamburg': 'Hamburg', 'reg.bremen': 'Bremen',
      'de.b2b.kicker': 'Für Unternehmen & Partner', 'd1.b2b': 'Benötigen Sie ein Schalungsteam?', 'de.b2b.desc': 'Wir bieten Schalungsbauleistungen für Bauunternehmen und Partner in Deutschland. Sprechen Sie mit uns über Ihr Projekt.',
      'd1.b2bl': 'Kontakt für Partnerschaften', 'de.b2b.email': 'E-Mail senden', 'b2b.subj': 'Partnerschaft - Schalungsbau in Deutschland',
      'wa.b2b.text': 'Hallo! Ich vertrete ein Unternehmen und möchte über Schalungsbauleistungen in Deutschland sprechen.',
      'de.jobs.link': 'Karriereportal',
      'j.kicker': 'Karriere · Rekrutierung', 'o.title': 'Baue deine Zukunft mit uns.', 'j.lead': 'Wir suchen engagierte Fachkräfte für unsere Bauteams in Portugal sowie für unsere Schalungsbauteams in Deutschland.',
      'j.sk.aria': 'Geschätzte Soft Skills auf der Baustelle', 'j.sk.kicker': 'Was wir schätzen', 'j.sk.list': 'Geschätzte Soft Skills', 'j.scroll.aria': 'Zum Bewerbungsformular scrollen',
      'j.sk1.t': 'Präzision im Detail', 'j.sk1.d': 'Sorgfalt bei jedem Maß, jeder Ausrichtung und jedem Finish - unser Anspruch auf jeder Baustelle.',
      'j.sk2.t': 'Teamgeist auf der Baustelle', 'j.sk2.d': 'Koordination, Zusammenhalt und täglicher Respekt - kein Bauwerk entsteht allein.',
      'j.sk3.t': 'Verlässlichkeit & Pünktlichkeit', 'j.sk3.d': 'Zuverlässigkeit, Verbindlichkeit und volle Verantwortung für die übernommene Arbeit.',
      'j.sk4.t': 'Sicherheit & Struktur', 'j.sk4.d': 'Ordnung am Arbeitsplatz, methodisches Vorgehen und ständige Achtsamkeit im Team.',
      'j.sk5.t': 'Eigeninitiative vor Ort', 'j.sk5.d': 'Selbstständiges Handeln auf der Baustelle und pragmatische Lösungen im richtigen Moment.',
      'j.sk6.t': 'Wille zur Weiterentwicklung', 'j.sk6.d': 'Offenheit für neue Techniken und gemeinsame Entwicklung in Portugal und Deutschland.',
      'j.side.desc': 'Auch ohne ausgeschriebene Stelle prüfen wir jede Initiativbewerbung für kommende Projekte.',
      'a.kicker': 'Bewerbung', 'a.title': 'Werde Teil des Teams.',
      'a.name': 'Name', 'a.phone': 'Telefon / WhatsApp', 'a.spec': 'Fachgebiet / Beruf', 'a.res': 'Wohnort',
      'a.exp': 'Jahre Berufserfahrung', 'a.exp.1': 'Unter 1 Jahr', 'a.exp.2': '1-3 Jahre', 'a.exp.3': '3-5 Jahre', 'a.exp.4': '5-10 Jahre', 'a.exp.5': '10+ Jahre',
      'a.av': 'Verfügbar ab', 'a.av.1': 'Sofort', 'a.av.2': 'Innerhalb 1 Monats', 'a.av.3': 'Mehr als 1 Monat',
      'a.mk': 'Gewünschter Markt', 'a.mk.1': 'Portugal', 'a.mk.2': 'Deutschland', 'a.mk.3': 'Egal', 'a.sel': 'Auswählen',
      'a.deexp': 'Bereits in Deutschland gearbeitet?', 'a.yes': 'Ja', 'a.no': 'Nein', 'a.notes': 'Hinweise / Erfahrung (optional)',
      'a.c1': 'Wir verwenden Ihre Angaben ausschließlich zur Beantwortung dieser Anfrage gemäß unserer', 'a.c2': '.', 'a.send': 'Bewerbung senden', 'a.sending': 'Wird gesendet…',
      'a.ok': 'Bewerbung gesendet. Wir melden uns in Kürze.', 'a.err': 'Senden nicht möglich. Bitte WhatsApp oder geral@marcoribeiroconstrucoes.pt nutzen.',
      'a.val': 'Bitte füllen Sie alle Pflichtfelder aus.', 'a.mail': 'Formular-Endpunkt noch nicht konfiguriert: Ihr E-Mail-Programm wird geöffnet.',
      'f.nav': 'Navigation', 'f.ct': 'Kontakt', 'f.legal': 'Rechtliche Angaben', 'f.seat': 'Sitz: Rua do Casino n.º 94 E, 4765-063 Bairro, V. N. Famalicão', 'f.priv': 'Datenschutzerklärung', 'f.terms': 'Nutzungsbedingungen & Impressum', 'f.compl': 'Elektronisches Beschwerdebuch', 'f.rights': 'Alle Rechte vorbehalten.', 'f.credit': 'Entwickelt von', 'f.top': 'Oben',
      'wa.text': 'Hallo! Ich möchte mit MR Construções sprechen.', 'wa.float.aria': 'Über WhatsApp kontaktieren',
      'priv.back': 'Zurück zur Website', 'priv.kicker': 'Datenschutz · DSGVO', 'priv.title': 'Datenschutzerklärung',
      'priv.lead': 'Diese Datenschutzerklärung erläutert, wie die Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) personenbezogene Daten über diese Website gemäß der Datenschutz-Grundverordnung (DSGVO) erhebt und verarbeitet.',
      'priv.s1.title': 'Verantwortlicher', 'priv.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Steuernummer (NIF/NIPC) 516590022, IMPIC-Zulassung Nr. 113987, mit Sitz in der Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Kontakt für Datenschutzfragen: geral@marcoribeiroconstrucoes.pt.',
      'priv.s2.title': 'Zwecke der Verarbeitung', 'priv.s2.body': 'Die über die Formulare dieser Website erhobenen personenbezogenen Daten dienen ausschließlich: (a) der Bearbeitung und Beantwortung von Angebots- und Geschäftsanfragen; (b) der Prüfung und Bearbeitung von Bewerbungen für unsere Teams in Portugal oder Deutschland.',
      'priv.s3.title': 'Rechtsgrundlage', 'priv.s3.body': 'Die Datenverarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person (Art. 6 Abs. 1 lit. b DSGVO), auf Basis unseres berechtigten Interesses an der Beantwortung von Anfragen sowie Ihrer freiwilligen Einwilligung beim Absenden eines Formulars (Art. 6 Abs. 1 lit. a DSGVO).',
      'priv.s4.title': 'Erhobene personenbezogene Daten', 'priv.s4.body': 'Im Angebotsformular werden erhoben: Name, E-Mail, Telefon, Bauort, Art der Maßnahme und Projektbeschreibung. Im Karriereportal werden erhoben: Name, Telefon/WhatsApp, Wohnort, Fachgebiet, Berufserfahrung, Verfügbarkeit, gewünschter Markt sowie optionale Hinweise.',
      'priv.s5.title': 'Empfänger der Daten', 'priv.s5.body': 'Die Daten werden intern von den zuständigen Mitarbeitern für Kalkulation und Personalwesen bei MR Construções verarbeitet. Für die technische Übermittlung der Formularnachrichten nutzen wir den Dienst Formspree als Auftragsverarbeiter mit geeigneten DSGVO-Schutzgarantien. Eine Weitergabe oder ein Verkauf an Dritte zu Werbezwecken findet nicht statt.',
      'priv.s6.title': 'Speicherdauer', 'priv.s6.body': 'Daten zu Angebotsanfragen werden für den zur Bearbeitung erforderlichen Zeitraum bzw. bis zu 24 Monate aufbewahrt, sofern kein Vertrag zustande kommt. Bewerbungsdaten werden höchstens 12 Monate nach Eingang gespeichert, sofern die Einwilligung nicht zuvor widerrufen wird.',
      'priv.s7.title': 'Rechte der betroffenen Personen', 'priv.s7.body': 'Sie können jederzeit Ihre Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Widerruf der Einwilligung (ohne die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung zu berühren) per E-Mail an geral@marcoribeiroconstrucoes.pt ausüben.',
      'priv.s8.title': 'Aufsichtsbehörde', 'priv.s8.body': 'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt, haben Sie das Recht auf Beschwerde bei der portugiesischen Datenschutzbehörde (CNPD) unter www.cnpd.pt.',
      'priv.s9.title': 'Cookies und lokale Speicherung', 'priv.s9.body': 'Diese Website verwendet keine Analyse-, Statistik-, Werbe- oder Tracking-Cookies von Drittanbietern und hostet ihre Schriftarten lokal ohne Verbindung zu externen Schriftservern. Es wird lediglich technisch der lokale Browser-Speicher (localStorage) genutzt, um Ihre Sprachauswahl (PT, EN oder DE) zu speichern.',
      'terms.kicker': 'Impressum · Nutzung', 'terms.title': 'Nutzungsbedingungen & Impressum',
      'terms.lead': 'Diese Nutzungsbedingungen regeln den Zugang und die Nutzung der Website der Marco Paulo Ribeiro Unipessoal, Lda. (MR Construções) sowie die gesetzlichen Pflichtangaben.',
      'terms.s1.title': 'Unternehmensangaben', 'terms.s1.body': 'Marco Paulo Ribeiro Unipessoal, Lda., Geschäftsbezeichnung MR Construções, Steuernummer (NIF/NIPC) 516590022, IMPIC-Bauzulassung Nr. 113987, Sitz: Rua do Casino n.º 94 E, 4765-063 Bairro, Vila Nova de Famalicão, Portugal. Kontakt: +351 915 680 947 und geral@marcoribeiroconstrucoes.pt.',
      'terms.s2.title': 'Inhalte und Angebotsanfragen', 'terms.s2.body': 'Alle Texte, Fotos und Videos auf dieser Website dienen ausschließlich Informations- und Referenzzwecken. Das Absenden einer Anfrage stellt kein verbindliches Angebot und keinen Vertragsschluss dar; Bauleistungen bedürfen stets einer technischen Prüfung und schriftlichen Vereinbarung.',
      'terms.s3.title': 'Urheberrecht', 'terms.s3.body': 'Sämtliche Texte, Projektfotos, Videos, Grafiken, Marken und Logos auf dieser Website sind Eigentum von MR Construções oder werden mit entsprechender Genehmigung verwendet. Eine Vervielfältigung oder kommerzielle Nutzung ohne vorherige schriftliche Zustimmung ist untersagt.',
      'terms.s4.title': 'Haftung und externe Links', 'terms.s4.body': 'MR Construções bemüht sich um aktuelle und verfügbare Inhalte, übernimmt jedoch keine Gewähr für eine unterbrechungsfreie Erreichbarkeit. Für externe Dienste (wie WhatsApp, Instagram, Facebook oder das elektronische Beschwerdebuch) gelten die jeweiligen Bedingungen und Datenschutzrichtlinien der Anbieter.',
      'terms.s5.title': 'Alternative Streitbeilegung (RAL)', 'terms.s5.body': 'Gemäß portugiesischem Gesetz Nr. 144/2015 können sich Verbraucher in Portugal im Streitfall an das Schiedszentrum TRIAVE (www.triave.pt) oder an CNIACC (www.cniacc.pt) wenden. Weitere Informationen unter www.consumidor.gov.pt.',
      'terms.s6.title': 'Elektronisches Beschwerdebuch', 'terms.s6.body': 'MR Construções bietet direkten Zugang zum offiziellen portugiesischen elektronischen Beschwerdebuch unter www.livroreclamacoes.pt.',
      'terms.s7.title': 'Anwendbares Recht und Änderungen', 'terms.s7.body': 'Diese Bedingungen unterliegen portugiesischem Recht. MR Construções behält sich vor, dieses Dokument bei Bedarf anzupassen; Änderungen gelten ab Veröffentlichung auf dieser Seite.'
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
  var activeCity = 'hamburg';
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var t = function (k) { return (T[lang] && T[lang][k]) || T.pt[k] || ''; };

  root.classList.remove('no-js'); root.classList.add('js');

  /* ------------------------------ Comparador Antes / Depois (arrasto fluido com inércia) ------------------------------ */
  $$('[data-ba]').forEach(function (box) {
    var range = $('.ba-range', box);
    if (!range) return;
    var cur = parseFloat(range.value) || 50;
    var target = cur;
    var raf = 0, demoRaf = 0, demoTimer = 0;
    var userMoved = false;
    var dragging = false;
    var pid = null, sx = 0, sy = 0, locked = null;

    function setPos(p) {
      box.style.setProperty('--pos', p.toFixed(3) + '%');
      range.value = p.toFixed(1);
    }
    function stopDemo() {
      userMoved = true;
      if (demoTimer) { clearTimeout(demoTimer); demoTimer = 0; }
      if (demoRaf) { cancelAnimationFrame(demoRaf); demoRaf = 0; }
    }
    function tick() {
      raf = 0;
      cur += (target - cur) * (dragging ? 0.28 : 0.16);
      if (Math.abs(target - cur) < 0.02) cur = target;
      else raf = requestAnimationFrame(tick);
      setPos(cur);
    }
    function moveTo(pct) {
      stopDemo();
      target = Math.max(2, Math.min(98, pct));
      if (reduce) { cur = target; setPos(cur); return; }
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function pctFromX(clientX) {
      var r = box.getBoundingClientRect();
      return r.width ? ((clientX - r.left) / r.width) * 100 : 50;
    }

    box._playBaDemo = function () {
      if (userMoved || reduce || demoRaf || demoTimer) return;
      demoTimer = setTimeout(function () {
        if (userMoved) return;
        var start = 0, dur = 1450;
        function sway(ts) {
          if (userMoved) { demoRaf = 0; return; }
          if (!start) start = ts;
          var p = Math.min(1, (ts - start) / dur);
          cur = target = 50 - Math.sin(p * Math.PI * 2) * 7 * Math.sin(p * Math.PI);
          setPos(cur);
          if (p < 1) demoRaf = requestAnimationFrame(sway);
          else { cur = target = 50; setPos(50); demoRaf = 0; }
        }
        demoRaf = requestAnimationFrame(sway);
      }, 180);
    };

    box.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pid = e.pointerId; sx = e.clientX; sy = e.clientY;
      locked = e.pointerType === 'mouse' ? 'x' : null;
      if (locked === 'x') {
        dragging = true;
        box.classList.add('is-drag');
        try { box.setPointerCapture(pid); } catch (err) {}
        moveTo(pctFromX(e.clientX));
      }
    });
    box.addEventListener('pointermove', function (e) {
      if (pid === null || e.pointerId !== pid) return;
      if (!locked) {
        var dx = Math.abs(e.clientX - sx), dy = Math.abs(e.clientY - sy);
        if (dx < 4 && dy < 4) return;
        locked = dx >= dy ? 'x' : 'y';
        if (locked === 'x') {
          dragging = true;
          box.classList.add('is-drag');
          try { box.setPointerCapture(pid); } catch (err) {}
        }
      }
      if (locked === 'x') moveTo(pctFromX(e.clientX));
    });
    function endBa(e) {
      if (pid === null || (e && e.pointerId !== pid)) return;
      if (!locked && e && e.type === 'pointerup') moveTo(pctFromX(e.clientX));
      dragging = false; locked = null;
      box.classList.remove('is-drag');
      try { box.releasePointerCapture(pid); } catch (err) {}
      pid = null;
    }
    box.addEventListener('pointerup', endBa);
    box.addEventListener('pointercancel', endBa);

    range.addEventListener('input', function () {
      moveTo(parseFloat(range.value) || 50);
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
        $$('video', clone).forEach(function (v) {
          v.muted = true;
          v.defaultMuted = true;
          v.playsInline = true;
        });
        track.appendChild(clone);
      });

      var dir = rowEl.getAttribute('data-dir');
      var speed = dir === 'right' ? -0.4 : (dir === 'left-alt' ? 0.5 : 0.44);
      var st = {
        el: rowEl, track: track, speed: reduce ? 0 : speed, curSpeed: reduce ? 0 : speed,
        sign: dir === 'right' ? -1 : 1,
        x: 0, half: 0, vel: 0, wheelTarget: 0, hover: false, dragging: false,
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
        st.vel = 0; st.wheelTarget = 0; st.locked = e.pointerType === 'mouse' ? 'x' : null;
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
        st.vel = st.vel * 0.62 + (-dx) * 0.38;
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
        st.wheelTarget += delta;
      }, { passive: false });
    });

    function measureAll() { rowStates.forEach(function (st) { st.measure(); }); }
    measureAll();
    window.addEventListener('load', measureAll);
    window.addEventListener('resize', measureAll);

    var lastScrollY = window.scrollY || window.pageYOffset;
    if (!reduce) {
      window.addEventListener('scroll', function () {
        var sy = window.scrollY || window.pageYOffset;
        var dy = sy - lastScrollY;
        lastScrollY = sy;
        if (!wallVisible || Math.abs(dy) > 220) return;
        rowStates.forEach(function (st) {
          if (!st.dragging && !st.hover) st.wheelTarget += dy * 0.16 * st.sign;
        });
      }, { passive: true });
    }

    var lastTs = 0;
    function tickWall(ts) {
      if (!lastTs) lastTs = ts;
      var dt = Math.min(36, ts - lastTs) / 16.667;
      lastTs = ts;
      if (wallVisible) {
        rowStates.forEach(function (st) {
          if (!st.half || st.dragging) return;
          var targetSpeed = st.hover ? 0 : st.speed;
          st.curSpeed += (targetSpeed - st.curSpeed) * Math.min(1, 0.08 * dt);
          var step = st.curSpeed * dt;
          if (Math.abs(st.wheelTarget) > 0.05) {
            var pull = st.wheelTarget * Math.min(1, 0.13 * dt);
            st.wheelTarget -= pull;
            step += pull;
          } else {
            st.wheelTarget = 0;
          }
          if (Math.abs(st.vel) > 0.04) {
            step += st.vel * dt;
            st.vel *= Math.pow(0.945, dt);
          } else {
            st.vel = 0;
          }
          if (Math.abs(step) > 0.001) {
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

  /* ------------------------------ Ponte com o Mapa 3D/2D (React Three Fiber) ------------------------------ */
  var cityBtns = $$('[data-city]');

  function setCity(id, fromMap) {
    if (!CITY_COORDS[id]) return;
    activeCity = id;
    cityBtns.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-city') === id); });
    if (!fromMap) {
      window.dispatchEvent(new CustomEvent('mr:city', { detail: id }));
    }
  }

  cityBtns.forEach(function (b) {
    var id = b.getAttribute('data-city');
    b.addEventListener('mouseenter', function () { setCity(id, false); });
    b.addEventListener('focus', function () { setCity(id, false); });
    b.addEventListener('click', function () { setCity(id, false); });
  });
  window.addEventListener('mr:map-city', function (e) {
    if (e && e.detail) setCity(e.detail, true);
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
    if (cityBtns.length) setCity(activeCity, true);
    window.dispatchEvent(new CustomEvent('mr:lang', { detail: lang }));
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
  var scrubItems = $$('.ba.clip, .svc').map(function (el) {
    return { el: el, box: el.classList.contains('svc') ? ($('.frame', el) || el) : el, cur: 0, dst: 0, demoed: false };
  });
  var scrubRaf = 0;
  var secs = $$('main section[id]');
  var links = $$('[data-sec]');
  var ticking = false;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function stepScrubs() {
    scrubRaf = 0;
    var active = false;
    scrubItems.forEach(function (it) {
      it.cur += (it.dst - it.cur) * 0.14;
      if (Math.abs(it.dst - it.cur) < 0.001) it.cur = it.dst;
      else active = true;
      it.el.style.setProperty('--reveal', it.cur.toFixed(4));
      if (!it.demoed && it.cur >= 0.96 && it.el._playBaDemo) {
        it.demoed = true;
        it.el._playBaDemo();
      }
    });
    if (active) scrubRaf = requestAnimationFrame(stepScrubs);
  }
  function syncScrubs(immediate) {
    if (!scrubItems.length) return;
    var vh = window.innerHeight;
    var startTop = vh * 0.94;
    var endTop = vh * 0.26;
    var span = Math.max(220, startTop - endTop);
    scrubItems.forEach(function (it) {
      if (reduce) {
        it.cur = it.dst = 1;
        it.el.style.setProperty('--reveal', '1');
        return;
      }
      var r = it.box.getBoundingClientRect();
      var p = clamp((startTop - r.top) / span, 0, 1);
      it.dst = 1 - Math.pow(1 - p, 1.35);
      if (immediate) {
        it.cur = it.dst;
        it.el.style.setProperty('--reveal', it.cur.toFixed(4));
      }
    });
    if (!immediate && !reduce && !scrubRaf) scrubRaf = requestAnimationFrame(stepScrubs);
  }
  if (scrubItems.length) syncScrubs(true);
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
      syncScrubs(false);
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

  /* ------------------------------ Lightbox de projetos e galeria Alemanha ------------------------------ */
  var lb = $('#lb');
  if (lb && lb.showModal) {
    var lbImg = $('img', lb), lbCap = $('.lb-cap', lb), lbCount = $('.lb-count', lb);
    var seen = {};
    var projects = $$('a.prj-card:not(.prj-clone), a.de-photo-card:not(.prj-clone)').filter(function (el) {
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
      lbCap.textContent = title && meta ? title + ' - ' + meta : title;
      if (lbCount) lbCount.textContent = String(lbIdx + 1).padStart(2, '0') + ' / ' + String(projects.length).padStart(2, '0');
    }

    function openCard(card) {
      renderLb(Number(card.getAttribute('data-idx')) || 0);
      lb.showModal();
      body.classList.add('dlg-open');
    }

    if (wall) {
      wall.addEventListener('click', function (e) {
        var card = e.target.closest('a.prj-card');
        if (!card) return;
        e.preventDefault();
        if (wallDragged) return;
        openCard(card);
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

  /* ------------------------------ Índice Brutalista de Soft Skills (Recrutamento) ------------------------------ */
  var skillsStage = $('[data-skills-stage]');
  if (skillsStage) {
    var skRows = $$('[data-skill-idx]', skillsStage);
    var skTotal = skRows.length;
    var skCur = -1;
    var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var isMobileSkills = function () { return window.matchMedia && window.matchMedia('(max-width: 900px)').matches; };

    function setSkill(idx) {
      var mobile = isMobileSkills();
      if (idx < 0 || idx >= skTotal) {
        skCur = -1;
      } else {
        skCur = mobile ? Math.floor(idx / 2) * 2 : idx;
      }
      skRows.forEach(function (row, i) {
        var active = skCur !== -1 && (mobile ? (i === skCur || i === skCur + 1) : i === skCur);
        row.classList.toggle('is-active', active);
        row.setAttribute('aria-selected', String(active));
      });
    }

    skRows.forEach(function (row) {
      var i = Number(row.getAttribute('data-skill-idx')) || 0;
      row.addEventListener('click', function () {
        if (isMobileSkills()) {
          var pairStart = Math.floor(i / 2) * 2;
          if (skCur === pairStart) setSkill(-1);
          else setSkill(pairStart);
        } else {
          setSkill(i);
        }
      });
      if (finePointer) {
        row.addEventListener('mouseenter', function () {
          if (!isMobileSkills()) setSkill(i);
        });
      }
      row.addEventListener('focus', function () { if (!isMobileSkills()) setSkill(i); });
      row.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          var ni = (i + 1) % skTotal;
          setSkill(ni);
          skRows[ni].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          var pi = (i + skTotal - 1) % skTotal;
          setSkill(pi);
          skRows[pi].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          setSkill(0);
          skRows[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          setSkill(skTotal - 1);
          skRows[skTotal - 1].focus();
        }
      });
    });

    setSkill(isMobileSkills() ? -1 : 0);
  }

  /* ------------------------------ Submissão genérica (Formspree + fallback) ------------------------------ */
  function bindForm(form, statusEl, cfg) {
    if (!form || !statusEl) return;
    var btn = $('button[type=submit]', form);
    var setStatus = function (k, cls) { statusEl.className = 'status ' + (cls || ''); statusEl.textContent = k ? t(k) : ''; };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if ($('[name=_honey]', form).value) return;
      if (!form.checkValidity()) { form.reportValidity(); setStatus('a.val', 'err'); return; }
      var multi = $('[data-multi-group]', form);
      if (multi && !$$('input[type=checkbox]:checked', multi).length) {
        setStatus('a.val', 'err');
        var first = $('input[type=checkbox]', multi);
        if (first) first.focus();
        return;
      }

      var fd = new FormData(form), data = {};
      fd.forEach(function (v, k) {
        if (k === '_honey') return;
        var val = String(v).trim();
        if (!val) return;
        data[k] = data[k] ? data[k] + ', ' + val : val;
      });
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
    origin: 'Pedido de orçamento - página principal',
    subject: function (d) { return 'Pedido de orçamento - site: ' + (d.tipo_obra || 'Geral') + ' (' + d.nome + ')'; },
    okKey: 'c.ok',
    sendKey: 'c.send'
  });

  /* Formulário de candidatura (recrutamento) */
  bindForm($('#apply-form'), $('#apply-status'), {
    endpoint: FORM_ENDPOINT_CANDIDATURA,
    origin: 'Candidatura - recrutamento',
    subject: function (d) { return 'Candidatura - site: ' + d.especialidade + ' (' + d.nome + ')'; },
    okKey: 'a.ok',
    sendKey: 'a.send'
  });

  var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();
})();
