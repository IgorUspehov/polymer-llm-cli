import { useLang } from '../LangContext';

export default function Articles() {
  const { t } = useLang();

  return (
    <section id="articles" className="py-24 px-6" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div className="mb-12">
        <div style={{ color: '#6b7a8d', fontSize: '0.8rem', marginBottom: '4px' }}>{t.articles.cmd}</div>
        <h2 className="text-2xl font-black" style={{ color: '#e8edf2' }}>
          <span style={{ color: '#39ff6a' }}>./</span>{t.articles.title}
        </h2>
        <div className="mt-2 h-px w-24" style={{ background: 'linear-gradient(to right, #39ff6a, transparent)' }} />
      </div>

      {/* Desktop column headers */}
      <div
        className="hidden md:grid mb-2 px-3 py-1 text-xs"
        style={{
          color: '#4a5568',
          fontSize: '0.7rem',
          gridTemplateColumns: '100px 60px 1fr 90px',
          borderBottom: '1px solid #1e2530',
        }}
      >
        <span>{t.articles.cols.date}</span>
        <span>{t.articles.cols.size}</span>
        <span>{t.articles.cols.file}</span>
        <span className="text-right">{t.articles.cols.read}</span>
      </div>

      <div className="flex flex-col">
        {t.articles.items.map((a, i) => (
          <div key={i} className="log-entry px-3 py-4 cursor-pointer group">
            {/* Mobile */}
            <div className="md:hidden flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span style={{ color: '#ffb300', fontSize: '0.72rem' }}>{a.date}</span>
                <span style={{ color: '#4a5568', fontSize: '0.7rem' }}>{a.readTime}</span>
              </div>
              <div className="text-sm font-bold" style={{ color: '#c8d0d8' }}>{a.name}</div>
              <div style={{ color: '#6b7a8d', fontSize: '0.78rem', lineHeight: 1.5 }}>{a.desc}</div>
              <div className="flex flex-wrap gap-2 mt-1">
                {a.tags.map((tag, j) => (
                  <span key={j} style={{ color: '#00e5ff', background: '#00e5ff0a', border: '1px solid #00e5ff22', fontSize: '0.65rem', padding: '1px 6px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid items-start gap-4" style={{ gridTemplateColumns: '100px 60px 1fr 90px' }}>
              <span style={{ color: '#ffb300', fontSize: '0.75rem', paddingTop: '2px' }}>{a.date}</span>
              <span style={{ color: '#4a5568', fontSize: '0.75rem', paddingTop: '2px' }}>{a.size}</span>
              <div>
                <div
                  className="text-sm font-bold mb-1 transition-colors duration-150"
                  style={{ color: '#c8d0d8' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.color = '#39ff6a')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.color = '#c8d0d8')}
                >
                  {a.name}
                </div>
                <div style={{ color: '#6b7a8d', fontSize: '0.78rem', lineHeight: 1.5 }}>{a.desc}</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {a.tags.map((tag, j) => (
                    <span key={j} style={{ color: '#00e5ff', background: '#00e5ff0a', border: '1px solid #00e5ff22', fontSize: '0.65rem', padding: '1px 6px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right" style={{ color: '#6b7a8d', fontSize: '0.72rem', paddingTop: '2px' }}>{a.readTime}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center" style={{ color: '#4a5568', fontSize: '0.78rem' }}>
        {t.articles.more}
      </div>
    </section>
  );
}
