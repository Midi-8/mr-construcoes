/**
 * MR CONSTRUÇÕES — Gestor de Páginas de Projeto (js/project-view.js)
 * Suporta as páginas dedicadas em projetos/<slug>.html (com tradução PT/EN/DE,
 * galeria, Lightbox e filtro ?cat=) e mantém compatibilidade para hashes #projeto/<id>.
 */

(function () {
  'use strict';

  const projectPage = document.getElementById('project-page');
  const standaloneId = projectPage ? (projectPage.getAttribute('data-project-id') || '').trim() : '';

  // Compatibilidade caso chegue à homepage com #projeto/<id> antigo
  if (!projectPage || !standaloneId) {
    const redirectLegacyHash = () => {
      const hash = window.location.hash || '';
      if (!hash.startsWith('#projeto/')) return;
      const projectId = hash.replace('#projeto/', '').trim();
      const projects = Array.isArray(window.PROJECTS_DATA) ? window.PROJECTS_DATA : [];
      if (projects.some((p) => p.id === projectId)) {
        const categorySelect = document.getElementById('project-category-select');
        const activeFilter = categorySelect ? (categorySelect.value || 'all') : 'all';
        const suffix = activeFilter !== 'all' ? `?cat=${encodeURIComponent(activeFilter)}` : '';
        window.location.replace(`projetos/${projectId}.html${suffix}`);
      }
    };
    window.addEventListener('hashchange', redirectLegacyHash);
    window.addEventListener('DOMContentLoaded', redirectLegacyHash);
    return;
  }

  const assetPrefix = '../';
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

  const SPEC_LABELS = {
    pt: {
      project: 'Projeto',
      location: 'Localização',
      category: 'Categoria',
      year: 'Ano',
      area: 'Área',
      waText: (title) => `Olá! Estive a ver o vosso projeto "${title}" no website e gostaria de pedir um orçamento para uma obra semelhante.`,
      waAria: (title) => `Pedir orçamento via WhatsApp sobre ${title}`
    },
    en: {
      project: 'Project',
      location: 'Location',
      category: 'Category',
      year: 'Year',
      area: 'Area',
      waText: (title) => `Hello! I was viewing your project "${title}" on the website and would like to request a quote for a similar project.`,
      waAria: (title) => `Request a quote via WhatsApp about ${title}`
    },
    de: {
      project: 'Projekt',
      location: 'Standort',
      category: 'Kategorie',
      year: 'Jahr',
      area: 'Fläche',
      waText: (title) => `Hallo! Ich habe Ihr Projekt "${title}" auf der Website gesehen und möchte ein Angebot für ein ähnliches Bauvorhaben anfordern.`,
      waAria: (title) => `Angebot per WhatsApp zu ${title} anfordern`
    }
  };

  function resolveAssetUrl(url) {
    if (!url) return '';
    if (/^(https?:|data:|\/|\.\.\/)/.test(url)) return url;
    return assetPrefix + url;
  }

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

  function getActiveCategoryFilter() {
    try {
      const cat = new URLSearchParams(window.location.search).get('cat');
      return cat && cat.trim() ? cat.trim() : 'all';
    } catch (_) {
      return 'all';
    }
  }

  function getActiveProjectsList(currentProjectId) {
    const allProjects = Array.isArray(window.PROJECTS_DATA) ? window.PROJECTS_DATA : [];
    const activeFilter = getActiveCategoryFilter();

    if (activeFilter === 'all') {
      return { list: allProjects, filter: 'all' };
    }

    const filtered = allProjects.filter((p) => {
      if (Array.isArray(p.categories)) return p.categories.includes(activeFilter);
      return p.category === activeFilter;
    });

    if (filtered.length > 0 && filtered.some((p) => p.id === currentProjectId)) {
      return { list: filtered, filter: activeFilter };
    }

    return { list: allProjects, filter: 'all' };
  }

  function renderStandaloneProject() {
    const { list, filter } = getActiveProjectsList(standaloneId);
    const index = list.findIndex((p) => p.id === standaloneId);
    if (index === -1) return;

    const project = list[index];
    const total = list.length;
    const lang = window.mrCurrentLang || 'pt';
    const labels = SPEC_LABELS[lang] || SPEC_LABELS.pt;
    const locProj = getLocalizedProject(project);

    // 1. Contador e título do documento
    if (elCounter) {
      const num = String(index + 1).padStart(2, '0');
      const tot = String(total).padStart(2, '0');
      elCounter.textContent = `${labels.project} ${num} / ${tot}`;
    }
    document.title = `${locProj.title} | MR Construções`;

    // 2. Cabeçalho e descrição
    if (elCatTag) {
      elCatTag.textContent = locProj.categoryLabel || '';
      elCatTag.hidden = !locProj.categoryLabel;
    }
    if (elTitle) elTitle.textContent = locProj.title;
    if (elTagline) elTagline.textContent = locProj.tagline;
    if (elDescription) elDescription.textContent = locProj.description;

    // 3. Galeria e miniaturas com resolução para ../imagens/
    const rawList = Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : (project.heroImage ? [{ url: project.heroImage, caption: locProj.title }] : []);

    const photos = [];
    const seenUrls = new Set();
    rawList.forEach((item) => {
      if (item && item.url && !seenUrls.has(item.url)) {
        photos.push({
          url: resolveAssetUrl(item.url),
          caption: item.caption || ''
        });
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
        elThumbs.querySelectorAll('.pp-thumb-btn').forEach((btn, bIdx) => {
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
          btn.addEventListener('click', () => setMainPhoto(pIdx));
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

    // 4. Ficha Técnica
    if (elData) {
      elData.innerHTML = '';
      [
        { label: labels.location, val: locProj.location },
        { label: labels.category, val: locProj.categoryLabel },
        { label: labels.year, val: locProj.year },
        { label: labels.area, val: locProj.area }
      ].forEach((s) => {
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

    // 5. Intervenção / Execução
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

    // 6. Paginação entre páginas individuais (respeitando ?cat= se ativo)
    const catSuffix = filter !== 'all' ? `?cat=${encodeURIComponent(filter)}` : '';
    const prevProj = list[(index - 1 + total) % total];
    const nextProj = list[(index + 1) % total];

    if (elPrev && prevProj) {
      const prevLoc = getLocalizedProject(prevProj);
      elPrev.href = `${prevProj.id}.html${catSuffix}`;
      elPrev.hidden = total <= 1;
      if (elPrevTitle) elPrevTitle.textContent = prevLoc.title;
    }

    if (elNext && nextProj) {
      const nextLoc = getLocalizedProject(nextProj);
      elNext.href = `${nextProj.id}.html${catSuffix}`;
      elNext.hidden = total <= 1;
      if (elNextTitle) elNextTitle.textContent = nextLoc.title;
    }

    // 7. Personalização contextual dos links WhatsApp para esta obra
    const waText = encodeURIComponent(labels.waText(locProj.title));
    const waHref = `https://wa.me/351915680947?text=${waText}`;
    document.querySelectorAll('.whatsapp-float, .mobile-action-wa').forEach((link) => {
      link.href = waHref;
      if (link.classList.contains('whatsapp-float')) {
        link.setAttribute('aria-label', labels.waAria(locProj.title));
      }
    });

    // 8. Pré-carregamento das capas adjacentes
    if (prevProj && prevProj.heroImage) {
      const pImg = new Image();
      pImg.src = resolveAssetUrl(prevProj.heroImage);
    }
    if (nextProj && nextProj.heroImage) {
      const nImg = new Image();
      nImg.src = resolveAssetUrl(nextProj.heroImage);
    }
  }

  window.addEventListener('DOMContentLoaded', renderStandaloneProject);
  window.addEventListener('mr:langchange', renderStandaloneProject);
})();
