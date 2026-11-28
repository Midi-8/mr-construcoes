import React from 'react';
import { createRoot } from 'react-dom/client';
import './map.css';
import { GermanyMap } from './GermanyMap';

function mountGermanyMap() {
  const el = document.getElementById('germany-map-root');
  if (!el || el.dataset.mounted === '1') return;
  el.dataset.mounted = '1';
  createRoot(el).render(
    <React.StrictMode>
      <GermanyMap />
    </React.StrictMode>
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountGermanyMap, { once: true });
} else {
  mountGermanyMap();
}
