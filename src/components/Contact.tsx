import { useState } from 'react';
import { Send, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLang } from '../LangContext';

export default function Contact() {
  const { t } = useLang();
  const ct = t.contact;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    background: '#060809',
    border: `1px solid ${focused === field ? '#39ff6a66' : '#1e2530'}`,
    color: '#c8d0d8',
    fontFamily: 'inherit',
    fontSize: '0.85rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxShadow: focused === field ? '0 0 8px #39ff6a1a' : 'none',
    width: '100%',
    padding: '12px 14px',
  });

  return (
    <section id="contact" className="py-24 px-6 pb-32" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div className="mb-12">
        <div style={{ color: '#6b7a8d', fontSize: '0.8rem', marginBottom: '4px' }}>{ct.cmd}</div>
        <h2 className="text-2xl font-black" style={{ color: '#e8edf2' }}>
          <span style={{ color: '#39ff6a' }}>./</span>{ct.title}
        </h2>
        <div className="mt-2 h-px w-24" style={{ background: 'linear-gradient(to right, #39ff6a, transparent)' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs mb-2 tracking-widest" style={{ color: '#6b7a8d' }}>{ct.labels.name}</label>
                <input
                  type="text"
                  placeholder={ct.labels.namePh}
                  value={form.name}
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  style={inputStyle('name')}
                />
              </div>
              <div>
                <label className="block text-xs mb-2 tracking-widest" style={{ color: '#6b7a8d' }}>{ct.labels.email}</label>
                <input
                  type="email"
                  placeholder={ct.labels.emailPh}
                  value={form.email}
                  required
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  style={inputStyle('email')}
                />
              </div>
              <div>
                <label className="block text-xs mb-2 tracking-widest" style={{ color: '#6b7a8d' }}>{ct.labels.message}</label>
                <textarea
                  rows={6}
                  placeholder={ct.labels.msgPh}
                  value={form.message}
                  required
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  style={{ ...inputStyle('message'), resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 font-bold tracking-widest uppercase transition-all duration-200 border self-start"
                style={{ color: '#39ff6a', borderColor: '#39ff6a', background: 'transparent', fontFamily: 'inherit', fontSize: '0.8rem' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#39ff6a1a'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                <Send size={14} />
                {ct.labels.submit}
              </button>
            </form>
          ) : (
            <div className="terminal-card p-8" style={{ border: '1px solid #39ff6a44' }}>
              <div className="font-bold mb-2 glow-green" style={{ color: '#39ff6a', fontSize: '0.9rem' }}>{ct.success.cmd}</div>
              <div style={{ color: '#8a95a3', fontSize: '0.85rem', lineHeight: 1.8 }}>
                <div>{ct.success.delivered}</div>
                <div>{ct.success.encrypted}</div>
                <div>{ct.success.eta}</div>
                <div className="mt-2" style={{ color: '#39ff6a' }}>{ct.success.ok}</div>
              </div>
            </div>
          )}
        </div>

        {/* Info cards */}
        <div className="flex flex-col gap-6">
          <div className="terminal-card p-5">
            <div className="text-xs mb-3 tracking-widest" style={{ color: '#4a5568' }}>{ct.locationCmd}</div>
            <div style={{ color: '#c8d0d8', fontSize: '0.85rem', lineHeight: 1.8 }}>
              <div><span style={{ color: '#6b7a8d' }}>{ct.locationLabels.city}</span>{' '}<span style={{ color: '#ffb300' }}>{ct.location.city}</span></div>
              <div><span style={{ color: '#6b7a8d' }}>{ct.locationLabels.tz}</span>{' '}<span>{ct.location.tz}</span></div>
              <div><span style={{ color: '#6b7a8d' }}>{ct.locationLabels.avail}</span>{' '}<span style={{ color: '#39ff6a' }}>{ct.location.avail}</span></div>
            </div>
          </div>

          <div className="terminal-card p-5">
            <div className="text-xs mb-3 tracking-widest" style={{ color: '#4a5568' }}>{ct.linksCmd}</div>
            <div className="flex flex-col gap-3">
              {[
                { icon: Mail, label: 'uspeh.polimer2022@gmail.com', href: 'mailto:uspeh.polimer2022@gmail.com', color: '#39ff6a' },
                { icon: MessageCircle, label: 'WhatsApp: +49 152 5840 0610', href: 'https://wa.me/4915258400610', color: '#39ff6a' },
                { icon: Github, label: 'github.com/IgorUspehov', href: 'https://github.com/IgorUspehov', color: '#c8d0d8' },
                { icon: Linkedin, label: 'linkedin.com/in/ihor-kriazhev-181518396', href: 'https://www.linkedin.com/in/ihor-kriazhev-181518396/', color: '#00e5ff' },
              ].map(({ icon: Icon, label, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3"
                  style={{ color, fontSize: '0.82rem', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="terminal-card p-5">
            <div className="text-xs mb-3 tracking-widest" style={{ color: '#4a5568' }}>{ct.openForCmd}</div>
            <div className="flex flex-col gap-2">
              {ct.openFor.map((item, i) => (
                <div key={i} className="flex items-center gap-2" style={{ fontSize: '0.82rem' }}>
                  <span style={{ color: '#39ff6a' }}>→</span>
                  <span style={{ color: '#8a95a3' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
