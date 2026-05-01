import { useLang } from '../LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer style={{ borderTop: '1px solid #1e2530', background: '#0a0c0f' }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div style={{ fontSize: '0.82rem' }}>
          <span style={{ color: '#39ff6a' }}>ihor@recycle-llm-terminal</span>
          <span style={{ color: '#6b7a8d' }}> ~ </span>
          <span style={{ color: '#ffb300' }}>#</span>
          <span style={{ color: '#6b7a8d' }}> Munich, DE</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6" style={{ fontSize: '0.72rem', color: '#4a5568' }}>
          <span>{t.footer.builtWith}</span>
          <span style={{ color: '#1e2530' }}>|</span>
          <span>{t.footer.uptime} <span style={{ color: '#39ff6a' }}>99.9%</span></span>
          <span style={{ color: '#1e2530' }}>|</span>
          <span>{t.footer.kernel} <span style={{ color: '#00e5ff' }}>Linux 6.6.x</span></span>
        </div>

        <div style={{ fontSize: '0.72rem', color: '#4a5568' }}>
          © {new Date().getFullYear()} ihor — {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
