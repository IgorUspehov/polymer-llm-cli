import { useLang } from '../LangContext';

const logs = [
  { ts: '2026-04-28 14:12:08', level: 'INFO', process: 'spec-review.sh', msg: 'Pre-purchase review complete: 90mm strand pelletizer, declared 800kg/h on LDPE film PCR. Throughput claim consistent with screw L/D 32 and gear pump option.' },
  { ts: '2026-04-28 14:12:11', level: 'WARN', process: 'spec-review.sh', msg: 'Filtration spec marginal: 150 micron screen for post-consumer LDPE will require frequent changeovers. Recommend backflush filter or 2-stage filtration.' },
  { ts: '2026-04-26 10:34:52', level: 'INFO', process: 'datasheet-translate', msg: 'EN→DE translation done: 24-page extruder manual. Terminology check: 17 terms reconciled against VDI 2010 industry usage.' },
  { ts: '2026-04-25 16:48:03', level: 'INFO', process: 'troubleshoot', msg: 'HDPE surging diagnosis: feed throat temp drift confirmed via process log review. Recommended: reduce throat cooling, check feed-zone screw cooling.' },
  { ts: '2026-04-23 09:17:41', level: 'WARN', process: 'compat-check', msg: 'PE/EVOH/PE multilayer regrind at 15% in virgin LLDPE: gel risk above 8% without compatibilizer. Process window narrow, melt temp must stay below 230°C.' },
  { ts: '2026-04-22 11:05:29', level: 'INFO', process: 'audit-checklist', msg: 'On-site audit checklist generated: shredder-compactor + 105mm extruder, PP feedstock. 47 checkpoints, 3 priority items flagged.' },
  { ts: '2026-04-19 15:33:18', level: 'ERROR', process: 'tender-compare', msg: 'Throughput units inconsistent across 3 offers: kg/h, lb/h, t/24h. Normalizing to kg/h before comparison.' },
  { ts: '2026-04-19 15:34:02', level: 'INFO', process: 'tender-compare', msg: 'Comparison complete: offer B understates degassing (single-stage vs dual claimed). Cost gap explained.' },
  { ts: '2026-04-15 08:42:55', level: 'INFO', process: 'spec-review.sh', msg: 'ABS line spec: screw geometry standard for impact-grade ABS. Vacuum degassing capacity adequate for declared moisture levels.' },
  { ts: '2026-04-12 13:29:07', level: 'INFO', process: 'datasheet-translate', msg: 'DE→RU translation: shredder-compactor commissioning manual. 6 terms required SME review (clarified with client).' },
];

const levelColors: Record<string, string> = {
  INFO: '#39ff6a',
  WARN: '#ffb300',
  ERROR: '#ff4444',
};

export default function Logs() {
  const { t } = useLang();

  return (
    <section id="logs" className="py-24 px-6" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div className="mb-12">
        <div style={{ color: '#6b7a8d', fontSize: '0.8rem', marginBottom: '4px' }}>{t.logs.cmd}</div>
        <h2 className="text-2xl font-black" style={{ color: '#e8edf2' }}>
          <span style={{ color: '#39ff6a' }}>./</span>{t.logs.title}
        </h2>
        <div className="mt-2 h-px w-24" style={{ background: 'linear-gradient(to right, #39ff6a, transparent)' }} />
      </div>

      <div className="terminal-card overflow-hidden" style={{ border: '1px solid #1e2530' }}>
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: '#0d1117', borderColor: '#1e2530' }}>
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff4444' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#ffb300' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#39ff6a' }} />
          <span className="ml-3 text-xs" style={{ color: '#4a5568' }}>{t.logs.windowTitle}</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-2 h-2 rounded-full pulse-green" style={{ background: '#39ff6a' }} />
            <span style={{ color: '#39ff6a', fontSize: '0.65rem' }}>{t.logs.live}</span>
          </div>
        </div>

        <div className="overflow-x-auto" style={{ background: '#060809' }}>
          {logs.map((log, i) => (
            <div key={i} className="log-entry px-4 py-2 flex flex-wrap md:flex-nowrap gap-x-3 gap-y-1">
              <span className="shrink-0" style={{ color: '#4a5568', fontSize: '0.72rem', minWidth: '140px' }}>{log.ts}</span>
              <span className="shrink-0 font-bold" style={{ color: levelColors[log.level], fontSize: '0.72rem', minWidth: '48px' }}>[{log.level}]</span>
              <span className="shrink-0" style={{ color: '#00e5ff', fontSize: '0.72rem', minWidth: '130px' }}>{log.process}:</span>
              <span style={{ color: '#8a95a3', fontSize: '0.72rem', lineHeight: 1.6, wordBreak: 'break-word' }}>{log.msg}</span>
            </div>
          ))}

          <div className="px-4 py-2 flex items-center gap-2">
            <span style={{ color: '#4a5568', fontSize: '0.72rem' }}>{new Date().toISOString().slice(0, 19).replace('T', ' ')}</span>
            <span style={{ color: '#39ff6a', fontSize: '0.72rem' }}>[INFO]</span>
            <span style={{ color: '#00e5ff', fontSize: '0.72rem' }}>system:</span>
            <span style={{ color: '#8a95a3', fontSize: '0.72rem' }}>{t.logs.waiting}</span>
            <span className="cursor-blink" style={{ color: '#39ff6a', fontSize: '0.72rem' }}>▊</span>
          </div>
        </div>
      </div>
    </section>
  );
}
