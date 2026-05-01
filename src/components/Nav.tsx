import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../LangContext';
import type { Lang } from '../i18n';

const LANG_LABELS: Record<Lang, string> = { en: 'EN', de: 'DE', ru: 'RU' };
const LANGS: Lang[] = ['en', 'de', 'ru'];

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#tools', label: t.nav.tools },
    { href: '#articles', label: t.nav.articles },
    { href: '#logs', label: t.nav.logs },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,12,15,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1e2530' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick('#home')}
          className="text-sm font-bold tracking-wider glow-green"
          style={{ color: '#39ff6a', fontFamily: 'inherit' }}
        >
          ihor@polymer-cli:~$
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`nav-link text-xs tracking-widest uppercase transition-colors duration-200 ${active === l.href ? 'active' : ''}`}
              style={{ color: active === l.href ? '#39ff6a' : '#6b7a8d', fontFamily: 'inherit' }}
            >
              {l.label}
            </button>
          ))}

          {/* Language switcher */}
          <div
            className="flex items-center gap-0 ml-2"
            style={{ border: '1px solid #1e2530', background: '#0d1117' }}
          >
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-2 py-1 text-xs font-bold tracking-widest transition-all duration-150"
                style={{
                  fontFamily: 'inherit',
                  color: lang === l ? '#0a0c0f' : '#4a5568',
                  background: lang === l ? '#39ff6a' : 'transparent',
                  borderRight: l !== 'ru' ? '1px solid #1e2530' : 'none',
                }}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: lang + burger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-0" style={{ border: '1px solid #1e2530', background: '#0d1117' }}>
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-1.5 py-1 text-xs font-bold transition-all duration-150"
                style={{
                  fontFamily: 'inherit',
                  color: lang === l ? '#0a0c0f' : '#4a5568',
                  background: lang === l ? '#39ff6a' : 'transparent',
                  borderRight: l !== 'ru' ? '1px solid #1e2530' : 'none',
                }}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#39ff6a' }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: '#0a0c0f', borderColor: '#1e2530' }}
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="text-left text-sm tracking-wider"
              style={{ color: active === l.href ? '#39ff6a' : '#6b7a8d', fontFamily: 'inherit' }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
