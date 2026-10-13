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

    // 4. Menu mobile (abrir/fechar e acessibilidade)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navlinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
            const icon = menuToggle.querySelector('span');
            if (icon) icon.textContent = isOpen ? '+' : '−';
            navLinks.classList.toggle('open', !isOpen);
        });

        // Fechar menu ao clicar num link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menu');
                const icon = menuToggle.querySelector('span');
                if (icon) icon.textContent = '+';
            });
        });

        // Fechar menu com a tecla Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menu');
                const icon = menuToggle.querySelector('span');
                if (icon) icon.textContent = '+';
                menuToggle.focus();
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

    // 9. Formulário de contacto via mailto
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    if (form && formStatus) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!form.reportValidity()) return;
            const data = new FormData(form);
            const name = String(data.get('name') || '').trim();
            const reply = String(data.get('reply') || '').trim();
            const type = String(data.get('type') || '').trim();
            const description = String(data.get('description') || '').trim();
            if (!name || !reply || !type || !description) {
                formStatus.textContent = 'Preencha todos os campos para continuar.';
                return;
            }
            const subject = encodeURIComponent('Pedido de orçamento: ' + type);
            const body = encodeURIComponent(
                'Nome: ' + name + '\nContacto: ' + reply + '\nTipo de obra: ' + type + '\n\nDescrição:\n' + description
            );
            formStatus.textContent = 'A abrir o seu programa de email. Confirme a mensagem para concluir o envio.';
            window.location.href = 'mailto:mrconstrucoes@sapo.pt?subject=' + subject + '&body=' + body;
        });
    }
});