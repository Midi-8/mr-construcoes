import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  buildGeodesicArc,
  CITIES,
  CITY_BY_ID,
  CityId,
  GERMANY_SVG_PATH,
  LangCode,
  MAP_H,
  MAP_W,
  UI_STRINGS
} from './germanyGeo';

function readInitialLang(): LangCode {
  const htmlLang = (document.documentElement.lang || 'pt').toLowerCase();
  if (htmlLang.startsWith('en')) return 'en';
  if (htmlLang.startsWith('de')) return 'de';
  return 'pt';
}

export const GermanyMap: React.FC = () => {
  const [activeCity, setActiveCity] = useState<CityId>('hamburg');
  const [hoveredCity, setHoveredCity] = useState<CityId | null>(null);
  const [lang, setLang] = useState<LangCode>(readInitialLang);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return;
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  // Bidirectional sync with host page city list & PT/EN/DE language switcher
  useEffect(() => {
    const onExternalCity = (e: Event) => {
      const id = (e as CustomEvent<string>).detail as CityId;
      if (id && CITY_BY_ID[id]) setActiveCity(id);
    };
    const onExternalLang = (e: Event) => {
      const l = (e as CustomEvent<string>).detail as LangCode;
      if (l === 'pt' || l === 'en' || l === 'de') setLang(l);
    };
    window.addEventListener('mr:city', onExternalCity);
    window.addEventListener('mr:lang', onExternalLang);
    return () => {
      window.removeEventListener('mr:city', onExternalCity);
      window.removeEventListener('mr:lang', onExternalLang);
    };
  }, []);

  const handleSelectCity = useCallback((id: CityId) => {
    setActiveCity(id);
    window.dispatchEvent(new CustomEvent('mr:map-city', { detail: id }));
  }, []);

  const activeObj = CITY_BY_ID[activeCity];
  const strings = UI_STRINGS[lang];

  const activeArcs = useMemo(
    () =>
      CITIES.filter((c) => c.id !== activeCity).map((target, idx) => ({
        id: `${activeCity}-${target.id}`,
        d: buildGeodesicArc(activeObj, target),
        dur: `${(2.6 + idx * 0.34).toFixed(2)}s`,
        begin: `${(idx * 0.42).toFixed(2)}s`
      })),
    [activeCity, activeObj]
  );

  return (
    <div
      className="relative flex flex-col w-full h-[360px] sm:h-[430px] md:h-[620px] bg-transparent select-none"
      role="region"
      aria-label={strings.aria}
    >
      {/* Top minimalist label centered above the map */}
      <div className="flex items-center justify-center pb-1.5 sm:pb-2">
        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#52525B]">
          {strings.legend}
        </span>
      </div>

      {/* Frameless Smooth 2D Architectural Map */}
      <div className="relative flex-1 w-full min-h-0 flex items-center justify-center py-1 sm:py-2">
        <div className="relative w-full h-full max-w-[330px] sm:max-w-[430px] md:max-w-[540px] flex items-center justify-center">
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="w-full h-full max-h-full overflow-visible"
            role="img"
            aria-label={strings.aria}
          >
            <defs>
              {/* Clean smooth matte stone fill */}
              <linearGradient id="mr-de-stone" x1="18%" y1="8%" x2="82%" y2="92%">
                <stop offset="0%" stopColor="#ECEAE4" />
                <stop offset="100%" stopColor="#E1DED6" />
              </linearGradient>

              {/* Soft clean contact shadow beneath Germany */}
              <filter id="mr-de-shadow" x="-22%" y="-16%" width="148%" height="144%">
                <feDropShadow dx="4" dy="16" stdDeviation="16" floodColor="#18181B" floodOpacity="0.16" />
                <feDropShadow dx="1" dy="5" stdDeviation="5" floodColor="#18181B" floodOpacity="0.1" />
              </filter>

              {/* Active orange glow filter for pulse dots */}
              <filter id="mr-orange-glow" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation="3.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. Crisp architectural graphite plinth lifting Germany subtly off the page */}
            <g aria-hidden="true">
              <path d={GERMANY_SVG_PATH} transform="translate(4.5 9)" fill="#18181B" filter="url(#mr-de-shadow)" />
              <path d={GERMANY_SVG_PATH} transform="translate(3 6)" fill="#27272A" />
              <path d={GERMANY_SVG_PATH} transform="translate(1.5 3)" fill="#3F3F46" />
            </g>

            {/* 2. Smooth flat matte Germany landmass */}
            <path d={GERMANY_SVG_PATH} fill="url(#mr-de-stone)" />

            {/* 3. Crisp outer contour */}
            <path
              d={GERMANY_SVG_PATH}
              fill="none"
              stroke="#27272A"
              strokeOpacity="0.42"
              strokeWidth="1"
              strokeLinejoin="round"
              aria-hidden="true"
            />

            {/* 6. Active city glowing orange geodesic arcs + animated light pulses */}
            <g aria-hidden="true">
              {activeArcs.map((arc) => (
                <g key={arc.id}>
                  <motion.path
                    d={arc.d}
                    pathLength={1}
                    strokeDasharray="1"
                    fill="none"
                    stroke="#F97316"
                    strokeOpacity="0.72"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={reducedMotion ? false : { strokeDashoffset: 1, opacity: 0 }}
                    animate={{ strokeDashoffset: 0, opacity: 0.78 }}
                    transition={{ duration: 0.55, ease: [0.22, 0.7, 0.1, 1] }}
                  />
                  {!reducedMotion && (
                    <circle
                      key={`pulse-${arc.id}`}
                      r="2.8"
                      fill="#F97316"
                      opacity="0"
                      filter="url(#mr-orange-glow)"
                    >
                      <animateMotion
                        dur={arc.dur}
                        begin={arc.begin}
                        repeatCount="indefinite"
                        path={arc.d}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.9;1"
                        dur={arc.dur}
                        begin={arc.begin}
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              ))}
            </g>

            {/* 8. Concentric active radar pulses + city anchor pins + delicate leader hairlines */}
            {CITIES.map((city) => {
              const isActive = city.id === activeCity;
              const isHov = city.id === hoveredCity;
              const [dx, dy] = city.offset;
              const lx = city.x + dx;
              const ly = city.y + dy;

              return (
                <g key={`pin-${city.id}`}>
                  {/* Subtle connector line between city pin and label pill */}
                  <line
                    x1={city.x}
                    y1={city.y}
                    x2={lx}
                    y2={ly}
                    stroke={isActive ? '#F97316' : '#18181B'}
                    strokeOpacity={isActive ? 0.55 : isHov ? 0.42 : 0.22}
                    strokeWidth={isActive ? 1.1 : 0.85}
                  />

                  {/* Expanding concentric orange radar rings on active city */}
                  {isActive && !reducedMotion && (
                    <>
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r={8}
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="1.25"
                        initial={{ r: 7, opacity: 0.75 }}
                        animate={{ r: 26, opacity: 0 }}
                        transition={{ duration: 2.1, repeat: Infinity, ease: 'easeOut' }}
                      />
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r={8}
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="1.25"
                        initial={{ r: 7, opacity: 0.75 }}
                        animate={{ r: 26, opacity: 0 }}
                        transition={{ duration: 2.1, delay: 1.05, repeat: Infinity, ease: 'easeOut' }}
                      />
                    </>
                  )}

                  {/* Outer static anchor ring */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isActive ? 9.5 : isHov ? 8 : 6.5}
                    fill={isActive ? 'rgba(249, 115, 22, 0.14)' : 'transparent'}
                    stroke={isActive ? '#F97316' : '#18181B'}
                    strokeOpacity={isActive ? 0.7 : 0.28}
                    strokeWidth="1"
                  />

                  {/* Crisp center marker dot (interactive hit area) */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isActive ? 4.8 : isHov ? 4.2 : 3.4}
                    fill={isActive ? '#F97316' : '#111111'}
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => handleSelectCity(city.id)}
                    onMouseEnter={() => setHoveredCity(city.id)}
                    onMouseLeave={() => setHoveredCity(null)}
                  />
                </g>
              );
            })}

            {/* 9. Crisp HTML/SVG interactive pill labels (positioned cleanly with zero overlap) */}
            {CITIES.map((city) => {
              const isActive = city.id === activeCity;
              const isHov = city.id === hoveredCity;
              const [dx, dy] = city.offset;
              const lx = city.x + dx;
              const ly = city.y + dy;
              const label = city.names[lang];
              const pillW = Math.max(76, label.length * 6.9 + 28);
              const pillH = 24;
              const rx = city.align === 'right' ? lx : lx - pillW;
              const ry = ly - pillH / 2;

              return (
                <g
                  key={`lbl-${city.id}`}
                  className="cursor-pointer"
                  onClick={() => handleSelectCity(city.id)}
                  onMouseEnter={() => setHoveredCity(city.id)}
                  onMouseLeave={() => setHoveredCity(null)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={`${label} - ${city.coordsLabel}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectCity(city.id);
                    }
                  }}
                >
                  <motion.g
                    animate={{ y: isActive ? -1.5 : isHov ? -1 : 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  >
                    <rect
                      x={rx}
                      y={ry}
                      width={pillW}
                      height={pillH}
                      rx={12}
                      fill={isActive ? '#111111' : '#FFFFFF'}
                      fillOpacity={isActive ? 0.98 : 0.94}
                      stroke={isActive ? '#111111' : isHov ? 'rgba(17,17,17,0.32)' : 'rgba(17,17,17,0.12)'}
                      strokeWidth="1"
                      style={{
                        filter: isActive
                          ? 'drop-shadow(0 8px 16px rgba(17,17,17,0.22))'
                          : 'drop-shadow(0 4px 10px rgba(17,17,17,0.08))'
                      }}
                    />
                    <circle
                      cx={rx + 12}
                      cy={ry + pillH / 2}
                      r={isActive ? 3.2 : 2.6}
                      fill={isActive ? '#F97316' : '#111111'}
                      filter={isActive ? 'url(#mr-orange-glow)' : undefined}
                    />
                    <text
                      x={rx + 21}
                      y={ry + pillH / 2 + 3.8}
                      fill={isActive ? '#FFFFFF' : '#18181B'}
                      fontSize="11"
                      fontWeight="500"
                      fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                      letterSpacing="-0.01em"
                    >
                      {label}
                    </text>
                  </motion.g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Bottom minimalist bar: active city + live coordinates centered closer together */}
      <div className="relative z-20 flex items-center justify-center gap-6 sm:gap-8 pt-3.5 mt-2 border-t border-black/[0.09]">
        {/* Active city name */}
        <div className="flex items-center justify-end min-h-[22px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${activeCity}-${lang}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.22, ease: [0.22, 0.7, 0.1, 1] }}
              className="inline-flex items-center gap-2 text-[14px] font-medium tracking-[-0.015em] text-[#111111]"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F97316] mr-pin-glow" />
              {activeObj.names[lang]}
            </motion.span>
          </AnimatePresence>
        </div>

        <span aria-hidden="true" className="h-3.5 w-px bg-black/[0.14]" />

        {/* Exact coordinates with tabular-nums */}
        <div className="flex items-center justify-start">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeCity}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[11px] font-normal tracking-[0.12em] text-[#52525B] tabular-nums"
            >
              {activeObj.coordsLabel}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
