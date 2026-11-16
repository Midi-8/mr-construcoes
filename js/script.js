/**
 * MR Construções — Script Principal (js/script.js)
 * Navegação, animações reveal & typewriter sem salto de layout, comparador antes/depois,
 * filtro discreto de projetos e submissão dos formulários (Orçamento PT e Candidatura DE).
 */

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
            compare.style.setProperty('--split', clamped + '%');
            compare.style.setProperty('--pos', clamped + '%');
            range.value = clamped;
        };

        range.addEventListener('input', (e) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => syncCompare(e.target.value));
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

    // 11. Submissão do Formulário de Pedido de Orçamento (Portugal - index.html)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Enviar pedido ↗';

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const honey = contactForm.querySelector('input[name="_honey"]');
            if (honey && honey.value.trim() !== '') return;

            if (!contactForm.reportValidity()) return;

            const data = new FormData(contactForm);
            const name = String(data.get('name') || '').trim();
            const reply = String(data.get('reply') || '').trim();
            const location = String(data.get('location') || '').trim();
            const type = String(data.get('type') || '').trim();

            if (!name || !reply || !location || !type) {
                formStatus.className = 'form-status is-error';
                formStatus.textContent = 'Por favor, preencha os campos principais do pedido.';
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute('aria-disabled', 'true');
                submitBtn.innerHTML = 'A enviar...';
            }
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            try {
                const response = await fetch('https://formsubmit.co/ajax/geral@marcoribeiroconstrucoes.pt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        Nome: name,
                        Telefone_ou_Email: reply,
                        Localizacao_da_Obra: location,
                        Tipo_de_Intervencao: type,
                        _subject: `Novo Pedido de Orçamento (PT): ${type} - ${location} (${name})`,
                        _cc: 'mr@marcoribeiroconstrucoes.pt',
                        _template: 'table',
                        _captcha: 'false'
                    })
                });

                if (!response.ok) {
                    throw new Error(`Erro de servidor (${response.status})`);
                }

                const result = await response.json();
                if (result.success === 'true' || result.success === true) {
                    contactForm.reset();
                    formStatus.className = 'form-status is-success';
                    formStatus.textContent = '';
                    showToast();
                    window.trackConversion('form_submit_success', 'quote_pt', type);
                } else {
                    throw new Error(result.message || 'Submissão não confirmada.');
                }
            } catch (_) {
                formStatus.className = 'form-status is-error';
                formStatus.textContent = 'Não foi possível submeter o formulário no momento. Por favor utilize o botão de WhatsApp acima ou contacte geral@marcoribeiroconstrucoes.pt.';
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.removeAttribute('aria-disabled');
                    submitBtn.innerHTML = originalBtnHTML;
                }
            }
        });
    }

    // 12. Submissão do Formulário de Candidatura (Alemanha - alemanha.html)
    const recForm = document.getElementById('recruitment-form');
    const recStatus = document.getElementById('rec-form-status');

    if (recForm && recStatus) {
        const submitBtn = recForm.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Enviar candidatura ↗';

        recForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const honey = recForm.querySelector('input[name="_honey"]');
            if (honey && honey.value.trim() !== '') return;

            if (!recForm.reportValidity()) return;

            const data = new FormData(recForm);
            const name = String(data.get('name') || '').trim();
            const phone = String(data.get('phone') || '').trim();
            const specialty = String(data.get('specialty') || '').trim();
            const residence = String(data.get('residence') || '').trim();

            if (!name || !phone || !specialty || !residence) {
                recStatus.className = 'form-status is-error';
                recStatus.textContent = 'Por favor, preencha todos os campos da candidatura.';
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute('aria-disabled', 'true');
                submitBtn.innerHTML = 'A enviar...';
            }
            recStatus.className = 'form-status';
            recStatus.textContent = '';

            try {
                const response = await fetch('https://formsubmit.co/ajax/geral@marcoribeiroconstrucoes.pt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        Candidato: name,
                        Telefone_WhatsApp: phone,
                        Especialidade: specialty,
                        Local_de_Residencia: residence,
                        Mercado: 'Alemanha — Carpintaria de Cofragem',
                        _subject: `Nova Candidatura (Alemanha): ${specialty} - ${name}`,
                        _cc: 'mr@marcoribeiroconstrucoes.pt',
                        _template: 'table',
                        _captcha: 'false'
                    })
                });

                if (!response.ok) {
                    throw new Error(`Erro de servidor (${response.status})`);
                }

                const result = await response.json();
                if (result.success === 'true' || result.success === true) {
                    recForm.reset();
                    recStatus.className = 'form-status is-success';
                    recStatus.textContent = '';
                    showToast();
                    window.trackConversion('recruitment_submit_success', 'recruitment_de', specialty);
                } else {
                    throw new Error(result.message || 'Submissão não confirmada.');
                }
            } catch (_) {
                recStatus.className = 'form-status is-error';
                recStatus.textContent = 'Não foi possível enviar a candidatura no momento. Por favor contacte diretamente pelo botão de WhatsApp acima.';
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.removeAttribute('aria-disabled');
                    submitBtn.innerHTML = originalBtnHTML;
                }
            }
        });
    }
});
