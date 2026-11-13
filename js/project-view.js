/**
 * MR CONSTRUÇÕES — Gestor de Visualização de Projetos (project-view.js)
 * Alterna entre a página principal e a página detalhada do projeto via hash da URL
 * Com suporte multilingue (PT, EN, DE)
 */

(function () {
  'use strict';

  const mainContent = document.getElementById('main-content');
  const projectPage = document.getElementById('project-page');

  if (!projectPage) return;

  const elCounter = document.getElementById('pp-counter');
  const elCatTag = document.getElementById('pp-cat-tag');
  const elTitle = document.getElementById('pp-title');
  const elTagline = document.getElementById('pp-tagline');
  const elThumbs = document.getElementById('pp-thumbs');
  const elCover = document.getElementById('pp-cover');
  const elCaption = document.getElementById('pp-photo-caption');
  const elZoomBtn = document.getElementById('pp-zoom-btn');
  const elDescription = document.getElementById('pp-description');
  const elData = document.getElementById('pp-data');
  const elHighlightsSection = document.getElementById('pp-highlights-section');
  const elHighlights = document.getElementById('pp-highlights');
  const elPrev = document.getElementById('pp-prev');
  const elPrevTitle = document.getElementById('pp-prev-title');
  const elNext = document.getElementById('pp-next');
  const elNextTitle = document.getElementById('pp-next-title');

  const defaultTitle = document.title;
  const waFloat = document.querySelector('.whatsapp-float');
  const defaultWaHref = waFloat ? waFloat.href : '';
  const defaultWaLabel = waFloat ? waFloat.getAttribute('aria-label') : '';

  const SPEC_LABELS = {
    pt: {
      project: 'Projeto',
      location: 'Localização',
      category: 'Categoria',
      year: 'Ano',
      area: 'Área'
    },
    en: {
      project: 'Project',
      location: 'Location',
      category: 'Category',
      year: 'Year',
      area: 'Area'
    },
    de: {
      project: 'Projekt',
      location: 'Standort',
      category: 'Kategorie',
      year: 'Jahr',
      area: 'Fläche'
    }
  };

  function getLocalizedProject(project) {
    const lang = window.mrCurrentLang || 'pt';
    const tr = (lang !== 'pt' && project.i18n && project.i18n[lang]) ? project.i18n[lang] : null;
    return {
      title: (tr && tr.title) || project.title || '',
      tagline: (tr && tr.tagline) || project.tagline || '',
      categoryLabel: (tr && tr.categoryLabel) || project.categoryLabel || '',
      description: (tr && tr.description) || project.description || '',
      highlights: (tr && tr.highlights) || project.highlights || [],
      location: project.location,
      year: project.year,
      area: project.area
    };
  }

  function renderProject(project, index, total) {
    const lang = window.mrCurrentLang || 'pt';
    const labels = SPEC_LABELS[lang] || SPEC_LABELS.pt;
    const locProj = getLocalizedProject(project);

    // 1. Contador de projetos
    const num = String(index + 1).padStart(2, '0');
    const tot = String(total).padStart(2, '0');
    if (elCounter) elCounter.textContent = `${labels.project} ${num} / ${tot}`;

    // 2. Categoria, Título e Subtítulo
    if (elCatTag) {
      if (locProj.categoryLabel) {
        elCatTag.textContent = locProj.categoryLabel;
        elCatTag.hidden = false;
      } else {
        elCatTag.hidden = true;
      }
    }

    if (elTitle) elTitle.textContent = locProj.title;
    if (elTagline) elTagline.textContent = locProj.tagline;

    // 3. Galeria, Miniaturas e Fotografia Principal
    const rawList = Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : (project.heroImage ? [{ url: project.heroImage, caption: locProj.title }] : []);

    const photos = [];
    const seenUrls = new Set();
    rawList.forEach((item) => {
      if (item && item.url && !seenUrls.has(item.url)) {
        photos.push(item);
        seenUrls.add(item.url);
      }
    });

    let currentPhotoIndex = 0;

    function setMainPhoto(photoIdx) {
      currentPhotoIndex = photoIdx;
      const photo = photos[photoIdx] || photos[0];
      if (!photo) return;

      if (elCover) {
        elCover.src = photo.url;
        elCover.alt = photo.caption || locProj.title || 'Fotografia do projeto';
      }

      if (elCaption) {
        if (photo.caption) {
          elCaption.textContent = photo.caption;
          elCaption.hidden = false;
        } else {
          elCaption.textContent = '';
          elCaption.hidden = true;
        }
      }

      if (elThumbs) {
        const thumbBtns = elThumbs.querySelectorAll('.pp-thumb-btn');
        thumbBtns.forEach((btn, bIdx) => {
          const isActive = bIdx === photoIdx;
          btn.classList.toggle('is-active', isActive);
          btn.setAttribute('aria-current', String(isActive));
        });
      }
    }

    if (elThumbs) {
      elThumbs.innerHTML = '';
      if (photos.length > 1) {
        photos.forEach((photo, pIdx) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `pp-thumb-btn ${pIdx === 0 ? 'is-active' : ''}`;
          btn.setAttribute('aria-label', `Ver fotografia ${pIdx + 1}: ${photo.caption || locProj.title}`);
          btn.setAttribute('aria-current', String(pIdx === 0));

          const img = document.createElement('img');
          img.src = photo.url;
          img.alt = photo.caption || locProj.title;
          img.loading = 'lazy';
          img.width = 120;
          img.height = 90;

          btn.appendChild(img);

          btn.addEventListener('click', () => {
            setMainPhoto(pIdx);
          });

          elThumbs.appendChild(btn);
        });
        elThumbs.hidden = false;
      } else {
        elThumbs.hidden = true;
      }
    }

    setMainPhoto(0);

    if (elZoomBtn) {
      elZoomBtn.onclick = () => {
        if (window.mrLightbox && typeof window.mrLightbox.open === 'function') {
          window.mrLightbox.open(photos, currentPhotoIndex);
        }
      };
    }

    // 4. Descrição ("Sobre a obra")
    if (elDescription) {
      elDescription.textContent = locProj.description;
    }

    // 5. Ficha Técnica / Especificações
    if (elData) {
      elData.innerHTML = '';
      const specs = [
        { label: labels.location, val: locProj.location },
        { label: labels.category, val: locProj.categoryLabel },
        { label: labels.year, val: locProj.year },
        { label: labels.area, val: locProj.area }
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

    // 6. Intervenção / Execução
    if (elHighlights && elHighlightsSection) {
      elHighlights.innerHTML = '';
      if (Array.isArray(locProj.highlights) && locProj.highlights.length > 0) {
        locProj.highlights.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          elHighlights.appendChild(li);
        });
        elHighlightsSection.hidden = false;
      } else {
        elHighlightsSection.hidden = true;
      }
    }

    // 7. Navegação anterior / seguinte
    const prevProj = window.PROJECTS_DATA[(index - 1 + total) % total];
    const nextProj = window.PROJECTS_DATA[(index + 1) % total];

    if (elPrev && prevProj) {
      const prevLoc = getLocalizedProject(prevProj);
      elPrev.href = `#projeto/${prevProj.id}`;
      if (elPrevTitle) elPrevTitle.textContent = prevLoc.title;
    }

    if (elNext && nextProj) {
      const nextLoc = getLocalizedProject(nextProj);
      elNext.href = `#projeto/${nextProj.id}`;
      if (elNextTitle) elNextTitle.textContent = nextLoc.title;
    }

    // 8. Pré-carregamento das capas
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
        window.location.hash = '#projetos';
        return;
      }

      const project = projects[index];
      const locProj = getLocalizedProject(project);
      renderProject(project, index, projects.length);

      document.title = `${locProj.title} | MR Construções`;

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
      if (!projectPage.hidden) {
        projectPage.hidden = true;
        if (mainContent) mainContent.hidden = false;
        document.body.classList.remove('is-project-open');

        document.title = defaultTitle;
        if (waFloat && defaultWaHref) {
          waFloat.href = defaultWaHref;
          waFloat.setAttribute('aria-label', defaultWaLabel || 'Pedir orçamento via WhatsApp');
        }

        if (hash && hash.length > 1) {
          try {
            const target = document.querySelector(hash);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          } catch (_) {
            // Ignora seletor de hash inválido
          }
        }
        window.dispatchEvent(new Event('scroll'));
      }
    }
  }

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('DOMContentLoaded', handleRoute);
  window.addEventListener('mr:langchange', () => {
    const hash = window.location.hash || '';
    if (hash.startsWith('#projeto/')) {
      const projectId = hash.replace('#projeto/', '').trim();
      const projects = window.PROJECTS_DATA || [];
      const index = projects.findIndex((p) => p.id === projectId);
      if (index !== -1) {
        renderProject(projects[index], index, projects.length);
      }
    }
  });
})();
