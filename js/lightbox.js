/**
 * MR CONSTRUÇÕES — Lightbox de Fotografias (lightbox.js)
 * Visualizador simples, limpo e acessível de imagens em ecrã inteiro
 */

(function () {
  'use strict';

  let items = [];
  let currentIndex = 0;
  let lastFocusedElement = null;
  let touchStartX = 0;
  let touchEndX = 0;

  const modal = document.getElementById('lightbox');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption-text');
  const counterEl = document.getElementById('lightbox-counter');
  const btnClose = document.getElementById('lightbox-close');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');

  if (!modal || !imgEl) return;

  function updateImage() {
    if (!items.length) return;
    const item = items[currentIndex];
    const url = typeof item === 'string' ? item : item.url;
    const caption = typeof item === 'object' && item.caption ? item.caption : '';

    imgEl.src = url;
    imgEl.alt = caption || 'Fotografia do projeto';

    if (captionEl) {
      captionEl.textContent = caption;
    }

    if (counterEl) {
      if (items.length > 1) {
        counterEl.textContent = `${currentIndex + 1} / ${items.length}`;
        counterEl.hidden = false;
      } else {
        counterEl.textContent = '';
        counterEl.hidden = true;
      }
    }

    if (btnPrev && btnNext) {
      const showNav = items.length > 1;
      btnPrev.hidden = !showNav;
      btnNext.hidden = !showNav;
    }
  }

  function open(imageList, startIndex = 0) {
    if (!imageList || !imageList.length) return;

    items = imageList;
    currentIndex = Math.max(0, Math.min(startIndex, items.length - 1));
    lastFocusedElement = document.activeElement;

    updateImage();

    modal.hidden = false;
    // Forçar reflow para ativar animação de opacidade
    void modal.offsetWidth;
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    if (btnClose) {
      btnClose.focus();
    }
  }

  function close() {
    if (modal.hidden) return;

    modal.classList.remove('is-active');
    modal.hidden = true;
    imgEl.src = '';
    imgEl.alt = '';
    document.body.style.overflow = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function next() {
    if (items.length <= 1) return;
    currentIndex = (currentIndex + 1) % items.length;
    updateImage();
  }

  function prev() {
    if (items.length <= 1) return;
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateImage();
  }

  // Eventos de clique
  if (btnClose) btnClose.addEventListener('click', close);
  if (btnNext) btnNext.addEventListener('click', next);
  if (btnPrev) btnPrev.addEventListener('click', prev);

  modal.addEventListener('click', (e) => {
    // Fechar ao clicar fora da imagem e fora dos controlos
    if (e.target === modal || e.target.classList.contains('lightbox-figure')) {
      close();
    }
  });

  // Teclado (Escape, Setas esquerda/direita)
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  });

  // Gestos touch em dispositivos móveis (swipe)
  modal.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
    }
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches.length === 1) {
      touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) {
          next();
        } else {
          prev();
        }
      }
    }
  }, { passive: true });

  // Expor API global
  window.mrLightbox = {
    open,
    close,
    next,
    prev
  };
})();
