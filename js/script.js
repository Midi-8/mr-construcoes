/**
 * MR Construções — Script Principal (js/script.js)
 * Navegação, animações reveal & typewriter sem salto de layout, comparador antes/depois,
 * filtro discreto de projetos e submissão dos formulários (Orçamento PT e Candidatura DE).
 */

/* URL BASE DO WEBSITE (SEO / Partilha)
 * Quando o domínio próprio estiver ativo, substitua por: https://marcoribeiroconstrucoes.pt
 * (Atualize também os blocos marcados com "SEO_BASE_URL" nos ficheiros HTML, sitemap.xml e robots.txt)
 */
const SITE_BASE_URL = 'https://midi-8.github.io/mr-construcoes';

/* ENDPOINTS DOS FORMULÁRIOS (FORMSPREE)
 * Substitua os IDs abaixo pelos respetivos identificadores criados no painel do Formspree.
 */
const FORM_ENDPOINT_ORCAMENTO = 'https://formspree.io/f/SEU_ID_ORCAMENTO_AQUI';
const FORM_ENDPOINT_CANDIDATURA = 'https://formspree.io/f/SEU_ID_CANDIDATURA_AQUI';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ativa estado JS no documento
    document.body.classList.remove('no-js');

    // 2. Rastreio de Conversões
    window.trackConversion = (eventName, category, label) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, {
                event_category: category || 'engagement',
                event_label: label || ''
            });
        }
        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push({
                event: eventName,
                category: category || 'engagement',
                label: label || ''
            });
        }
    };

    // 2b. Ativação inteligente do vídeo de entrada no Hero (quando imagens/hero-video.mp4 existir)
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        const videoSrc = heroVideo.getAttribute('data-video-src');
        if (videoSrc) {
            fetch(videoSrc, { method: 'HEAD' })
                .then((res) => {
                    if (res.ok) {
                        heroVideo.src = videoSrc;
                        heroVideo.addEventListener('canplay', () => {
                            heroVideo.classList.add('is-ready');
                            heroVideo.play().catch(() => {});
                        }, { once: true });
                        heroVideo.load();
                    }
                })
                .catch(() => {
                    // Mantém a sequência cinematográfica .hero-reel ativa caso o ficheiro .mp4 ainda não esteja presente
                });
        }
    }

    // 3. Comportamento da barra de navegação no scroll
    const topbar = document.querySelector('.topbar');
    const heroSection = document.querySelector('.hero');
    const isLightHeaderPage = document.body.classList.contains('page-light-header');

    const updateTopbar = () => {
        if (!topbar) return;
        if (isLightHeaderPage || document.body.classList.contains('is-project-open')) {
            topbar.classList.add('is-scrolled');
            return;
        }
        if (!heroSection) {
            topbar.classList.add('is-scrolled');
            return;
        }
        topbar.classList.toggle('is-scrolled', window.scrollY > Math.max(80, heroSection.offsetHeight - 120));
    };
    window.addEventListener('scroll', updateTopbar, { passive: true });
    updateTopbar();

    // 3b. Indicador de secção ativa na navegação (ScrollSpy)
    const trackedSections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.navlinks-list a');

    if ('IntersectionObserver' in window && trackedSections.length && navAnchors.length && !isLightHeaderPage) {
        const spyObserver = new IntersectionObserver((entries) => {
            if (document.body.classList.contains('is-project-open')) {
                navAnchors.forEach(a => a.classList.remove('is-active'));
                return;
            }

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navAnchors.forEach(a => {
                        const href = a.getAttribute('href');
                        a.classList.toggle('is-active', href === `#${id}`);
                    });
                }
            });
        }, {
            rootMargin: '-25% 0px -65% 0px',
            threshold: 0
        });

        trackedSections.forEach(sec => spyObserver.observe(sec));
    }

    // 4. Menu mobile (abrir/fechar, backdrop, bloqueio de scroll e acessibilidade)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navlinks');
    const navBackdrop = document.getElementById('nav-backdrop');

    if (menuToggle && navLinks) {
        let previousBodyOverflow = '';

        const setMenuState = (open) => {
            const isCurrentlyOpen = navLinks.classList.contains('open');
            if (open === isCurrentlyOpen) return;

            navLinks.classList.toggle('open', open);
            menuToggle.classList.toggle('is-active', open);
            document.body.classList.toggle('menu-open', open);
            menuToggle.setAttribute('aria-expanded', String(open));
            menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');

            if (navBackdrop) {
                navBackdrop.classList.toggle('is-visible', open);
            }

            if (open) {
                previousBodyOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = previousBodyOverflow || '';
            }
        };

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navLinks.classList.contains('open');
            setMenuState(!isOpen);
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenuState(false));
        });

        if (navBackdrop) {
            navBackdrop.addEventListener('click', () => setMenuState(false));
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                setMenuState(false);
                menuToggle.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 760 && navLinks.classList.contains('open')) {
                setMenuState(false);
            }
        });
    }

    // 5. Animações de revelação ao fazer scroll (IntersectionObserver)
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('is-visible'));
    }

    // 6. Animação de Escrever (Typewriter) depois de cada título ou secção (Pág. 2 do PDF)
    const typewriterTargets = document.querySelectorAll('.typewriter-target');
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && typewriterTargets.length && !prefersReducedMotion) {
        const twObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    twObserver.unobserve(el);
                    runTypewriter(el);
                }
            });
        }, { threshold: 0.25, rootMargin: '0px 0px -20px 0px' });

        typewriterTargets.forEach((el) => {
            const initialText = el.getAttribute('data-tw-full') || el.textContent.trim();
            el.setAttribute('data-tw-full', initialText);
            // Reserva a altura antes de ocultar o texto para evitar qualquer salto de layout
            const h = el.offsetHeight;
            if (h > 0) {
                el.style.minHeight = `${h}px`;
            }
            el.classList.add('tw-pending');
            el.textContent = '';
            twObserver.observe(el);
        });
    }

    function runTypewriter(el) {
        if (el.dataset.twRunning === 'true' || el.dataset.twDone === 'true') return;
        const fullText = el.getAttribute('data-tw-full') || '';
        if (!fullText) {
            el.classList.remove('tw-pending');
            return;
        }

        el.dataset.twRunning = 'true';
        el.classList.remove('tw-pending');
        el.classList.add('is-typing');
        el.textContent = '';

        let i = 0;
        const totalLen = fullText.length;
        const stepDelay = Math.max(9, Math.min(20, Math.floor(1150 / Math.max(1, totalLen))));

        const timer = setInterval(() => {
            const currentExpected = el.getAttribute('data-tw-full') || fullText;
            if (currentExpected !== fullText || el.dataset.twDone === 'true') {
                clearInterval(timer);
                el.textContent = currentExpected;
                el.classList.remove('is-typing', 'tw-pending');
                el.style.minHeight = '';
                el.dataset.twRunning = 'false';
                el.dataset.twDone = 'true';
                return;
            }

            i += 1;
            el.textContent = fullText.slice(0, i);

            if (i >= totalLen) {
                clearInterval(timer);
                el.classList.remove('is-typing', 'tw-pending');
                el.style.minHeight = '';
                el.dataset.twRunning = 'false';
                el.dataset.twDone = 'true';
            }
        }, stepDelay);
    }

    // 7. Comparador interativo Antes e Depois
    const compare = document.getElementById('compare');
    const range = document.getElementById('compare-range');
    if (compare && range) {
        let rafId = null;
        const syncCompare = (val) => {
            const clamped = Math.max(0, Math.min(100, Number(val)));
            const rounded = Math.round(clamped);
            compare.style.setProperty('--split', clamped + '%');
            compare.style.setProperty('--pos', clamped + '%');
            range.value = clamped;
            range.setAttribute('aria-valuenow', String(rounded));
            range.setAttribute('aria-valuetext', `${rounded}%`);
        };

        range.addEventListener('input', (e) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => syncCompare(e.target.value));
        });

        range.addEventListener('keydown', (e) => {
            const step = e.shiftKey ? 10 : 5;
            const current = Number(range.value) || 50;
            if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                e.preventDefault();
                syncCompare(current - step);
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                e.preventDefault();
                syncCompare(current + step);
            } else if (e.key === 'Home') {
                e.preventDefault();
                syncCompare(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                syncCompare(100);
            }
        });

        let dragging = false;
        const updateFromPointer = (clientX) => {
            const rect = compare.getBoundingClientRect();
            if (!rect.width) return;
            const pct = ((clientX - rect.left) / rect.width) * 100;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => syncCompare(pct));
        };

        compare.addEventListener('pointerdown', (e) => {
            if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
            dragging = true;
            if (typeof compare.setPointerCapture === 'function' && e.pointerId !== undefined) {
                try {
                    compare.setPointerCapture(e.pointerId);
                } catch (_) {
                    // Ignora se o navegador não suportar captura deste ponteiro
                }
            }
            updateFromPointer(e.clientX);
        });

        compare.addEventListener('pointermove', (e) => {
            if (!dragging) return;
            updateFromPointer(e.clientX);
        });

        window.addEventListener('pointermove', (e) => {
            if (!dragging) return;
            updateFromPointer(e.clientX);
        }, { passive: true });

        const stopDrag = () => {
            dragging = false;
        };

        compare.addEventListener('pointerup', stopDrag);
        compare.addEventListener('pointercancel', stopDrag);
        window.addEventListener('pointerup', stopDrag, { passive: true });
        window.addEventListener('pointercancel', stopDrag, { passive: true });

        compare.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length === 1) {
                dragging = true;
                updateFromPointer(e.touches[0].clientX);
            }
        }, { passive: true });

        compare.addEventListener('touchmove', (e) => {
            if (!dragging || !e.touches || e.touches.length !== 1) return;
            updateFromPointer(e.touches[0].clientX);
        }, { passive: true });

        compare.addEventListener('touchend', stopDrag, { passive: true });

        syncCompare(range.value);
    }

    // 8. Filtro Discreto de Projetos (Seletor Minimalista - Pág. 3 e Categorias da Pág. 5 do PDF)
    const categorySelect = document.getElementById('project-category-select');
    const oodaGrid = document.querySelector('.ooda-grid');
    const projectItems = document.querySelectorAll('.ooda-grid article.project');

    if (categorySelect && projectItems.length) {
        categorySelect.addEventListener('change', () => {
            const filter = categorySelect.value || 'all';
            if (oodaGrid) {
                oodaGrid.classList.toggle('is-filtered', filter !== 'all');
            }
            projectItems.forEach((card) => {
                const rawCats = card.getAttribute('data-category') || '';
                const cats = rawCats.split(/\s+/).filter(Boolean);
                const match = filter === 'all' || cats.includes(filter);
                const cardLink = card.querySelector('a.ooda-card');
                if (cardLink) {
                    const baseHref = cardLink.dataset.baseHref || (cardLink.getAttribute('href') || '').split('?')[0];
                    cardLink.dataset.baseHref = baseHref;
                    cardLink.setAttribute('href', filter === 'all' ? baseHref : `${baseHref}?cat=${encodeURIComponent(filter)}`);
                }
                if (match) {
                    card.classList.remove('is-hidden');
                    requestAnimationFrame(() => {
                        card.classList.remove('is-fading');
                    });
                } else {
                    card.classList.add('is-fading');
                    setTimeout(() => {
                        if (card.classList.contains('is-fading')) {
                            card.classList.add('is-hidden');
                        }
                    }, 240);
                }
            });
        });
    }

    // 9. Atualização automática do ano no rodapé
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 10. Notificação Toast
    const toast = document.getElementById('toast');
    let toastTimer = null;

    const showToast = (titleText, descText) => {
        if (!toast) return;
        const lang = window.mrCurrentLang || 'pt';
        const dict = (window.mrTranslations && window.mrTranslations[lang]) || {};
        const strong = toast.querySelector('strong');
        const desc = toast.querySelector('.toast-text span');
        if (strong) {
            strong.textContent = titleText || dict['toast.title'] || strong.textContent;
        }
        if (desc) {
            desc.textContent = descText || dict['toast.desc'] || desc.textContent;
        }

        toast.hidden = false;
        requestAnimationFrame(() => {
            toast.classList.add('is-visible');
        });

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('is-visible');
            setTimeout(() => {
                toast.hidden = true;
            }, 350);
        }, 4500);
    };

    // 11. Gestor Partilhado Formspree via fetch/AJAX (sem sair da página)
    const setupFormspreeHandler = ({ formId, statusId, endpoint, buildPayload, successKey, conversionCategory, getConversionLabel }) => {
        const form = document.getElementById(formId);
        const statusEl = document.getElementById(statusId);
        if (!form || !statusEl) return;

        const submitBtn = form.querySelector('button[type="submit"]');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const honey = form.querySelector('input[name="_honey"]');
            if (honey && honey.value.trim() !== '') return;

            const lang = window.mrCurrentLang || 'pt';
            const dict = (window.mrTranslations && window.mrTranslations[lang]) || {};

            const consentInput = form.querySelector('input[name="privacy_consent"]');
            if (consentInput && !consentInput.checked) {
                statusEl.className = 'form-status is-error';
                statusEl.textContent = dict['form.msg.consent'] || 'Por favor, aceite a Política de Privacidade para continuar.';
                consentInput.focus();
                form.reportValidity();
                return;
            }

            if (!form.reportValidity()) {
                statusEl.className = 'form-status is-error';
                statusEl.textContent = dict['form.msg.validation'] || 'Por favor, preencha todos os campos obrigatórios.';
                return;
            }

            const formData = new FormData(form);
            const payload = buildPayload(formData);
            if (!payload) {
                statusEl.className = 'form-status is-error';
                statusEl.textContent = dict['form.msg.validation'] || 'Por favor, preencha todos os campos obrigatórios.';
                return;
            }

            if (!endpoint || endpoint.includes('SEU_ID_')) {
                statusEl.className = 'form-status is-error';
                statusEl.textContent = dict['form.msg.notConfigured'] || 'Endpoint do formulário por configurar em js/script.js. Utilize o WhatsApp ou geral@marcoribeiroconstrucoes.pt.';
                return;
            }

            const btnHTMLBeforeSend = submitBtn ? submitBtn.innerHTML : '';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute('aria-disabled', 'true');
                submitBtn.textContent = dict['form.sending'] || 'A enviar…';
            }
            statusEl.className = 'form-status';
            statusEl.textContent = '';

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const result = await response.json().catch(() => ({}));
                if (!response.ok || result.errors) {
                    throw new Error(`Erro de servidor (${response.status})`);
                }

                form.reset();
                statusEl.className = 'form-status is-success';
                statusEl.textContent = dict[successKey] || dict['toast.desc'] || 'Enviado com sucesso.';
                showToast(dict['toast.title'], dict[successKey] || dict['toast.desc']);
                window.trackConversion('form_submit_success', conversionCategory, getConversionLabel(formData));
            } catch (_) {
                statusEl.className = 'form-status is-error';
                statusEl.textContent = dict['form.msg.error'] || 'Não foi possível enviar no momento. Por favor utilize o botão de WhatsApp acima ou contacte geral@marcoribeiroconstrucoes.pt.';
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.removeAttribute('aria-disabled');
                    submitBtn.innerHTML = btnHTMLBeforeSend;
                }
            }
        });
    };

    // Formulário de Pedido de Orçamento (Portugal - index.html)
    setupFormspreeHandler({
        formId: 'contact-form',
        statusId: 'form-status',
        endpoint: FORM_ENDPOINT_ORCAMENTO,
        successKey: 'form.msg.success',
        conversionCategory: 'quote_pt',
        getConversionLabel: (fd) => String(fd.get('type') || '').trim(),
        buildPayload: (fd) => {
            const name = String(fd.get('name') || '').trim();
            const reply = String(fd.get('reply') || '').trim();
            const location = String(fd.get('location') || '').trim();
            const type = String(fd.get('type') || '').trim();
            const origin = String(fd.get('origem') || 'Pedido de orçamento — site').trim();
            if (!name || !reply || !location || !type) return null;
            return {
                origem: origin,
                _subject: `Pedido de orçamento — site: ${type} · ${location} (${name})`,
                Nome: name,
                Telefone_ou_Email: reply,
                Localizacao_da_Obra: location,
                Tipo_de_Intervencao: type,
                Politica_Privacidade: 'Aceite'
            };
        }
    });

    // 12. Formulário de Candidatura (Alemanha - alemanha.html)
    setupFormspreeHandler({
        formId: 'recruitment-form',
        statusId: 'rec-form-status',
        endpoint: FORM_ENDPOINT_CANDIDATURA,
        successKey: 'de.form.msg.success',
        conversionCategory: 'recruitment_de',
        getConversionLabel: (fd) => String(fd.get('specialty') || '').trim(),
        buildPayload: (fd) => {
            const name = String(fd.get('name') || '').trim();
            const phone = String(fd.get('phone') || '').trim();
            const specialty = String(fd.get('specialty') || '').trim();
            const residence = String(fd.get('residence') || '').trim();
            const experience = String(fd.get('experience') || '').trim();
            const availability = String(fd.get('availability') || '').trim();
            const workedInDe = String(fd.get('worked_in_germany') || 'Não indicado').trim();
            const origin = String(fd.get('origem') || 'Candidatura Alemanha — site').trim();
            if (!name || !phone || !specialty || !residence || !experience || !availability) return null;
            return {
                origem: origin,
                _subject: `Candidatura Alemanha — site: ${specialty} (${name})`,
                Candidato: name,
                Telefone_WhatsApp: phone,
                Especialidade: specialty,
                Local_de_Residencia: residence,
                Anos_de_Experiencia: experience,
                Disponibilidade_Inicio: availability,
                Ja_Trabalhou_na_Alemanha: workedInDe,
                Mercado: 'Alemanha — Carpintaria de Cofragem',
                Politica_Privacidade: 'Aceite'
            };
        }
    });
});
