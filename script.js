/**
 * MR Construções - Script Principal (script.js)
 * Interações e funcionalidades dinâmicas do website
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tratamento de fallback para logotipo
    document.querySelectorAll('.brand img').forEach(img => {
        img.addEventListener('error', () => {
            img.hidden = true;
            const fallback = document.createElement('span');
            fallback.className = 'brand-fallback';
            fallback.textContent = 'MR Construções';
            img.parentElement.appendChild(fallback);
        }, { once: true });
    });

    // 2. Remover classe no-js quando o script estiver pronto
    document.body.classList.remove('no-js');

    // 3. Barra de navegação com estado no scroll
    const topbar = document.querySelector('.topbar');
    const heroSection = document.querySelector('.hero');
    const updateTopbar = () => {
        if (!topbar || !heroSection) return;
        topbar.classList.toggle('is-scrolled', window.scrollY > Math.max(100, heroSection.offsetHeight - 100));
    };
    window.addEventListener('scroll', updateTopbar, { passive: true });
    updateTopbar();

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
            menuToggle.setAttribute('aria-expanded', String(open));
            menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
            const icon = menuToggle.querySelector('span');
            if (icon) icon.textContent = open ? '−' : '+';

            if (navBackdrop) {
                navBackdrop.classList.toggle('is-active', open);
                navBackdrop.setAttribute('aria-hidden', String(!open));
            }

            if (open) {
                previousBodyOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                document.body.classList.add('menu-open');
                const firstLink = navLinks.querySelector('a');
                if (firstLink) {
                    firstLink.focus();
                }
            } else {
                document.body.style.overflow = previousBodyOverflow;
                document.body.classList.remove('menu-open');
            }
        };

        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('open');
            setMenuState(!isOpen);
            if (isOpen) {
                menuToggle.focus();
            }
        });

        if (navBackdrop) {
            navBackdrop.addEventListener('click', () => {
                setMenuState(false);
                menuToggle.focus();
            });
        }

        // Fechar menu ao clicar num link de navegação
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setMenuState(false);
            });
        });

        // Fechar com a tecla Escape e gestão de foco acessível (Tab trap)
        document.addEventListener('keydown', (event) => {
            if (!navLinks.classList.contains('open')) return;

            if (event.key === 'Escape') {
                event.preventDefault();
                setMenuState(false);
                menuToggle.focus();
                return;
            }

            if (event.key === 'Tab') {
                const focusableElements = [menuToggle, ...navLinks.querySelectorAll('a')];
                if (focusableElements.length === 0) return;
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        });

        // Repor estado e scroll automaticamente ao passar para layout desktop
        const desktopMedia = window.matchMedia('(min-width: 761px)');
        desktopMedia.addEventListener('change', (e) => {
            if (e.matches && navLinks.classList.contains('open')) {
                setMenuState(false);
            }
        });
    }

    // 5. Animação de revelação com scroll (Intersection Observer)
    const revealItems = document.querySelectorAll('.reveal');
    if (revealItems.length > 0) {
        if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
            revealItems.forEach(item => observer.observe(item));
        } else {
            revealItems.forEach(item => item.classList.add('is-visible'));
        }
    }

    // 6. Controlo de comparação antes / depois
    const compare = document.getElementById('compare');
    const compareRange = document.getElementById('compare-range');
    if (compare && compareRange) {
        function updateCompare() {
            const value = Number(compareRange.value);
            compare.style.setProperty('--split', value + '%');
            compareRange.setAttribute('aria-valuetext', value + ' por cento');
        }
        compareRange.addEventListener('input', updateCompare);
        updateCompare();
    }

    // 7. Especialidades / Acordeão
    document.querySelectorAll('.specialty-item').forEach(item => {
        const summary = item.querySelector('summary');
        if (summary) {
            summary.setAttribute('aria-expanded', String(item.open));
            item.addEventListener('toggle', () => {
                summary.setAttribute('aria-expanded', String(item.open));
            });
        }
    });

    // 8. Ano dinâmico no rodapé
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 9. Componente Toast acessível
    const toast = document.getElementById('toast');
    const toastClose = document.getElementById('toast-close');
    let toastTimeout = null;

    const hideToast = () => {
        if (!toast) return;
        toast.classList.remove('is-visible');
        clearTimeout(toastTimeout);
        toastTimeout = null;
        setTimeout(() => {
            if (!toast.classList.contains('is-visible')) {
                toast.hidden = true;
            }
        }, 300);
    };

    const showToast = (message = 'Mensagem Enviada') => {
        if (!toast) return;
        const msgEl = toast.querySelector('.toast-message');
        if (msgEl) msgEl.textContent = message;

        clearTimeout(toastTimeout);
        toast.hidden = false;
        // Forçar reflow para aplicar transição CSS
        void toast.offsetWidth;
        toast.classList.add('is-visible');

        // Dispensa automática após 6 segundos
        toastTimeout = setTimeout(() => {
            hideToast();
        }, 6000);
    };

    if (toast) {
        if (toastClose) {
            toastClose.addEventListener('click', hideToast);
        }
        // Pausar temporizador em hover/focus para leitura acessível
        toast.addEventListener('mouseenter', () => clearTimeout(toastTimeout));
        toast.addEventListener('mouseleave', () => {
            if (toast.classList.contains('is-visible')) {
                toastTimeout = setTimeout(hideToast, 3000);
            }
        });
        toast.addEventListener('focusin', () => clearTimeout(toastTimeout));
        toast.addEventListener('focusout', () => {
            if (toast.classList.contains('is-visible')) {
                toastTimeout = setTimeout(hideToast, 3000);
            }
        });
    }

    // 10. Envio real e fiável do formulário de contacto
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = form ? form.querySelector('.submit') : null;

    if (form && formStatus && submitBtn) {
        const originalBtnHTML = submitBtn.innerHTML;

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Validação nativa do formulário
            if (!form.reportValidity()) return;

            // Honeypot anti-spam: se o campo de despiste estiver preenchido, aborta imediatamente
            const honeyField = form.querySelector('input[name="_honey"]');
            const honeyValue = (honeyField ? honeyField.value : '').trim();
            if (honeyValue !== '') {
                // Aborta a submissão silenciosamente: sem pedidos ao serviço, sem alterar o botão,
                // sem limpar os campos e sem apresentar notificação ou toast de sucesso.
                return;
            }

            const data = new FormData(form);
            const name = String(data.get('name') || '').trim();
            const reply = String(data.get('reply') || '').trim();
            const type = String(data.get('type') || '').trim();
            const description = String(data.get('description') || '').trim();

            if (!name || !reply || !type || !description) {
                formStatus.className = 'form-status is-error';
                formStatus.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                return;
            }

            // Estado de envio e proteção contra submissões repetidas
            submitBtn.disabled = true;
            submitBtn.setAttribute('aria-disabled', 'true');
            submitBtn.innerHTML = 'A enviar... <span aria-hidden="true">⏳</span>';
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            try {
                // Envio real via AJAX/JSON para o destino oficial da empresa
                const response = await fetch('https://formsubmit.co/ajax/mrconstrucoes@sapo.pt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        reply: reply,
                        type: type,
                        description: description,
                        _subject: `Novo pedido de orçamento: ${type} (${name})`,
                        _template: 'table',
                        _captcha: 'false',
                        _honey: ''
                    })
                });

                if (!response.ok) {
                    throw new Error(`Erro de rede ou servidor (${response.status})`);
                }

                const result = await response.json();

                // Confirmação estrita de sucesso pelo serviço
                if (result.success === 'true' || result.success === true) {
                    form.reset();
                    formStatus.className = 'form-status is-success';
                    formStatus.textContent = '';
                    showToast('Mensagem Enviada');
                } else if (result.message && result.message.toLowerCase().includes('activate')) {
                    // Informação caso o serviço esteja a aguardar validação única inicial no email
                    formStatus.className = 'form-status is-error';
                    formStatus.textContent = 'O serviço de receção está a aguardar validação inicial no email da empresa. Por favor, tente mais tarde ou use os contactos diretos.';
                } else {
                    throw new Error(result.message || 'O serviço não confirmou a submissão.');
                }
            } catch (err) {
                // Em caso de erro: preserva todos os dados e apresenta mensagem de erro clara
                formStatus.className = 'form-status is-error';
                formStatus.textContent = 'Não foi possível enviar a mensagem no momento. Por favor tente novamente ou contacte diretamente por telefone ou email.';
            } finally {
                // Restaura sempre o estado do botão
                submitBtn.disabled = false;
                submitBtn.removeAttribute('aria-disabled');
                submitBtn.innerHTML = originalBtnHTML;
            }
        });
    }
});
