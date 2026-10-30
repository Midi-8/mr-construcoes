/**
 * MR CONSTRUÇÕES — Gestor de Visualização de Projetos (project-view.js)
 * Alterna entre a página principal e a página detalhada do projeto via hash da URL
 */

(function () {
  'use strict';

  const mainContent = document.getElementById('main-content');
  const projectPage = document.getElementById('project-page');

  if (!projectPage) return;

  const elCounter = document.getElementById('pp-counter');
  const elMeta = document.getElementById('pp-meta');
  const elTitle = document.getElementById('pp-title');
  const elTagline = document.getElementById('pp-tagline');
  const elCover = document.getElementById('pp-cover');
  const elDescription = document.getElementById('pp-description');
  const elHighlights = document.getElementById('pp-highlights');
  const elData = document.getElementById('pp-data');
  const elGallery = document.getElementById('pp-gallery');
  const elPrev = document.getElementById('pp-prev');
  const elPrevTitle = document.getElementById('pp-prev-title');
  const elNext = document.getElementById('pp-next');
  const elNextTitle = document.getElementById('pp-next-title');

  const defaultTitle = document.title;
  const waFloat = document.querySelector('.whatsapp-float');
  const defaultWaHref = waFloat ? waFloat.href : '';
  const defaultWaLabel = waFloat ? waFloat.getAttribute('aria-label') : '';

  function renderProject(project, index, total) {
    // 1. Contador e Metadados
    const num = String(index + 1).padStart(2, '0');
    const tot = String(total).padStart(2, '0');
    if (elCounter) elCounter.textContent = `Projeto ${num} / ${tot}`;

    const metaParts = [project.categoryLabel, project.location, project.year].filter(Boolean);
    if (elMeta) elMeta.textContent = metaParts.join(' · ');

    // 2. Título e Subtítulo
    if (elTitle) elTitle.textContent = project.title || '';
    if (elTagline) elTagline.textContent = project.tagline || '';

    // 3. Imagem principal de capa
    if (elCover) {
      elCover.src = project.heroImage || '';
      elCover.alt = project.title || 'Fotografia do projeto';
    }

    // 4. Descrição
    if (elDescription) {
      elDescription.textContent = project.description || '';
    }

    // 5. Pontos-chave / Destaques
    if (elHighlights) {
      elHighlights.innerHTML = '';
      if (Array.isArray(project.highlights) && project.highlights.length > 0) {
        project.highlights.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          elHighlights.appendChild(li);
        });
        elHighlights.hidden = false;
      } else {
        elHighlights.hidden = true;
      }
    }

    // 6. Ficha Técnica / Dados da obra
    if (elData) {
      elData.innerHTML = '';
      const specs = [
        { label: 'Categoria', val: project.categoryLabel },
        { label: 'Localização', val: project.location },
        { label: 'Ano', val: project.year },
        { label: 'Duração', val: project.duration },
        { label: 'Área', val: project.area }
      ];

      specs.forEach((s) => {
        if (!s.val) return;
        const row = document.createElement('div');
        row.className = 'pp-data-row';

        const lbl = document.createElement('span');
        lbl.className = 'pp-data-label';
        lbl.textContent = s.label;

        const val = document.createElement('span');
        val.className = 'pp-data-val';
        val.textContent = s.val;

        row.appendChild(lbl);
        row.appendChild(val);
        elData.appendChild(row);
      });
    }

    // 7. Galeria de fotografias
    if (elGallery) {
      elGallery.innerHTML = '';
      const gallery = project.gallery || [];

      if (gallery.length > 0) {
        gallery.forEach((item, imgIndex) => {
          const figure = document.createElement('figure');
          figure.className = 'pp-gallery-item';

          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'pp-gallery-btn';
          btn.setAttribute('aria-label', `Ampliar fotografia: ${item.caption || project.title}`);

          const img = document.createElement('img');
          img.src = item.url;
          img.alt = item.caption || project.title;
          img.loading = 'lazy';
          img.width = 1200;
          img.height = 900;

          btn.appendChild(img);
          figure.appendChild(btn);

          if (item.caption) {
            const cap = document.createElement('figcaption');
            cap.textContent = item.caption;
            figure.appendChild(cap);
          }

          btn.addEventListener('click', () => {
            if (window.mrLightbox && typeof window.mrLightbox.open === 'function') {
              window.mrLightbox.open(gallery, imgIndex);
            }
          });

          elGallery.appendChild(figure);
        });
        elGallery.hidden = false;
      } else {
        elGallery.hidden = true;
      }
    }

    // 8. Navegação anterior / seguinte
    const prevProj = window.PROJECTS_DATA[(index - 1 + total) % total];
    const nextProj = window.PROJECTS_DATA[(index + 1) % total];

    if (elPrev && prevProj) {
      elPrev.href = `#projeto/${prevProj.id}`;
      if (elPrevTitle) elPrevTitle.textContent = prevProj.title;
    }

    if (elNext && nextProj) {
      elNext.href = `#projeto/${nextProj.id}`;
      if (elNextTitle) elNextTitle.textContent = nextProj.title;
    }

    // 9. Pré-carregamento suave das capas do projeto anterior e seguinte
    if (prevProj && prevProj.heroImage) {
      const pImg = new Image();
      pImg.src = prevProj.heroImage;
    }
    if (nextProj && nextProj.heroImage) {
      const nImg = new Image();
      nImg.src = nextProj.heroImage;
    }
  }

  function handleRoute() {
    const hash = window.location.hash || '';

    if (hash.startsWith('#projeto/')) {
      const projectId = hash.replace('#projeto/', '').trim();
      const projects = window.PROJECTS_DATA || [];
      const index = projects.findIndex((p) => p.id === projectId);

      if (index === -1) {
        // Se o id não existir, volta aos projetos na página principal
        window.location.hash = '#projetos';
        return;
      }

      const project = projects[index];
      renderProject(project, index, projects.length);

      // Título da aba dinâmico
      document.title = `${project.title} | MR Construções`;

      // Mensagem contextual no botão WhatsApp
      if (waFloat) {
        const text = encodeURIComponent(`Olá! Estive a ver o vosso projeto "${project.title}" no website e gostaria de pedir um orçamento para uma obra semelhante.`);
        waFloat.href = `https://wa.me/351915680947?text=${text}`;
        waFloat.setAttribute('aria-label', `Pedir orçamento via WhatsApp sobre ${project.title}`);
      }

      if (mainContent) mainContent.hidden = true;
      projectPage.hidden = false;
      document.body.classList.add('is-project-open');

      window.scrollTo(0, 0);
      window.dispatchEvent(new Event('scroll'));
    } else {
      // Página principal
      if (!projectPage.hidden) {
        projectPage.hidden = true;
        if (mainContent) mainContent.hidden = false;
        document.body.classList.remove('is-project-open');

        // Restaurar título e WhatsApp padrão
        document.title = defaultTitle;
        if (waFloat && defaultWaHref) {
          waFloat.href = defaultWaHref;
          waFloat.setAttribute('aria-label', defaultWaLabel || 'Pedir orçamento via WhatsApp');
        }

        // Se o hash apontar para uma secção (ex.: #projetos, #contacto), rolar suavemente até ela
        if (hash && hash.length > 1) {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
        window.dispatchEvent(new Event('scroll'));
      }
    }
  }

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', handleRoute);
})();
