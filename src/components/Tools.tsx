import { useLang } from '../LangContext';

export default function Tools() {
  const { t } = useLang();

  return (
    <section id="tools" className="py-24 px-6" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div className="mb-12">
        <div style={{ color: '#6b7a8d', fontSize: '0.8rem', marginBottom: '4px' }}>{t.tools.cmd}</div>
        <h2 className="text-2xl font-black" style={{ color: '#e8edf2' }}>
          <span style={{ color: '#39ff6a' }}>./</span>{t.tools.title}
        </h2>
        <div className="mt-2 h-px w-24" style={{ background: 'linear-gradient(to right, #39ff6a, transparent)' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.tools.items.map((tool, i) => (
          <div key={i} className="terminal-card p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold" style={{ color: '#39ff6a' }}>{tool.title}</span>
              <span
                className="text-xs px-2 py-0.5 border"
                style={{
                  color: tool.status === 'ACTIVE' ? '#39ff6a' : '#ffb300',
                  borderColor: tool.status === 'ACTIVE' ? '#39ff6a44' : '#ffb30044',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                }}
              >
                {tool.status === 'ACTIVE' ? t.tools.statusActive : t.tools.statusBeta}
              </span>
            </div>

            <p style={{ color: '#8a95a3', fontSize: '0.82rem', lineHeight: 1.6 }}>{tool.desc}</p>

            <div
              className="p-3 overflow-x-auto"
              style={{ background: '#060809', border: '1px solid #1e2530', borderLeft: '3px solid #39ff6a44' }}
            >
              <pre style={{ color: '#39ff6a', fontSize: '0.72rem', margin: 0, lineHeight: 1.7, whiteSpace: 'pre' }}>
                {tool.cmd}
              </pre>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {tool.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{ color: '#00e5ff', background: '#00e5ff0f', border: '1px solid #00e5ff22', fontSize: '0.68rem', padding: '1px 6px' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
