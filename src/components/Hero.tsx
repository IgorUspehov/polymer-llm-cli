import { useEffect, useState, useRef } from 'react';
import { useLang } from '../LangContext';

const fullCommand = 'ihor@polymer-cli:~$ whoami';

export default function Hero() {
  const { t } = useLang();
  const [typed, setTyped] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [done, setDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < fullCommand.length) {
          setTyped(fullCommand.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setDone(true);
          setTimeout(() => setShowContent(true), 300);
        }
      }, 60);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 terminal-flicker"
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      <div className="mb-2" style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.2 }}>
        <span className="glow-green" style={{ color: '#39ff6a' }}>{typed}</span>
        {!done && (
          <span className="cursor-blink inline-block w-3 h-5 ml-0.5 align-middle" style={{ background: '#39ff6a' }} />
        )}
        {done && <span className="cursor-blink" style={{ color: '#39ff6a' }}>_</span>}
      </div>

      <div
        className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '0.1s' }}
      >
        <div className="mb-4 mt-1" style={{ color: '#6b7a8d', fontSize: '0.95rem' }}>
          {t.hero.comment}
        </div>

        <h1
          className="font-black mb-6 leading-tight"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', color: '#e8edf2', maxWidth: '720px' }}
        >
          {t.hero.headline1}{' '}
          <span className="glow-green" style={{ color: '#39ff6a' }}>{t.hero.headline2}</span>{' '}
          {t.hero.headline3}
        </h1>

        <p className="mb-10 leading-relaxed" style={{ color: '#8a95a3', fontSize: '1rem', maxWidth: '620px' }}>
          {t.hero.sub}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {t.hero.stats.map((s, i) => (
            <div key={i} className="terminal-card border-glow-green p-4">
              <div className="text-2xl font-black mb-1 glow-amber" style={{ color: '#ffb300' }}>{s.value}</div>
              <div style={{ color: '#5a6575', fontSize: '0.72rem', lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.querySelector('#tools')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200 border pulse-green"
            style={{ color: '#39ff6a', borderColor: '#39ff6a', background: 'transparent', fontFamily: 'inherit' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#39ff6a1a'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
          >
            {t.hero.ctaTools}
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200 border"
            style={{ color: '#00e5ff', borderColor: '#00e5ff44', background: 'transparent', fontFamily: 'inherit' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#00e5ff'; (e.currentTarget as HTMLButtonElement).style.background = '#00e5ff0f'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#00e5ff44'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
          >
            {t.hero.ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
}
